import {
  Fragment,
  type ReactNode,
  type Ref,
  type RefObject,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  type Delay,
  type FlipOptions,
  FloatingArrow,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useMergeRefs,
} from "@floating-ui/react";
import { useId } from "@qlik/sprout-hooks";

import { ThemeProvider } from "../ThemeProvider";
import { useDialogGesture } from "../Utils/gesture/dialog";
import { classNames } from "../classNames";
import { useOpenControl } from "../hooks/useOpenControl";
import type {
  DataAttributes,
  HTMLButtonProps,
  HTMLDivProps,
} from "../htmlTypes";
import { type ChildOrGenerator, renderOrClone } from "../renderOrClone";
import { useFloatingContext } from "./FloatingPrimitiveContext";
import { type WidthStrategy, getWidth } from "./width";

export const SPACE_AROUND = 4;

type Reason = undefined | "click-outside" | "keypress-escape";

type FloatingChildrenFnProps = {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
} & HTMLButtonProps;

type FloatingChildrenFnRef = Ref<HTMLElement>;

const FlipStrategy: Record<string, FlipOptions> = {
  default: {
    mainAxis: true,
    // When using flip() and shift(), "alignment" is the recommended configuration
    // https://floating-ui.com/docs/flip#combining-with-shift
    crossAxis: "alignment",
    fallbackAxisSideDirection: "end",
    flipAlignment: true,
    padding: SPACE_AROUND,
  },
  dropdown: {
    mainAxis: true,
    // When using flip() and shift(), "alignment" is the recommended configuration
    crossAxis: "alignment",
    fallbackAxisSideDirection: "none",
    flipAlignment: true,
    padding: SPACE_AROUND,
  },
};

export type FloatingPrimitiveProps = {
  /**
   * The content of the floating HTML element.
   */
  content: ReactNode;
  /**
   * The element to use as a reference to set position of the floating element and trigger it.
   */
  children?: ChildOrGenerator<
    ReactNode,
    FloatingChildrenFnProps,
    FloatingChildrenFnRef
  >;
  /**
   * The element to use as a reference to set position of the floating element.
   */
  anchorEl?: HTMLElement;
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition?: { top: number; left: number };
  /**
   * Define the placement of the floating element related to the anchorEl or children
   */
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";
  /**
   * If true the floating element placement can be updated to keep it in view.
   * true means that the floating element can be moved to the main axis and opposite axis using `end` as fallback.
   * `start` represents `top` or `left`, `end` represents `bottom` or `right`.
   * 'none' signals that no fallback to the opposite axis should take place but still ok on the main axis.
   */
  placementUpdate?: boolean | "dropdown";
  /**
   * Width is managed by the following strategy.
   */
  width?: WidthStrategy;
  minHeight?: number;
  minWidth?: WidthStrategy;
  maxWidth?: WidthStrategy;
  viewportPadding?: number;
  /**
   * offsetMain control how much you give axis
   */
  offsetMain?: number;
  /**
   * offsetCross control how much you give offset in the other diction
   */
  offsetCross?: number;
  /**
   * define if the content is mount when not displayed
   */
  forceMount?: boolean;
  /**
   * This callback is called multiple times controlled by react itself under the reference callback.
   * Helpful to manage react state or query HTML elements.
   * @param reference HTMLElement use to position the floating element
   * @param floating HTMLElement containing the floating content
   */
  onMount?: (reference?: HTMLElement, floating?: HTMLElement) => void;
  /**
   * Determines if the floating element should have padding or not.
   * @default true
   */
  initialOpen?: boolean;
  /**
   * control if the popover is displayed or not
   */
  open?: boolean;
  /**
   * Callback when for an the floating element is opened or closed.
   */
  onOpenChange?: (open: boolean, reason?: Reason) => void;
  /**
   * If true, hides the backdrop overlay (no FloatingOverlay is rendered),
   * allowing interaction with the background. Useful for non-modal behavior.
   */
  /**
   * If true, right clicking outside the floating element will close it.
   */
  closeOnRightClickOutside?: boolean;
  hideBackdrop?: boolean;
  hoverDelay?: Delay;
  /**
   * If true, disables scroll locking when the backdrop/overlay is shown,
   * allowing the page to continue scrolling in the background.
   */
  disableScrollLock?: boolean;
  /**
   * @private
   * pass props to the arrow component
   */
  arrowProps?: DataAttributes & { className?: string };
  /**
   * @private
   * className to apply to the floating element.
   */
  className?: string;
  /**
   * @private
   * Activate needed internal state to manage a tree of FloatingPrimitives.
   */
  tree?: boolean;
  /**
   * @private
   * Define the trigger to open the floating element. Use in collaboration with children
   */
  trigger?: "click" | "hover";
  /**
   * @private
   * zIndex CSS variable or value to control the stacking order of the floating element.
   */
  zIndex?:
    | "z-stacked"
    | "z-overlay"
    | "z-floating"
    | "z-context"
    | "z-time-sensitive"
    | "z-cursor";
} & Omit<HTMLDivProps, "content">;

export type FloatingPublicProps = Omit<
  FloatingPrimitiveProps,
  "trigger" | "className" | "tree" | "arrowProps" | "content" | "zIndex"
>;

function mergeFloatingUIProps<T extends Partial<FloatingPrimitiveProps>>(
  props: Record<string, unknown>,
  nextProps: T,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.keys(props).reduce<Record<string, any>>(
    (acc, key) => {
      if (key.startsWith("on")) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        acc[key] = (...args: Array<any>) => {
          if (props[key] && typeof props[key] === "function") {
            props[key](...args);
          }
          if (nextProps[key as keyof FloatingPrimitiveProps]) {
            nextProps[key as keyof FloatingPrimitiveProps](...args);
          }
        };
      } else if (nextProps[key as keyof FloatingPrimitiveProps]) {
        acc[key] = nextProps[key as keyof FloatingPrimitiveProps];
      }
      return acc;
    },
    { ...nextProps },
  );
}

/**
 * This component is a primitive and it is headless.
 * The role is to manage the HTML structure of an absolute positioned element.
 * The element can receive any content, class and attributes.
 * It doesn't manage any thing else.
 */
export const FloatingPrimitive = forwardRef<
  HTMLDivElement,
  FloatingPrimitiveProps
>(FloatingPrimitiveBase);

function FloatingPrimitiveBase(
  {
    "data-testid": dataTestId,
    anchorEl,
    anchorPosition,
    arrowProps,
    children,
    className,
    closeOnRightClickOutside,
    content,
    disableScrollLock = false,
    forceMount,
    hideBackdrop = false,
    hoverDelay,
    id,
    initialOpen,
    maxWidth = "screen",
    minHeight,
    minWidth,
    offsetCross,
    offsetMain,
    onMount,
    onOpenChange,
    open,
    placement = "bottom-start",
    placementUpdate,
    tree,
    trigger,
    viewportPadding = 0,
    width,
    zIndex,
    ...props
  }: FloatingPrimitiveProps,
  ref?: Ref<HTMLDivElement>,
) {
  const componentId = useId(id);
  const safeTrigger = trigger || "click";
  const arrowRef = useRef(null);
  const safeAnchorEl = useMemo(() => {
    if (!anchorEl && anchorPosition) {
      return {
        isConnected: true,
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: anchorPosition.left,
            y: anchorPosition.top - SPACE_AROUND,
            top: anchorPosition.top - SPACE_AROUND,
            right: anchorPosition.left,
            bottom: anchorPosition.top - SPACE_AROUND,
            left: anchorPosition.left,
          };
        },
        focus: () => {},
      } as HTMLElement;
    }
    return anchorEl;
  }, [anchorEl, anchorPosition]);
  const ARROW_HEIGHT = trigger === "hover" ? 6 : 0;
  const safeOffsetMain = offsetMain || ARROW_HEIGHT + SPACE_AROUND;
  const middleware = useMemo(() => {
    const middlewareArray = [
      offset({
        mainAxis: safeOffsetMain,
        crossAxis: offsetCross || 0, // in sub deps are not updated with https://github.com/floating-ui/floating-ui/issues/3044
      }),
    ];
    middlewareArray.push(
      size({
        apply({ rects, elements, availableHeight }) {
          const minHeightValue = minHeight || 0;
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.floor(Math.max(minHeightValue, availableHeight - viewportPadding))}px`,
            width: getWidth(width, rects.reference.width),
            minWidth: getWidth(minWidth, rects.reference.width),
            maxWidth: getWidth(maxWidth, rects.reference.width),
          });
        },
      }),
    );

    // When using flip() and shift(), this is the recommended order
    // https://floating-ui.com/docs/flip#combining-with-shift
    const flipMiddleware = flip(
      FlipStrategy[
        placementUpdate === true ? "default" : placementUpdate || "default"
      ],
    );
    const shiftMiddleware = shift({
      mainAxis: true,
      crossAxis: placementUpdate === true,
    });

    if (placement.includes("-")) {
      middlewareArray.push(flipMiddleware, shiftMiddleware);
    } else {
      middlewareArray.push(shiftMiddleware, flipMiddleware);
    }

    // arrow() should generally be placed toward the end of the middleware array
    if (arrowProps) {
      middlewareArray.push(
        // eslint-disable-next-line react-hooks/refs
        arrow({
          element: arrowRef,
        }),
      );
    }
    return middlewareArray;
  }, [
    safeOffsetMain,
    offsetCross,
    placementUpdate,
    placement,
    arrowProps,
    minHeight,
    viewportPadding,
    width,
    minWidth,
    maxWidth,
  ]);

  const controlled = useOpenControl({
    open,
    onOpenChange,
    defaultOpen: initialOpen,
  });
  const context = useFloatingContext({
    tree,
    onCloseAll: () => controlled.onOpenChange?.(false),
  });

  const floating = useFloating({
    nodeId: context.nodeId,
    placement,
    open: !!controlled.open,
    onOpenChange: (nextOpen, event, reason) => {
      let newReason: Reason;
      if (reason === "outside-press") {
        newReason = "click-outside";
      } else if (reason === "escape-key") {
        newReason = "keypress-escape";
      }

      if (nextOpen !== controlled.open) {
        controlled.onOpenChange?.(nextOpen, newReason);
      }
    },
    elements: {
      reference: anchorEl,
    },
    middleware,
  });

  useEffect(() => {
    if (
      !!controlled.open &&
      floating.elements.reference &&
      floating.elements.floating
    ) {
      const cleanup = autoUpdate(
        floating.elements.reference,
        floating.elements.floating,
        floating.update,
      );
      return cleanup;
    }
    return undefined;
  }, [controlled.open, floating.elements, floating.update]);

  const gestureRef = useDialogGesture({
    active: props.role === "dialog",
    open: !!controlled.open,
    onClose: (reason) => {
      controlled.onOpenChange?.(false, reason);
    },
    trigger: floating.refs.reference as RefObject<HTMLElement>,
  });

  // anchorEl API effect
  useEffect(() => {
    if (controlled.open && safeAnchorEl) {
      // we have to detect if react has detatched the element or not using
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected
      const isConnected = safeAnchorEl.isConnected || false;
      if (!isConnected) {
        floating.refs.setReference(null);
        controlled.onOpenChange?.(false);
        onOpenChange?.(false);
      } else {
        floating.refs.setReference(safeAnchorEl);
        floating.update();
      }
    }
  }, [controlled.open, safeAnchorEl, floating, controlled, onOpenChange]);

  const click = useClick(floating.context, {
    ignoreMouse: safeTrigger === "hover",
  });
  const hover = useHover(floating.context, {
    enabled: safeTrigger === "hover",
    move: false,
    delay: hoverDelay,
    handleClose: safePolygon({
      // keeps the triangle active no matter the intent (cursor moving quickly towards the floating element)
      // https://floating-ui.com/docs/useHover#requireintent
      requireIntent: false,
    }),
  });
  const dismiss = useDismiss(floating.context, {
    capture: {
      escapeKey: true, // false by default
    },
    ancestorScroll: true,
    outsidePress: !!hideBackdrop || closeOnRightClickOutside,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    hover,
    dismiss,
  ]);
  let wrapper = null;

  // FIXME: floatingProps has tabIndex = -1
  const floatingProps = getFloatingProps();

  const mergedRef = useMergeRefs([ref, floating.refs.setFloating, gestureRef]);

  if (forceMount || controlled.open) {
    wrapper = (
      <FloatingPortal>
        {safeTrigger !== "hover" && !hideBackdrop && controlled.open ? (
          <FloatingOverlay
            // z_overlay (z-index) should be synced with Modal.module.css
            className={classNames({
              [zIndex || "z-overlay"]: true,
            })}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              controlled.onOpenChange?.(false, "click-outside");
            }}
            data-testid="sprout-floating-overlay"
            lockScroll={!disableScrollLock}
          />
        ) : null}
        <ThemeProvider
          asDiv
          data-testid={dataTestId || "sprout-floating"}
          data-placement={
            floating.context.middlewareData.offset?.placement || "top"
          }
          ref={(node) => {
            if (mergedRef) {
              mergedRef(node);
            }
            if (node && node.isConnected) {
              if (onMount) {
                setTimeout(() => {
                  onMount(
                    floating.refs.reference.current as HTMLElement,
                    node as HTMLElement,
                  );
                }, 0);
              }
            }
          }}
          {...mergeFloatingUIProps(floatingProps, props)}
          style={
            controlled.open ? floating.floatingStyles : { display: "none" }
          }
          // z_overlay (z-index) should be synced with Modal.module.css
          className={classNames({
            [className || ""]: !!className,
            [zIndex || "z_overlay"]: true,
          })}
          id={componentId}
        >
          {arrowProps ? (
            <FloatingArrow
              ref={arrowRef}
              context={floating.context}
              {...arrowProps}
            />
          ) : null}
          {content}
        </ThemeProvider>
      </FloatingPortal>
    );
  }
  if (tree) {
    wrapper = <FloatingNode id={context.nodeId}>{wrapper}</FloatingNode>;
  }

  const childrenElement =
    children && isValidElement(children) ? children : <span />;
  const refProps = getReferenceProps();

  return (
    <>
      {children ? (
        <Fragment key="trigger">
          {renderOrClone(
            childrenElement,
            {
              "data-state": controlled.open ? "open" : "closed",
              ...refProps,
            },
            floating.refs.setReference,
          )}
        </Fragment>
      ) : null}
      <Fragment key="wrapper">{wrapper}</Fragment>
    </>
  );
}

FloatingPrimitiveBase.displayName = "FloatingPrimitive";
