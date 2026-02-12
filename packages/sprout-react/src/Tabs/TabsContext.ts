import { createContext } from "react";

import type { UseControlReturns } from "@qlik/sprout-react-hooks";

type TabsInternalContextProps =
  | (UseControlReturns<string> & {
      size?: "s" | "m";
      height?: "100%";
    })
  | null;

export const TabsInternalContext =
  createContext<TabsInternalContextProps>(null);
