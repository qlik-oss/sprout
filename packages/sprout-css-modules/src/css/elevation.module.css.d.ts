type Css = {
  "box-shadow-none": string;
  "box-shadow-transparent": string;
  "box-shadow-default": string;
  "box-shadow-weak": string;
  "box-shadow-moderate": string;
  "box-shadow-strong": string;
};

type Deprecated = {
  /** @deprecated please use box-shadow-none */
  box_shadow_none: string;
  /** @deprecated please use box-shadow-transparent */
  box_shadow_transparent: string;
  /** @deprecated please use box-shadow-default */
  box_shadow_default: string;
  /** @deprecated please use box-shadow-weak */
  box_shadow_weak: string;
  /** @deprecated please use box-shadow-moderate */
  box_shadow_moderate: string;
  /** @deprecated please use box-shadow-strong */
  box_shadow_strong: string;
};

declare const classes: Css & Deprecated;
export default classes;
