import type { ReactNode } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./HelperText.module.css";

export type HelperTextProps = Omit<HTMLDivProps, "children"> & {
  isError?: boolean;
  variant?: "default" | "quiet";
  helpText: ReactNode;
  disabled?: boolean;
};

export function HelperText({
  disabled,
  isError,
  variant = "default",
  helpText,
  ...props
}: HelperTextProps) {
  return (
    <div
      {...props}
      className={classNames(
        "font-label-xs",
        "text-wrap",
        "break-words",
        styles.helper,
        {
          "text-default": variant === "default" && !isError,
          "text-danger": !!isError,
          "text-weak": variant === "quiet" && !isError && !disabled,
          "text-disabled": !!disabled,
        },
      )}
    >
      {helpText}
    </div>
  );
}
