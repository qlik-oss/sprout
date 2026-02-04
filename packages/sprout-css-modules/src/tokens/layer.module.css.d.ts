type Css = {
  "z-stacked": string;
  "z-floating": string;
  "z-overlay": string;
  "z-context": string;
  "z-time-sensitive": string;
  "z-cursor": string;
};

type Deprecated = {
  /** @deprecated please use z-stacked */
  z_stacked: string;
  /** @deprecated please use z-floating */
  z_floating: string;
  /** @deprecated please use z-overlay */
  z_overlay: string;
  /** @deprecated please use z-context */
  z_context: string;
  /** @deprecated please use z-time-sensitive */
  z_time_sensitive: string;
  /** @deprecated please use z-cursor */
  z_cursor: string;
};

declare const classes: Css & Deprecated;
export default classes;
