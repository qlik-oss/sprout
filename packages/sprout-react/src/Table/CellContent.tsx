import type { ReactNode } from "react";

import { classNames } from "../classNames";

import className from "./Table.module.css";

export type CellContentProps = {
  ellipsis?: boolean;
  lines?: number;
  variant?: "default" | "number";
  children: ReactNode;
};

export function CellContent({
  variant,
  children,
  ellipsis,
  lines,
}: CellContentProps) {
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
        "border-box",
        "overflow-hidden",
        className.cell_content,
        {
          "justify-start": variant !== "number",
          "font-label-s": variant !== "number",
          "justify-end": variant === "number",
        },
      )}
      data-variant={variant}
    >
      {/* visual */}
      <div
        data-layoutid="frame-98"
        className={classNames("h-full", "overflow-hidden", {
          truncate: !!ellipsis,
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
