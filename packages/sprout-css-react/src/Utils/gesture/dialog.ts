import { type RefObject, useCallback, useEffect, useRef } from "react";

import { FOCUSABLE_ELEMENT_SELECTOR } from "../focus";

export class DialogGesture {
  ref?: RefObject<HTMLElement | null>;
  /**
   * Optional HTMLElement that has triggered the dialog.
   * Alternative is to pass onClose function to Dialog component.
   */
  trigger?: HTMLElement | null;
  onClose?: (reason?: "escape") => void;
  preventEscaping?: boolean;
  preventFocus?: boolean;
  _getAllItems: () => NodeList;
  _handler?: (event: KeyboardEvent) => void;
  initiator: HTMLElement;

  constructor() {
    this.preventFocus = false;
    this.preventEscaping = false;
    this.initiator = document.activeElement as HTMLElement;
    this._getAllItems = () => {
      const element = this.ref?.current;

      if (element) {
        return element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR);
      }
      return document.querySelectorAll("DO_NOT_EXIST");
    };
  }

  setReference(ref: RefObject<HTMLElement | null>) {
    this.ref = ref;
    if (ref.current) {
      this.addEventListener();
    }
  }

  focusOnFirst() {
    const element = this.ref?.current;
    const allFocusableElements = this._getAllItems();
    if (allFocusableElements.length > 0) {
      (allFocusableElements[0] as HTMLElement).focus();
    } else if (element) {
      if (element.tabIndex !== -1) {
        element.focus();
      }
    }
  }

  addEventListener() {
    const element = this.ref?.current;
    if (element) {
      this._handler = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          const allFocusableElements = this._getAllItems();
          const lastIndex = event.shiftKey
            ? 0
            : allFocusableElements.length - 1;
          const nextIndex = event.shiftKey
            ? allFocusableElements.length - 1
            : 0;
          if (
            allFocusableElements.length > 0 &&
            document.activeElement === allFocusableElements[lastIndex]
          ) {
            (allFocusableElements[nextIndex] as HTMLElement).focus();
            event.preventDefault();
          }
          if (allFocusableElements.length === 0) {
            event.preventDefault();
          }
        }
        if (event.key === "Escape" && !this.preventEscaping) {
          if (this.trigger) {
            this.trigger.focus();
          }
          if (this.onClose) {
            this.onClose("escape");
          }
        }
      };
      element.addEventListener("keydown", this._handler);
    }
  }

  removeEventListener() {
    const element = this.ref?.current;
    if (element && this._handler) {
      element.removeEventListener("keydown", this._handler);
      this._handler = undefined;
    }
  }
}

export type DialogGestureOptions = {
  active: boolean;
  open: boolean;
  preventEscaping?: boolean;
  preventFocus?: boolean;
  trigger?: RefObject<HTMLElement> | null;
  onClose?: (reason?: "escape") => void;
};

function getAllFocusableItems(element: HTMLElement) {
  return element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR);
}

/**
 * this is the third try to make a reusable piece of code to manage dialog focus
 * This one is based on ref callback which seems to be the only viable way with React
 * to have hook with a ref working properly.
 *
 * The trigger params if present will be used to focus on it when dialog is closed.
 *
 * First try: useEffect. The main issue was about the ref change do not retrigger the useEffect
 * Second try: use a class base approach and create instance inside the component. Too hard to debug
 * and impossible to keep only one instance of it using either useRef or useState.
 *
 * @returns ref callback to be used in the dialog component
 */
export function useDialogGesture(args: DialogGestureOptions) {
  const ref = useRef<HTMLElement | null>(null);

  // keyboard event listener
  useEffect(() => {
    if (!args.active) {
      return;
    }
    const onKeydown = (event: KeyboardEvent) => {
      if (!ref.current) {
        return;
      }
      if (event.key === "Tab") {
        const allFocusableElements = getAllFocusableItems(
          ref.current as HTMLElement,
        );
        const lastIndex = event.shiftKey ? 0 : allFocusableElements.length - 1;
        const nextIndex = event.shiftKey ? allFocusableElements.length - 1 : 0;
        if (
          allFocusableElements.length > 0 &&
          document.activeElement === allFocusableElements[lastIndex]
        ) {
          (allFocusableElements[nextIndex] as HTMLElement).focus();
          event.preventDefault();
        }
        if (allFocusableElements.length === 0) {
          event.preventDefault();
        }
      }
      if (event.key === "Escape" && !args.preventEscaping) {
        if (args.onClose) {
          args.onClose("escape");
        }
      }
    };
    document.addEventListener("keydown", onKeydown);

    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener("keydown", onKeydown);

      if (args.trigger?.current) {
        args.trigger.current.focus();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.active, args.open]);

  return useCallback(
    (node: HTMLElement | null) => {
      ref.current = node;
      if (!args.active) {
        return;
      }

      if (args.open && node) {
        const all = getAllFocusableItems(node);
        if (all.length > 0) {
          (all[0] as HTMLElement).focus();
        } else if (node.tabIndex !== -1) {
          node.focus();
        }
      }
    },
    [args.active, args.open],
  );
}
