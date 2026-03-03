import { transform as svgr } from "@svgr/core";
import jsx from "@svgr/plugin-jsx";
import { transform as _transform } from "@swc/core";
import { compile as compileVue } from "@vue/compiler-dom";
import camelcase from "camelcase";
import fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { rimraf } from "rimraf";

const OPTIMIZED_IMG_FOLDER = "optimized";

const transform = {
  react: async (svg, componentName, _format) => {
    const component = await svgr(svg, { ref: true, plugins: [jsx] }, { componentName });
    const { code } = await _transform(component, { configFile: ".swcrc" });

    if (_format === "esm") {
      return code;
    }

    return code.replace('import * as React from "react"', 'import React from "react"');
  },
  vue: (svg, _componentName, _format) => {
    const { code } = compileVue(svg, {
      mode: "module",
    });

    if (_format === "esm") {
      return code.replace("export function", "export default function");
    }

    return code
      .replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/, (_match, imports, _quote, mod) => {
        const newImports = imports
          .split(",")
          .map((i) => i.trim().replace(/\s+as\s+/, ": "))
          .join(", ");

        return `const { ${newImports} } = require("${mod}")`;
      })
      .replace("export function render", "module.exports = function render");
  },
};

async function getIcons(/* _style */) {
  const files = await fs.readdir(`./${OPTIMIZED_IMG_FOLDER}`);
  return Promise.all(
    files.map(async (file) => {
      const sourceBaseName = file.replace(/\.svg$/, "");

      return {
        svg: await fs.readFile(join(OPTIMIZED_IMG_FOLDER, file), "utf8"),
        sourceName: file,
        moduleName: sourceBaseName.replaceAll("_", "-"),
        componentName: `${camelcase(sourceBaseName, {
          pascalCase: true,
        })}`,
      };
    }),
  );
}

function assertNoCaseInsensitiveCollisions(icons, pkg) {
  const byNormalizedModuleName = new Map();

  for (const icon of icons) {
    const normalizedModuleName = icon.moduleName.toLowerCase();
    const existing = byNormalizedModuleName.get(normalizedModuleName);

    if (existing) {
      throw new Error(
        `Case-insensitive icon module collision for ${pkg}: "${existing.moduleName}" (${existing.sourceName}) and "${icon.moduleName}" (${icon.sourceName}) generate the same output filename on case-insensitive filesystems.`,
      );
    }

    byNormalizedModuleName.set(normalizedModuleName, icon);
  }
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName, moduleName }) => {
      const extension = includeExtension ? ".js" : "";
      if (format === "esm") {
        return `export { default as ${componentName}Icon } from './${moduleName}${extension}'`;
      }
      return `module.exports.${componentName}Icon = require("./${moduleName}${extension}")`;
    })
    .join("\n");
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, "utf8");
}

async function buildIcons(pkg, style, format) {
  const outDir = `./${pkg}`;
  const icons = await getIcons(style);

  assertNoCaseInsensitiveCollisions(icons, pkg);

  await Promise.all(
    icons.flatMap(async ({ componentName, moduleName, svg }) => {
      const content = await transform[pkg](svg, componentName, format);
      const types =
        pkg === "react"
          ? `import { type ComponentProps, type JSX } from 'react';\ndeclare function ${componentName}(props: ComponentProps<'svg'>): JSX.Element;\nexport default ${componentName};\n`
          : `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';\ndeclare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;\nexport default ${componentName};\n`;

      return [
        ensureWrite(`${outDir}/${moduleName}.js`, content),
        ...(types ? [ensureWrite(`${outDir}/${moduleName}.d.ts`, types)] : []),
      ];
    }),
  );

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format));
  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, "esm", false));
}

async function copyRawIcons() {
  return fs.cp(OPTIMIZED_IMG_FOLDER, `raw`, { recursive: true });
}

export async function main(format) {
  console.log(`Building icons`);

  await Promise.all([rimraf(`./react/*`), rimraf(`./vue/*`)]);

  await Promise.all([buildIcons("react", "outline", format), buildIcons("vue", "outline", format), copyRawIcons()]);

  return console.log("Finished building packages.");
}

let [format] = process.argv.slice(2, 3);

if (!format) {
  format = "cjs";
}

await main(format);
