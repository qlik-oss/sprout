export const ERRORS = {
  MISSING_COLUMN_ID: () =>
    `ColumnDef need an id. You must set a valid id if you use the valueGetter function for column.`,
  MISSING_COLUMN_VALUE_GETTER: (columnId: string) =>
    `ColumnDef ${columnId} need a way to extract the value from the row.`,
};
