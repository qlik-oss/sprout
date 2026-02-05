type Css = {
  "outline-none": string;
  "outline-focus-centered": string;
  "outline-focus-offset": string;
  "outline-focus-inner": string;
  "outline-focus-visible-centered": string;
  "outline-focus-visible-offset": string;
  "outline-focus-visible-inner": string;
};
type Deprecated = {
  /** @deprecated please use outline-none */
  outline_none: string;
  /** @deprecated please use outline-focus-centered */
  outline_focus_centered: string;
  /** @deprecated please use outline-focus-offset */
  outline_focus_offset: string;
  /** @deprecated please use outline-focus-inner */
  outline_focus_inner: string;
  /** @deprecated please use outline-focus-visible-centered */
  outline_focus_visible_centered: string;
  /** @deprecated please use outline-focus-visible-offset */
  outline_focus_visible_offset: string;
  /** @deprecated please use outline-focus-visible-inner */
  outline_focus_visible_inner: string;
};
declare const classes: Css & Deprecated;
export default classes;
