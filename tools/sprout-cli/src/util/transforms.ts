import type { TransformOptions } from "@tokens-studio/sd-transforms";

export const commonTransforms = [
  "ts/resolveMath",
  "ts/size/px",
  "ts/opacity",
  "ts/color/modifiers",
  "ts/color/css/hexrgba",
  "ts/shadow/innerShadow",

  "shadow/css/shorthand",
  "references/cssVarsSproutRefs",
  "attribute/cti",
  "name/kebab",
];

export const shorthandTransforms = ["border/css/shorthand", "typography/css/shorthand", "transition/css/shorthand"];

export const transformerOptions: TransformOptions = {
  // @ts-expect-error does it exist?
  expand: {
    typography: false,
    shadow: false,
    composition: false,
    border: false,
  },
  preserveRawValue: false,
  throwErrorWhenNotResolved: true,
  resolveReferences: true,
  "ts/color/modifiers": {
    format: "srgb",
  },
};
