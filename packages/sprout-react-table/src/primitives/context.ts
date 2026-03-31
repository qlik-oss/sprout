import { createContext } from "react";

export type TableContextType = {
  overflowY: "default" | "virtualized";
  containerHeight?: number;
  containerMaxHeight?: number;
  containerMinHeight?: number;
  contentHeight?: number;
  hasHorizontalScroll: boolean;
};
export const TableContext = createContext<TableContextType>({
  overflowY: "default",
  hasHorizontalScroll: false,
});
