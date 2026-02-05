import { useEffect, useMemo, useRef } from "react";

import { classNames } from "../classNames";
import { useListGesture } from "../hooks/useListGesture";
import type { HTMLUlProps } from "../htmlTypes";
import { ListContext } from "./ListContext";
import { ListItem } from "./ListItem";

import styles from "./List.module.css";

export type ListProps = HTMLUlProps & {
  gap?: string;
  /**
   * @deprecated this has been removed from the spec.
   */
  dense?: boolean;
  useGesture?: boolean;
  hasPadding?: boolean;
};

function getAllItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(
    `li > button.${styles.item_interactive}:not(:disabled)`,
  );
}
function getSelectedItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(
    `li[aria-selected="true"] > button.${styles.item_interactive}:not(:disabled)`,
  );
}

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
    [hasPadding, useGesture],
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
        className={classNames(styles.list, {
          [`gap_${gap?.replace("-", "_")}`]: !!gap,
        })}
        data-dense={dense ? "true" : undefined}
      >
        {children}
      </ul>
    </ListContext.Provider>
  );
}
ListBase.displayName = "List";
