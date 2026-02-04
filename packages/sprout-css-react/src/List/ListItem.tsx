import { type Ref, forwardRef, useContext } from "react";

import { useId } from "@qlik/sprout-css-hooks";

import { classNames } from "../classNames";
import type { HTMLLiProps } from "../htmlTypes";
import { ListContext } from "./ListContext";

import styles from "./List.module.css";

export type ListItemProps = HTMLLiProps & {
  hasPadding?: boolean;
  selected?: boolean;
  disabled?: boolean;
  interactive?: boolean;
  onClick?: () => void;
};

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(ListItemBase);

function ListItemBase(
  {
    id,
    selected,
    onClick,
    interactive,
    disabled,
    children,
    hasPadding,
    ...props
  }: ListItemProps,
  ref?: Ref<HTMLLIElement>,
) {
  const safeId = useId(id);
  const context = useContext(ListContext);
  // priority to property then context then default (true)
  let safeHasPadding = hasPadding;
  if (hasPadding === undefined) {
    if (context?.hasPadding !== undefined) {
      safeHasPadding = context.hasPadding;
    } else {
      safeHasPadding = true;
    }
  }

  let tabIndex = 0;
  if (context?.useGesture) {
    tabIndex = selected ? 0 : -1;
  }

  return (
    <li
      {...props}
      id={safeId}
      ref={ref}
      data-selected={selected}
      className={classNames(styles.item, {
        [styles.item_selected]: !!selected,
        [styles.item_disabled]: !!disabled,
        [styles.item_padding]: !!safeHasPadding,
        [styles.item_interactive]: !!interactive,
      })}
    >
      {children}
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className={classNames("outline-none", styles.item_interactive)}
          disabled={disabled}
          aria-labelledby={safeId}
          tabIndex={tabIndex}
        />
      ) : null}
    </li>
  );
}

ListItemBase.displayName = "ListItem";
