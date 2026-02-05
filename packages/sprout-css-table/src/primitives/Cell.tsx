import { classNames, Menu } from "@qlik/sprout-css-react";
import type { CSSProperties, ReactNode } from "react";

import { CellActionWrapper } from "./CellActionWrapper";
import { ContextualIconButton } from "./ContextualIconButton";
import { type CellSizeProps, getCellStyle } from "./size";

import type { HTMLDivProps } from "../utils/htmlTypes";
import styles from "./Table.module.css";

export type TableCellProps = {
  /** needed to be able to wrap */
  noRole?: boolean;
  interactive?: boolean;
  selected?: boolean;
  columnSelected?: boolean;
  /**
   * @deprecated use regular children instead with CellActionWrapper
   */
  contextMenu?: ReactNode;
  isHeader?: boolean;
  height?: CSSProperties["height"];
} & Omit<HTMLDivProps, "contextMenu"> &
  CellSizeProps & {
    className?: string;
    style?: CSSProperties;
  };

export function TableCell({
  children,
  interactive,
  selected,
  columnSelected,
  noRole,
  contextMenu,
  width,
  minWidth,
  maxWidth,
  isHeader,
  height,
  className: classNameProp,
  style: styleProp,
  ...props
}: TableCellProps) {
  const baseStyle: CSSProperties = getCellStyle(
    {
      height,
    },
    {
      width,
      minWidth,
      maxWidth,
    },
  );
  let role;
  if (!noRole) {
    role = isHeader ? "columnheader" : "gridcell";
  }
  return (
    <div
      role={role}
      data-interactive={!!interactive}
      aria-selected={selected}
      data-column-selected={!!columnSelected}
      className={classNames("inline-flex", "border_box", "flex-row", "overflow-hidden", classNameProp || "", {
        [styles.cell]: true,
      })}
      tabIndex={interactive || contextMenu ? 0 : undefined}
      style={{ ...baseStyle, ...styleProp }}
      {...props}
    >
      <div
        className={classNames(
          "flex-noreset",
          "border_box",
          "flex-row",
          "items-center",
          "h-full",
          "w-full",
          "overflow-hidden",
          {
            [styles.cell_state]: true,
          },
        )}
      >
        {children}
        {contextMenu ? (
          <CellActionWrapper>
            <Menu.Trigger menu={contextMenu}>
              <ContextualIconButton />
            </Menu.Trigger>
          </CellActionWrapper>
        ) : null}
      </div>
    </div>
  );
}

TableCell.displayName = "Table.Cell";
