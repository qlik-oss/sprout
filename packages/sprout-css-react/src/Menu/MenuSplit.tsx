import type { ReactNode } from "react";

import { classNames } from "../classNames";

export type MenuSplitProps = {
  children: ReactNode;
};

export function MenuSplit({ children }: MenuSplitProps) {
  return (
    <div className={classNames("flex", "flex-row", "gap-0")}>{children}</div>
  );
}
