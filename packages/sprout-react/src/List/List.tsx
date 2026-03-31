import { useEffect, useMemo, useRef } from "react";

import { classNames } from "../classNames";
import { useListGesture } from "../hooks/useListGesture";
import type { HTMLUlProps } from "../htmlTypes";
import { ListContext } from "./ListContext";
import { ListItem } from "./ListItem";

import styles from "./List.module.css";

export type ListProps = HTMLUlProps & {
  gap?:
    | "0"
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "3xl"
    | "density-xs"
    | "density-s"
    | "density-m"
    | "density-l"
    | "density-xl"
    | "density-xxl"
    | "density-3xl";
  /**
   * @deprecated this has been removed from the spec.
   */
  dense?: boolean;
  useGesture?: boolean;
  hasPadding?: boolean;
};

function getAllItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(
    `li > button.${styles.item_interactive}:not(:disabled)`
  );
}
function getSelectedItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(
    `li[aria-selected="true"] > button.${styles.item_interactive}:not(:disabled)`
  );
}

/**
 * The List component accepts all the native ul props and also supports the following custom props:
 * @param gap - CSS gap between list items.
 * @param hasPadding - whether list items have padding. Passed as context to all ListItem children.
 * @param useGesture - whether to enable keyboard arrow navigation between items.
 * @param dense - deprecated this option has been removed from the design spec.
 */
export const List = Object.assign(ListBase, {
  Item: ListItem,
});

function ListBase({
  children,
  dense,
  gap,
  useGesture,
  hasPadding,
  ...props
}: ListProps) {
  const ref = useRef<HTMLUListElement>(null);
  const gesture = useListGesture({
    getAllItems,
    getSelectedItems,
    orientation: "vertical",
  });
  const contextValue = useMemo(
    () => ({
      useGesture: !!useGesture,
      hasPadding: hasPadding === undefined ? true : !!hasPadding,
    }),
    [hasPadding, useGesture]
  );
  useEffect(() => {
    if (ref.current && useGesture) {
      gesture.setElement(ref.current);
    }

    return () => {
      gesture.setElement();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useGesture]);
  return (
    <ListContext.Provider value={contextValue}>
      <ul
        ref={ref}
        {...props}
        className={classNames(
          "m-0",
          "p-0",
          "w-full",
          "flex-noreset",
          "flex-col",
          "border-box",
          {
            [`gap-${gap?.replace("_", "-")}`]: !!gap,
          }
        )}
        data-dense={dense ? "true" : undefined}
      >
        {children}
      </ul>
    </ListContext.Provider>
  );
}
ListBase.displayName = "List";
