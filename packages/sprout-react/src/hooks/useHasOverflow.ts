import { type RefObject, useEffect, useState } from "react";

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
 * @param ref RefObject<T>
 * @returns { overflowX: boolean, overflowY: boolean }
 */
export function useHasOverflow<T extends HTMLElement>(
  ref: RefObject<T | null>,
) {
  const [overflowX, setOverflowX] = useState(false);
  const [overflowY, setOverflowY] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return () => {};
    }

    const computeOverflow = () => {
      if (!ref.current) return;

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
    };

    let resizeObserver: ResizeObserver | null = null;

    onVisible(ref.current, () => {
      computeOverflow();

      resizeObserver = new ResizeObserver(() => {
        computeOverflow();
      });

      if (ref.current) {
        resizeObserver.observe(ref.current);
        // Also observe all children to catch content changes
        Array.from(ref.current.children).forEach((child) => {
          resizeObserver?.observe(child);
        });
      }
    });

    return () => {
      resizeObserver?.disconnect();
      resizeObserver = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { overflowX, overflowY };
}
