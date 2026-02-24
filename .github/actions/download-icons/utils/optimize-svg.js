import * as fs from "fs";
import { optimize } from "svgo";

/**
 * Custom SVGO plugin that removes redundant bounding-box clipPath elements.
 *
 * Figma wraps every exported SVG in a <g clip-path="url(#clipN)"> where the
 * referenced <clipPath> contains only a <rect> matching the SVG's viewBox.
 * This is identical to the clipping already provided by the viewBox itself,
 * so the clipPath adds nothing — but its ID causes conflicts when the same
 * icon appears multiple times on a page.
 *
 * This plugin:
 *   1. Collects all <clipPath> IDs whose only child is a full-size <rect>
 *   2. Removes the clip-path attribute from any element referencing those IDs
 *   3. Removes the <clipPath> node from <defs>
 *   4. Removes any <defs> element that is now empty
 *   5. Unwraps any <g> that is now a no-op (no remaining attributes)
 */
const removeBoundingBoxClipPaths = {
  name: "removeBoundingBoxClipPaths",
  fn: () => {
    return {
      element: {
        enter: (node) => {
          if (node.name !== "svg") return;

          // Parse dimensions from viewBox first, fall back to width/height attrs
          const vbParts = node.attributes.viewBox?.split(/[\s,]+/).map(Number);
          const svgWidth = vbParts?.length === 4 ? vbParts[2] : parseFloat(node.attributes.width ?? "0");
          const svgHeight = vbParts?.length === 4 ? vbParts[3] : parseFloat(node.attributes.height ?? "0");

          // Collect IDs of clipPaths whose sole child is a full-size rect
          const redundantIds = new Set();

          const defs = node.children.filter((c) => c.name === "defs");
          for (const def of defs) {
            for (const child of def.children) {
              if (child.name !== "clipPath") continue;
              const clipChildren = child.children.filter((cc) => cc.name !== undefined);
              if (clipChildren.length !== 1) continue;
              const [rect] = clipChildren;
              if (rect.name !== "rect") continue;
              const rw = parseFloat(rect.attributes.width ?? "0");
              const rh = parseFloat(rect.attributes.height ?? "0");
              const rx = parseFloat(rect.attributes.x ?? "0");
              const ry = parseFloat(rect.attributes.y ?? "0");
              const isBoundingBox = rw === svgWidth && rh === svgHeight && rx === 0 && ry === 0;
              if (isBoundingBox && child.attributes.id) {
                redundantIds.add(child.attributes.id);
              }
            }
          }

          if (redundantIds.size === 0) return;

          // Walk all descendants and remove uses of the redundant clipPath IDs
          const stripRedundantClipPaths = (children) => {
            for (const child of children) {
              if (child.attributes) {
                const ref = child.attributes["clip-path"];
                if (ref) {
                  const match = ref.match(/^url\(#(.+)\)$/);
                  if (match && redundantIds.has(match[1])) {
                    delete child.attributes["clip-path"];
                  }
                }
              }
              if (child.children?.length) {
                stripRedundantClipPaths(child.children);
              }
            }
          };
          stripRedundantClipPaths(node.children);

          // Remove the <clipPath> nodes from <defs>, then remove empty <defs>
          for (const def of defs) {
            def.children = def.children.filter(
              (c) => !(c.name === "clipPath" && c.attributes.id && redundantIds.has(c.attributes.id)),
            );
          }
          node.children = node.children.filter((c) => !(c.name === "defs" && c.children.length === 0));

          // Unwrap <g> elements that now have no attributes (were only used for clip-path)
          const unwrapEmptyGroups = (children) => {
            for (let i = children.length - 1; i >= 0; i--) {
              const child = children[i];
              if (child.children?.length) {
                unwrapEmptyGroups(child.children);
              }
              if (child.name === "g" && Object.keys(child.attributes).length === 0) {
                children.splice(i, 1, ...child.children);
              }
            }
          };
          unwrapEmptyGroups(node.children);
        },
      },
    };
  },
};

function simplifySVG(inputFilePath, outputFilePath) {
  // Read the SVG file
  const svgContent = fs.readFileSync(inputFilePath, "utf8");

  const SVGO_CONFIG = {
    plugins: [
      removeBoundingBoxClipPaths,
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: false,
            removeViewBox: false,
          },
        },
      },
      "removeUselessDefs",
      "removeEmptyContainers",
      "convertShapeToPath",
      "removeDimensions",
      "convertPathData",
      "mergePaths",
      "sortAttrs",
      /**
       * Two concerns handled together so they don't conflict:
       *
       * 1. Remove hardcoded fill colours from shapes so they inherit
       *    fill="currentColor" from the root (which addAttributesToSVGElement
       *    adds below).
       *
       * 2. Stroke-only shapes have no explicit fill and rely on the root's
       *    fill="none" to stay unfilled. Once we replace the root fill with
       *    currentColor they would incorrectly become filled, so we
       *    explicitly pin them to fill="none".
       */
      {
        name: "normaliseFills",
        fn: () => ({
          element: {
            enter: (node) => {
              // Remove fill from the SVG root so addAttributesToSVGElement can
              // set fill="currentColor" on it unconditionally.
              if (node.name === "svg") {
                delete node.attributes.fill;
                return;
              }

              const shapeElements = ["path", "rect", "circle", "ellipse", "polygon", "polyline", "line"];
              if (!shapeElements.includes(node.name)) return;
              const hasStroke = !!node.attributes.stroke;
              const hasFill = "fill" in node.attributes;
              if (!hasFill && hasStroke) {
                // Stroke-only: pin to none so it doesn't inherit currentColor
                node.attributes.fill = "none";
              } else if (hasFill && node.attributes.fill !== "none") {
                // Hardcoded colour fill: remove so it inherits currentColor from root
                delete node.attributes.fill;
              }
              // fill="none" on a non-stroke element is left as-is (transparent cutout)
            },
          },
        }),
      },
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [
            { height: "16px" },
            { width: "16px" },
            { fill: "currentColor" },
            { "aria-hidden": "true" },
            { role: "img" },
          ],
        },
      },
    ],
  };

  // Optimize the SVG using SVGO
  const result = optimize(svgContent, SVGO_CONFIG);

  // Write the simplified SVG to the output file
  if ("data" in result) {
    fs.writeFileSync(outputFilePath, result.data, "utf8");
    console.log(`Simplified SVG saved to ${outputFilePath}`);
  } else {
    console.error("Error optimizing SVG:", result);
  }
}

export function optimizeAllSVGsInFolder(inputFolder, outputFolder) {
  // Ensure the output folder exists
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  // Read all files in the input folder
  const files = fs.readdirSync(inputFolder);

  files.forEach((file) => {
    const inputFilePath = `${inputFolder}/${file}`;
    const outputFilePath = `${outputFolder}/${file}`;

    // Process only .svg files
    if (file.endsWith(".svg")) {
      console.log(`Optimizing: ${file}`);
      simplifySVG(inputFilePath, outputFilePath);
    }
  });

  console.log(`All SVGs have been optimized and saved to ${outputFolder}`);
}
