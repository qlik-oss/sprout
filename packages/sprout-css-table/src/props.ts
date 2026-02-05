/* eslint-disable @typescript-eslint/no-redeclare */
import type { MouseEvent, ReactNode } from "react";

export type ColumSort = {
  id: string;
  desc: boolean;
};

export type SortingState = Array<ColumSort>;

export type ColumnSortComparator<ContentType> =
  | "alphanumeric"
  | "datetime"
  | "text"
  | "basic"
  | ((rowA: ContentType, rowB: ContentType, columnId: string) => number);

export type ColumnSizingState = Record<string, number>;

export type TableCellParams<ContentType> = {
  colDef: ColumnDef<ContentType>;
  row: ContentType;
  value: unknown;
};

export type ColumnDef<ContentType> = {
  id?: string;
  field?: keyof ContentType;
  type?: "number";
  valueGetter?: (row: ContentType) => unknown;
  valueSetter?: (row: ContentType, value: unknown) => ContentType;
  headerName: string;
  headerDescription?: string;
  headerPlaceholder?: (header: ColumnDef<ContentType>) => ReactNode;
  headerContextMenu?: () => ReactNode;
  selectable?: boolean;
  sortable?: boolean;
  sortComparator?: ColumnSortComparator<ContentType>;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  flex?: number;
  renderCell?: (info: TableCellParams<ContentType>) => ReactNode;
  resizable?: boolean;
  statusIcon?: ReactNode;
  hideable?: boolean;
  renderCellLoading?: () => ReactNode;
};

type RowSelectionProps<ContentType> = {
  /**
   * Add a checkbox in the selection column header to select all rows.
   * Works only if rowSelection is set to "multiple".
   * Defaults to true.
   */
  rowSelectAll?: boolean;
  rowSelectionMode?: "single" | "multiple";
  rowSelection?: Record<string, boolean>;
  onRowSelectionChange?: (rowSelectionState: Record<string, boolean>) => void;
  defaultRowSelection?: Record<string, boolean>;
  isRowSelectable?: (row: ContentType) => boolean;
};

type CommonTableProps<ContentType> = {
  getRowId?: (row: ContentType) => string;
  rowHeight?: number;
  rowBuffer?: number;
  rows?: Array<ContentType>;
  defaultToggledRowId?: string;
  toggledRowId?: string;
  onToggledRowChange?: (rowId: string) => void;
  columns: Array<ColumnDef<ContentType>>;
  // column visibility
  columnVisibility?: Record<string, boolean>;
  onColumnVisibilityChange?: (columnVisibility: Record<string, boolean>) => void;
  defaultColumnVisibility?: Record<string, boolean>;
  // column sizing
  columnSizing?: ColumnSizingState;
  onColumnSizingChange?: (columnSizing: ColumnSizingState) => void;
  disableColumnResize?: boolean;
  // sort
  disableColumnSorting?: boolean;
  defaultSorting?: SortingState;
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
  sortingMode?: "client" | "server";
  disableColumnHiding?: boolean;
  // basic callback inspiration taken from https://mui.com/x/api/data-grid/data-grid-pro/#data-grid-pro-prop-onCellClick
  onCellClick?: (event: MouseEvent<HTMLDivElement>, cell: TableCellParams<ContentType>) => void;
  onRowClick?: (event: MouseEvent<HTMLDivElement>, row: ContentType) => void;
  // onColumnHeaderClick?: (info: any, event: any) => void;
  // onColumnHeaderContextMenu?: (info: any, event: any) => void;

  rowActions?: (content: ContentType) => ReactNode; // injected into MenuTrigger
  // columnActions: (info: any) => ReactNode; // injected into MenuTrigger

  noRowsOverlay?: () => ReactNode;
  statusIcon?: ReactNode;
  loading?: boolean;

  // column selection
  columnSelectionMode?: "single" | "multiple";
  columnSelection?: string;
  columnsSelection?: Array<string>;
  defaultColumnSelection?: string;
  defaultColumnsSelection?: Array<string>;
  onColumnSelectionChange?: (columnSelection: string) => void;
  onColumnsSelectionChange?: (columnSelection: Array<string>) => void;

  // infinite scroll / pagination
  nextPage?: () => void | Promise<void>;
};

export type TableProps<ContentType> = CommonTableProps<ContentType> &
  RowSelectionProps<ContentType> &
  (
    | {
        variant: "data";
        displayRowNumberColumn?: boolean;
      }
    | {
        variant: "list";
        displayRowNumberColumn?: undefined;
      }
  );
