import type { BorderToken, BoxShadowToken, Token, TokenType, TypographyToken } from "./token-set";

export type StandardTShirtSize = "s" | "m" | "l";
export type TShirtSize = "xs" | StandardTShirtSize | "xl" | "xxl" | "3xl" | "4xl";
export type Intensity = "weak" | "default" | "moderate" | "strong" | "extra-strong";
export type AugmentationKey = "weak" | "hover" | "pressed" | "toggled" | "disabled" | "inverse";
export type ValidTokenTypes = string | TokenType;

export type CoreTokenModuleKey = "core";
export type DensityTokenModuleKey = "density";
export type RoundnessTokenModuleKey = "roundness";
export type TypographyTokenModuleKey = "typography";
export type AppearanceTokenModuleKey = "appearance";
export type ChartAppearanceTokenModuleKey = "chartAppearance";

export type TokenModuleKey =
  | CoreTokenModuleKey
  | AppearanceTokenModuleKey
  | ChartAppearanceTokenModuleKey
  | TypographyTokenModuleKey
  | RoundnessTokenModuleKey
  | DensityTokenModuleKey;

export type ValidTokenType = string | TokenType;

export type GenericTokenModule = { [key: string]: GenericTokenModule | ValidTokenType };

export type TokenModuleBase = {
  name: string;
  variables?: GenericTokenModule;
};

// --- Density ---
export type SpacingTokenSize = Exclude<TShirtSize, "4xl">;

export type DensityTokenModuleTokens<T extends ValidTokenTypes> = {
  spacing: { [key in SpacingTokenSize]: T };
  density: { [key in SpacingTokenSize]: T };
};

export type DensityTokenModule<T extends ValidTokenTypes> = TokenModuleBase & {
  module: DensityTokenModuleKey;
  tokens: DensityTokenModuleTokens<T>;
};

// --- Roundness ---
export type RoundnessTokenSize = Exclude<TShirtSize, "3xl" | "4xl">;

export type BorderRadiusShirtSizeTokens<T> = { [key in StandardTShirtSize]: T };

export type ElementCornerSetting = "sharp" | "soft" | "round";

export type RoundnessTokenModuleTokens<T extends ValidTokenTypes> = {
  "border-radius": BorderRadiusShirtSizeTokens<T>;
  "element-corners": Token<ElementCornerSetting> | ElementCornerSetting;
};

export type RoundnessTokenModule<T extends ValidTokenTypes> = TokenModuleBase & {
  module: RoundnessTokenModuleKey;
  tokens: RoundnessTokenModuleTokens<T>;
};

// --- Typography ---
export type HeaderAndBodyTokenSize = Exclude<TShirtSize, "3xl" | "4xl">;

export type DefaultAndEmphasizedModuleToken = {
  default: TypographyToken;
  emphasized: TypographyToken;
};

export type FontTokenModuleTokens = {
  heading: { [key in HeaderAndBodyTokenSize]: TypographyToken };
  body: { [key in HeaderAndBodyTokenSize]: TypographyToken };
  label: { [key in "xs" & StandardTShirtSize]: DefaultAndEmphasizedModuleToken };
  code: { m: DefaultAndEmphasizedModuleToken };
};

export type TypographyTokenModuleTokens = {
  typography: FontTokenModuleTokens;
};

export type TypographyTokenModule = TokenModuleBase & {
  module: TypographyTokenModuleKey;
  tokens: TypographyTokenModuleTokens;
};

// --- Appearance ---

export type AdditionalBackgroundTypes =
  | "inverse"
  | "inverse-weak"
  | "enabled"
  | "hover"
  | "pressed"
  | "focus"
  | "toggled"
  | "disabled";

export type Augmentation<T extends ValidTokenTypes> = {
  [key in AugmentationKey]: T;
};

export type AdditionalBackgrounds<T extends ValidTokenTypes> = { [key in AdditionalBackgroundTypes]: T };
export type IntensityBackgrounds<T extends ValidTokenTypes> = {
  [key in Exclude<Intensity, "extra-strong">]: T;
};

export type ApperanceTokenModuleTokens<T extends ValidTokenTypes> = {
  color: {
    foreground: {
      default: T;
      weak: T;
      disabled: T;
      inverse: T;
      link: T;
    };
    background: IntensityBackgrounds<T> & AdditionalBackgrounds<T>;
    danger: T;
    warning: T;
    success: T;
    info: T;
    focus: T;
    brand: {
      primary: T;
    };
    augmentation: Augmentation<T>;
    script: {
      default: T;
      comment: T;
      function: T;
      keyword: T;
      "bracket-match": T;
      variable: T;
      field: T;
      string: T;
      measure: T;
    };
  };
  border: {
    [key in Intensity]: BorderToken;
  };
  elevation: {
    [key in Exclude<Intensity, "extra-strong">]: BoxShadowToken;
  };
};

export type AppearanceTokenModule<T extends ValidTokenTypes> = TokenModuleBase & {
  module: AppearanceTokenModuleKey;
  tokens: ApperanceTokenModuleTokens<T>;
};

// --- Chart appearance ---

export type ChartAppearanceTokenModuleTokens<T extends ValidTokenTypes> = {
  color: {
    chart: {
      primary: T;
      others: T;
      null: T;
      alternative: T;
      excluded: T;
      palette: Record<string, T>;
      categorical: Record<string, Record<string, T>>;
      sequential: Record<string, Record<string, T>>;
      diverging: Record<string, Record<string, T>>;
    };
  };
};

export type ChartAppearanceTokenModule<T extends ValidTokenTypes> = TokenModuleBase & {
  module: ChartAppearanceTokenModuleKey;
  tokens: ChartAppearanceTokenModuleTokens<T>;
};

// --- Core ---
export type SizingTokenSize = Exclude<TShirtSize, "4xl">;

export type CoreTokenModuleTokens<T extends ValidTokenTypes> = {
  sizing: { [key in SizingTokenSize]: T };
};

export type CoreTokenModule<T extends ValidTokenTypes> = TokenModuleBase & {
  module: CoreTokenModuleKey;
  tokens: CoreTokenModuleTokens<T>;
};

// --- Composites ---
export type TokenModuleTokens<T extends ValidTokenTypes> =
  | CoreTokenModuleTokens<T>
  | DensityTokenModuleTokens<T>
  | RoundnessTokenModuleTokens<T>
  | TypographyTokenModuleTokens
  | ApperanceTokenModuleTokens<T>
  | ChartAppearanceTokenModuleTokens<T>;
export type TokenModule<T extends ValidTokenTypes> =
  | CoreTokenModule<T>
  | DensityTokenModule<T>
  | RoundnessTokenModule<T>
  | TypographyTokenModule
  | AppearanceTokenModule<T>
  | ChartAppearanceTokenModule<T>;

export type CoreModule<T extends ValidTokenTypes> = { [key in CoreTokenModuleKey]: CoreTokenModuleTokens<T> };
export type DensityModule<T extends ValidTokenTypes> = { [key in DensityTokenModuleKey]: DensityTokenModuleTokens<T> };
export type RoundnessModule<T extends ValidTokenTypes> = {
  [key in RoundnessTokenModuleKey]: RoundnessTokenModuleTokens<T>;
};
export type TypographyModule = { [key in TypographyTokenModuleKey]: TypographyTokenModule };
export type AppearanceModule<T extends ValidTokenTypes> = {
  [key in AppearanceTokenModuleKey]: AppearanceTokenModule<T>;
};
export type ChartAppearanceModule<T extends ValidTokenTypes> = {
  [key in ChartAppearanceTokenModuleKey]: ChartAppearanceTokenModule<T>;
};

export type TokenModules<T extends ValidTokenTypes> = CoreModule<T> &
  DensityModule<T> &
  RoundnessModule<T> &
  TypographyModule &
  AppearanceModule<T> &
  ChartAppearanceModule<T>;

export type PreCompiledTokenModuleTokens = CoreTokenModuleTokens<TokenType> &
  DensityTokenModuleTokens<TokenType> &
  RoundnessTokenModuleTokens<TokenType> &
  TypographyTokenModuleTokens &
  ApperanceTokenModuleTokens<TokenType> &
  ChartAppearanceTokenModuleTokens<TokenType>;
