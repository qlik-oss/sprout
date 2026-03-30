import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./ButtonGroup.module.css";

export type ButtonGroupProps = HTMLDivProps & {
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
};

/**
 * The ButtonGroup component accepts all the native div props and also supports the following custom props:
 * @param orientation - the layout direction of the buttons, can be horizontal or vertical. Defaults to horizontal.
 * @param fullWidth - whether the group stretches to fill its container width.
 * @param children - the Button elements to render inside the group.
 */
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
        }
      )}
      role="group"
      data-variant={orientation || "horizontal"}
    >
      {children}
    </div>
  );
}
