import { classNames } from "../classNames";
import type { Align, AlignContent, Density, Justify, Spacing } from "./tokens";

export type FlexProps = {
  boxSizing?: "border-box" | "content-box";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";

  direction?: "row" | "row-reverse" | "col" | "col-reverse";

  alignContent?: AlignContent;
  alignItems?: AlignContent | "baseline";
  alignSelf?: Align;
  gap?: Spacing | Density;
  columnGap?: Spacing;
  rowGap?: Spacing;
  justify?: Justify;
  noShrink?: boolean;
};

export type FlexArgs = {
  apply: boolean;
};

const STYLE_CONDITIONS: Record<
  keyof FlexProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (k: any, opt?: FlexArgs) => Record<string, boolean>
> = {
  gap: (gap: Spacing | Density) => ({
    gap_0: gap === "0",
    gap_xs: gap === "xs",
    gap_s: gap === "s",
    gap_m: gap === "m",
    gap_l: gap === "l",
    gap_xl: gap === "xl",
    gap_xxl: gap === "xxl",
    gap_3xl: gap === "3xl",
    gap_density_xs: gap === "density-xs",
    gap_density_s: gap === "density-s",
    gap_density_m: gap === "density-m",
    gap_density_l: gap === "density-l",
    gap_density_xl: gap === "density-xl",
    gap_density_xxl: gap === "density-xxl",
    gap_density_3xl: gap === "density-3xl",
  }),
  rowGap: (rowGap: Spacing) => ({
    row_gap_0: rowGap === "0",
    row_gap_xs: rowGap === "xs",
    row_gap_s: rowGap === "s",
    row_gap_m: rowGap === "m",
    row_gap_l: rowGap === "l",
    row_gap_xl: rowGap === "xl",
    row_gap_xxl: rowGap === "xxl",
    row_gap_3xl: rowGap === "3xl",
  }),
  columnGap: (columnGap: Spacing) => ({
    col_gap_0: columnGap === "0",
    col_gap_xs: columnGap === "xs",
    col_gap_s: columnGap === "s",
    col_gap_m: columnGap === "m",
    col_gap_l: columnGap === "l",
    col_gap_xl: columnGap === "xl",
    col_gap_xxl: columnGap === "xxl",
    col_gap_3xl: columnGap === "3xl",
  }),
  boxSizing: (
    boxSizing: "border-box" | "content-box",
    opt: FlexArgs = { apply: true },
  ) => ({
    content_box: boxSizing === "content-box",
    border_box: boxSizing !== "content-box" && opt.apply,
  }),
  wrap: (wrap: "wrap" | "nowrap" | "wrap-reverse") => ({
    wrap: wrap === "wrap",
    wrap_reverse: wrap === "wrap-reverse",
    no_wrap: wrap === "nowrap",
  }),
  direction: (
    direction: "row" | "row-reverse" | "col" | "col-reverse",
    opt: FlexArgs = { apply: true },
  ) => ({
    row: direction === "row" || (opt.apply && !direction),
    row_reverse: direction === "row-reverse",
    col: direction === "col",
    col_reverse: direction === "col-reverse",
  }),
  noShrink: (noShrink: boolean) => ({
    shrink_0: noShrink,
  }),
  alignContent: (alignContent: AlignContent) => ({
    ac_center: alignContent === "center",
    ac_stretch: alignContent === "stretch",
    ac_start: alignContent === "start",
    ac_end: alignContent === "end",
    ac_between: alignContent === "between",
    ac_around: alignContent === "around",
  }),
  alignItems: (alignItems: AlignContent | "baseline") => ({
    ai_center: alignItems === "center",
    ai_stretch: alignItems === "stretch",
    ai_start: alignItems === "start",
    ai_end: alignItems === "end",
    ai_baseline: alignItems === "baseline",
  }),
  alignSelf: (alignSelf: Align) => ({
    as_center: alignSelf === "center",
    as_stretch: alignSelf === "stretch",
    as_start: alignSelf === "start",
    as_end: alignSelf === "end",
  }),
  justify: (justify: Justify) => ({
    j_around: justify === "around",
    j_between: justify === "between",
    j_center: justify === "center",
    j_end: justify === "end",
    j_start: justify === "start",
    j_evenly: justify === "evenly",
  }),
};

const FLEX_PROPS: Array<keyof FlexProps> = [
  "boxSizing",
  "wrap",
  "direction",
  "alignContent",
  "alignItems",
  "alignSelf",
  "gap",
  "columnGap",
  "rowGap",
  "justify",
  "noShrink",
];

export function getFlexProps<T extends FlexProps & { className?: string }>(
  props: T,
  opt: FlexArgs = { apply: true },
) {
  const { className, ...rest } = props;

  const cond = FLEX_PROPS.reduce(
    (acc, key) => {
      if (key in props) {
        Object.assign(acc, STYLE_CONDITIONS[key](props[key], opt));
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete rest[key];
      } else {
        if (key === "direction" && opt.apply) {
          Object.assign(acc, STYLE_CONDITIONS.direction(undefined, opt));
        }
        if (key === "boxSizing" && opt.apply) {
          Object.assign(acc, STYLE_CONDITIONS.boxSizing(undefined, opt));
        }
      }
      return acc;
    },
    {
      flex: opt.apply,
    },
  );
  // We are fixing a bug here that need to escape ts
  // <Box className={sprout.classNames('col')} />; => col is considered false
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const newClassName = classNames(className, cond);

  return { className: newClassName, ...rest };
}
