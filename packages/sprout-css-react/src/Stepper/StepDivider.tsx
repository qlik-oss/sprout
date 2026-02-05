import type { ReactNode } from "react";

import { classNames } from "../classNames";
import { StepLine } from "./StepLine";

export function StepDivider({ children }: { children?: ReactNode }) {
  return (
    <div
      className={classNames(
        "flex",
        "border-box",
        "grow-1",
        "flex-row",
        "w-full",
      )}
    >
      <StepLine />
      {children ? <div className={classNames("w-full")}>{children}</div> : null}
    </div>
  );
}
