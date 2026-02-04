import { SortAscendingIcon, SortDescendingIcon } from "@qlik/sprout-icons/react";
import type { CSSProperties } from "react";

export type SortingIndicatorProps = {
  direction?: "asc" | "desc" | false;
  className?: string;
  style?: CSSProperties;
};

export function SortingIndicator({ direction, className, style }: SortingIndicatorProps) {
  if (direction === "asc") {
    return <SortAscendingIcon className={className} style={style} />;
  }
  if (direction === "desc") {
    return <SortDescendingIcon className={className} style={style} />;
  }
  return null;
}
