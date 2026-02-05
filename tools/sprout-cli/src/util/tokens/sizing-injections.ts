import type { CoreTokenModuleTokens } from "../../token-module";
import type { SizingTokens, StringToken, TokenType } from "../../token-set";

export function createSizingScaleTokens(sizingTokens: CoreTokenModuleTokens<TokenType>): SizingTokens {
  const sizingScaleToken: StringToken = {
    value: "1",
    type: "number",
    description: "(Variable only). Scaling property for sizing tokens",
  };

  return { ...sizingTokens.sizing, scale: sizingScaleToken } as SizingTokens;
}

export function injectSizingScaleCSSVar(sizing: string) {
  return `calc(${sizing} * var(--sprout-sizing-scale))`;
}
