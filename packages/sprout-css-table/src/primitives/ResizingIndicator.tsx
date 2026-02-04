/* eslint-disable @typescript-eslint/no-redeclare */
import type { CSSProperties, MouseEvent, TouchEvent } from "react";

import { classNames, useSproutI18n } from "@qlik/sprout-css-react";

import styles from "./Table.module.css";

export type ResizingIndicatorProps = {
  onResize: (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void;
  resetSize: () => void;
  className?: string;
  style?: CSSProperties;
};

export function ResizingIndicator({ onResize, resetSize, className: classNameProp, style }: ResizingIndicatorProps) {
  const t = useSproutI18n();

  return (
    <button
      type="button"
      className={classNames(
        "absolute",
        "top-0",
        "border_box",
        "cursor-col-resize",
        "z-floating",
        "h-full",
        "p-0",
        "m-0",
        "border-none",
        "bg-transparent",
        classNameProp || "",
        {
          [styles.resizing_indicator]: true,
        },
      )}
      aria-label={t("table.header.resize-column.aria-label")}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        resetSize();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        onResize(e);
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        onResize(e);
      }}
      style={style}
      tabIndex={-1}
      data-testid="table.header.resize-column"
    />
  );
}
