import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import className from "./Table.module.css";

export type TableHeaderRowProps = HTMLDivProps;

export function TableHeaderRow({ children, ...props }: TableHeaderRowProps) {
  return (
    <div
      role="row"
      className={classNames("flex-noreset", "flex-nowrap", className.tr)}
      {...props}
    >
      {children}
    </div>
  );
}

TableHeaderRow.displayName = "Table.HeaderRow";
