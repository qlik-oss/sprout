/* eslint-disable @typescript-eslint/no-explicit-any */
import { classNames, Menu, Skeleton } from "@qlik/sprout-css-react";
import type {
  CellContext,
  HeaderContext,
  SortingFnOption,
  ColumnDef as TanStackColumnDef,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { CellWrapper } from "../components/CellWrapper";
import { HeaderWrapper } from "../components/HeaderWrapper";
import { TableHTML } from "../primitives";
import { COL_WIDTH_ACTIONS } from "../primitives/constant";
import type { ColumnDef, TableProps } from "../props";
import { ERRORS } from "../utils/error";

const LOADING_SKELETON = <Skeleton variant="text" />;

export function useTanStackColumns<ContentType>(
  columns: Array<ColumnDef<ContentType>>,
  displayRowNumberColumn?: boolean,
  rowSelectionMode?: TableProps<ContentType>["rowSelectionMode"],
  rowSelectAll?: TableProps<ContentType>["rowSelectAll"],
  onCellClick?: TableProps<ContentType>["onCellClick"],
  rowActions?: TableProps<ContentType>["rowActions"],
  loading?: TableProps<ContentType>["loading"],
): Array<TanStackColumnDef<ContentType>> {
  return useMemo(() => {
    const rowNumberColumn = displayRowNumberColumn
      ? {
          id: "rowNumber",
          size: TableHTML.CONSTANT.COL_WIDTH_ROW_NUMBER,
          header: (info: HeaderContext<ContentType, any>) => (
            <TableHTML.Cell width={info.column.getSize()} isHeader>
              <TableHTML.RowNumber index="#" />
            </TableHTML.Cell>
          ),
          cell: (info: CellContext<ContentType, any>) => (
            <TableHTML.Cell key={info.cell.id} width={info.cell.column.getSize()} data-testid={info.cell.id}>
              <TableHTML.RowNumber index={info.row.index + 1} />
            </TableHTML.Cell>
          ),
          enableResizing: false,
        }
      : undefined;
    if (rowNumberColumn && loading) {
      rowNumberColumn.cell = (info: CellContext<ContentType, any>) => (
        <TableHTML.Cell key={info.cell.id} width={info.cell.column.getSize()} data-testid={info.cell.id}>
          <div className={classNames("flex", "items-center", "justify-center", "size-full")}>
            <Skeleton variant="text" width={15} />
          </div>
        </TableHTML.Cell>
      );
    }
    const selectionColumn = rowSelectionMode
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        {
          id: "selection",
          size: TableHTML.CONSTANT.COL_WIDTH_SELECTION,
          header: (info: HeaderContext<ContentType, any>) => (
            <TableHTML.Cell width={info.column.getSize()} isHeader interactive>
              <TableHTML.Selection
                isHeader
                rowSelection={rowSelectionMode}
                checked={info.table.getIsAllRowsSelected()}
                indeterminate={info.table.getIsSomeRowsSelected()}
                onChange={rowSelectionMode === "multiple" ? info.table.getToggleAllRowsSelectedHandler() : undefined}
                disabled={rowSelectAll === undefined ? false : !rowSelectAll}
              />
            </TableHTML.Cell>
          ),
          cell: (info: CellContext<ContentType, any>) => (
            <TableHTML.Cell key={info.cell.id} width={info.cell.column.getSize()} data-testid={info.cell.id}>
              <TableHTML.Selection
                rowSelection={rowSelectionMode}
                checked={info.row.getIsSelected()}
                disabled={!info.row.getCanSelect()}
                onChange={info.row.getToggleSelectedHandler()}
              />
            </TableHTML.Cell>
          ),
          enableResizing: false,
        }
      : undefined;
    if (selectionColumn && loading) {
      selectionColumn.cell = (info: CellContext<ContentType, any>) => (
        <TableHTML.Cell key={info.cell.id} width={info.cell.column.getSize()} data-testid={info.cell.id}>
          <div className={classNames("flex", "items-center", "justify-center", "size-full")}>
            <Skeleton variant="text" width={15} />
          </div>
        </TableHTML.Cell>
      );
    }
    const userColumns = columns.map((column) => {
      if (!column.field && !column.id) {
        throw new Error(ERRORS.MISSING_COLUMN_ID());
      }
      if (!column.field && !column.valueGetter) {
        throw new Error(ERRORS.MISSING_COLUMN_VALUE_GETTER(column.id || ""));
      }
      let sortingFn: SortingFnOption<ContentType> = "alphanumeric";
      if (column.sortComparator) {
        if (typeof column.sortComparator === "function") {
          const sortComparatorFn = column.sortComparator;
          sortingFn = (a, b, columnId) => sortComparatorFn(a.original, b.original, columnId);
        } else {
          sortingFn = column.sortComparator;
        }
      }
      const cDef = {
        id: column.id || column.field,
        accessorKey: column.field,
        accessorFn: column.valueGetter,
        size: column.width,
        enableSorting: column.sortable,
        enableHiding: column.hideable,
        sortingFn,
        header: (info) => (
          <HeaderWrapper
            data-testid={`table.header.${info.header.id}`}
            info={info}
            colDef={column}
            header={column.headerName}
            additionalInfo={column.headerDescription}
          >
            {column.headerPlaceholder?.(column)}
          </HeaderWrapper>
        ),
        cell: (info) => (
          <CellWrapper info={info} colDef={column} renderCell={column.renderCell} onCellClick={onCellClick} />
        ),
        enableResizing: column.resizable ?? true,
      } as TanStackColumnDef<ContentType>;
      if (loading) {
        cDef.cell = (info) => (
          <CellWrapper info={info} colDef={column}>
            {column.renderCellLoading ? column.renderCellLoading() : LOADING_SKELETON}
          </CellWrapper>
        );
      }
      return cDef;
    });
    const rowActionsColumn = rowActions
      ? {
          id: "rowActions",
          enableSorting: false,
          size: TableHTML.CONSTANT.COL_WIDTH_ACTIONS,
          header: (info: HeaderContext<ContentType, any>) => (
            <TableHTML.Cell width={info.column.getSize()} isHeader>
              {" "}
            </TableHTML.Cell>
          ),
          cell: (info: CellContext<ContentType, any>) => {
            const actions = rowActions(info.row.original);
            if (actions) {
              return (
                <TableHTML.Cell width={COL_WIDTH_ACTIONS}>
                  <Menu.Trigger
                    menu={actions}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <TableHTML.RowActionButton />
                  </Menu.Trigger>
                </TableHTML.Cell>
              );
            }
            return <TableHTML.Cell width={COL_WIDTH_ACTIONS} />;
          },
          enableResizing: false,
        }
      : undefined;
    if (rowActionsColumn && loading) {
      rowActionsColumn.cell = () => (
        <TableHTML.Cell width={COL_WIDTH_ACTIONS}>
          <Skeleton variant="text" width={15} />
        </TableHTML.Cell>
      );
    }
    return [rowNumberColumn, selectionColumn, ...userColumns, rowActionsColumn].filter(Boolean);
  }, [displayRowNumberColumn, loading, rowSelectionMode, columns, rowActions, rowSelectAll, onCellClick]) as Array<
    TanStackColumnDef<ContentType>
  >;
}
