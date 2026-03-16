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

/**
 * The Popover component supports the following props:
 * @param content - The content to display inside the popover.
 * @param children - The trigger element for the popover.
 * @param anchorEl - An HTML element used to position the popover.
 * @param anchorPosition - Coordinates `{ top, left }` to position the popover.
 * @param placement - Placement relative to the anchor (`top`, `bottom`, `left`, `right`, and start/end variations).
 * @param placementUpdate - Whether the placement can update to stay in view.
 * @param width - Width strategy for the popover.
 * @param minWidth - Minimum width strategy.
 * @param maxWidth - Maximum width strategy.
 * @param open - Controlled open state.
 * @param onOpenChange - Callback when the open state changes.
 * @param hideBackdrop - If true, no backdrop overlay is rendered.
 * @param disableScrollLock - If true, scrolling is not locked when the popover is open.
 * @param closeOnRightClickOutside - If true, right-clicking outside closes the popover.
 * @param hoverDelay - Delay before the popover opens on hover.
 * @param forceMount - If true, content is mounted even when not displayed.
 * @param onMount - Callback when reference and floating elements are mounted.
 */
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
