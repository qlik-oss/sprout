import { type Ref, forwardRef, useContext } from "react";

import { useListItem, useMergeRefs } from "@floating-ui/react";
import sprout from "@qlik/sprout-css-modules";

import type { HTMLButtonProps } from "../htmlTypes";
import { MenuContent, type MenuContentProps } from "./MenuContent";
import { MenuContext } from "./MenuContext";

import menuStyle from "./Menu.module.css";

type MenuItemVariant = "default" | "destructive";

export type MenuItemProps = HTMLButtonProps &
  MenuContentProps & {
    disabled?: boolean;
    variant?: MenuItemVariant;
  };

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
      className={sprout.classNames(
        "cursor-pointer",
        "bg-transparent",
        "text-default",
        "font-label-s",
        "flex-noreset",
        "w-full",
        "border-none",
        "radius-subtle",
        "m-0",
        "p-0",
        "outline-none",
        menuStyle.menuitem,
      )}
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
