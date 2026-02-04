import type { ReactNode } from "react";

import { classNames } from "../classNames";

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className={classNames("font-label-s", "text-weak")}>{children}</div>
  );
}
