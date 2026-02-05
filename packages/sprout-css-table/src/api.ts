import type { ColumnDef } from "./props";

/**
 * This function updates a row based on the column definition and new value.
 * It uses the valueSetter if provided, otherwise it updates the field directly.
 * @param row ContentTType
 * @param colDef ColumnDef<ContentType>
 * @param newValue unknown
 * @returns ContentType
 */
function getUpdatedRow<ContentType>(row: ContentType, colDef: ColumnDef<ContentType>, newValue: unknown): ContentType {
  if (colDef.valueSetter) {
    return colDef.valueSetter(row, newValue);
  }
  if (colDef.field) {
    return { ...row, [colDef.field]: newValue };
  }
  throw new Error(
    `ColumnDef for ${colDef.id} does not have a field or valueSetter defined while it uses field function.`,
  );
}

export const editUtility = {
  getUpdatedRow,
};
