import { type RefObject, useLayoutEffect, useState } from "react";

export function onVisible(element: HTMLElement, callback: () => void) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        callback();
        observer.disconnect();
      }
    });
  }).observe(element);
}

/**
 * Hook to detect if an element has overflow content in X / Y direction
 * @param ref React.RefObject<T>
 * @returns { overflowX: boolean, overflowY: boolean }
 */
export function useHasOverflow<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [overflowX, setOverflowX] = useState(false);
  const [overflowY, setOverflowY] = useState(false);
  useLayoutEffect(() => {
    if (ref.current) {
      onVisible(ref.current, () => {
        if (ref.current) {
          const myAcc = Array.from(ref.current.children).reduce<{
            x: number;
            y: number;
          }>(
            (acc, child) => {
              if (child.clientWidth) {
                acc.x += child.clientWidth;
              }
              if (child.clientHeight) {
                acc.y += child.clientHeight;
              }
              return acc;
            },
            { x: 0, y: 0 },
          );
          if (myAcc.y > ref.current.clientHeight) {
            setOverflowY(true);
          } else {
            setOverflowY(false);
          }
          if (myAcc.x > ref.current.clientWidth) {
            setOverflowX(true);
          } else {
            setOverflowX(false);
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { overflowX, overflowY };
}
