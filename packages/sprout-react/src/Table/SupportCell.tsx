import type { ReactNode } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { TableCell } from "./Cell";

export type SupportCellProps = {
  isHeader?: boolean;
  interactive?: boolean;
  children?: ReactNode;
} & HTMLDivProps;

/**
 * Support Cell is a wrapper around TableCell
 */
export function SupportCell({
  children,
  isHeader,
  interactive,
  ...props
}: SupportCellProps) {
  return (
    <div
      {...props}
      role={isHeader ? "columnheader" : "gridcell"}
      className={classNames(
        "flex-noreset",
        "grow-0",
        "shrink-1",
        "basis-auto",
        {
          "bg-moderate": !interactive,
          "bg-weak": !!interactive,
        },
      )}
    >
      <TableCell noRole>{children}</TableCell>
    </div>
  );
}

SupportCell.displayName = "Table.SupportCell";
