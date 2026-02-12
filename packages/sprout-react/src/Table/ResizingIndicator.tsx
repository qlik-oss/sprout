// eslint-disable-next-line @typescript-eslint/no-redeclare
import type { MouseEvent, TouchEvent } from "react";

import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";

import className from "./Table.module.css";

export type ResizingIndicatorProps = {
  onResize: (
    event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) => void;
  resetSize: () => void;
};

export function ResizingIndicator({
  onResize,
  resetSize,
}: ResizingIndicatorProps) {
  const t = useI18n();

  return (
    <button
      type="button"
      className={classNames(
        "absolute",
        "top-0",
        "cursor-col-resize",
        "z-floating",
        className.resizing_indicator,
      )}
      aria-label={t("table.header.resize-column.aria-label")}
      onDoubleClick={resetSize}
      onMouseDown={onResize}
      onTouchStart={onResize}
      tabIndex={-1}
      data-testid="table.header.resize-column"
    />
  );
}
