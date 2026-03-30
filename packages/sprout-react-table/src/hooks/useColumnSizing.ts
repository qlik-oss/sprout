import { useCallback, useEffect, useRef, useState } from "react";

import type { OnChangeFn } from "@tanstack/react-table";

import type { ColumnSizingState } from "../props";

type ColumnSizingControl = {
  columnSizing?: ColumnSizingState;
  onColumnSizingChange?: (columnSizing: ColumnSizingState) => void;
};

export const useColumnSizingState = ({
  columnSizing,
  onColumnSizingChange,
}: ColumnSizingControl) => {
  // Keep visual sizing fully live while dragging, but only notify consumers once on pointer release.
  const latestSizingRef = useRef<ColumnSizingState>(columnSizing || {});
  const hasPendingPointerFlushRef = useRef(false);
  const [internalState, setInternalState] = useState<ColumnSizingState>(
    columnSizing || {}
  );

  // Sync external prop changes to internal state
  useEffect(() => {
    if (columnSizing !== undefined) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInternalState(columnSizing);
      latestSizingRef.current = columnSizing;
    }
  }, [columnSizing]);

  const flushLatestSizing = useCallback(() => {
    if (!hasPendingPointerFlushRef.current) {
      return;
    }

    hasPendingPointerFlushRef.current = false;
    onColumnSizingChange?.(latestSizingRef.current);
  }, [onColumnSizingChange]);

  const schedulePointerFlush = useCallback(() => {
    if (typeof window === "undefined" || hasPendingPointerFlushRef.current) {
      return;
    }

    hasPendingPointerFlushRef.current = true;
    window.addEventListener("mouseup", flushLatestSizing, { once: true });
    window.addEventListener("touchend", flushLatestSizing, { once: true });
  }, [flushLatestSizing]);

  useEffect(() => {
    return () => {
      if (typeof window === "undefined") {
        return;
      }

      window.removeEventListener("mouseup", flushLatestSizing);
      window.removeEventListener("touchend", flushLatestSizing);
    };
  }, [flushLatestSizing]);

  const onInternalColumnSizingChange = useCallback<
    OnChangeFn<ColumnSizingState>
  >(
    (
      updater:
        | ColumnSizingState
        | ((prev: ColumnSizingState) => ColumnSizingState)
    ) => {
      setInternalState((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater;
        latestSizingRef.current = next;
        schedulePointerFlush();
        return next;
      });
    },
    [schedulePointerFlush]
  );

  return {
    columnSizing: internalState,
    onColumnSizingChange: onInternalColumnSizingChange,
  };
};
