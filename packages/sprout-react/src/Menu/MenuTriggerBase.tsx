import {
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { useMergeRefs } from "@floating-ui/react";
import { useId } from "@qlik/sprout-react-hooks";

import {
  type FloatingPrimitiveProps,
  FloatingTreePrimitive,
  useFloatingContext,
} from "../FloatingPrimitive";
import { useMenuGesture } from "../Utils/gesture/menu";
import { useOpenControl } from "../hooks/useOpenControl";
import { renderOrClone } from "../renderOrClone";

import style from "./Menu.module.css";

export type MenuTriggerBaseProps = {
  defaultOpen?: FloatingPrimitiveProps["initialOpen"];
  menu: ReactNode;
} & Omit<
  FloatingPrimitiveProps,
  "focus" | "initialOpen" | "content" | "className" | "minWidth" | "maxWidth"
>;

function getAllItems(element: HTMLElement) {
  return element.querySelectorAll(`[role^="menuitem"]:not([disabled])`);
}

function getSelectedItems(element: HTMLElement) {
  return element.querySelectorAll(
    `[role^="menuitem"][aria-selected=true]:not([disabled])`,
  );
}

function getParentMenuTrigger(element: HTMLElement) {
  const menu = element.closest(`[role="menu"]`);
  if (menu) {
    const menuId = menu.getAttribute("id");
    const trigger = document.querySelector(
      `[role^="menuitem"][aria-controls="${menuId}"]`,
    ) as HTMLElement;
    return trigger;
  }
  return null;
}

function hasSubMenu(element: HTMLElement) {
  return element.getAttribute("aria-haspopup") === "menu";
}

export const MenuTriggerBase = forwardRef<HTMLDivElement, MenuTriggerBaseProps>(
  TriggerBase,
);

function TriggerBase(
  {
    "data-testid": dataTestId,
    id,
    menu,
    onClick,
    open,
    defaultOpen,
    onOpenChange,
    placement,
    children,
    ...props
  }: MenuTriggerBaseProps,
  parentRef?: Ref<HTMLDivElement>,
) {
  const ref = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs([ref, parentRef]);

  const safeId = useId(id);
  const controlled = useOpenControl({
    open,
    onOpenChange,
    defaultOpen,
  });

  const [mounted, setMounted] = useState(false);
  const context = useFloatingContext({
    tree: true,
    onCloseAll: () => {
      controlled.onOpenChange?.(false);
    },
  });
  const gesture = useMenuGesture({
    getAllItems,
    getSelectedItems,
    hasSubMenu,
    getParentMenuTrigger,
    close: () => {
      context.closeAll();
      controlled.onOpenChange?.(false);
      const isRootNode = context.parentId === null;
      if (isRootNode) {
        gesture.trigger?.focus();
      }
    },
  });

  useEffect(() => {
    return () => {
      gesture.setElement();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return (
    <FloatingTreePrimitive
      data-testid={dataTestId}
      ref={mergedRef}
      id={safeId}
      open={controlled.open}
      onOpenChange={(value) => {
        if (value !== controlled.open) {
          controlled.onOpenChange?.(value);
        }
        if (!value) {
          setMounted(false);
          gesture.trigger?.focus();
        }
      }}
      onMount={(reference, floatingRef) => {
        setMounted(true);
        gesture.trigger = reference;
        gesture.setElement(floatingRef);
        if (controlled.open && mounted) {
          gesture.focusOnFirst();
        }
      }}
      onClick={(e) => {
        if (!(e.target instanceof HTMLElement)) {
          return;
        }

        const item = e.target.closest<HTMLElement>('[role^="menuitem"]');

        if (!item) {
          return;
        }
        if (item.getAttribute("aria-haspopup") === "menu") {
          return;
        }
        if (
          item.hasAttribute("disabled") ||
          item.getAttribute("aria-disabled") === "true"
        ) {
          return;
        }

        context.closeAll();
        // FIXME: Without this one click on first level do not close
        controlled.onOpenChange?.(false);
        setMounted(false);
        gesture.trigger?.focus();

        if (onClick) {
          onClick(e);
        }
      }}
      initialOpen={defaultOpen}
      placement={placement || "bottom-start"}
      placementUpdate
      role="menu"
      minWidth="reference"
      maxWidth="xs"
      className={style.menu}
      content={menu}
      {...props}
    >
      {renderOrClone(children, {
        "aria-haspopup": "menu",
        "aria-expanded": controlled.open ? "true" : "false",
        "aria-controls": safeId,
      })}
    </FloatingTreePrimitive>
  );
}

TriggerBase.displayName = "Menu.Trigger";
