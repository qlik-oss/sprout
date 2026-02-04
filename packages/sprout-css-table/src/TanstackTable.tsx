import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type OnChangeFn,
  type Row,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Fragment, useCallback, useRef, useState } from "react";
import { AutoSizer } from "./components/AutoSizer";
import { LoadMore } from "./components/LoadMore";
import { columnSelectionFeature, type ColumnSelectionTable, type ColumnSelectionTableOptions } from "./features";
import { useColumnVisibilityView } from "./hooks/useColumnVisibility";
import { useContextMenu } from "./hooks/useContextMenu";
import { useControlled } from "./hooks/useControl";
import { useFlexColumns } from "./hooks/useFlexColumns";
import { useTableState } from "./hooks/useTableState";
import { useTanStackColumns } from "./hooks/useTanStackColumns";
import { TableHTML } from "./primitives";
import type { ColumnSizingState, TableProps } from "./props";

/**
 * Variant from TanStackTable to support basic row virtualization.
 */
export function Table<ContentType>({
  getRowId,
  variant,
  height,
  defaultToggledRowId,
  toggledRowId,
  onToggledRowChange,
  rowHeight = 32,
  rowBuffer = 20,
  rows,
  columns,
  columnVisibility,
  displayRowNumberColumn,
  onCellClick,
  onRowClick,
  rowActions,
  rowSelectAll,
  rowSelectionMode,
  rowSelection,
  onRowSelectionChange,
  isRowSelectable,
  onColumnVisibilityChange,
  defaultColumnVisibility,
  columnSizing,
  onColumnSizingChange,
  defaultSorting,
  defaultRowSelection,
  onSortingChange,
  sorting,
  sortingMode,
  noRowsOverlay,
  disableColumnSorting,
  disableColumnHiding,
  disableColumnResize,
  loading,
  columnSelectionMode,
  columnSelection,
  columnsSelection,
  defaultColumnSelection,
  defaultColumnsSelection,
  onColumnSelectionChange,
  onColumnsSelectionChange,
  nextPage,
}: TableProps<ContentType> & {
  height?: number;
}) {
  let safeRows = !rows ? [] : rows;
  const rowsLength = rows?.length || 0;

  const [loadingRows, setLoadingRows] = useState<Array<ContentType>>(
    new Array(50).fill(null).map((_, i) => ({ id: i }) as unknown as ContentType),
  );
  if (loading && safeRows.length === 0) {
    safeRows = loadingRows;
  }

  const containerRef = useRef<HTMLDivElement>(null);

  const flexColumns = useFlexColumns<ContentType>(containerRef, columns, {
    displayRowNumberColumn,
    rowSelectionMode: !!rowSelectionMode,
    rowActions: !!rowActions,
    columnVisibility,
    defaultColumnVisibility,
  });
  const tColumns = useTanStackColumns<ContentType>(
    flexColumns,
    displayRowNumberColumn,
    rowSelectionMode,
    rowSelectAll,
    onCellClick,
    rowActions,
    loading,
  );

  const { columnVisibilityControl, columnSizingControl, sortState, headerRef } = useTableState<ContentType>({
    tColumns,
    columnVisibility,
    onColumnVisibilityChange,
    defaultColumnVisibility,
    columnSizing,
    onColumnSizingChange,
    defaultSorting,
    sorting,
    onSortingChange,
  });

  const rowSelectionControl = useControlled<
    Pick<TableProps<ContentType>, "rowSelection" | "onRowSelectionChange" | "defaultRowSelection">
  >(
    { rowSelection, onRowSelectionChange, defaultRowSelection },
    {
      valueKey: "rowSelection",
      defaultValueKey: "defaultRowSelection",
      onChangeKey: "onRowSelectionChange",
      defaultValue: {},
      selector: (e) => e,
    },
  );
  const columnSelectionControl = useControlled<
    Pick<TableProps<ContentType>, "columnSelection" | "onColumnSelectionChange" | "defaultColumnSelection">
  >(
    {
      columnSelection,
      onColumnSelectionChange,
      defaultColumnSelection,
    },
    {
      valueKey: "columnSelection",
      defaultValueKey: "defaultColumnSelection",
      onChangeKey: "onColumnSelectionChange",
      defaultValue: undefined,
      selector: (e) => e,
    },
  );
  const columnsSelectionControl = useControlled<
    Pick<TableProps<ContentType>, "columnsSelection" | "onColumnsSelectionChange" | "defaultColumnsSelection">
  >(
    {
      columnsSelection,
      onColumnsSelectionChange,
      defaultColumnsSelection,
    },
    {
      valueKey: "columnsSelection",
      defaultValueKey: "defaultColumnsSelection",
      onChangeKey: "onColumnsSelectionChange",
      defaultValue: undefined,
      selector: (e) => e,
    },
  );
  const toggledRowControl = useControlled<
    Pick<TableProps<ContentType>, "defaultToggledRowId" | "toggledRowId" | "onToggledRowChange">
  >(
    { toggledRowId, onToggledRowChange, defaultToggledRowId },
    {
      valueKey: "toggledRowId",
      defaultValueKey: "defaultToggledRowId",
      onChangeKey: "onToggledRowChange",
      defaultValue: "",
      selector: (e) => e,
    },
  );

  // const [columnSelectedState, setColumnSelectedState] = useState<string | undefined>(undefined);
  // const [columnsSelectedState, setColumnsSelectedState] = useState<string[] | undefined>(undefined);

  const getEnableRowSelectionConfig = useCallback((): boolean | ((row: Row<ContentType>) => boolean) => {
    if (!rowSelectionMode) {
      return false;
    }

    if (isRowSelectable) {
      return (row: Row<ContentType>) => isRowSelectable(row.original);
    }

    return true;
  }, [rowSelectionMode, isRowSelectable]);
  const onRowSelectionChangeCallback = useCallback(
    (fn: (row: Record<string, boolean>) => Record<string, boolean>) => {
      const change = fn(rowSelectionControl.rowSelection || {});
      rowSelectionControl.onRowSelectionChange?.(change);
    },
    [rowSelectionControl],
  ) as OnChangeFn<Record<string, boolean>>;

  const tableOptions = {
    _features: [columnSelectionFeature],
    data: safeRows,
    getRowId: loading ? (row: ContentType) => (row as ContentType & { id: string }).id || "" : getRowId,
    columns: tColumns,
    enableRowSelection: getEnableRowSelectionConfig(),
    enableMultiRowSelection: rowSelectionMode === "multiple",
    onRowSelectionChange: onRowSelectionChangeCallback,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: sortingMode === "server" ? undefined : getSortedRowModel(),
    state: {
      sorting: sortState.value,
      columnVisibility: columnVisibilityControl.columnVisibility,
      columnSizing: columnSizingControl.columnSizing,
      rowSelection: rowSelectionControl.rowSelection,
      columnSelected: columnSelectionControl.columnSelection,
      columnsSelected: columnsSelectionControl.columnsSelection,
    },
    manualSorting: sortingMode === "server",
    enableSorting: !disableColumnSorting,
    onSortingChange: sortState.onChange,
    onColumnVisibilityChange: columnVisibilityControl.onColumnVisibilityChange as OnChangeFn<Record<string, boolean>>,
    onColumnSizingChange: columnSizingControl.onColumnSizingChange as OnChangeFn<ColumnSizingState>,
    onColumnSelectionChange: columnSelectionControl.onColumnSelectionChange as OnChangeFn<string>,
    onColumnsSelectionChange: columnsSelectionControl.onColumnsSelectionChange as OnChangeFn<Array<string>>,
    columnResizeMode: "onChange",
    enableHiding: !disableColumnHiding,
    columnSelection: columnSelectionMode,
    enableColumnResizing: !disableColumnResize,
  } satisfies ColumnSelectionTableOptions<ContentType>;

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable<ContentType>(tableOptions) as ColumnSelectionTable<ContentType>;

  const prefixCount = (rowSelectionMode ? 1 : 0) + (displayRowNumberColumn ? 1 : 0);
  const suffixCount = rowActions ? 1 : 0;
  const isToggledStateEnabled = !!defaultToggledRowId || !!toggledRowId || !!onToggledRowChange;

  const columnVisibilityView = useColumnVisibilityView({
    headerRef,
    onColumnVisibilityChange: (subColumns) => {
      const newState = subColumns.reduce<Record<string, boolean>>((acc, column) => {
        if (column.id) {
          acc[column.id] = !!column.visible;
        }
        return acc;
      }, {});
      table.setColumnVisibility(newState);
    },
    columns: table
      .getAllColumns()
      .filter((tColumn, i) => i > prefixCount - 1 && i < table.getAllColumns().length - suffixCount)
      .map((tColumn, i) => {
        const columnDef = columns[i];
        return {
          id: tColumn.id,
          label: columnDef.headerName,
          visible: tColumn.getIsVisible(),
          canHide: tColumn.getCanHide(),
        };
      }),
  });
  const tableWidth = table.getCenterTotalSize() + 2;

  const rowModel = table.getRowModel();

  // Important: Keep the row virtualizer in the lowest component possible to avoid unnecessary re-renders.
  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLDivElement>({
    count: nextPage ? rowModel.rows.length + 1 : rowModel.rows.length,
    estimateSize: () => rowHeight,
    getScrollElement: () => containerRef.current?.querySelector('[role="rowgroup"]:nth-child(2)') as HTMLDivElement, //get scroll element from parent of table container
    measureElement:
      typeof window !== "undefined" && navigator.userAgent.indexOf("Firefox") === -1
        ? (element: HTMLElement) => element.getBoundingClientRect().height
        : undefined,
    overscan: rowBuffer,
  });
  const items = rowVirtualizer.getVirtualItems();

  const { ContextMenu, handleContextMenu } = useContextMenu(containerRef);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (displayRowNumberColumn && variant !== "data") {
    return null;
  }

  return (
    <>
      {columnVisibilityView}
      <AutoSizer
        height={height}
        key="auto-sizer"
        onResize={(info) => {
          if (typeof info.height === "undefined") return;
          const newLength = Math.floor(info.height / rowHeight) - 1;

          if (newLength !== loadingRows.length) {
            setLoadingRows(new Array(newLength).fill(null).map((_, i) => ({ id: i }) as unknown as ContentType));
          }
        }}
      >
        {(sizeInfo) => (
          <TableHTML.Table
            key="table"
            variant={variant}
            width={tableWidth}
            ref={containerRef}
            overflowY="virtualized"
            height={sizeInfo.height}
            minHeight={sizeInfo.minHeight}
            maxHeight={sizeInfo.maxHeight}
            contentHeight={rowVirtualizer.getTotalSize()}
          >
            <TableHTML.Head ref={headerRef}>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHTML.HeaderRow key={headerGroup.id} data-testid={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Fragment key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </Fragment>
                  ))}
                </TableHTML.HeaderRow>
              ))}
            </TableHTML.Head>
            {safeRows.length === 0 ? (
              <TableHTML.Message>{noRowsOverlay?.()}</TableHTML.Message>
            ) : (
              <TableHTML.Body>
                {ContextMenu}
                {items.map((virtualRow) => {
                  const isLoaderRow = virtualRow.index > rowsLength - 1;
                  if (nextPage && isLoaderRow) {
                    return (
                      <LoadMore
                        key={`loader-${virtualRow.index}`}
                        onDisplayed={nextPage}
                        containerDistance={100}
                        style={{
                          blockSize: rowHeight,
                          transform: `translateY(${virtualRow.start}px)`,
                        }}
                      />
                    );
                  }

                  const row = rowModel.rows[virtualRow.index] as Row<ContentType>;
                  const rowId = row.id || getRowId?.(row.original);
                  const isToggled = isToggledStateEnabled ? toggledRowControl.toggledRowId === rowId : false;
                  let isRowInteractive;

                  if (variant === "list" && rowSelectionMode) {
                    isRowInteractive = row.getCanSelect();
                  }

                  if (!!onRowClick || isToggledStateEnabled) {
                    isRowInteractive = true;
                  }

                  return (
                    <TableHTML.Row
                      key={rowId}
                      height={rowHeight}
                      startPosition={virtualRow.start}
                      interactive={isRowInteractive}
                      selected={row.getIsSelected()}
                      toggled={isToggled}
                      onClick={(e) => {
                        onRowClick?.(e, row.original);

                        if (e.defaultPrevented) return;

                        if (isToggledStateEnabled) {
                          if (toggledRowControl.toggledRowId === rowId) {
                            toggledRowControl.onToggledRowChange?.("");
                          } else {
                            toggledRowControl.onToggledRowChange?.(rowId || "");
                          }
                        }

                        if (!isToggledStateEnabled && variant === "list" && row.getCanSelect()) {
                          row.getToggleSelectedHandler()(e);
                        }
                      }}
                      onContextMenu={handleContextMenu(rowActions?.(row.original))}
                    >
                      {row.getVisibleCells().map((cell) => flexRender(cell.column.columnDef.cell, cell.getContext()))}
                    </TableHTML.Row>
                  );
                })}
              </TableHTML.Body>
            )}
          </TableHTML.Table>
        )}
      </AutoSizer>
    </>
  );
}
