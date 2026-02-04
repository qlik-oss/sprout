import {
  makeStateUpdater,
  type CellContext,
  type Column,
  type HeaderContext,
  type OnChangeFn,
  type RowData,
  type Table,
  type TableFeature,
  type TableOptions,
  type TableState,
  type Updater,
} from "@tanstack/react-table";

export type ColumnSelectionColumnMeta = {
  /**
   * Flex value for the column. If not set, the column will not be flexible.
   */
  selectable?: boolean;
};

export type ColumnSelectionState = {
  /**
   */
  columnSelected: string;
  columnsSelected: Array<string>;
};

export type ColumnSelectionTableState = TableState & ColumnSelectionState;

export type ColumnSelectionColumnAPI = {
  getSelectionMode: () => "single" | "multiple" | undefined;
  isSelected: () => boolean;
  toggleSelection: () => void;
};

export type ColumnSelectionOptions = {
  columnSelection?: "single" | "multiple";
  onColumnSelectionChange?: OnChangeFn<string>;
  onColumnsSelectionChange?: OnChangeFn<Array<string>>;
};

export type ColumnSelectionTableOptions<TData extends RowData> = Omit<TableOptions<TData>, "state"> &
  ColumnSelectionOptions & {
    state?: Partial<ColumnSelectionTableState>;
  };

// Define types for our new feature's table APIs
export type ColumnSelectionInstance = {
  setColumnSelection: (updater: Updater<ColumnSelectionState>) => void;
};

export type ColumnSelectionTable<TData extends RowData> = Table<TData> &
  ColumnSelectionInstance & {
    options: ColumnSelectionTableOptions<TData>;
    getState: () => ColumnSelectionTableState;
  };

export type ColumnSelectionColumn<TData extends RowData, TValue = unknown> = Column<TData, TValue> &
  ColumnSelectionColumnAPI;

export type ColumnSelectionHeaderContext<TData extends RowData, TValue = unknown> = HeaderContext<TData, TValue> & {
  column: ColumnSelectionColumn<TData, TValue>;
  table: ColumnSelectionTable<TData>;
};

export type ColumnSelectionCellContext<TData extends RowData, TValue = unknown> = CellContext<TData, TValue> & {
  column: ColumnSelectionColumn<TData, TValue>;
  table: ColumnSelectionTable<TData>;
};

// Here is all of the actual javascript code for our new feature

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments, @typescript-eslint/no-explicit-any
export const columnSelectionFeature: TableFeature<any> = {
  // define the new feature's initial state
  getInitialState: (state): ColumnSelectionTableState =>
    ({
      ...state,
      columnSelected: "",
      columnsSelected: [],
    }) as ColumnSelectionTableState,

  // define the new feature's default options
  getDefaultOptions: <TData extends RowData>(table: Table<TData>): ColumnSelectionTableOptions<TData> => {
    const selectionTable = table;

    return {
      onColumnSelectionChange: makeStateUpdater(
        "columnSelected" as unknown as keyof TableState,
        selectionTable,
      ) as OnChangeFn<string>,
      onColumnsSelectionChange: makeStateUpdater(
        "columnsSelected" as unknown as keyof TableState,
        selectionTable,
      ) as OnChangeFn<Array<string>>,
    } as ColumnSelectionTableOptions<TData>;
  },
  // if you need to add a default column definition...
  // getDefaultColumnDef: <TData extends RowData>(): Partial<ColumnDef<TData>> => {
  //   return { meta: {} } //use meta instead of directly adding to the columnDef to avoid typescript stuff that's hard to workaround
  // },

  // define the new feature's table instance methods
  // createTable: <TData extends RowData>(table: Table<TData>): void => {},

  // if you need to add row instance APIs...
  // createRow: <TData extends RowData>(row, table): void => {},
  // if you need to add cell instance APIs...
  // createCell: <TData extends RowData>(cell, column, row, table): void => {},
  // if you need to add column instance APIs...
  createColumn: <TData extends RowData>(column: Column<TData>, table: Table<TData>): void => {
    const selectionColumn = column as ColumnSelectionColumn<TData>;
    const selectionTable = table as ColumnSelectionTable<TData>;

    selectionColumn.getSelectionMode = () => {
      const columnMeta = selectionColumn.columnDef.meta as ColumnSelectionColumnMeta | undefined;
      return columnMeta?.selectable === false ? undefined : selectionTable.options.columnSelection;
    };
    selectionColumn.isSelected = () => {
      const mode = selectionColumn.getSelectionMode();
      if (!mode) return false;
      const selectionState = selectionTable.getState() as ColumnSelectionTableState;
      if (mode === "multiple") {
        const columnId = selectionColumn.id;
        return selectionState.columnsSelected.includes(columnId);
      }
      const columnId = selectionColumn.id;
      return selectionState.columnSelected === columnId;
    };
    selectionColumn.toggleSelection = () => {
      const colId = selectionColumn.id;
      const mode = selectionColumn.getSelectionMode();
      if (!mode) return;
      const selectionState = selectionTable.getState() as ColumnSelectionTableState;
      if (mode === "single") {
        const isSelected = selectionState.columnSelected === colId;
        selectionTable.options.onColumnSelectionChange?.(isSelected ? "" : colId);
      } else {
        const current = selectionState.columnsSelected;
        if (current.includes(colId)) {
          selectionTable.options.onColumnsSelectionChange?.(current.filter((id: string) => id !== colId));
        } else {
          selectionTable.options.onColumnsSelectionChange?.([...current, colId]);
        }
      }
    };
  },
  // if you need to add header instance APIs...
  // createHeader: <TData extends RowData>(header, table): void => {},
};
//end of custom feature code
