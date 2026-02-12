export type Density =
  | "density-xs"
  | "density-s"
  | "density-m"
  | "density-l"
  | "density-xl"
  | "density-xxl"
  | "density-3xl";

export type Spacing = "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl";

export type Border =
  | "none"
  | "default"
  | "weak"
  | "moderate"
  | "strong"
  | "extra-strong";
export type Align = "center" | "stretch" | "start" | "end";
export type AlignContent = Align | "between" | "around";
export type Justify = AlignContent | "evenly";
export type Overflow = "visible" | "hidden" | "scroll" | "auto";
export type BorderRadius =
  | "subtle"
  | "soft"
  | "cushiony"
  | "pill"
  | "round"
  | "nested-subtle-xs"
  | "nested-soft-xs"
  | "nested-soft-s"
  | "nested-cushiony-xs"
  | "nested-cushiony-s"
  | "nested-cushiony-m"
  | "twice-soft-xs"
  | "twice-cushiony-s-xs"
  | "twice-cushiony-m-s";

export type BackgroundColor =
  | "transparent"
  | "default"
  | "weak"
  | "strong"
  | "moderate"
  | "enabled"
  | "disabled"
  | "interactive"
  | "pressed"
  | "inverse";

export type Elevation =
  | "none"
  | "default"
  | "transparent"
  | "weak"
  | "moderate"
  | "strong";
export type ContainerSizing =
  | "xxs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "3xl"
  | "4xl";
export type Layer =
  | "stacked"
  | "floating"
  | "overlay"
  | "context"
  | "time_sensitive"
  | "cursor";
