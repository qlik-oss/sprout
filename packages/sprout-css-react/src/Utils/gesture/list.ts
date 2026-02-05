/* eslint-disable @typescript-eslint/class-methods-use-this */
import { type GetAllItems, PAGE_SIZE, type WithFocus } from "./constant";

export type ListGestureArguments = {
  getAllItems: GetAllItems;
  getSelectedItems?: GetAllItems;
  loop?: boolean;
  orientation?: "horizontal" | "vertical";
};

/**
 * State manager to provide list navigation gesture.
 * We know we don't like class but this is the best tool
 * to have a stateful tool and keep an html element and provide tools around it.
 */
export class ListGesture {
  element?: HTMLElement;
  orientation?: "horizontal" | "vertical";
  getAllItems: GetAllItems;
  _getAllItems: () => NodeList;
  getSelectedItems?: GetAllItems;
  loop: boolean;
  _handler?: (event: KeyboardEvent) => void;
  isActivated: () => boolean;

  constructor(args: ListGestureArguments) {
    this.isActivated = () => true;
    this.getAllItems = args.getAllItems;
    this.getSelectedItems = args.getSelectedItems;
    this.loop = args.loop === undefined ? true : args.loop;
    this.orientation = args.orientation || "vertical";

    this._getAllItems = () => {
      if (this.element) {
        return this.getAllItems(this.element);
      }
      return new NodeList();
    };
  }

  setElement(element?: HTMLElement | null) {
    this.removeEventListener();
    this.element = undefined;
    if (element) {
      this.element = element;
      this.addEventListener();
    }
  }

  focusOn(element?: WithFocus | null) {
    if (element) {
      element.focus();
    }
  }

  getListInfo() {
    if (!this.element) {
      return {
        focusedElement: null,
        focusedIndex: -1,
        all: [],
        lastIndex: -1,
      };
    }
    const nodes = this._getAllItems();
    const iterator = nodes.values();
    let currentFound;
    let hasNext;
    let index = 0;

    do {
      const { value, done } = iterator.next();
      currentFound = value === document.activeElement;
      if (!currentFound) {
        hasNext = !done;
        index += 1;
      } else {
        hasNext = false;
      }
    } while (hasNext);

    const output = {
      focusedElement: document.activeElement as HTMLElement,
      focusedIndex: index,
      all: nodes,
      lastIndex: nodes.length - 1,
    };

    return output;
  }

  getFirst() {
    if (this.element) {
      const nodes = this._getAllItems();
      return nodes.item(0) as HTMLElement;
    }
    return undefined;
  }

  getLast() {
    if (this.element) {
      const nodes = this._getAllItems();
      return nodes.item(nodes.length - 1) as HTMLElement;
    }
    return undefined;
  }

  getNextItem() {
    const info = this.getListInfo();
    // check if is last
    if (info.focusedIndex === info.lastIndex) {
      return this.loop ? (info.all[0] as HTMLElement) : info.focusedElement;
    }
    return info.all[info.focusedIndex + 1] as HTMLElement;
  }

  getPreviousItem() {
    const info = this.getListInfo();
    // check if is first
    if (info.focusedIndex === 0) {
      return this.loop
        ? (info.all[info.lastIndex] as HTMLElement)
        : info.focusedElement;
    }
    return info.all[info.focusedIndex - 1] as HTMLElement;
  }

  getNextPageItem() {
    const info = this.getListInfo();
    // if nextpage goes beyond total
    if (info.focusedIndex + PAGE_SIZE >= info.lastIndex) {
      return info.all[info.lastIndex] as HTMLElement;
    }
    return info.all[info.focusedIndex + PAGE_SIZE] as HTMLElement;
  }

  getPreviousPageItem() {
    const info = this.getListInfo();
    if (info.focusedIndex - PAGE_SIZE < 0) {
      return info.all[0] as HTMLElement;
    }
    return info.all[info.focusedIndex - PAGE_SIZE] as HTMLElement;
  }

  onKeyDownHandler(event: KeyboardEvent) {
    if (!this.isActivated()) {
      return;
    }
    if (this.element) {
      switch (event.key) {
        case "Down":
        case "ArrowDown":
          if (this.orientation === "vertical") {
            event.stopPropagation();
            event.preventDefault();
            this.focusOn(this.getNextItem());
          }
          break;
        case "Right":
        case "ArrowRight":
          if (this.orientation === "horizontal") {
            event.stopPropagation();
            event.preventDefault();
            if (document.dir === "rtl") {
              this.focusOn(this.getPreviousItem());
            } else {
              this.focusOn(this.getNextItem());
            }
          }
          break;
        case "Up":
        case "ArrowUp":
          if (this.orientation === "vertical") {
            event.stopPropagation();
            event.preventDefault();
            this.focusOn(this.getPreviousItem());
          }
          break;
        case "Left":
        case "ArrowLeft":
          if (this.orientation === "horizontal") {
            event.stopPropagation();
            event.preventDefault();
            if (document.dir === "rtl") {
              this.focusOn(this.getNextItem());
            } else {
              this.focusOn(this.getPreviousItem());
            }
          }
          break;
        case "Home":
          event.stopPropagation();
          event.preventDefault();
          this.focusOn(this.getFirst());
          break;
        case "End":
          event.stopPropagation();
          event.preventDefault();
          this.focusOn(this.getLast());
          break;
        case "PageDown":
          if (this.orientation === "vertical") {
            event.stopPropagation();
            event.preventDefault();
            this.focusOn(this.getNextPageItem());
          }
          break;
        case "PageUp":
          if (this.orientation === "vertical") {
            event.stopPropagation();
            event.preventDefault();
            this.focusOn(this.getPreviousPageItem());
          }
          break;
        default:
          break;
      }
    }
  }

  addEventListener() {
    if (this.element) {
      this._handler = (event: KeyboardEvent) => {
        this.onKeyDownHandler(event);
      };
      this.element.addEventListener("keydown", this._handler);
    }
  }

  removeEventListener() {
    if (this.element && this._handler) {
      this.element.removeEventListener("keydown", this._handler);
      this._handler = undefined;
    }
  }

  focusOnFirst() {
    if (this.element) {
      this.focusOn(this.getFirst());
    }
  }

  focusOnFirstSelected() {
    if (this.element && this.getSelectedItems) {
      const first = this.getFirst();
      if (first) {
        this.focusOn(first);
      } else {
        this.focusOnFirst();
      }
    }
  }
}
