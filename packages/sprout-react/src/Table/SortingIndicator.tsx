import AscendingIcon from "@qlik/sprout-icons/react/Ascending";
import DescendingIcon from "@qlik/sprout-icons/react/Descending";

export type SortingIndicatorProps = {
  direction?: "asc" | "desc" | false;
};

export function SortingIndicator({ direction }: SortingIndicatorProps) {
  if (direction === "asc") {
    return <AscendingIcon />;
  }
  if (direction === "desc") {
    return <DescendingIcon />;
  }
  return null;
}
