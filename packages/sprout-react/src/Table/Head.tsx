import { type CSSProperties, type Ref, forwardRef, useContext } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { TableContext } from "./context";

import className from "./Table.module.css";

export type TableHeadProps = HTMLDivProps;

export const TableHead = forwardRef<HTMLDivElement, TableHeadProps>(
  TableHeadBase,
);

function TableHeadBase(props: TableHeadProps, ref?: Ref<HTMLDivElement>) {
  const context = useContext(TableContext);
  const style: CSSProperties =
    context.overflowY === "virtualized"
      ? {
          position: "sticky",
          insetBlockStart: 0,
          zIndex: 1,
          paddingInlineEnd: context.scrollBarWidth,
        }
      : {
          paddingInlineEnd: context.scrollBarWidth,
        };

  return (
    <div
      role="rowgroup"
      className={classNames(className.thead)}
      {...props}
      ref={ref}
      style={style}
    />
  );
}

TableHeadBase.displayName = "Table.Head";
