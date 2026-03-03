import {
  SortAscendingIcon,
  SortDescendingIcon,
} from "@qlik/sprout-icons/react";

export type SortingIndicatorProps = {
  direction?: "asc" | "desc" | false;
};

export function SortingIndicator({ direction }: SortingIndicatorProps) {
  if (direction === "asc") {
    return <SortAscendingIcon />;
  }
  if (direction === "desc") {
    return <SortDescendingIcon />;
  }
  return null;
}
