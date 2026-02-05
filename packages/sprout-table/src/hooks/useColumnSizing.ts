import type { ColumnSizingState } from "../props";
import { useControlled } from "./useControl";

type ColumnSizingControl = {
  columnSizing?: ColumnSizingState;
  onColumnSizingChange?: (columnSizing: ColumnSizingState) => void;
};

export const useColumnSizingState = ({ columnSizing, onColumnSizingChange }: ColumnSizingControl) => {
  const columnSizingControl = useControlled<ColumnSizingControl>(
    {
      columnSizing,
      onColumnSizingChange,
    },
    {
      valueKey: "columnSizing",
      onChangeKey: "onColumnSizingChange",
      defaultValueKey: "columnSizing",
      defaultValue: {},
      selector: (arg) => arg,
    },
  );

  return columnSizingControl;
};
