import type { ReactNode } from "react";

import { classNames } from "../classNames";

import style from "./Popover.module.css";

export type PopoverHeaderProps =
  | { headerDescription: ReactNode; headerTitle: ReactNode }
  | { headerDescription?: never; headerTitle?: ReactNode };

export function PopoverHeader({
  headerDescription,
  headerTitle,
}: PopoverHeaderProps) {
  return (
    <div className={classNames("flex", "flex-col", "gap-s", style["header"])}>
      <div className={classNames("flex", "gap-m")}>
        {typeof headerTitle === "string" ? (
          <h4 className={classNames("font-label-s-emphasized")}>
            {headerTitle}
          </h4>
        ) : (
          headerTitle
        )}
      </div>

      {headerDescription && typeof headerDescription === "string" ? (
        <span className={classNames("font-label-s")}>{headerDescription}</span>
      ) : (
        headerDescription
      )}
    </div>
  );
}
