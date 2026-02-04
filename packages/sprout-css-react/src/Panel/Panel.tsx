import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";
import { ResizerIcon } from "../icons";

import style from "./Panel.module.css";

const MIN_SIZE = 28;
const STEP = 10;

export type PanelPrimitiveProps = {
  /**
   * define the position where this panel is will have an impact on the border used
   */
  placement: "top" | "left" | "right" | "bottom";
  resizable?: boolean;
  showResizeHandle?: boolean;
  overlay?: boolean | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl";
  onResize?: (size: number) => void;
  minWidth?: CSSProperties["minWidth"];
  maxWidth?: CSSProperties["maxWidth"];
  minHeight?: CSSProperties["minHeight"];
  maxHeight?: CSSProperties["maxHeight"];
  initialSize?: number;
} & HTMLDivProps;

const crossSize = {
  size: 0,
};

export function PanelPrimitive({
  resizable,
  showResizeHandle,
  onResize,
  placement,
  minHeight,
  maxHeight,
  initialSize,
  minWidth,
  maxWidth,
  children,
  ...props
}: PanelPrimitiveProps) {
  const t = useI18n();
  const [size, setSize] = useState<number | undefined>(initialSize);
  const [isResizing, setIsResizing] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [focused, setFocused] = useState(false);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown"
      ) {
        e.preventDefault();
        const mutator =
          e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;

        setSize((prevSize) => {
          const panel = btnRef.current?.parentElement as HTMLElement;
          const container = panel.parentElement as HTMLElement;
          const containerRect = container.getBoundingClientRect();
          const maxSize =
            placement === "left" || placement === "right"
              ? containerRect.width
              : containerRect.height;
          const currentSize =
            placement === "left" || placement === "right"
              ? panel.offsetWidth
              : panel.offsetHeight;
          const newSize = (prevSize || currentSize) + STEP * mutator;
          if (newSize > MIN_SIZE && newSize < maxSize) {
            return newSize;
          }
          if (newSize >= maxSize) {
            return maxSize;
          }
          if (newSize <= MIN_SIZE) {
            return MIN_SIZE;
          }
          return prevSize;
        });
      }
    },
    [placement],
  );

  useEffect(() => {
    if (focused) {
      btnRef.current?.addEventListener("keydown", onKeyDown);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      btnRef.current?.removeEventListener("keydown", onKeyDown);
    };
  }, [focused, onKeyDown]);
  useEffect(() => {
    const onMouseUp = () => {
      setIsResizing(false);
      onResize?.(crossSize.size);
    };
    const onMouseMove = (e: MouseEvent) => {
      const isRTL = document.dir === "rtl";
      if (!btnRef.current) {
        return;
      }

      const buttonRect = btnRef.current.getBoundingClientRect();
      const panel = btnRef.current.parentElement as HTMLElement;
      const panelRect = panel.getBoundingClientRect();
      const container = panel.parentElement as HTMLElement;
      const containerRect = container.getBoundingClientRect();

      let mutator = 1;
      if (
        (isRTL && placement === "left") ||
        (!isRTL && placement === "right") ||
        placement === "bottom"
      ) {
        mutator = -1;
      }

      if (isResizing) {
        if (placement === "left" || placement === "right") {
          // should we increase or decrease the width of the panel ?
          const deltaX = e.clientX - (buttonRect.left + buttonRect.right) / 2;
          const maxContainerWidth = containerRect.width;
          const newWidth = Math.floor(
            deltaX * mutator - panelRect.left + panelRect.right,
          );
          if (newWidth > MIN_SIZE && newWidth < maxContainerWidth) {
            crossSize.size = newWidth;
            setSize(newWidth);
          }
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        } else if (placement === "top" || placement === "bottom") {
          // should we increase or decrease the height of the panel ?
          const deltaY = e.clientY - (buttonRect.top + buttonRect.bottom) / 2;
          const maxContainerHeight = containerRect.height;
          const newHeight = Math.floor(
            deltaY * mutator - panelRect.top + panelRect.bottom,
          );
          if (newHeight > MIN_SIZE && newHeight < maxContainerHeight) {
            crossSize.size = newHeight;
            setSize(newHeight);
          }
        }
      }
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isResizing, onResize, placement]);

  return (
    <div
      role="region"
      className={classNames("flex", "bg-default", style.panel, {
        [style.panel__top]: placement === "top",
        [style.panel__left]: placement === "left",
        [style.panel__right]: placement === "right",
        [style.panel__bottom]: placement === "bottom",
        [style.panel__x]: placement === "top" || placement === "bottom",
        [style.panel__y]: placement === "left" || placement === "right",
      })}
      {...props}
      style={{
        inlineSize:
          placement === "left" || placement === "right" ? size : undefined,
        blockSize:
          placement === "top" || placement === "bottom" ? size : undefined,
        minInlineSize: minWidth,
        minBlockSize: minHeight,
        maxInlineSize: maxWidth,
        maxBlockSize: maxHeight,
      }}
    >
      <div>{children}</div>
      {resizable ? (
        <button
          className={style.resize_btn}
          aria-pressed={isResizing ? "true" : "false"}
          type="button"
          ref={btnRef}
          aria-label={t("panel.action.resize")}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          onMouseDown={() => {
            setIsResizing(true);
          }}
          onMouseUp={() => {
            setIsResizing(false);
            if (size !== undefined) {
              onResize?.(size);
            }
          }}
        >
          {showResizeHandle ? <ResizerIcon /> : null}
        </button>
      ) : null}
    </div>
  );
}

PanelPrimitive.displayName = "Panel.Base";
