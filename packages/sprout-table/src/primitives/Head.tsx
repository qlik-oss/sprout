import { classNames } from "@qlik/sprout-react";
import { type CSSProperties, forwardRef, useContext } from "react";

import type { HTMLDivProps } from "../utils/htmlTypes";
import { TableContext } from "./context";
import styles from "./Table.module.css";

export type TableHeadProps = HTMLDivProps & {
  className?: string;
  style?: CSSProperties;
};

export const TableHead = forwardRef<HTMLDivElement, TableHeadProps>(
  ({ className: classNameProp, style, ...props }, ref) => {
    const context = useContext(TableContext);
    const headStyle: CSSProperties =
      context.overflowY === "virtualized"
        ? {
            position: "sticky",
            top: 0,
          }
        : {};

    return (
      <div
        role="rowgroup"
        className={classNames("border_box", "w-fit", classNameProp || "", {
          [styles.thead]: true,
        })}
        {...props}
        ref={ref}
        style={{ ...headStyle, ...style }}
      />
    );
  },
);

TableHead.displayName = "Table.Head";
