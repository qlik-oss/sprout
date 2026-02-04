import { type PaddingProps, getPaddingProps } from "../Box/padding";
import {
  FloatingPrimitive,
  type FloatingPrimitiveProps,
} from "../FloatingPrimitive";
import { classNames } from "../classNames";

import style from "./Popover.module.css";

export type PopoverProps = Omit<
  FloatingPrimitiveProps,
  "className" | "zIndex"
> &
  PaddingProps;

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
  const { className, ...rest } = getPaddingProps<PopoverProps>(props);
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
