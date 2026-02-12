import { useContext, useEffect, useRef, useState } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { TableContext } from "./context";

import className from "./Table.module.css";

export type TableBodyProps = HTMLDivProps;

export function TableBody({ children, ...props }: TableBodyProps) {
  const context = useContext(TableContext);
  const [headerHeight, setHeaderHeight] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bodyRef.current) {
      context.setScrollBarWidth(
        bodyRef.current.offsetWidth - bodyRef.current.clientWidth,
      );

      if (context.overflowY === "virtualized") {
        const rowgroups =
          bodyRef.current.parentElement?.querySelectorAll("[role='rowgroup']");
        const currentIndex = Array.from(rowgroups || []).indexOf(
          bodyRef.current,
        );
        if (currentIndex > 0) {
          const header = rowgroups?.[currentIndex - 1] as HTMLDivElement | null;
          if (header) {
            setHeaderHeight(header.clientHeight);
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.overflowY, bodyRef.current]);

  if (context.overflowY === "virtualized") {
    return (
      <div
        role="rowgroup"
        ref={bodyRef}
        className={classNames(
          "overflow-auto",
          "bg-default",
          "w-full",
          "border-box",
          className.tbody,
        )}
        style={{
          blockSize: context.containerHeight
            ? `${context.containerHeight - headerHeight}px`
            : undefined,
        }}
      >
        <div
          className={classNames("relative", "w-full")}
          {...props}
          style={{
            blockSize: context.contentHeight
              ? `${context.contentHeight}px`
              : undefined,
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
      className={classNames(
        "bg-default",
        "w-full",
        "border-box",
        "overflow-y-auto",
        className.tbody,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

TableBody.displayName = "Table.Body";
