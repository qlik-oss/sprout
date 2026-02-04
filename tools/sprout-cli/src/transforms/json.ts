import { expandTypesMap, register } from "@tokens-studio/sd-transforms";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";
import type { Config } from "style-dictionary";
import StyleDictionary from "style-dictionary";
import { getConfig } from "../config";
import { CustomDataVariables, JSONFlatCSSVarInfo } from "../style-dictionary/custom-formats";
import { commonFilterFn, commonShorthandFilterFn, includeTokenSetsFn, sourceTokenSetsFn } from "../util/path";
import { runStyleDictionnaryBuild } from "../util/run";
import { shorthandTransforms, transformerOptions } from "../util/transforms";
import type { ActionOptions } from "./options";

const transforms = [
  "ts/resolveMath",
  "ts/size/px",
  "ts/opacity",
  "ts/color/modifiers",
  "attribute/color",
  "shadow/css/shorthand",
  "attribute/cti",
  "name/kebab",
  "color/hex",
];

export async function action(opts: ActionOptions) {
  const CWD = cwd();
  const tempDirPath = await mkdtemp("tmp");
  const config = await getConfig(opts.config);
  await register(StyleDictionary, transformerOptions);

  StyleDictionary.registerFormat(CustomDataVariables);
  StyleDictionary.registerFormat(JSONFlatCSSVarInfo);

  const jsonConfigs: Config = {
    source: sourceTokenSetsFn(config.tokenSet, opts.source),
    include: includeTokenSetsFn(config.tokenSet, opts.source),
    preprocessors: ["tokens-studio"],
    expand: {
      include: ["typography", "border", "transition"],
      typesMap: expandTypesMap,
    },
    platforms: {
      json: {
        transforms,
        buildPath: `${tempDirPath}/json/`,
        files: [
          {
            destination: `a-tokens.json`,
            format: "json/flat-css-var-info",
            filter: commonFilterFn,
          },
        ],
      },
    },
  };

  const jsonCompositeConfigs: Config = {
    source: sourceTokenSetsFn(config.tokenSet, opts.source),
    include: includeTokenSetsFn(config.tokenSet, opts.source),
    preprocessors: ["tokens-studio"],
    platforms: {
      json: {
        transforms: transforms.concat(shorthandTransforms),
        buildPath: `${tempDirPath}/json/`,
        files: [
          {
            destination: `shorthands-tokens.json`,
            format: "json/flat-css-var-info",
            filter: commonShorthandFilterFn,
          },
        ],
      },
    },
  };

  try {
    await runStyleDictionnaryBuild([jsonConfigs]);
    await runStyleDictionnaryBuild([jsonCompositeConfigs]);

    const aContent = await readFile(path.resolve(CWD, tempDirPath, "json/a-tokens.json"), { encoding: "utf-8" });
    const bContent = await readFile(path.resolve(CWD, tempDirPath, "json/shorthands-tokens.json"), {
      encoding: "utf-8",
    });
    const allTokens = Object.assign(JSON.parse(aContent), JSON.parse(bContent));
    await writeFile(path.resolve(CWD, opts.output, "json/sprout-tokens.json"), JSON.stringify(allTokens, null, 2), {
      encoding: "utf-8",
    });
  } catch (error) {
    console.error("Error during JSON generation:", error);
  }
  await rm(tempDirPath, { recursive: true });
}
