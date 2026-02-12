import { type CSSProperties, type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import className from "./Table.module.css";

export type TableRowProps = HTMLDivProps & {
  height?: CSSProperties["height"];
  /**
   * Whether the row is interactive, e.g. for hover effects.
   */
  interactive?: boolean;
  /**
   * Whether the row is selected or not.
   */
  selected?: boolean;
  /**
   * Use to position the row in a virtualized table.
   */
  startPosition?: number;
};

export const TableRow = forwardRef<HTMLDivElement, TableRowProps>(TableRowBase);

function TableRowBase(
  {
    children,
    height,
    interactive,
    selected,
    startPosition,
    ...props
  }: TableRowProps,
  ref?: Ref<HTMLDivElement>,
) {
  let style: CSSProperties = {
    blockSize: height,
  };
  if (startPosition !== undefined) {
    style = {
      blockSize: height,
      transform: `translateY(${startPosition}px)`,
    };
  }

  return (
    <div
      ref={ref}
      style={style}
      role="row"
      className={classNames("flex-noreset", "flex-nowrap", className.tr, {
        [className.tr_selected]: !!selected,
        [className.tr_interactive]: !!interactive,
        absolute: startPosition !== undefined,
        "w-full": startPosition !== undefined,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

TableRowBase.displayName = "Table.Row";
