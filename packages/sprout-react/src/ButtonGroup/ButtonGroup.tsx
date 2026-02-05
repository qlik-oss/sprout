import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./ButtonGroup.module.css";

export type ButtonGroupProps = HTMLDivProps & {
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
};

export function ButtonGroup({
  orientation,
  fullWidth,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      {...props}
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        styles.button_group,
        {
          "flex-col": orientation === "vertical",
          "w-full": !!fullWidth,
          "w-fit": !fullWidth,
        },
      )}
      role="group"
      data-variant={orientation || "horizontal"}
    >
      {children}
    </div>
  );
}
