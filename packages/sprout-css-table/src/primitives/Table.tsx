import { forwardRef, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import { TableContext, type TableContextType } from "./context";

import { classNames } from "@qlik/sprout-css-react";
import type { HTMLDivProps } from "../utils/htmlTypes";
import styles from "./Table.module.css";

export type TableProps = HTMLDivProps & {
  variant: "list" | "data";
  width?: number;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
  contentHeight?: number;
  overflowY?: TableContextType["overflowY"];
  className?: string;
  style?: CSSProperties;
};

export const Table = forwardRef<HTMLDivElement, TableProps>(
  (
    {
      variant,
      children,
      width,
      height,
      minHeight,
      maxHeight,
      contentHeight,
      overflowY,
      className: classNameProp,
      style,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasHorizontalScroll, setHasHorizontalScroll] = useState(false);

    const gridStyle = {
      height: height ? `${height}px` : undefined,
      minHeight: minHeight ? `${minHeight}px` : undefined,
      maxHeight: maxHeight ? `${maxHeight}px` : undefined,
      minWidth: "100%",
      width: width ? `${width}px` : undefined,
    };

    const context = useMemo(() => {
      return {
        overflowY: overflowY ?? "default",
        containerHeight: height,
        containerMaxHeight: maxHeight,
        containerMinHeight: minHeight,
        contentHeight,
        hasHorizontalScroll,
      };
    }, [overflowY, height, contentHeight, hasHorizontalScroll, maxHeight, minHeight]);

    /**
     * When horizontal scrolling is present, the scrollbar overlaps the last row. In that case, we need to add padding.
     */
    useEffect(() => {
      const containerElement = containerRef.current;
      if (!containerElement) return undefined;

      let timeout: NodeJS.Timeout | null = null;

      const checkScroll = () => {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          const hasScroll = containerElement.scrollWidth > containerElement.clientWidth;
          if (hasScroll !== hasHorizontalScroll) {
            setHasHorizontalScroll(hasScroll);
          }
        }, 100); // Adjust the timeout as needed. As of now, 100ms is a good balance between performance and responsiveness.
      };

      checkScroll();

      window.addEventListener("resize", checkScroll);

      const resizeObserver = new window.ResizeObserver(checkScroll);
      resizeObserver.observe(containerElement);

      return () => {
        window.removeEventListener("resize", checkScroll);
        resizeObserver.disconnect();
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }, [hasHorizontalScroll]);

    return (
      <TableContext.Provider value={context}>
        <div
          className={classNames(
            "overflow-x-auto",
            "overflow-y-hidden",
            "flex-noreset",
            "flex-row",
            "border_box",
            "size-full",
            "flex-nowrap",
          )}
          style={{ blockSize: height ? `${height}px` : undefined }}
          ref={containerRef}
        >
          <div
            role="grid"
            data-variant={variant}
            className={classNames(
              "flex-noreset",
              "flex-nowrap",
              "border_box",
              "flex-col",
              "overflow-x-auto",
              "size-full",
              "radius-subtle",
              "shrink-0",
              classNameProp || "",
              {
                [styles.table]: true,
                pb_l: hasHorizontalScroll,
              },
            )}
            {...props}
            ref={ref}
            style={{ ...gridStyle, ...style }}
          >
            {children}
          </div>
        </div>
      </TableContext.Provider>
    );
  },
);

Table.displayName = "Table.Table";
