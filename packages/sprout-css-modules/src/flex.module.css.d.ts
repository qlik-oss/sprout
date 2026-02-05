type Css = {
  "content-box": string;
  "border-box": string;
  "flex-row": string;
  "flex-row-reverse": string;
  "flex-wrap": string;
  "flex-wrap-reverse": string;
  "flex-nowrap": string;
  "flex-col": string;
  "flex-col-reverse": string;
  "items-center": string;
  "items-stretch": string;
  "items-start": string;
  "items-end": string;
  "items-baseline": string;
  "content-center": string;
  "content-stretch": string;
  "content-start": string;
  "content-end": string;
  "content-between": string;
  "content-around": string;
  "content-evenly": string;
  "content-baseline": string;
  "justify-start": string;
  "justify-end": string;
  "justify-end-safe": string;
  "justify-center": string;
  "justify-safe-center": string;
  "justify-between": string;
  "justify-around": string;
  "justify-evenly": string;
  "justify-stretch": string;
  "justify-items-start": string;
  "justify-items-end": string;
  "justify-items-end-safe": string;
  justify_items_center: string;
  "justify-items-center": string;
  justify_items_safe_center: string;
  "justify-items-safe-center": string;
  justify_items_stretch: string;
  "justify-items-stretch": string;
  justify_items_normal: string;
  "justify-items-normal": string;
  "gap-0": string;
  "gap-xs": string;
  "gap-s": string;
  "gap-m": string;
  "gap-l": string;
  "gap-xl": string;
  "gap-xxl": string;
  "gap-3xl": string;
  "gap-x-0": string;
  "gap-x-xs": string;
  "gap-x-s": string;
  "gap-x-m": string;
  "gap-x-l": string;
  "gap-x-xl": string;
  "gap-x-xxl": string;
  "gap-x-3xl": string;
  "gap-y-0": string;
  "gap-y-xs": string;
  "gap-y-s": string;
  "gap-y-m": string;
  "gap-y-l": string;
  "gap-y-xl": string;
  "gap-y-xxl": string;
  "gap-y-3xl": string;
  "gap-density-xs": string;
  "gap-density-s": string;
  "gap-density-m": string;
  "gap-density-l": string;
  "gap-density-xl": string;
  "gap-density-xxl": string;
  "gap-density-3xl": string;
  grow: string;
  "grow-0": string;
  "grow-1": string;
  "self-center": string;
  "self-start": string;
  "self-end": string;
  "self-stretch": string;
  shrink: string;
  "shrink-0": string;
  "shrink-1": string;
  "flex-1": string;
  "flex-auto": string;
  "flex-initial": string;
  "flex-none": string;
  "basis-full": string;
  "basis-auto": string;
  "basis-0": string;
};

/**
 "* @deprecated classes - will be removed in "future major release
 */
type Deprecated = {
  /** @deprecated please use flex-row */
  row: string;
  /** @deprecated please use flex-row-reverse */
  row_reverse: string;
  /** @deprecated please use flex-wrap */
  wrap: string;
  /** @deprecated please use flex-wrap-reverse */
  wrap_reverse: string;
  /** @deprecated please use flex-nowrap */
  no_wrap: string;
  /** @deprecated please use items-center */
  ai_center: string;
  /** @deprecated please use items-stretch */
  ai_stretch: string;
  /** @deprecated please use items-start */
  ai_start: string;
  /** @deprecated please use items-end */
  ai_end: string;
  /** @deprecated please use items-baseline */
  ai_baseline: string;
  /** @deprecated please use content-center */
  ac_center: string;
  /** @deprecated please use content-stretch */
  ac_stretch: string;
  /** @deprecated please use content-start */
  ac_start: string;
  /** @deprecated please use content-end */
  ac_end: string;
  /** @deprecated please use content-between */
  ac_between: string;
  /** @deprecated please use content-around */
  ac_around: string;
  /** @deprecated please use self-center */
  as_center: string;
  /** @deprecated please use self-stretch */
  as_stretch: string;
  /** @deprecated please use self-start */
  as_start: string;
  /** @deprecated please use self-end */
  as_end: string;
  /** @deprecated please use justify-start */
  j_start: string;
  /** @deprecated please use justify-end */
  j_end: string;
  /** @deprecated please use justify-center */
  j_center: string;
  /** @deprecated please use justify-between */
  j_between: string;
  /** @deprecated please use justify-around */
  j_around: string;
  /** @deprecated please use justify-evenly */
  j_evenly: string;
  /** @deprecated please use justify-stretch */
  j_stretch: string;
  /** @deprecated please use flex-col */
  col: string;
  /** @deprecated please use flex-col-reverse */
  col_reverse: string;
  /** @deprecated please use gap-x-0 */
  col_gap_0: string;
  /** @deprecated please use gap-x-xs */
  col_gap_xs: string;
  /** @deprecated please use gap-x-s */
  col_gap_s: string;
  /** @deprecated please use gap-x-m */
  col_gap_m: string;
  /** @deprecated please use gap-x-l */
  col_gap_l: string;
  /** @deprecated please use gap-x-xl */
  col_gap_xl: string;
  /** @deprecated please use gap-x-xxl */
  col_gap_xxl: string;
  /** @deprecated please use gap-x-3xl */
  col_gap_3xl: string;
  /** @deprecated please use gap-y-0 */
  row_gap_0: string;
  /** @deprecated please use gap-y-xs */
  row_gap_xs: string;
  /** @deprecated please use gap-y-s */
  row_gap_s: string;
  /** @deprecated please use gap-y-m */
  row_gap_m: string;
  /** @deprecated please use gap-y-l */
  row_gap_l: string;
  /** @deprecated please use gap-y-xl */
  row_gap_xl: string;
  /** @deprecated please use gap-y-xxl */
  row_gap_xxl: string;
  /** @deprecated please use gap-y-3xl */
  row_gap_3xl: string;
  /** @deprecated please use content-box */
  content_box: string;
  /** @deprecated please use border-box */
  border_box: string;
  /** @deprecated please use flex-row */
  flex_row: string;
  /** @deprecated please use flex-row-reverse */
  flex_row_reverse: string;
  /** @deprecated please use flex-wrap */
  flex_wrap: string;
  /** @deprecated please use flex-wrap-reverse */
  flex_wrap_reverse: string;
  /** @deprecated please use flex-nowrap */
  flex_nowrap: string;
  /** @deprecated please use flex-col */
  flex_col: string;
  /** @deprecated please use flex-col-reverse */
  flex_col_reverse: string;
  /** @deprecated please use items-center */
  items_center: string;
  /** @deprecated please use items-stretch */
  items_stretch: string;
  /** @deprecated please use items-start */
  items_start: string;
  /** @deprecated please use items-end */
  items_end: string;
  /** @deprecated please use items-baseline */
  items_baseline: string;
  /** @deprecated please use content-center */
  content_center: string;
  /** @deprecated please use content-stretch */
  content_stretch: string;
  /** @deprecated please use content-start */
  content_start: string;
  /** @deprecated please use content-end */
  content_end: string;
  /** @deprecated please use content-between */
  content_between: string;
  /** @deprecated please use content-around */
  content_around: string;
  /** @deprecated please use content-evenly */
  content_evenly: string;
  /** @deprecated please use content-baseline */
  content_baseline: string;
  /** @deprecated please use justify-start */
  justify_start: string;
  /** @deprecated please use justify-end */
  justify_end: string;
  /** @deprecated please use justify-end-safe */
  justify_end_safe: string;
  /** @deprecated please use justify-center */
  justify_center: string;
  /** @deprecated please use justify-safe-center */
  justify_safe_center: string;
  /** @deprecated please use justify-between */
  justify_between: string;
  /** @deprecated please use justify-around */
  justify_around: string;
  /** @deprecated please use justify-evenly */
  justify_evenly: string;
  /** @deprecated please use justify-stretch */
  justify_stretch: string;
  /** @deprecated please use justify-items-start */
  justify_items_start: string;
  /** @deprecated please use justify-items-end */
  justify_items_end: string;
  /** @deprecated please use justify-items-end-safe */
  justify_items_end_safe: string;
  /** @deprecated please use gap-0 */
  gap_0: string;
  /** @deprecated please use gap-xs */
  gap_xs: string;
  /** @deprecated please use gap-s */
  gap_s: string;
  /** @deprecated please use gap-m */
  gap_m: string;
  /** @deprecated please use gap-l */
  gap_l: string;
  /** @deprecated please use gap-xl */
  gap_xl: string;
  /** @deprecated please use gap-xxl */
  gap_xxl: string;
  /** @deprecated please use gap-3xl */
  gap_3xl: string;
  /** @deprecated please use gap-x-0 */
  gap_x_0: string;
  /** @deprecated please use gap-x-xs */
  gap_x_xs: string;
  /** @deprecated please use gap-x-s */
  gap_x_s: string;
  /** @deprecated please use gap-x-m */
  gap_x_m: string;
  /** @deprecated please use gap-x-l */
  gap_x_l: string;
  /** @deprecated please use gap-x-xl */
  gap_x_xl: string;
  /** @deprecated please use gap-x-xxl */
  gap_x_xxl: string;
  /** @deprecated please use gap-x-3xl */
  gap_x_3xl: string;
  /** @deprecated please use gap-y-0 */
  gap_y_0: string;
  /** @deprecated please use gap-y-xs */
  gap_y_xs: string;
  /** @deprecated please use gap-y-s */
  gap_y_s: string;
  /** @deprecated please use gap-y-m */
  gap_y_m: string;
  /** @deprecated please use gap-y-l */
  gap_y_l: string;
  /** @deprecated please use gap-y-xl */
  gap_y_xl: string;
  /** @deprecated please use gap-y-xxl */
  gap_y_xxl: string;
  /** @deprecated please use gap-y-3xl */
  gap_y_3xl: string;
  /** @deprecated please use gap-density-xs */
  gap_density_s: string;
  /** @deprecated please use gap-density-s */
  gap_density_xs: string;
  /** @deprecated please use gap-density-m */
  gap_density_m: string;
  /** @deprecated please use gap-density-l */
  gap_density_l: string;
  /** @deprecated please use gap-density-xl */
  gap_density_xl: string;
  /** @deprecated please use gap-density-xxl */
  gap_density_xxl: string;
  /** @deprecated please use gap-density-3xl */
  gap_density_3xl: string;
  /** @deprecated please use grow-0 */
  grow_0: string;
  /** @deprecated please use grow-1 */
  grow_1: string;
  /** @deprecated please use self-center */
  self_center: string;
  /** @deprecated please use self-start */
  self_start: string;
  /** @deprecated please use self-end */
  self_end: string;
  /** @deprecated please use self-stretch */
  self_stretch: string;
  /** @deprecated please use shrink-0 */
  shrink_0: string;
  /** @deprecated please use shrink-1 */
  shrink_1: string;
  /** @deprecated please use flex-1 */
  flex_1: string;
  /** @deprecated please use flex-auto */
  flex_auto: string;
  /** @deprecated please use flex-initial */
  flex_initial: string;
  /** @deprecated please use flex-none */
  flex_none: string;
  /** @deprecated please use basis-full */
  basis_full: string;
  /** @deprecated please use basis-auto */
  basis_auto: string;
  /** @deprecated please use basis-0 */
  basis_0: string;
};

const classes: Css & Deprecated;
export default classes;
