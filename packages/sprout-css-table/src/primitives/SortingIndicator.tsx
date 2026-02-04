import AscendingIcon from "@qlik/sprout-icons/react/Ascending";
import DescendingIcon from "@qlik/sprout-icons/react/Descending";
import type { CSSProperties } from "react";

export type SortingIndicatorProps = {
  direction?: "asc" | "desc" | false;
  className?: string;
  style?: CSSProperties;
};

export function SortingIndicator({ direction, className, style }: SortingIndicatorProps) {
  if (direction === "asc") {
    return <AscendingIcon className={className} style={style} />;
  }
  if (direction === "desc") {
    return <DescendingIcon className={className} style={style} />;
  }
  return null;
}
