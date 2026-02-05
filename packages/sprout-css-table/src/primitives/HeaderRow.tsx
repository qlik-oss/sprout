import { classNames } from "@qlik/sprout-css-react";
import type { CSSProperties } from "react";

import type { HTMLDivProps } from "../utils/htmlTypes";
import styles from "./Table.module.css";

export type TableHeaderRowProps = HTMLDivProps & {
  className?: string;
  style?: CSSProperties;
};

export function TableHeaderRow({ children, className: classNameProp, style, ...props }: TableHeaderRowProps) {
  return (
    <div
      role="row"
      className={classNames("flex-noreset", "flex-nowrap", classNameProp || "", {
        [styles.tr]: true,
      })}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

TableHeaderRow.displayName = "Table.HeaderRow";
