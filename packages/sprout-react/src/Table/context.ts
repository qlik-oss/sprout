import { createContext } from "react";

export type TableContextType = {
  overflowY: "default" | "virtualized";
  scrollBarWidth: number;
  setScrollBarWidth: (width: number) => void;
  containerHeight?: number;
  contentHeight?: number;
};
export const TableContext = createContext<TableContextType>({
  overflowY: "default",
  scrollBarWidth: 0,
  setScrollBarWidth: () => {},
});
