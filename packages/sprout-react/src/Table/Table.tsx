import { type Ref, forwardRef, useMemo, useState } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { TableContext, type TableContextType } from "./context";
import { getWidth } from "./getWidth";

import className from "./Table.module.css";

export type TableProps = HTMLDivProps & {
  variant: "list" | "data";
  width?: number;
  height?: number;
  contentHeight?: number;
  overflowY?: TableContextType["overflowY"];
};

const containerFlex = classNames(
  "flex-noreset",
  "flex-row",
  "border-box",
  "size-full",
  "flex-nowrap",
);

export const Table = forwardRef<HTMLDivElement, TableProps>(TableBase);

function TableBase(
  {
    variant,
    children,
    width,
    height,
    contentHeight,
    overflowY,
    ...props
  }: TableProps,
  ref?: Ref<HTMLDivElement>,
) {
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const contextValue = useMemo(() => {
    return {
      overflowY: overflowY ?? "default",
      containerHeight: height,
      contentHeight,
      scrollBarWidth,
      setScrollBarWidth,
    };
  }, [overflowY, height, contentHeight, scrollBarWidth, setScrollBarWidth]);

  return (
    <TableContext.Provider value={contextValue}>
      <div
        className={classNames(containerFlex, {
          "overflow-y-auto": overflowY === "default",
        })}
        style={{ blockSize: height ? `${height}px` : undefined }}
      >
        <div
          {...props}
          role="grid"
          data-variant={variant}
          className={classNames(
            "flex-noreset",
            "flex-nowrap",
            "border-box",
            "flex-col",
            "overflow-x-auto",
            "size-full",
            "radius-subtle",
            "shrink-0",
            className.table,
          )}
          ref={ref}
          style={{
            flex: `1 1 ${getWidth(width)}`,
            blockSize: height ? `${height}px` : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </TableContext.Provider>
  );
}

TableBase.displayName = "Table.Table";
