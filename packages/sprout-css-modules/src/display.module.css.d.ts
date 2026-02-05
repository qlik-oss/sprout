type Css = {
  contents: string;
  flex: string;
  "flex-noreset": string;
  hidden: string;
  "sr-only": string;
  block: string;
  grid: string;
  inline: string;
  "inline-block": string;
  "inline-flex": string;
  "inline-grid": string;
};

type Deprecated = {
  /** @deprecated please use flex-noreset */
  flex_noreset: string;
  /** @deprecated please use sr-only */
  sr_only: string;
  /** @deprecated please use inline-block */
  inline_block: string;
  /** @deprecated please use inline-flex */
  inline_flex: string;
  /** @deprecated please use inline-grid */
  inline_grid: string;
};
declare const classes: Css & Deprecated;
export default classes;
