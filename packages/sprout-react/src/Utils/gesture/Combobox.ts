import type { KeyboardEvent as ReactKeyboardEvent } from "react";

import type { ChangeEvent } from "../../Select/SelectUtils";
import { KEYBOARD_KEYS } from "../keyboardKeys";
import { type GetAllItems, PAGE_SIZE, getEmptyNodeList } from "./constant";

export type ComboboxGestureArguments<TValue> = {
  name?: string;
  value?: TValue;
  onChange: (element: HTMLElement) => void;
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
  getAllItems: GetAllItems;
  getSelectedItems?: GetAllItems;
  loop?: boolean;
  onSelect?: (event: ChangeEvent) => void;
};

const DATA_ATTRIBUTE = "data-hovered";

/**
 * State manager to provide list navigation gesture.
 * We know we don't like class but this is the best tool
 * to have a stateful tool and keep an html element and provide tools around it.
 */
export class ComboboxGesture<TValue> {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onChange: (element: HTMLElement) => void;
  element?: HTMLElement;
  name?: string;
  value?: TValue;
  listbox?: HTMLElement;
  getAllItems: GetAllItems;
  _getAllItems: () => NodeList;
  getSelectedItems?: GetAllItems;
  _getSelectedItems: () => NodeList;
  loop: boolean;
  onSelect?: (event: ChangeEvent) => void;

  constructor(args: ComboboxGestureArguments<TValue>) {
    this.isOpen = args.isOpen;
    this.name = args.name;
    this.value = args.value;
    this.onOpenChange = args.onOpenChange;
    this.onChange = args.onChange;
    this.getAllItems = args.getAllItems;
    this.getSelectedItems = args.getSelectedItems;
    this.loop = args.loop === undefined ? true : args.loop;
    this._getSelectedItems = () => {
      if (this.listbox && this.getSelectedItems) {
        return this.getSelectedItems(this.listbox);
      }
      return getEmptyNodeList();
    };
    this._getAllItems = () => {
      if (this.listbox) {
        return this.getAllItems(this.listbox);
      }
      return getEmptyNodeList();
    };
    this.onSelect = args.onSelect;
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  /**
   * set the combobox element
   */
  setElement(element?: HTMLElement | null) {
    this.element = undefined;
    if (element) {
      this.element = element;
    }
  }

  setListbox(listbox?: HTMLElement | null) {
    this.listbox = undefined;
    if (listbox) {
      this.listbox = listbox;
    }
  }

  setIsIOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  setValue(value?: TValue) {
    this.value = value;
  }

  getListInfo() {
    const output: {
      selected: NodeList;
      all: NodeList;
      focus?: HTMLElement;
      focusIndex: number;
      lastIndex: number;
    } = {
      selected: getEmptyNodeList(),
      all: getEmptyNodeList(),
      focus: undefined,
      focusIndex: -1,
      lastIndex: -1,
    };

    if (!this.element) {
      return output;
    }

    output.all = this._getAllItems();
    output.selected = this._getSelectedItems();
    output.lastIndex = output.all.length - 1;
    const iterator = output.all.values();

    let hasNext;
    let index = -1;

    do {
      const { value, done } = iterator.next();
      index += 1;
      hasNext = !done;

      if (value) {
        const focused =
          (value as HTMLElement).getAttribute(DATA_ATTRIBUTE) === "true";
        if (focused) {
          output.focus = value as HTMLElement;
          output.focusIndex = index;
        } else {
          (value as HTMLElement).setAttribute(DATA_ATTRIBUTE, "false");
        }
      }
    } while (hasNext);

    return output;
  }

  focusOnNextItem() {
    const info = this.getListInfo();
    if (info.focusIndex === -1) {
      this.focusOn(info, 0);
      return;
    }

    if (info.focusIndex === info.lastIndex) {
      if (this.loop) {
        this.focusOn(info, 0);
      }
    } else if (typeof info.focusIndex === "number") {
      this.focusOn(info, info.focusIndex + 1);
    }
  }

  focusOnPreviousItem() {
    const info = this.getListInfo();
    if (info.focusIndex === -1) {
      this.focusOn(info, 0);
      return;
    }
    if (info.focusIndex === 0) {
      if (this.loop) {
        this.focusOn(info, info.lastIndex);
      }
    } else {
      this.focusOn(info, info.focusIndex - 1);
    }
  }

  focusOnNextPageItem() {
    const info = this.getListInfo();
    // if nextpage goes beyond total
    if (info.focusIndex + PAGE_SIZE >= info.lastIndex) {
      this.focusOn(info, info.lastIndex);
    } else {
      this.focusOn(info, info.focusIndex + PAGE_SIZE);
    }
  }

  focusOnPreviousPageItem() {
    const info = this.getListInfo();
    if (info.focusIndex - PAGE_SIZE < 0) {
      this.focusOn(info, 0);
    } else {
      this.focusOn(info, info.focusIndex - PAGE_SIZE);
    }
  }

  focusOnFirst() {
    const info = this.getListInfo();
    this.focusOn(info, 0);
  }

  focusOnLast() {
    const info = this.getListInfo();
    this.focusOn(info, info.lastIndex);
  }

  resetFocus() {
    const all = this._getAllItems();
    all.forEach((element) => {
      (element as HTMLElement).setAttribute(DATA_ATTRIBUTE, "false");
    });
  }

  focusOn(
    info: ReturnType<ComboboxGesture<TValue>["getListInfo"]>,
    index: number,
  ) {
    if (index < 0 || index > info.lastIndex) {
      return;
    }
    const next = info.all[index] as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (next) {
      next.setAttribute(DATA_ATTRIBUTE, "true");
      if (!isElementInViewport(next)) {
        // Issue: in case the floating need to be mounted on the opposite direction
        // the scroll is detected by floating-ui as a outside scroll and close the dropdown
        // so this is why we need that extra time before scrolling
        setTimeout(() => {
          if (next.isConnected) {
            const listbox: HTMLElement | null =
              next.closest(`[role="listbox"]`);
            if (listbox) {
              const elementRect = next.getBoundingClientRect();
              const containerRect = listbox.getBoundingClientRect();

              const elementTop = elementRect.top - containerRect.top;
              const elementBottom = elementRect.bottom - containerRect.top;
              const containerHeight = containerRect.height;
              let scrollPos = listbox.scrollTop;

              if (elementTop < 0) {
                scrollPos += elementTop;
              } else if (elementBottom > containerHeight) {
                scrollPos += elementBottom - containerHeight;
              }

              listbox.scroll({
                top: Math.max(0, scrollPos),
                behavior: "smooth",
              });
            }
          }
        }, 10);
      }
      this.onChange(next);
      if (info.focusIndex !== -1 && info.focusIndex !== index) {
        (info.all[info.focusIndex] as HTMLElement).setAttribute(
          DATA_ATTRIBUTE,
          "false",
        );
      }
      // eslint-disable-next-line no-param-reassign
      info.focusIndex = index;
    }
  }

  focusOnFirstSelected() {
    const info = this.getListInfo();
    const selected = info.selected[0] as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (selected) {
      const index = Array.from(info.all).indexOf(selected);
      this.focusOn(info, index);
    } else {
      this.focusOn(info, 0);
    }
  }

  onKeyDownHandler(event: ReactKeyboardEvent<HTMLElement>) {
    switch (event.key) {
      case KEYBOARD_KEYS.TAB:
        if (this.isOpen) {
          this.onOpenChange(false);
        }
        break;
      case "Down":
      case KEYBOARD_KEYS.DOWN:
        event.stopPropagation();
        event.preventDefault();
        if (this.isOpen) {
          this.focusOnNextItem();
        } else {
          this.onOpenChange(true);
        }
        break;
      case "Up":
      case KEYBOARD_KEYS.UP:
        event.stopPropagation();
        event.preventDefault();
        this.focusOnPreviousItem();
        break;
      case KEYBOARD_KEYS.HOME:
        event.stopPropagation();
        event.preventDefault();
        this.focusOnFirst();
        break;
      case KEYBOARD_KEYS.END:
        event.stopPropagation();
        event.preventDefault();
        this.focusOnLast();
        break;
      case KEYBOARD_KEYS.PAGE_DOWN:
        event.stopPropagation();
        event.preventDefault();
        this.focusOnNextPageItem();
        break;
      case KEYBOARD_KEYS.PAGE_UP:
        event.stopPropagation();
        event.preventDefault();
        this.focusOnPreviousPageItem();
        break;
      default:
        break;
    }
  }
}

function isElementInViewport(el: HTMLElement) {
  const listbox = el.closest(`[role="listbox"]`) as HTMLElement;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!listbox) {
    return true;
  }
  const elementRect = el.getBoundingClientRect();
  const containerRect = listbox.getBoundingClientRect();
  const elementTop = elementRect.top - containerRect.top;
  const elementBottom = elementRect.bottom - containerRect.top;

  return elementTop >= 0 && elementBottom <= containerRect.height;
}
