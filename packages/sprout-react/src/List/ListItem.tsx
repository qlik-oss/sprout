import { type Ref, forwardRef, useContext } from "react";

import { useId } from "@qlik/sprout-react-hooks";

import { classNames } from "../classNames";
import type { HTMLLiProps } from "../htmlTypes";
import { ListContext } from "./ListContext";

import stylesheet from "./List.module.css";

export type ListItemProps = HTMLLiProps & {
  hasPadding?: boolean;
  selected?: boolean;
  disabled?: boolean;
  interactive?: boolean;
  onClick?: () => void;
};

/**
 * The ListItem component accepts all the native li props and also supports the following custom props:
 * @param selected - whether the list item is selected.
 * @param disabled - whether the list item is disabled and non-interactive.
 * @param interactive - whether the list item renders an interactive button inside.
 * @param hasPadding - whether the list item has internal padding.
 * @param onClick - callback fired when the interactive item is clicked.
 * @param children - the content of the list item.
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(ListItemBase);

const itemPadding = classNames("py-density-m", "pr-m", "pl-xl");
const itemSelected = classNames(
  "relative",
  "bg-selected-default",
  stylesheet.item_selected
);

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
  ref?: Ref<HTMLLIElement>
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

  let tabIndex;
  if (!disabled) {
    tabIndex = 0;
  }
  if (interactive && !disabled) {
    if (context?.useGesture) {
      tabIndex = selected ? 0 : -1;
    }
  }

  return (
    <li
      {...props}
      id={safeId}
      ref={ref}
      data-selected={selected}
      className={classNames(
        "m-0",
        "flex-noreset",
        "border-box",
        "flex-row",
        "items-center",
        "gap-m",
        "relative",
        "radius-subtle",
        "font-label-s",
        "text-default",
        "focusable-target",
        stylesheet.item,
        {
          [itemSelected]: !!selected,
          "text-disabled": !!disabled,
          [itemPadding]: !!safeHasPadding,
          "bg-interactive": !!interactive,
          [stylesheet.item_interactive]: !!interactive,
        }
      )}
    >
      {selected ? (
        <div
          role="presentation"
          className={classNames(
            "absolute",
            "left-0",
            "bg-selected",
            "border-box",
            stylesheet.item_selected_indicator
          )}
        />
      ) : null}
      {children}
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className={classNames(
            "outline-none",
            "focusable-trigger",
            stylesheet.item_interactive
          )}
          disabled={disabled}
          aria-labelledby={safeId}
          tabIndex={tabIndex}
        />
      ) : null}
    </li>
  );
}

ListItemBase.displayName = "ListItem";
