import {
  FloatingPrimitive,
  type FloatingPrimitiveProps,
} from "../FloatingPrimitive";
import { classNames } from "../classNames";

import style from "./Popover.module.css";

export type PopoverProps = Omit<FloatingPrimitiveProps, "zIndex"> & {
  p?: "xs" | "s" | "m" | "l" | "xl";
  px?: "xs" | "s" | "m" | "l" | "xl";
  py?: "xs" | "s" | "m" | "l" | "xl";
  pt?: "xs" | "s" | "m" | "l" | "xl";
  pb?: "xs" | "s" | "m" | "l" | "xl";
  pl?: "xs" | "s" | "m" | "l" | "xl";
  pr?: "xs" | "s" | "m" | "l" | "xl";
};

/**
 * @deprecated use PopoverProps instead
 */
export type PopoverOptions = PopoverProps;

export function Popover({
  "data-testid": dataTestId,
  children,
  width,
  minWidth,
  maxWidth,
  ...props
}: PopoverProps) {
  const { className, p, px, py, pt, pb, pl, pr, ...rest } = props;
  classNames({
    [className || ""]: !!className,
    [`p-${p}`]: !!p,
    [`px-${px}`]: !!px,
    [`py-${py}`]: !!py,
    [`pt-${pt}`]: !!pt,
    [`pb-${pb}`]: !!pb,
    [`pl-${pl}`]: !!pl,
    [`pr-${pr}`]: !!pr,
  });
  return (
    <FloatingPrimitive
      hideBackdrop
      role="dialog"
      aria-label="popover"
      tabIndex={0}
      {...rest}
      className={classNames(style.popover, {
        [className || ""]: !!className,
      })}
      data-testid={dataTestId || "popover.wrapper"}
      width={width || "fit-content"}
      maxWidth={maxWidth || "s"}
      minWidth={minWidth || undefined}
    >
      {children}
    </FloatingPrimitive>
  );
}

Popover.displayName = "Popover";
