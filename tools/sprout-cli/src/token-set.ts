// Manually created type object for the theme. Needs to be updated as changes to the token architecture is done

import type {
  AugmentationKey,
  FontTokenModuleTokens,
  Intensity,
  TokenModule,
  TokenModuleKey,
  ValidTokenType,
} from "./token-module";

// This was being referenced in token-module.d.ts, but nowhere defined
export type TypographyToken = unknown;

export type TokenSetParams = { [key in TokenModuleKey]?: string | TokenModule<ValidTokenType> };
export type TokenSetStringParams = { [key in TokenModuleKey]?: string };
export type TokenSetModules<T extends ValidTokenType> = { [key in TokenModuleKey]?: TokenModule<T> };

// --- Token type values ---

export type FontTokenValue = {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing?: string;
  paragraphSpacing?: string;
  paragraphIndent?: string;
  textCase?: string;
  textDecoration?: string;
};

export type BorderTokenValue = {
  color: string;
  width: string;
  style: string;
};

export type DropShadowValue = {
  x: number | string;
  y: number | string;
  blur: number | string;
  spread: number | string;
  color: string;
  type?: string;
};

// --- Token types ---

export type Token<T> = {
  value: T;
  type?: string;
  description?: string;
};
export type StringToken = Token<string>;
export type FontToken = Token<FontTokenValue>;
export type BorderToken = Token<BorderTokenValue>;
export type BoxShadowToken = Token<DropShadowValue[]>;

export type TokenType = StringToken | FontToken | BorderToken | BoxShadowToken;

// --- Token compositions ---
export type FontTokens = FontTokenModuleTokens & {
  scale: StringToken;
};

export type BorderRadiusTokens = {
  s: StringToken;
  m: StringToken;
  l: StringToken;
  round: StringToken;
  "element-corner": StringToken;
};

export type SpacingTokens = {
  scale: StringToken;
  xs: StringToken;
  s: StringToken;
  m: StringToken;
  l: StringToken;
  xl: StringToken;
  xxl: StringToken;
  "3xl": StringToken;
};

export type DensityTokens = {
  scale: StringToken;
  xs: StringToken;
  s: StringToken;
  m: StringToken;
  l: StringToken;
  xl: StringToken;
  xxl: StringToken;
};

export type SizingTokens = {
  scale: StringToken;
  xs: StringToken;
  s: StringToken;
  m: StringToken;
  l: StringToken;
  xl: StringToken;
  xxl: StringToken;
};

export type ElevationTokens = {
  weak: BoxShadowToken;
  default: BoxShadowToken;
  moderate: BoxShadowToken;
  strong: BoxShadowToken;
};

export type BorderTokens = {
  [key in Intensity]: BorderToken;
};

export type AppearanceColorTokens = {
  foreground: {
    default: StringToken;
    weak: StringToken;
    disabled: StringToken;
    inverse: StringToken;
    link: StringToken;
  };
  background: {
    default: StringToken;
    weak: StringToken;
    moderate: StringToken;
    strong: StringToken;
    inverse: StringToken;
    "inverse-weak": StringToken;
    enabled: StringToken;
    hover: StringToken;
    pressed: StringToken;
    focus: StringToken;
    toggled: StringToken;
    disabled: StringToken;
  };
  focus: StringToken;
  script: ColorScriptTokens;
};

export type AugmentedColorTokens = {
  danger: ColorStateTokens;
  warning: ColorStateTokens;
  success: ColorStateTokens;
  info: ColorStateTokens;
  brand: {
    primary: ColorStateTokens;
  };
};

export type ColorStateTokens = {
  [key in AugmentationKey]: StringToken;
} & { default: StringToken };

export type ColorScriptTokens = {
  default: StringToken;
  comment: StringToken;
  function: StringToken;
  keyword: StringToken;
  "bracket-match": StringToken;
  variable: StringToken;
  field: StringToken;
  string: StringToken;
  measure: StringToken;
};

export type ColorList = Record<string, StringToken>;
export type ColorListGroup = Record<string, ColorList>;

export type ColorChartTokens = {
  chart?: {
    primary: StringToken;
    others: StringToken;
    null: StringToken;
    alternative: StringToken;
    excluded: StringToken;
    palette: ColorList;
    categorical: ColorListGroup;
    sequential: ColorListGroup;
    diverging: ColorListGroup;
  };
};

export type ColorTokens =
  | (AppearanceColorTokens & ColorChartTokens & AugmentedColorTokens)
  | (AppearanceColorTokens & AugmentedColorTokens)
  | ColorChartTokens;

export type SproutTokenSubSet = {
  [key in keyof SproutTokenSet]: SproutTokenSet[key];
};

export type SemanticTokenSet = {
  font: FontTokens;
  color: AppearanceColorTokens;
  border: BorderTokens;
  elevation: ElevationTokens;
  sizing: SizingTokens;
  spacing: SpacingTokens;
  density: DensityTokens;
  "border-radius": BorderRadiusTokens;
};

export type ChartTokenSet = {
  color: ColorChartTokens;
};

export type SproutTokenSet = SemanticTokenSet & ChartTokenSet;
export type SproutTokenSets = { [key: string]: SproutTokenSet };
