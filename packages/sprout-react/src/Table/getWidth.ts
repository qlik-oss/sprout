import type { CSSProperties } from "react";

export function getWidth(
  width: CSSProperties["width"],
): CSSProperties["width"] {
  if (typeof width === "number") {
    return `${width}px`;
  }
  if (typeof width === "string") {
    return width;
  }
  return "auto";
}
