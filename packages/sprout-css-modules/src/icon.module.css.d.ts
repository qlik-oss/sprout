type Css = {
  "icon-size-s": string;
  "icon-size-m": string;
  "icon-size-l": string;
  "icon-size-xl": string;
  "icon-size-xxl": string;
  "fill-none": string;
  "fill-inherit": string;
  "fill-transparent": string;
  "fill-current": string;
  "fill-default": string;
  "fill-weak": string;
  "fill-disabled": string;
};

type Deprecated = {
  /** @deprecated please use icon-size-s */
  icon_size_s: string;
  /** @deprecated please use icon-size-m */
  icon_size_m: string;
  /** @deprecated please use icon-size-l */
  icon_size_l: string;
  /** @deprecated please use icon-size-xl */
  icon_size_xl: string;
  /** @deprecated please use icon-size-xxl */
  icon_size_xxl: string;
  /** @deprecated please use fill-none */
  fill_none: string;
  /** @deprecated please use fill-inherit */
  fill_inherit: string;
  /** @deprecated please use fill-transparent */
  fill_transparent: string;
  /** @deprecated please use fill-current */
  fill_current: string;
  /** @deprecated please use fill-default */
  fill_default: string;
  /** @deprecated please use fill-weak */
  fill_weak: string;
  /** @deprecated please use fill-disabled */
  fill_disabled: string;
};
declare const classes: Css & Deprecated;

export default classes;
