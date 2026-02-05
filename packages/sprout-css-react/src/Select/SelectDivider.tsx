import { useContext } from "react";

import { Menu } from "../Menu";
import { SelectContext } from "./SelectContext";

export function Divider() {
  const context = useContext(SelectContext);
  if (context.queryFilter) {
    return null;
  }
  return <Menu.Divider />;
}

Divider.displayName = "Divider";
