import { classNames } from "../classNames";
import type { BorderRadius } from "./tokens";

export type Border =
  | "none"
  | "default"
  | "weak"
  | "moderate"
  | "strong"
  | "extra-strong";

export type BorderProps = {
  borderRadius?: BorderRadius;
  border?: Border;
  borderTop?: Border;
  borderRight?: Border;
  borderBottom?: Border;
  borderLeft?: Border;
  borderWidth?: "0" | "default" | "strong";
};

const BORDER_PROPS: Array<keyof BorderProps> = [
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "borderWidth",
  "borderRadius",
];

const STYLE_CONDITIONS: Record<
  keyof BorderProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (k: any) => Record<string, boolean>
> = {
  border: (border: Border) => ({
    border_none: border === "none",
    border_default: border === "default",
    border_weak: border === "weak",
    border_moderate: border === "moderate",
    border_strong: border === "strong",
    border_extra_strong: border === "extra-strong",
  }),
  borderTop: (borderTop: Border) => ({
    border_t_none: borderTop === "none",
    border_t_default: borderTop === "default",
    border_t_weak: borderTop === "weak",
    border_t_moderate: borderTop === "moderate",
    border_t_strong: borderTop === "strong",
    border_t_extra_strong: borderTop === "extra-strong",
  }),
  borderRight: (borderRight: Border) => ({
    border_r_none: borderRight === "none",
    border_r_default: borderRight === "default",
    border_r_weak: borderRight === "weak",
    border_r_moderate: borderRight === "moderate",
    border_r_strong: borderRight === "strong",
    border_r_extra_strong: borderRight === "extra-strong",
  }),
  borderBottom: (borderBottom: Border) => ({
    border_b_none: borderBottom === "none",
    border_b_default: borderBottom === "default",
    border_b_weak: borderBottom === "weak",
    border_b_moderate: borderBottom === "moderate",
    border_b_strong: borderBottom === "strong",
    border_b_extra_strong: borderBottom === "extra-strong",
  }),
  borderLeft: (borderLeft: Border) => ({
    border_l_none: borderLeft === "none",
    border_l_default: borderLeft === "default",
    border_l_weak: borderLeft === "weak",
    border_l_moderate: borderLeft === "moderate",
    border_l_strong: borderLeft === "strong",
    border_l_extra_strong: borderLeft === "extra-strong",
  }),
  borderWidth: (borderWidth: "0" | "default" | "strong") => ({
    border_width_0: borderWidth === "0",
    border_width_default: borderWidth === "default",
    border_width_strong: borderWidth === "strong",
  }),
  borderRadius: (borderRadius: BorderRadius) => ({
    radius_subtle: borderRadius === "subtle",
    radius_soft: borderRadius === "soft",
    radius_cushiony: borderRadius === "cushiony",
    radius_pill: borderRadius === "pill",
    radius_round: borderRadius === "round",
    radius_nested_subtle_xs: borderRadius === "nested-subtle-xs",
    radius_nested_soft_xs: borderRadius === "nested-soft-xs",
    radius_nested_soft_s: borderRadius === "nested-soft-s",
    radius_nested_cushiony_xs: borderRadius === "nested-cushiony-xs",
    radius_nested_cushiony_s: borderRadius === "nested-cushiony-s",
    radius_nested_cushiony_m: borderRadius === "nested-cushiony-m",
    radius_twice_soft_xs: borderRadius === "twice-soft-xs",
    radius_twice_cushiony_s_xs: borderRadius === "twice-cushiony-s-xs",
    radius_twice_cushiony_m_s: borderRadius === "twice-cushiony-m-s",
  }),
};

export function getBorderProps<T extends BorderProps & { className?: string }>(
  props: T,
) {
  const { className, ...rest } = props;
  const cond = BORDER_PROPS.reduce<Record<string, boolean>>(
    (acc, key) => {
      if (key in props) {
        Object.assign(acc, STYLE_CONDITIONS[key](props[key]));
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete rest[key];
      }
      return acc;
    },
    {
      [className ?? ""]: !!className,
    },
  );
  const newClassName = classNames(cond);
  return { className: newClassName, ...rest };
}
