/* eslint-disable react-hooks/exhaustive-deps */
import { type ReactNode, useEffect, useRef, useState } from "react";

import { useControl } from "@qlik/sprout-react-hooks";

import {
  type FloatingPrimitiveProps,
  FloatingTreePrimitive,
  useFloatingContext,
} from "../FloatingPrimitive";
import { menuStyle } from "./MenuClassName";
import { MenuRenderer, type MenuRendererProps } from "./MenuRenderer";

export type MenuContextualProps = {
  wrapperClassName?: string;
  menu?: ReactNode | MenuRendererProps["menu"];
  children?: ReactNode;
  onOpenChange?: (open: boolean, event?: MouseEvent) => void;
} & Omit<
  FloatingPrimitiveProps,
  "placement" | "content" | "initialOpen" | "onOpenChange"
>;

/**
 * The Menu.Contextual component shows a context menu (right-click or custom trigger) over arbitrary content. It supports the following custom props:
 * @param menu - the menu items ReactNode or array shown in the floating context menu.
 * @param children - the content that triggers the context menu.
 * @param wrapperClassName - additional CSS class applied to the wrapper element.
 * @param onOpenChange - callback fired when the menu open state changes.
 */
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
    }
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

      controlled.onChange(true, e);
      clearTimeout(timeout);

      allowMouseUpCloseRef.current = false;
      timeout = window.setTimeout(() => {
        allowMouseUpCloseRef.current = true;
      }, 300);
    }

    function onMouseUp(e: MouseEvent) {
      if (allowMouseUpCloseRef.current) {
        setEvent(null);
        controlled.onChange(false, e);
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
          controlled.onChange(value, event || undefined);
        }}
        onClick={(e) => {
          if (
            (e.target as HTMLElement).getAttribute("aria-haspopup") === "menu"
          )
            return;
          context.closeAll();
          controlled.onChange(false, e);
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
        className={menuStyle.menu}
        {...props}
      />
    </>
  );
}

MenuContextual.displayName = "Menu.Contextual";
