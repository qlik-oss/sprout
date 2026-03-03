import type { CSSProperties, ReactNode } from "react";

import { Menu } from "../Menu";
import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { CellActionWrapper } from "./CellActionWrapper";
import { ContextualIconButton } from "./ContextualIconButton";
import { getWidth } from "./getWidth";

import className from "./Table.module.css";

export type TableCellProps = {
  /** needed to be able to wrap */
  noRole?: boolean;
  interactive?: boolean;
  selected?: boolean;
  /**
   * @deprecated use regular children instead with CellActionWrapper
   */
  contextMenu?: ReactNode;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
} & Omit<HTMLDivProps, "contextMenu">;

export function TableCell({
  children,
  interactive,
  selected,
  noRole,
  contextMenu,
  width,
  height,
  ...props
}: TableCellProps) {
  let style: CSSProperties = {
    blockSize: height,
  };
  if (width) {
    style = {
      blockSize: height,
      flex: `1 1 ${getWidth(width)}`,
    };
  }

  return (
    <div
      role={noRole ? undefined : "gridcell"}
      data-interactive={!!interactive}
      aria-selected={selected}
      className={classNames(
        "inline-flex",
        "border-box",
        "flex-row",
        "overflow-hidden",
        className.cell,
      )}
      tabIndex={interactive || contextMenu ? 0 : undefined}
      style={style}
      {...props}
    >
      <div
        className={classNames(
          "flex-noreset",
          "border-box",
          "flex-row",
          "items-center",
          "h-full",
          "w-full",
          "overflow-hidden",
          className.cell_state,
        )}
      >
        {children}
        {!!contextMenu && (
          <CellActionWrapper>
            <Menu.Trigger menu={contextMenu}>
              <ContextualIconButton />
            </Menu.Trigger>
          </CellActionWrapper>
        )}
      </div>
    </div>
  );
}

TableCell.displayName = "Table.Cell";
