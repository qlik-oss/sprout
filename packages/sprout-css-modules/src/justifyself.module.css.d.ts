type Css = {
  "justify-self-auto": string;
  "justify-self-start": string;
  "justify-self-end": string;
  "justify-self-center": string;
  "justify-self-stretch": string;
};
type Deprecated = {
  /** @deprecated please use justify-self-auto */
  justify_self_auto: string;
  /** @deprecated please use justify-self-start */
  justify_self_start: string;
  /** @deprecated please use justify-self-end */
  justify_self_end: string;
  /** @deprecated please use justify-self-center */
  justify_self_center: string;
  /** @deprecated please use justify-self-stretch */
  justify_self_stretch: string;
};

declare const classes: Css & Deprecated;
export default classes;
