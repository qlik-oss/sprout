import type { DensityTokenModuleTokens } from "../../token-module";
import type { DensityTokens, SpacingTokens, StringToken, TokenType } from "../../token-set";

export function createSpacingScaleToken(tokens: DensityTokenModuleTokens<TokenType>): SpacingTokens {
  const spacingScaleToken: StringToken = {
    value: "1",
    type: "number",
    description: "(Variable only). Scaling property for spacing tokens",
  };

  return { ...tokens.spacing, scale: spacingScaleToken } as SpacingTokens;
}

export function createDensityScaleToken(densityTokens: DensityTokenModuleTokens<TokenType>): DensityTokens {
  const densityScaleToken: StringToken = {
    value: "1",
    type: "number",
    description: "(Variable only). Scaling property for density tokens",
  };

  return { ...densityTokens.density, scale: densityScaleToken } as DensityTokens;
}

export function injectSpacingScaleCSSVar(spacing: string) {
  return `calc(${spacing} * var(--sprout-spacing-scale) * var(--sprout-sizing-scale))`;
}

export function injectDensityScaleCSSVar(density: string) {
  return `calc(${density} * var(--sprout-density-scale) * var(--sprout-spacing-scale) * var(--sprout-sizing-scale))`;
}
