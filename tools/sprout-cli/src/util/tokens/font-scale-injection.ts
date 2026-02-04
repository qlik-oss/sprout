import type { TypographyTokenModuleTokens } from "../../token-module";
import type { FontTokens, StringToken } from "../../token-set";

export function createFontScaleTokens(tokens: TypographyTokenModuleTokens): FontTokens {
  const fontScaleToken: StringToken = {
    value: "1",
    type: "number",
    description: "(Variable only). Font scale variable for font size tokens",
  };

  return { ...tokens.typography, scale: fontScaleToken };
}

export function injectFontScaleCSSVar(fontSize: string) {
  return `calc(${fontSize} * var(--sprout-font-scale))`;
}
