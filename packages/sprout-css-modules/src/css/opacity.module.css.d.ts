type Css = {
  "opacity-0": string;
  "opacity-1": string;
  visible: string;
  invisible: string;
  collapse: string;
};
type Deprecated = {
  /** @deprecated please use opacity-0 */
  opacity_0: string;
  /** @deprecated please use opacity-1 */
  opacity_1: string;
};
declare const classes: Css & Deprecated;
export default classes;
