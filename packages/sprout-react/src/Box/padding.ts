import { classNames } from "../classNames";
import type { Density, Spacing } from "./tokens";

export type PaddingProps = {
  p?: Spacing;
  px?: Spacing;
  py?: Spacing | Density;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
};

const STYLE_CONDITIONS: Record<
  keyof PaddingProps,
  (k: Spacing) => Record<string, boolean>
> = {
  p: (p: Spacing) => ({
    p_0: p === "0",
    p_xs: p === "xs",
    p_s: p === "s",
    p_m: p === "m",
    p_l: p === "l",
    p_xl: p === "xl",
    p_xxl: p === "xxl",
    p_3xl: p === "3xl",
  }),
  px: (px: Spacing) => ({
    px_0: px === "0",
    px_xs: px === "xs",
    px_s: px === "s",
    px_m: px === "m",
    px_l: px === "l",
    px_xl: px === "xl",
    px_xxl: px === "xxl",
    px_3xl: px === "3xl",
  }),
  py: (py: Spacing | Density) => ({
    py_0: py === "0",
    py_xs: py === "xs",
    py_s: py === "s",
    py_m: py === "m",
    py_l: py === "l",
    py_xl: py === "xl",
    py_xxl: py === "xxl",
    py_3xl: py === "3xl",
    py_density_xs: py === "density-xs",
    py_density_s: py === "density-s",
    py_density_m: py === "density-m",
    py_density_l: py === "density-l",
    py_density_xl: py === "density-xl",
    py_density_xxl: py === "density-xxl",
    py_density_3xl: py === "density-3xl",
  }),
  pt: (pt: Spacing) => ({
    pt_0: pt === "0",
    pt_xs: pt === "xs",
    pt_s: pt === "s",
    pt_m: pt === "m",
    pt_l: pt === "l",
    pt_xl: pt === "xl",
    pt_xxl: pt === "xxl",
    pt_3xl: pt === "3xl",
  }),
  pr: (pr: Spacing) => ({
    pr_0: pr === "0",
    pr_xs: pr === "xs",
    pr_s: pr === "s",
    pr_m: pr === "m",
    pr_l: pr === "l",
    pr_xl: pr === "xl",
    pr_xxl: pr === "xxl",
    pr_3xl: pr === "3xl",
  }),
  pb: (pb: Spacing) => ({
    pb_0: pb === "0",
    pb_xs: pb === "xs",
    pb_s: pb === "s",
    pb_m: pb === "m",
    pb_l: pb === "l",
    pb_xl: pb === "xl",
    pb_xxl: pb === "xxl",
    pb_3xl: pb === "3xl",
  }),
  pl: (pl: Spacing) => ({
    pl_0: pl === "0",
    pl_xs: pl === "xs",
    pl_s: pl === "s",
    pl_m: pl === "m",
    pl_l: pl === "l",
    pl_xl: pl === "xl",
    pl_xxl: pl === "xxl",
    pl_3xl: pl === "3xl",
  }),
};

const PADDING_PROPS: Array<keyof PaddingProps> = [
  "p",
  "px",
  "py",
  "pt",
  "pr",
  "pb",
  "pl",
];

export function getPaddingProps<
  T extends PaddingProps & { className?: string },
>(props: T) {
  const { className, ...rest } = props;

  const cond = PADDING_PROPS.reduce(
    (acc, key) => {
      if (key in props) {
        Object.assign(acc, STYLE_CONDITIONS[key](props[key] as Spacing));
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete rest[key];
      }
      return acc;
    },
    {
      [className || ""]: !!className,
    },
  );

  const newClassName = classNames(cond);
  return { className: newClassName, ...rest };
}
