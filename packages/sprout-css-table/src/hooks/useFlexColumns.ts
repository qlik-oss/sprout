import { useCallback, useEffect, useMemo, useState, type RefObject } from "react";
import { TableHTML } from "../primitives";
import { COL_DEFAULT_WIDTH } from "../primitives/constant";
import type { ColumnDef } from "../props";

export function useFlexColumns<ContentType>(
  containerRef: RefObject<HTMLDivElement | null>,
  initialColumnDefs: Array<ColumnDef<ContentType>>,
  opts: {
    displayRowNumberColumn?: boolean;
    rowSelectionMode?: boolean;
    rowActions?: boolean;
    columnVisibility?: Record<string, boolean | undefined>;
    defaultColumnVisibility?: Record<string, boolean | undefined>;
  } = {},
): Array<ColumnDef<ContentType>> {
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  const calculateAndSetWidths = useCallback(() => {
    const containerWidth = containerRef.current?.offsetWidth;
    if (!containerWidth) return;

    let fixedWidthsSum = TableHTML.CONSTANT.TABLE_BORDERS_WIDTH;
    if (opts.displayRowNumberColumn) {
      fixedWidthsSum += TableHTML.CONSTANT.COL_WIDTH_ROW_NUMBER;
    }
    if (opts.rowSelectionMode) {
      fixedWidthsSum += TableHTML.CONSTANT.COL_WIDTH_SELECTION;
    }
    if (opts.rowActions) {
      fixedWidthsSum += TableHTML.CONSTANT.COL_WIDTH_ACTIONS;
    }
    let totalFlexRatio = 0;
    const flexColumns: Array<ColumnDef<ContentType>> = [];

    initialColumnDefs.forEach((column) => {
      const colId = (column.id || column.field || "") as string;
      if (!column.flex) {
        const colWidth = column.width || column.minWidth || COL_DEFAULT_WIDTH;
        fixedWidthsSum += colWidth;
      } else if (column.flex) {
        // if the column is hidden, do not consider it for flex calculation
        if (opts.columnVisibility) {
          if (opts.columnVisibility[colId] === false) {
            return;
          }
        } else if (opts.defaultColumnVisibility) {
          if (opts.defaultColumnVisibility[colId] === false) {
            return;
          }
        }
        totalFlexRatio += column.flex;
        flexColumns.push(column);
      }
    });

    const remainingWidth = containerWidth - fixedWidthsSum;
    const newWidths: Record<string, number> = {};

    if (totalFlexRatio > 0 && remainingWidth > 0) {
      flexColumns.forEach((column) => {
        if (!column.flex) return;
        newWidths[column.headerName] = Math.floor(remainingWidth / totalFlexRatio) * column.flex;
      });
    }

    setColumnWidths((prevWidths) => {
      // Only update if there are significant changes to avoid unnecessary re-renders
      const hasChanged = Object.entries(newWidths).some(([key, value]) => {
        return Math.abs((prevWidths[key] || 0) - value) > 1;
      });
      return hasChanged ? newWidths : prevWidths;
    });
  }, [containerRef, initialColumnDefs, opts]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculateAndSetWidths();
  }, [calculateAndSetWidths]);
  const memoizedColumnDefs = useMemo(() => {
    return initialColumnDefs.map((column) => {
      if (columnWidths[column.headerName]) {
        return {
          ...column,
          width: columnWidths[column.headerName],
        };
      }
      return column;
    });
  }, [initialColumnDefs, columnWidths]);

  return memoizedColumnDefs;
}
