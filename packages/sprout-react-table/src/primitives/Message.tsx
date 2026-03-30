import { type CSSProperties, useLayoutEffect, useRef } from "react";

import {
  Message as BaseMessage,
  classNames,
  useSproutI18n,
} from "@qlik/sprout-react";

import type { HTMLDivProps } from "../utils/htmlTypes";

export type MessageProps = HTMLDivProps & {
  className?: string;
  style?: CSSProperties;
};

export function Message({
  children,
  className: classNameProp,
  style,
  ...props
}: MessageProps) {
  const t = useSproutI18n();
  const rowRef = useRef<HTMLDivElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const row = rowRef.current;
    const cell = cellRef.current;
    const grid = row?.parentElement;
    const scroller = grid?.parentElement as HTMLDivElement | null;
    if (!scroller || !cell) {
      return undefined;
    }

    let animationFrame: number | undefined;
    let lastHorizontalCenter: number | undefined;

    const applyHorizontalCenter = () => {
      const nextHorizontalCenter = Math.round(
        scroller.scrollLeft + scroller.clientWidth / 2
      );
      if (nextHorizontalCenter === lastHorizontalCenter) {
        return;
      }

      lastHorizontalCenter = nextHorizontalCenter;
      cell.style.setProperty("inset-inline-start", `${nextHorizontalCenter}px`);
    };

    const syncHorizontalCenter = () => {
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        applyHorizontalCenter();
      });
    };

    applyHorizontalCenter();

    scroller.addEventListener("scroll", syncHorizontalCenter, {
      passive: true,
    });
    window.addEventListener("resize", syncHorizontalCenter);

    const resizeObserver = new window.ResizeObserver(syncHorizontalCenter);
    resizeObserver.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", syncHorizontalCenter);
      window.removeEventListener("resize", syncHorizontalCenter);
      resizeObserver.disconnect();

      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      role="row"
      ref={rowRef}
      className={classNames(
        "flex",
        "justify-start",
        "items-center",
        "relative",
        "size-full",
        "bg-default",
        "grow-1",
        classNameProp || ""
      )}
      style={style}
      {...props}
    >
      <div
        role="cell"
        ref={cellRef}
        aria-live="polite"
        style={{
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children || (
          <BaseMessage title={t("table.norows.message.default-title")} />
        )}
      </div>
    </div>
  );
}

Message.displayName = "Table.Message";
