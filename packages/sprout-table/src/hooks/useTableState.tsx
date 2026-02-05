import type { ColumnDef as TanStackColumnDef } from "@tanstack/react-table";
import { useRef } from "react";
import type { TableProps } from "../props";
import { useSortState } from "./sort";
import { useColumnSizingState } from "./useColumnSizing";
import { useColumnVisibilityState } from "./useColumnVisibility";

export function useTableState<ContentType>({
  tColumns,
  columnVisibility,
  onColumnVisibilityChange,
  defaultColumnVisibility,
  columnSizing,
  onColumnSizingChange,
  defaultSorting,
  sorting,
  onSortingChange,
}: Pick<
  TableProps<ContentType>,
  | "columnVisibility"
  | "onColumnVisibilityChange"
  | "defaultColumnVisibility"
  | "columnSizing"
  | "onColumnSizingChange"
  | "defaultSorting"
  | "sorting"
  | "onSortingChange"
> & {
  tColumns: Array<TanStackColumnDef<ContentType>>;
}) {
  // This hook can be used to manage table state, such as sorting, filtering, column sizing and pagination.
  // It can be extended based on specific requirements.
  const columnVisibilityControl = useColumnVisibilityState({
    tColumns,
    columnVisibility,
    onColumnVisibilityChange,
    defaultColumnVisibility,
  });
  const columnSizingControl = useColumnSizingState({
    columnSizing,
    onColumnSizingChange,
  });
  const sortState = useSortState({
    defaultSorting,
    sorting,
    onSortingChange,
  });
  const headerRef = useRef<HTMLDivElement>(null);

  return {
    columnVisibilityControl,
    columnSizingControl,
    sortState,
    headerRef,
  };
}
