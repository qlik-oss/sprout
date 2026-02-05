import { type ReactNode, useEffect, useRef, useState } from "react";

import { Divider } from "../Divider";
import { classNames } from "../classNames";
import { useHasOverflow } from "../hooks/useHasOverflow";
import type { HTMLDivProps } from "../htmlTypes";

import style from "../Modal/Modal.module.css";

export type DialogContentProps = {
  children: ReactNode;
  padding?: boolean;
  overflowX?: "hidden" | "visible" | "scroll" | "auto";
  overflowY?: "hidden" | "visible" | "scroll" | "auto";
  divider?: "visible" | "none" | "auto";
} & Omit<HTMLDivProps, "children">;

export function DialogContent({
  children,
  padding,
  overflowX = "hidden",
  overflowY = "auto",
  divider = "auto",
  ...props
}: DialogContentProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const overflow = useHasOverflow(ref);
  const [scrollableState, setScrollableState] = useState(overflow.overflowY);

  let hasDivider = divider === "visible";
  if (!hasDivider) {
    if (divider === "auto" && scrollableState && overflowY === "auto") {
      hasDivider = true;
    }
  }

  useEffect(() => {
    if (overflow.overflowY !== scrollableState && overflowY === "auto") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setScrollableState(overflow.overflowY);
    }
  }, [overflow.overflowY, scrollableState, overflowY]);
  return (
    <>
      {hasDivider ? <Divider /> : null}
      <div
        className={classNames(
          "text-default",
          "font-body-s",
          "flex-noreset",
          "flex-col",
          "border-box",
          "py-0",
          "grow-1",
          style.modal_body,
          {
            "px-xxl": padding === undefined || !!padding,
            "overflow-y-auto": overflowY === "auto",
            "overflow-x-auto": overflowX === "auto",
            "overflow-y-scroll": overflowY === "scroll",
            "overflow-x-scroll": overflowX === "scroll",
            "overflow-y-hidden": overflowY === "hidden",
            "overflow-x-hidden": overflowX === "hidden",
          },
        )}
        data-testid="modal.content"
        role={overflowY === "auto" ? "region" : undefined}
        data-scrollable={
          overflowY === "auto" && scrollableState ? "true" : "false"
        }
        {...props}
        ref={ref}
        // as we have added region role we have covered the accessibility requirement
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role#scrolling_content_areas_with_overflow_text
        tabIndex={overflowY === "auto" && scrollableState ? 0 : -1}
      >
        {children}
      </div>
      {hasDivider ? <Divider /> : null}
    </>
  );
}
