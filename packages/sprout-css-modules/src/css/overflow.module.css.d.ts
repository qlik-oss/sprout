type Css = {
  "overflow-visible": string;
  "overflow-hidden": string;
  "overflow-scroll": string;
  "overflow-auto": string;
  "overflow-x-visible": string;
  "overflow-x-hidden": string;
  "overflow-x-scroll": string;
  "overflow-x-auto": string;
  "overflow-y-visible": string;
  "overflow-y-hidden": string;
  "overflow-y-scroll": string;
  "overflow-y-auto": string;
};
type Deprecated = {
  /** @deprecated please use overflow-visible */
  overflow_visible: string;
  /** @deprecated please use overflow-hidden */
  overflow_hidden: string;
  /** @deprecated please use overflow-scroll */
  overflow_scroll: string;
  /** @deprecated please use overflow-auto */
  overflow_auto: string;
  /** @deprecated please use overflow-x-visible */
  overflow_x_visible: string;
  /** @deprecated please use overflow-x-hidden */
  overflow_x_hidden: string;
  /** @deprecated please use overflow-x-scroll */
  overflow_x_scroll: string;
  /** @deprecated please use overflow-x-auto */
  overflow_x_auto: string;
  /** @deprecated please use overflow-y-visible */
  overflow_y_visible: string;
  /** @deprecated please use overflow-y-hidden */
  overflow_y_hidden: string;
  /** @deprecated please use overflow-y-scroll */
  overflow_y_scroll: string;
  /** @deprecated please use overflow-y-auto */
  overflow_y_auto: string;
};

declare const classes: Css & Deprecated;
export default classes;
