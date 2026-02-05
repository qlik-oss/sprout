import { useContext, useEffect, useRef, useState, type CSSProperties } from "react";

import { classNames } from "@qlik/sprout-react";
import { TableContext } from "./context";

import type { HTMLDivProps } from "../utils/htmlTypes";
import styles from "./Table.module.css";

export type TableBodyProps = HTMLDivProps & {
  className?: string;
  style?: CSSProperties;
};

export function TableBody({ children, className: classNameProp, style, ...props }: TableBodyProps) {
  const context = useContext(TableContext);
  const [headerHeight, setHeaderHeight] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bodyRef.current) {
      if (context.overflowY === "virtualized") {
        const rowgroups = bodyRef.current.parentElement?.querySelectorAll("[role='rowgroup']");
        const currentIndex = Array.from(rowgroups || []).indexOf(bodyRef.current);
        if (currentIndex > 0) {
          const header = rowgroups?.[currentIndex - 1] as HTMLDivElement | null;
          if (header) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHeaderHeight(header.clientHeight);
          }
        }
      }
    }
  }, [context.overflowY, bodyRef]);

  const scrollHeight = context.hasHorizontalScroll ? "var(--sprout-common-spacing-l)" : "0px";

  if (context.overflowY === "virtualized") {
    const virtualizedStyle: CSSProperties = {
      blockSize: context.containerHeight
        ? `calc(${Math.floor(context.containerHeight - headerHeight)}px - ${scrollHeight})`
        : undefined,
      minBlockSize: context.containerMinHeight
        ? `calc(${Math.floor(context.containerMinHeight - headerHeight)}px - ${scrollHeight})`
        : undefined,
    };
    return (
      <div
        role="rowgroup"
        data-hashscroll={context.hasHorizontalScroll ? "true" : "false"}
        ref={bodyRef}
        className={classNames("bg-default", "w-fit", "border_box", "overflow-x-hidden", classNameProp || "", {
          [styles.tbody]: true,
        })}
        style={{ ...virtualizedStyle, ...style }}
        {...props}
      >
        <div
          className={classNames("relative", "w-full", "border_box")}
          style={{
            blockSize: context.contentHeight ? `${context.contentHeight}px` : undefined,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <div
      role="rowgroup"
      ref={bodyRef}
      className={classNames("bg-default", "w-fit", "border_box", "overflow-y-auto", classNameProp || "", {
        [styles.tbody]: true,
      })}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

TableBody.displayName = "Table.Body";
