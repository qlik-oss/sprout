import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { heightObserver, type BoxSizing } from "../utils/heightObserver";

type AutoSizerParam = {
  minHeight?: number;
  maxHeight?: number;
  height?: number;
};

const MAX_HEIGHT = 1200; // arbitrary large number to prevent extreme heights

export type AutoSizerProps = {
  height?: number; // Optional height prop to allow for fixed height if needed
  children: (params: AutoSizerParam) => ReactNode;
  onResize?: (params: AutoSizerParam) => void; // Optional callback for resize events
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function AutoSizer({ children, height, onResize, ...props }: AutoSizerProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [availableHeight, setAvailableHeight] = useState(0);
  const [isFlexColumn, setIsFlexColumn] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);
  // check what type of box the container is

  useEffect(() => {
    const container = parentRef.current?.parentElement;
    if (!container) {
      return undefined;
    }
    const computedStyle = window.getComputedStyle(container);
    const boxSizing = computedStyle.getPropertyValue("box-sizing") as BoxSizing;

    const observer = heightObserver(container, {
      boxSizing,
      onResize: (newHeightParam: number | undefined): void => {
        if (typeof newHeightParam === "undefined") return;
        let newHeight = newHeightParam;
        if (newHeight > MAX_HEIGHT) {
          // eslint-disable-next-line no-console
          console.error("AutoSizer: Detected height is too large, capping to prevent issues.");
          newHeight = MAX_HEIGHT;
        }
        const isFlex = computedStyle.getPropertyValue("display") === "flex";
        const flexDirection = computedStyle.getPropertyValue("flex-direction");
        const minHeightStyle = parseFloat(computedStyle.getPropertyValue("min-height"));
        const maxHeightStyle = parseFloat(computedStyle.getPropertyValue("max-height"));

        if (flexDirection === "column" && isFlex) {
          if (!isFlexColumn) {
            setIsFlexColumn(true);
          }
          if (!Number.isNaN(maxHeightStyle) && maxHeight !== maxHeightStyle) {
            setMaxHeight(maxHeightStyle);
          }
          if (!Number.isNaN(minHeightStyle) && minHeight !== minHeightStyle) {
            setMinHeight(minHeightStyle);
          }
        }

        setAvailableHeight(newHeight);
        onResize?.({ height: newHeight });
      },
    });

    observer.observe();
    return () => {
      observer.disconnect();
    };
  }, [isFlexColumn, maxHeight, minHeight, onResize]);

  if (!isFlexColumn && height) {
    return <>{children({ height })}</>;
  }

  return (
    <div ref={parentRef} {...props}>
      {children({
        minHeight,
        maxHeight,
        height: isFlexColumn ? undefined : availableHeight,
      })}
    </div>
  );
}

AutoSizer.displayName = "AutoSizer";
