import type { MouseEvent as ReactMouseEvent, Ref, RefObject } from "react";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { useDialogState } from "../Dialog";
import { FOCUSABLE_ELEMENT_SELECTOR } from "../Utils/focus";
import { DialogGesture } from "../Utils/gesture/dialog";

export type UseModalProps = {
  defaultVisible?: boolean;
  visible?: boolean;
  onClose?: () => void;
  preventEscaping?: boolean;
  preventInteractiveBackdrop?: boolean;
  preventFocus?: boolean;
};

type UseModalAPI = {
  visible: boolean;
  onClose: () => void;
  onHideDialog: () => void;
  onClickBackdropHandler: (e: ReactMouseEvent<HTMLDivElement>) => void;
  backdropRef: Ref<HTMLDivElement>;
  containerRef: Ref<HTMLDivElement>;
};

function elementIsIn(
  element: HTMLElement | null,
  container?: HTMLElement | null,
) {
  if (!element || !container) {
    return false;
  }

  return element === container || container.contains(element);
}

/**
 *
 * @param element - The element to check if it's inside a floating UI container.
 */
function isFloatingElement(el?: HTMLElement | null) {
  if (!el) {
    return false;
  }
  const containers = document.querySelectorAll("[data-floating-ui-portal]");
  for (let i = 0; i < containers.length; i++) {
    if (elementIsIn(el, containers[i] as HTMLElement)) {
      return true;
    }
  }
  return false;
}

/**
 *
 * @param element - The element to check if it's a dialog.
 */
function isDialogElement(el?: HTMLElement | null) {
  if (!el) {
    return false;
  }

  const isDialog =
    el.getAttribute("role") === "dialog" ||
    el.getAttribute("aria-modal") === "true";
  const hasDialogChildren =
    !!el.querySelector("[role=dialog]") ||
    !!el.querySelector("[aria-modal=true]");
  const hasDialogParent =
    !!el.closest("[role=dialog]") || !!el.closest("[aria-modal=true]");
  return isDialog || hasDialogChildren || hasDialogParent;
}

function useOverscrollLock(visible: boolean) {
  useEffect(() => {
    const initialBodyOverScroll = document.body.style.overscrollBehavior;
    const initialDocumentOverScroll =
      document.documentElement.style.overscrollBehavior;
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari =
      userAgent.includes("safari") && !userAgent.includes("chrome");

    if (visible) {
      if (isSafari) {
        document.documentElement.style.overscrollBehavior = "none";
      } else {
        document.body.style.overscrollBehavior = "none";
      }
    }

    return () => {
      document.body.style.overscrollBehavior = initialBodyOverScroll;
      document.documentElement.style.overscrollBehavior =
        initialDocumentOverScroll;
    };
  }, [visible]);
}

function useFocus(
  dialog: ReturnType<typeof useDialogState>,
  gesture: DialogGesture,
  containerRef: RefObject<HTMLDivElement | null>,
  preventFocus?: boolean,
) {
  useEffect(() => {
    if (dialog.visible) {
      // eslint-disable-next-line no-param-reassign
      gesture.trigger = document.activeElement as HTMLElement;
      gesture.addEventListener();
      gesture.focusOnFirst();
    } else {
      gesture.trigger?.focus();
    }
    /**
     * This one manage programatic focus move for example when a Menu is opened
     * @param ev focusout event
     */
    const onFocusOut = (ev: FocusEvent) => {
      const allFocusableElements = containerRef.current?.querySelectorAll(
        FOCUSABLE_ELEMENT_SELECTOR,
      );
      if (
        dialog.visible &&
        !preventFocus &&
        allFocusableElements &&
        allFocusableElements.length > 0 &&
        !(
          elementIsIn(ev.relatedTarget as HTMLElement, containerRef.current) ||
          isFloatingElement(ev.relatedTarget as HTMLElement) ||
          isDialogElement(ev.relatedTarget as HTMLElement)
        )
      ) {
        (allFocusableElements[0] as HTMLElement).focus();
      }
    };
    containerRef.current?.addEventListener("focusout", onFocusOut);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener("focusout", onFocusOut);
      gesture.removeEventListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialog.visible]);
}

export function useModal({
  defaultVisible,
  visible,
  onClose,
  preventEscaping,
  preventFocus,
  preventInteractiveBackdrop,
}: UseModalProps): UseModalAPI {
  const dialog = useDialogState({ visible, defaultVisible, onClose });

  const backdropRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLElement | null>(null);
  const closingRef = useRef(false);

  const onClosePlus = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    dialog.onClose();
    setTimeout(() => {
      if (initialFocusRef.current && !preventFocus) {
        initialFocusRef.current.focus();
      }
      closingRef.current = false;
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialog.onClose, preventFocus]);

  const gesture = useMemo(() => new DialogGesture(), []);
  gesture.onClose = onClosePlus;
  gesture.preventEscaping = preventEscaping;
  gesture.preventFocus = preventFocus;
  gesture.setReference(containerRef);

  useOverscrollLock(dialog.visible);
  useFocus(dialog, gesture, containerRef, preventFocus);

  const onClickBackdropHandler = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (
        !preventEscaping &&
        !preventInteractiveBackdrop &&
        event.target === backdropRef.current
      ) {
        onClosePlus();
      }
    },
    [preventEscaping, preventInteractiveBackdrop, onClosePlus],
  );

  const onHideDialog = useCallback(() => {
    if (!preventEscaping && !preventInteractiveBackdrop) {
      onClosePlus();
    }
  }, [preventEscaping, preventInteractiveBackdrop, onClosePlus]);

  return {
    visible: dialog.visible,
    onClose: onClosePlus,
    onHideDialog,
    onClickBackdropHandler,
    backdropRef,
    containerRef,
  };
}
