import { type Ref, forwardRef, useContext } from "react";

import { useListItem, useMergeRefs } from "@floating-ui/react";

import type { HTMLButtonProps } from "../htmlTypes";
import { menuStyle } from "./MenuClassName";
import { MenuContent, type MenuContentProps } from "./MenuContent";
import { MenuContext } from "./MenuContext";

type MenuItemVariant = "default" | "destructive";

export type MenuItemProps = HTMLButtonProps &
  MenuContentProps & {
    disabled?: boolean;
    variant?: MenuItemVariant;
  };

/**
 * The Menu.Item component accepts all the native button props and also supports the following custom props:
 * @param label - the primary text label of the menu item.
 * @param description - secondary descriptive text shown below the label.
 * @param icon - an icon rendered at the start of the menu item.
 * @param valueLabel - a value string rendered at the end of the menu item.
 * @param selectable - whether the item can be checked/selected.
 * @param selected - whether the item is currently selected.
 * @param isNested - whether this is a nested (child) menu item.
 * @param variant - the visual variant, can be default or destructive.
 * @param disabled - whether the menu item is disabled.
 * @param children - additional content rendered inside the menu item.
 */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  MenuItemBase,
);

function MenuItemBase(
  {
    label,
    children,
    description,
    icon,
    disabled,
    valueLabel,
    selectable,
    selected,
    isNested,
    variant = "default",
    ...props
  }: MenuItemProps,
  forwardedRef?: Ref<HTMLButtonElement>,
) {
  const menu = useContext(MenuContext);
  const item = useListItem({ label: disabled ? null : label });
  const isActive = item.index === menu.activeIndex;

  const getAriaChecked = () => {
    if (!selectable) return undefined;
    return selected ? "true" : "false";
  };

  return (
    <button
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      aria-haspopup={isNested ? "menu" : undefined}
      type="button"
      className={menuStyle.menuitem}
      style={{ minInlineSize: "120px" }}
      tabIndex={isActive ? 0 : -1}
      role={selectable ? "menuitemcheckbox" : "menuitem"}
      aria-checked={getAriaChecked()}
      disabled={disabled}
      data-variant={variant}
    >
      <MenuContent
        isNested={isNested}
        selectable={selectable}
        selected={selected}
        description={description}
        valueLabel={valueLabel}
        icon={icon}
        label={label}
        disabled={disabled}
      >
        {children}
      </MenuContent>
    </button>
  );
}

MenuItemBase.displayName = "Menu.Item";
