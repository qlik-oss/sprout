import { SPACE_AROUND } from "../FloatingPrimitive";
import { MenuItem, type MenuItemProps } from "./MenuItem";
import { MenuTrigger, type MenuTriggerProps } from "./MenuTrigger";

export type MenuSubProps = Omit<MenuTriggerProps, "children" | "trigger"> &
  MenuItemProps;

/**
 * The Menu.Sub component renders a menu item that opens a nested sub-menu on hover. It supports the following custom props:
 * @param menu - the array of menu items or ReactNode rendered inside the sub-menu.
 * @param label - the text label of the parent menu item trigger.
 * @param icon - an icon rendered at the start of the parent menu item.
 * @param disabled - whether the sub-menu trigger item is disabled.
 */
export function MenuSub({
  menu,
  "data-testid": dataTestId,
  "data-testid-submenu": dataTestIdSubmenu,
  ...props
}: MenuSubProps) {
  const isRTL = document.dir === "rtl";

  return (
    <MenuTrigger
      offsetMain={SPACE_AROUND}
      data-testid={dataTestId}
      menu={menu}
      placement={isRTL ? "left" : "right"}
      trigger="hover"
      hoverDelay={300}
      hideBackdrop
    >
      <MenuItem data-testid={dataTestIdSubmenu} {...props} isNested />
    </MenuTrigger>
  );
}

MenuSub.displayName = "Menu.Sub";
