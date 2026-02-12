/* eslint-disable react-hooks/exhaustive-deps */
import { type ReactNode, useEffect, useRef, useState } from "react";

import { useControl } from "@qlik/sprout-react-hooks";

import {
  type FloatingPrimitiveProps,
  FloatingTreePrimitive,
  useFloatingContext,
} from "../FloatingPrimitive";
import { MenuRenderer, type MenuRendererProps } from "./MenuRenderer";

import style from "./Menu.module.css";

export type MenuContextualProps = {
  wrapperClassName?: string;
  menu?: ReactNode | MenuRendererProps["menu"];
  children?: ReactNode;
  onOpenChange?: (open: boolean, event?: MouseEvent) => void;
} & Omit<
  FloatingPrimitiveProps,
  "placement" | "content" | "initialOpen" | "onOpenChange"
>;

export function MenuContextual({
  closeOnRightClickOutside = true,
  onClick,
  onOpenChange,
  wrapperClassName,
  open,
  anchorPosition,
  menu,
  children,
  ...props
}: MenuContextualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [event, setEvent] = useState<MouseEvent | null>(null);
  const controlled = useControl<boolean>(
    {
      open,
      onOpenChange,
      initialOpen: false,
    },
    {
      defaultValueKey: "initialOpen",
      valueKey: "open",
      onChangeKey: "onOpenChange",
      selector: (v) => v,
    },
  );

  const allowMouseUpCloseRef = useRef(false);

  const context = useFloatingContext({
    tree: true,
    onCloseAll: () => {
      controlled.onChange(false);
    },
  });

  useEffect(() => {
    let timeout: number;

    function onContextMenu(e: MouseEvent) {
      e.preventDefault();
      setEvent(e);

      controlled.onChange(true);
      if (onOpenChange) {
        onOpenChange(true, e);
      }

      clearTimeout(timeout);

      allowMouseUpCloseRef.current = false;
      timeout = window.setTimeout(() => {
        allowMouseUpCloseRef.current = true;
      }, 300);
    }

    function onMouseUp() {
      if (allowMouseUpCloseRef.current) {
        controlled.onChange(false);
        setEvent(null);
        if (onOpenChange) {
          onOpenChange(false);
        }
      }
    }
    if (ref.current) {
      ref.current.addEventListener("contextmenu", onContextMenu);
      ref.current.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseup", onMouseUp);
        ref.current.removeEventListener("contextmenu", onContextMenu);
      }
      clearTimeout(timeout);
    };
  }, [ref]);

  return (
    <>
      {children ? (
        <div className={wrapperClassName} ref={ref}>
          {children}
        </div>
      ) : null}
      <FloatingTreePrimitive
        open={controlled.value}
        anchorPosition={
          anchorPosition ||
          (event ? { left: event.clientX, top: event.clientY } : undefined)
        }
        onOpenChange={(value) => {
          controlled.onChange(value);
          if (onOpenChange) {
            onOpenChange(value, event || undefined);
          }
        }}
        onClick={(e) => {
          if (
            (e.target as HTMLElement).getAttribute("aria-haspopup") === "menu"
          )
            return;
          context.closeAll();
          controlled.onChange(false);
          if (onClick) {
            onClick(e);
          }
        }}
        closeOnRightClickOutside={closeOnRightClickOutside}
        placement="bottom-start"
        placementUpdate
        role="menu"
        content={menu ? <MenuRenderer menu={menu} /> : null}
        width="fit-content"
        maxWidth="s"
        className={style.menu}
        {...props}
      />
    </>
  );
}

MenuContextual.displayName = "Menu.Contextual";
