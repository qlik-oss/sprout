import type { CSSProperties, ReactNode } from "react";

import { classNames } from "@qlik/sprout-css-react";
import type { HTMLDivProps } from "../utils/htmlTypes";
import { TableCell } from "./Cell";

export type SupportCellProps = {
  isHeader?: boolean;
  interactive?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
} & HTMLDivProps;

/**
 * @deprecated Use Table.Cell instead.
 */
export function SupportCell({
  children,
  isHeader,
  interactive,
  className: classNameProp,
  style,
  ...props
}: SupportCellProps) {
  return (
    <div
      {...props}
      role={isHeader ? "columnheader" : "gridcell"}
      className={classNames("flex-noreset", "grow-0", "shrink-1", "basis-auto", classNameProp || "", {
        bg_moderate: !interactive,
        bg_weak: !!interactive,
      })}
      style={style}
    >
      <TableCell noRole>{children}</TableCell>
    </div>
  );
}

SupportCell.displayName = "Table.SupportCell";
