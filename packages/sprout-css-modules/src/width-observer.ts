export type BoxSizing = "content-box" | "border-box" | "device-pixel-content-box";
export type BoxSizingKeys = keyof Pick<
  ResizeObserverEntry,
  "borderBoxSize" | "contentBoxSize" | "devicePixelContentBoxSize"
>;
export type WidthObserverAPI = (
  element: HTMLElement | (() => HTMLElement | null) | null,
  opts?: {
    boxSizing?: BoxSizing;
    onResize?: (width: number | undefined) => void;
  },
) => {
  observe: () => void;
  disconnect: () => void;
};

/**
 * Observes the width of a given HTML element and triggers a callback when it changes.
 *
 * This function uses the `ResizeObserver` API to monitor width changes of an element.
 * It supports deferred element resolution (via a function returning the element)
 * and allows choosing the box sizing mode (`content-box`, `border-box`, or `device-pixel-content-box`).
 *
 * @param {HTMLElement | (() => HTMLElement | null) | null} element
 *   The target element to observe, or a function returning the element.
 *   If `null` or not yet available, it will keep checking via `requestAnimationFrame`
 *   until the element exists.
 *
 * @param {Object} [opts]
 *   Optional configuration options.
 * @param {BoxSizing} [opts.boxSizing="content-box"]
 *   Determines which box model dimension to observe: `"content-box"`, `"border-box"`,
 *   or `"device-pixel-content-box"`.
 * @param {(width: number | undefined) => void} [opts.onResize]
 *   Callback function invoked whenever the observed element’s width changes.
 *
 * @returns {{
 *   observe: () => void;
 *   disconnect: () => void;
 * }} An object containing:
 * - `observe`: starts observing the element.
 * - `disconnect`: stops observation and cleans up any active `ResizeObserver` or animation frame.
 */
export const widthObserver: WidthObserverAPI = (element, opts = {}) => {
  const box = opts.boxSizing ?? "content-box";
  const onResize = typeof opts.onResize === "function" ? opts.onResize : null;

  if (typeof window === "undefined" || !("ResizeObserver" in window)) {
    return {
      observe() {},
      disconnect() {},
    };
  }

  let resizeObserver: ResizeObserver | null = null;
  let requestAnimationFrameId: number | null = null;
  let previousWidth: number | undefined;

  function startObserving() {
    let targetElement: HTMLElement | null = null;

    if (typeof element === "function") {
      targetElement = element();
    } else {
      targetElement = element;
    }

    if (!targetElement) {
      requestAnimationFrameId = requestAnimationFrame(startObserving);
      return;
    }

    resizeObserver = new ResizeObserver(([entry]) => {
      let boxProp: BoxSizingKeys;
      if (box === "border-box") {
        boxProp = "borderBoxSize";
      } else if (box === "device-pixel-content-box") {
        boxProp = "devicePixelContentBoxSize";
      } else {
        boxProp = "contentBoxSize";
      }

      const newWidth = extractWidth(entry, boxProp);
      const hasChanged = previousWidth !== newWidth;

      if (hasChanged) {
        previousWidth = newWidth;

        if (typeof onResize === "function") {
          onResize(newWidth);
        }
      }
    });

    resizeObserver.observe(targetElement, { box });
  }

  return {
    observe: startObserving,
    disconnect: () => {
      if (requestAnimationFrameId !== null) {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    },
  };
};

function extractWidth(entry: ResizeObserverEntry, box: BoxSizingKeys): number | undefined {
  const size = entry[box];

  if (size.length === 0) {
    if (box === "contentBoxSize") {
      return entry.contentRect.width;
    }
    return undefined;
  }

  return size[0].inlineSize;
}
