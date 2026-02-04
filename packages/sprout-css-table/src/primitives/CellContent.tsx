import type { CSSProperties, ReactNode } from "react";

import { classNames } from "@qlik/sprout-css-react";
import styles from "./Table.module.css";

export type CellContentProps = {
  ellipsis?: boolean;
  lines?: number;
  variant?: "default" | "number";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function CellContent({ variant, children, ellipsis, lines, className: classNameProp, style }: CellContentProps) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "px-m",
        "gap-m",
        "items-center",
        "text-default",
        "justify-start",
        "w-full",
        "border_box",
        "overflow-hidden",
        classNameProp || "",
        {
          [styles.cell_content]: true,
          j_start: variant !== "number",
          font_label_s: variant !== "number",
          j_end: variant === "number",
        },
      )}
      data-variant={variant}
      style={style}
    >
      {/* visual */}
      <div
        data-layoutid="frame-98"
        className={classNames("h-full", "overflow-hidden", {
          ellipsis: !!ellipsis,
        })}
        style={
          lines
            ? {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: lines,
                overflow: "hidden",
              }
            : undefined
        }
      >
        {children}
        {/* secondary label */}
      </div>
    </div>
  );
}

CellContent.displayName = "Table.CellContent";
