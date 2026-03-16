import type { ReactNode } from "react";

import { classNames } from "../classNames";

export type MenuSplitProps = {
  children: ReactNode;
};

/**
 * The Menu.Split component renders two sibling elements (a primary button and an icon button) side by side without a gap. It supports the following custom props:
 * @param children - the two button elements to render side by side.
 */
export function MenuSplit({ children }: MenuSplitProps) {
  return (
    <div className={classNames("flex", "flex-row", "gap-0")}>{children}</div>
  );
}
