import { classNames } from "@qlik/sprout-css-react";
import { type CSSProperties, forwardRef } from "react";

import type { HTMLDivProps } from "../utils/htmlTypes";
import styles from "./Table.module.css";

export type TableRowProps = HTMLDivProps & {
  height?: CSSProperties["height"];
  /**
   * Whether the row is interactive, e.g. for hover effects.
   */
  interactive?: boolean;
  /**
   * Whether the row is selected or not.
   */
  selected?: boolean;
  /**
   * Whether the row is toggled or not. (usually means that panel is opened with additional information related to the row)
   */
  toggled?: boolean;
  /**
   * Use to position the row in a virtualized table.
   */
  startPosition?: number;
  className?: string;
  style?: CSSProperties;
};

export const TableRow = forwardRef<HTMLDivElement, TableRowProps>(
  (
    { children, height, interactive, selected, toggled, startPosition, className: classNameProp, style, ...props },
    ref,
  ) => {
    let baseStyle: CSSProperties = {
      height,
    };
    if (startPosition !== undefined) {
      baseStyle = {
        height,
        transform: `translateY(${startPosition}px)`,
      };
    }

    return (
      <div
        ref={ref}
        style={{ ...baseStyle, ...style }}
        role="row"
        className={classNames("flex-noreset", "flex-nowrap", "border_box", classNameProp || "", {
          [styles.tr]: true,
          [styles.tr_selected]: !!selected,
          [styles.tr_toggled]: !!toggled,
          [styles.tr_interactive]: !!interactive,
          absolute: startPosition !== undefined,
        })}
        {...props}
      >
        {children}
      </div>
    );
  },
);

TableRow.displayName = "Table.Row";
