import { classNames } from "@qlik/sprout-react";
import { forwardRef, type CSSProperties } from "react";

import type { HTMLDivProps } from "../utils/htmlTypes";

import styles from "./Table.module.css";

export type CellActionWrapperProps = HTMLDivProps & {
  className?: string;
  style?: CSSProperties;
};

export const CellActionWrapper = forwardRef<HTMLDivElement, CellActionWrapperProps>(
  ({ children, className: classNameProp, style, ...props }, ref) => {
    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "pr-m",
          "gap-s",
          "items-center",
          "justify-start",
          classNameProp || "",
          {
            [styles.cell_action_wrapper]: true,
          },
        )}
        data-layoutid="cell-action-wrapper"
        ref={ref}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CellActionWrapper.displayName = "Table.CellActionWrapper";
