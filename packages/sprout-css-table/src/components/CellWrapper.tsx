import type { CellContext } from "@tanstack/react-table";
import type { ReactNode } from "react";
import { useMemo } from "react";
import type { ColumnSelectionColumn } from "../features";
import { TableHTML, type TableHTMLProps } from "../primitives";
import type { TableCellParams, TableProps } from "../props";

export type CellWrapperProps<ContentType> = {
  info: CellContext<ContentType, unknown>;
  onCellClick?: TableProps<ContentType>["onCellClick"];
  renderCell?: (info: TableCellParams<ContentType>) => ReactNode;
  colDef?: TableCellParams<ContentType>["colDef"];
  height?: TableProps<ContentType>["rowHeight"];
} & Partial<TableHTMLProps["CellContent"]>;

export function CellWrapper<ContentType>({
  info,
  renderCell,
  onCellClick,
  colDef,
  height,
  children,
  ...props
}: CellWrapperProps<ContentType>) {
  const selectionColumn = info.column as ColumnSelectionColumn<ContentType>;
  const param = useMemo(() => {
    return {
      colDef,
      row: info.row.original,
      value: info.getValue(),
    };
  }, [info, colDef]) as TableCellParams<ContentType>;

  return (
    <TableHTML.Cell
      key={info.cell.id}
      width={info.cell.column.getSize()}
      minWidth={colDef?.minWidth}
      maxWidth={colDef?.maxWidth}
      height={height}
      data-testid={info.cell.id}
      onClick={(e) => {
        onCellClick?.(e, param);
      }}
      columnSelected={selectionColumn.isSelected()}
    >
      {renderCell ? (
        renderCell(param)
      ) : (
        <TableHTML.CellContent ellipsis variant={colDef?.type} {...props}>
          {children || (info.getValue() as string)}
        </TableHTML.CellContent>
      )}
    </TableHTML.Cell>
  );
}

CellWrapper.displayName = "CellWrapper";
