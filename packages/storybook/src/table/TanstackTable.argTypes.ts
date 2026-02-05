import type { ArgTypes } from "@storybook/react-vite";

export const hideArg = {
  table: {
    disable: true,
  },
};

export const TableArgTypes: ArgTypes = {
  variant: {
    control: "select",
    options: ["data", "list"],
    description: "The variant of the table. 'data' is for data tables, 'list' is for list tables.",
    table: {
      type: {
        summary: "data | list",
      },
    },
  },
  rows: {
    control: "object",
    description: "The rows of the table. Can be an array of objects or a function that returns an array.",
    table: {
      type: {
        summary: "ContentType[]",
      },
    },
  },
  columns: {
    control: "object",
    description: "The columns of the table. Can be an array of objects or a function that returns an array.",
    table: {
      type: {
        summary: "ColumnDef<ContentType>[]",
      },
    },
  },
  rowHeight: {
    control: "number",
    description: `The height of each row in pixels.`,
    table: {
      type: {
        summary: "number",
      },
      defaultValue: {
        summary: "32",
      },
    },
  },
  rowActions: {
    control: false,
    description: "Function that returns the row actions for each row. Used to render actions in the row.",
    table: {
      type: {
        summary: "(content: ContentType) => ReactNode",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  onRowClick: {
    control: false,
    description: "Callback function that is called when a row is clicked. Receives the event and the row data.",
    table: {
      type: {
        summary: "(event: MouseEvent<HTMLDivElement>, row: ContentType) => void",
      },
    },
  },
  loading: {
    control: "boolean",
    description: "Show a loading indicator while the table is loading data.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
};

export const SortArgTypes: ArgTypes = {
  disableColumnSorting: {
    control: "boolean",
    description: "Disable column sorting.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  defaultSorting: {
    control: "object",
    description: "The initial sorting state of the table. An array of objects with 'id' and 'desc' properties.",
    table: {
      type: {
        summary: "SortingState",
      },
    },
  },
  sorting: {
    control: "object",
    description: "The current sorting state of the table. An array of objects with 'id' and 'desc' properties.",
    table: {
      type: {
        summary: "SortingState",
      },
    },
  },
  onSortingChange: {
    control: false,
    description:
      "Callback function that is called when the sorting state changes. Receives the new sorting state as an argument.",
    table: {
      type: {
        summary: "(sorting: SortingState) => void",
      },
    },
  },
  sortingMode: {
    control: "select",
    options: ["client", "server", undefined],
    description: `Defines where the sorting is applied. If 'client', sorting is done on client side. If 'server', sorting is expected to be handled on server side. If undefined, defaults to 'client'.`,
    table: {
      type: {
        summary: "client | server",
      },
      defaultValue: {
        summary: "client",
      },
    },
  },
};

export const RowSelectionArgTypes: ArgTypes = {
  rowSelectionMode: {
    control: "select",
    options: ["single", "multiple"],
    description: `Enable row selection. If set to 'single', only one row can be selected at a time. If 'multiple' it will let the user select multiple rows using checkboxes but also select all the rows.`,
    table: {
      type: {
        summary: "single | multiple",
      },
    },
  },
  rowSelection: {
    control: false,
    description: "The row selection state. Object with row IDs as keys and boolean values.",
    table: {
      type: {
        summary: "Record<string, boolean>",
      },
    },
  },
  onRowSelectionChange: {
    control: false,
    description: "Callback function that is called when the row selection state changes.",
    table: {
      type: {
        summary: "(rowSelectionState: Record<string, boolean>) => void",
      },
    },
  },
  rowSelectAll: {
    control: "boolean",
    description:
      "Add a checkbox in the selection column header to select all rows. Works only if rowSelection is set to 'multiple'. Defaults to true.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  isRowSelectable: {
    control: false,
    description:
      "Function that receives a row and returns a boolean indicating if the row is selectable. Use this to disable selection for specific rows.",
    table: {
      type: {
        summary: "(row: ContentType) => boolean",
      },
    },
  },
};

export const RowTogglingArgTypes: ArgTypes = {
  defaultToggledRowId: {
    control: "text",
    description: "The id of the initial toggled row. If set, the row will highlighted.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  toggledRowId: {
    control: "text",
    description: "The controlled id of the toggled row. If set, the row will be highlighted.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  onToggledRowChange: {
    control: false,
    description:
      "function that is called when the toggled row state changes. It allows users to perform specific action when the row is toggled or untoggled.",
    table: {
      type: {
        summary: "(rowId: string) => void",
      },
    },
  },
};

export const DataTableRownumberArgTypes: ArgTypes = {
  displayRowNumberColumn: {
    control: "boolean",
    description: "Show row numbers in the first column (only for 'data' variant)",
  },
};

export const HideArgTypes: ArgTypes = {
  disableColumnHiding: {
    control: "boolean",
    description: "Disable column hiding.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
};

export const ColumnSelectionArgTypes: ArgTypes = {
  columnSelectionMode: {
    control: "select",
    options: [undefined, "single", "multiple"],
    description: `Enable column selection. If set to 'single', only one column can be selected at a time. If 'multiple' it will let the user select multiple columns.`,
    table: {
      type: {
        summary: "single | multiple",
      },
    },
  },
  columnSelection: {
    control: "text",
    description: "The column selection state. The id of the selected column.",
  },

  defaultColumnSelection: {
    control: "text",
    description: "The default column selection state. The id of the selected column.",
  },
  onColumnSelectionChange: {
    control: false,
    description: "Callback function that is called when the column selection state changes.",
    table: {
      type: {
        summary: "(columnSelection: string) => void",
      },
    },
  },
  columnsSelection: {
    control: "object",
    description: "The columns selection state. An array of column ids.",
  },
  defaultColumnsSelection: {
    control: "object",
    description: "The default columns selection state. An array of column ids.",
  },
  onColumnsSelectionChange: {
    control: false,
    description: "Callback function that is called when the columns selection state changes.",
    table: {
      type: {
        summary: "(columnSelection: string[]) => void",
      },
    },
  },
};

export const ColumnSizingArgTypes: ArgTypes = {
  columnSizing: {
    control: "object",
    description: "The column sizing state. An object with column ids as keys and sizes in pixels as values.",
    table: {
      type: {
        summary: "ColumnSizingState",
      },
    },
  },
  onColumnSizingChange: {
    control: false,
    description: "Callback function that is called when the column sizing state changes.",
    table: {
      type: {
        summary: "(columnSizing: ColumnSizingState) => void",
      },
    },
  },
  disableColumnResize: {
    control: "boolean",
    description: "Disable column resizing on all columns.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
};

export const PaginationArgTypes: ArgTypes = {
  nextPage: {
    control: false,
    description:
      "Function to load the next page of data. If provided, the table will show a 'Load more' button or use infinite scroll based on device type. If the function returns a promise it will be used to activate the loading state of the button in touch mode.",
    table: {
      type: {
        summary: "() => void | Promise<void>",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
};
