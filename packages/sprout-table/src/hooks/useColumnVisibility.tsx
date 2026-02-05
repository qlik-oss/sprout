/* eslint-disable react-hooks/refs */
/**
 * This file contains all the common utility to build a table using TanStack
 * We should make a package from it in the future
 */
import { classNames } from "@qlik/sprout-react";
import { useEffect, useMemo, useState, type RefObject } from "react";
import { TableHTML, type TableHTMLProps } from "../primitives";
import { useControlled } from "./useControl";

type TableAction = {
  action: "manage-columns";
  clientX: number;
  clientY: number;
};
type CustomEventMap = {
  "sprout-table-action": CustomEvent<TableAction>;
};

type ColumnVisibilityControl = {
  tColumns: TableHTMLProps["ColumnVisibilityMenu"]["columns"];
  columnVisibility?: Record<string, boolean>;
  onColumnVisibilityChange?: (columnVisibility: Record<string, boolean>) => void;
  defaultColumnVisibility?: Record<string, boolean>;
};

const MENU_MAX_WIDTH = parseInt(
  (getComputedStyle(document.documentElement).getPropertyValue("--sprout-container-sizing-s") || "400px")
    .trim()
    .replace("px", ""),
  10,
);

export const useColumnVisibilityState = ({
  tColumns,
  columnVisibility,
  onColumnVisibilityChange,
  defaultColumnVisibility,
}: ColumnVisibilityControl) => {
  const columnVisibilityDefault = useMemo(
    () =>
      tColumns.reduce<Record<string, boolean>>((acc, tColumn) => {
        acc[tColumn.id || "id"] = true; // id is enforced by useTanStackColumns
        return acc;
      }, {}),
    [tColumns],
  );
  const columnVisibilityControl = useControlled<Partial<ColumnVisibilityControl>>(
    {
      columnVisibility,
      onColumnVisibilityChange,
      defaultColumnVisibility: defaultColumnVisibility || columnVisibilityDefault,
    },
    {
      valueKey: "columnVisibility",
      onChangeKey: "onColumnVisibilityChange",
      defaultValueKey: "defaultColumnVisibility",
      defaultValue: undefined,
      selector: (arg) => arg,
    },
  );
  return columnVisibilityControl;
};

export type UseColumnVisibilityViewProps = {
  headerRef?: RefObject<HTMLDivElement | null>;
  onColumnVisibilityChange?: TableHTMLProps["ColumnVisibilityMenu"]["onColumnVisibilityChange"];
  columns: TableHTMLProps["ColumnVisibilityMenu"]["columns"];
};

export function useColumnVisibilityView({
  headerRef,
  columns,
  onColumnVisibilityChange,
}: UseColumnVisibilityViewProps) {
  const [showManageColumns, setShowManageColumns] = useState(false);
  const [anchorPos, setAnchorPos] = useState({ top: 0, left: 0 });
  const onSproutTableAction = (e: CustomEvent<TableAction>) => {
    setAnchorPos({ top: e.detail.clientY, left: e.detail.clientX });
    setShowManageColumns(true);
  };

  useEffect(() => {
    const tableElem = headerRef?.current?.parentElement as
      | (HTMLDivElement & {
          addEventListener: <K extends keyof CustomEventMap>(
            type: K,
            listener: (this: Document, ev: CustomEventMap[K]) => void,
          ) => void;
          removeEventListener: <K extends keyof CustomEventMap>(
            type: K,
            listener: (this: Document, ev: CustomEventMap[K]) => void,
          ) => void;
        })
      | null;
    if (tableElem) {
      tableElem.addEventListener("sprout-table-action", onSproutTableAction);
    }
    return () => {
      if (tableElem) {
        tableElem.removeEventListener("sprout-table-action", onSproutTableAction);
      }
    };
  }, [headerRef]);

  let offsetCross = anchorPos.left;
  if (headerRef && headerRef.current) {
    const headerRect = headerRef.current.getBoundingClientRect();
    offsetCross -= headerRect.left;
  }
  const maxOffset = window.innerWidth > MENU_MAX_WIDTH ? window.innerWidth - MENU_MAX_WIDTH : 0;
  if (offsetCross > maxOffset) {
    offsetCross = maxOffset;
  }

  return showManageColumns ? (
    <TableHTML.ColumnVisibilityMenu
      key="column-visibility-menu"
      open={showManageColumns}
      anchorEl={headerRef?.current || undefined}
      placementUpdate
      offsetCross={offsetCross}
      onOpenChange={(opened) => {
        setShowManageColumns(opened);
      }}
      onColumnVisibilityChange={onColumnVisibilityChange}
      columns={columns}
    />
  ) : (
    <span key="column-visibility-menu" className={classNames("sr-only")} />
  );
}
