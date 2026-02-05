import { useMemo, useState } from "react";

import { KEYBOARD_KEYS } from "../keyboardKeys";
import { ListGesture, type ListGestureArguments } from "./list";

export type MenuGestureArguments = ListGestureArguments & {
  hasSubMenu?: (element: HTMLElement) => boolean;
  getParentMenuTrigger?: (element: HTMLElement) => HTMLElement | null;
  close?: () => void;
};

export class MenuGesture extends ListGesture {
  trigger?: HTMLElement | null;
  hasSubMenu?: (element: HTMLElement) => boolean;
  getParentMenuTrigger?: (element: HTMLElement) => HTMLElement | null;
  close?: () => void;

  constructor(args: MenuGestureArguments) {
    super(args);
    this.orientation = "vertical";
    this.hasSubMenu = args.hasSubMenu;
    this.getParentMenuTrigger = args.getParentMenuTrigger;
    this.close = args.close;
  }

  openSubMenu(element: HTMLElement) {
    if (this.hasSubMenu && this.hasSubMenu(element)) {
      element.click();
    }
  }

  closeSubMenu(element: HTMLElement) {
    if (this.getParentMenuTrigger) {
      const parentMenu = this.getParentMenuTrigger(element);
      if (parentMenu) {
        parentMenu.click();
      }
    }
  }

  onKeyDownHandler(event: KeyboardEvent): void {
    if (event.key === KEYBOARD_KEYS.TAB) {
      event.preventDefault();
      this.close?.();
    }
    super.onKeyDownHandler(event);
    const target = event.target as HTMLElement;

    switch (event.key) {
      case KEYBOARD_KEYS.LEFT:
        if (document.dir === "rtl") {
          this.openSubMenu(target);
        } else {
          this.closeSubMenu(target);
        }
        break;
      case KEYBOARD_KEYS.RIGHT:
        if (document.dir === "rtl") {
          this.closeSubMenu(target);
        } else {
          this.openSubMenu(target);
        }
        break;
      default:
        break;
    }
  }
}

export function useMenuGesture(args: MenuGestureArguments) {
  const [cachedGesture, setCachedGesture] = useState<MenuGesture>();

  const gesture = useMemo(() => {
    if (cachedGesture) {
      return cachedGesture;
    }
    const newGesture = new MenuGesture(args);
    setCachedGesture(newGesture);
    return newGesture;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.getAllItems, args.getSelectedItems, args.loop]);
  return gesture;
}
