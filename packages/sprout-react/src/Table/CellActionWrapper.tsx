import { type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import className from "./Table.module.css";

export type CellActionWrapperProps = HTMLDivProps;

export const CellActionWrapper = forwardRef<
  HTMLDivElement,
  CellActionWrapperProps
>(CellActionWrapperBase);

function CellActionWrapperBase(
  { children, ...props }: CellActionWrapperProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "pr-m",
        "gap-s",
        "items-center",
        "justify-start",
        className.cell_action_wrapper,
      )}
      data-layoutid="cell-action-wrapper"
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
}

CellActionWrapperBase.displayName = "Table.CellActionWrapper";
