import { memo, useContext, useEffect, useRef, useState } from "react";

import { TabsInternalContext } from "./TabsContext";

import style from "./Tabs.module.css";

export const Tracker = memo(TrackerBase);

function TrackerBase() {
  const context = useContext(TabsInternalContext);
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState<number>(-10000);
  const [width, setWidth] = useState<number>(100);

  useEffect(() => {
    let navResizeObserver: ResizeObserver | undefined;
    let tabResizeObserver: ResizeObserver | undefined;
    let tab: Element | null;
    let parentEl: Element | null;

    const updateTracker = () => {
      if (!parentEl || !tab?.parentElement) return;

      const navRect = parentEl.getBoundingClientRect();
      const tabParentRect = tab.parentElement.getBoundingClientRect();

      const isRTL = getComputedStyle(parentEl).direction === "rtl";
      const newStart = isRTL
        ? Math.floor(navRect.right - tabParentRect.right)
        : Math.floor(tabParentRect.left - navRect.left);

      setStart((prev) => (prev !== newStart ? newStart : prev));

      const newWidth = Math.floor(tabParentRect.width) + 1;
      setWidth((prev) => (prev !== newWidth ? newWidth : prev));
    };

    const returnFn = () => {
      navResizeObserver?.disconnect();
      tabResizeObserver?.disconnect();
      navResizeObserver = undefined;
      tabResizeObserver = undefined;
    };
    if (context?.value && ref.current) {
      parentEl = ref.current.parentElement;
      if (!parentEl) return undefined;
      tab = parentEl.querySelector(`[aria-controls="${context.value}"] > div`);
      if (!tab) return undefined;
      navResizeObserver = new ResizeObserver(updateTracker);
      tabResizeObserver = new ResizeObserver(updateTracker);
      navResizeObserver.observe(parentEl);
      tabResizeObserver.observe(tab);
      updateTracker();
    }

    return returnFn;
  }, [context]);
  return (
    <div
      className={style.tracker}
      data-testid="tab-tracker"
      style={{ insetInlineStart: start, width }}
      ref={ref}
    />
  );
}
TrackerBase.displayName = "Tracker";
