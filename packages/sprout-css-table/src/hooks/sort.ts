import { useControl } from "@qlik/sprout-css-hooks";
import type { SortingState } from "@tanstack/react-table";

export const useSortState = ({
  defaultSorting,
  sorting,
  onSortingChange,
}: {
  defaultSorting?: SortingState;
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
}) => {
  return useControl<SortingState>(
    {
      defaultSorting,
      sorting,
      onSortingChange,
    },
    {
      valueKey: "sorting",
      onChangeKey: "onSortingChange",
      defaultValueKey: "defaultSorting",
      selector: (arg) => arg,
    },
  );
};
