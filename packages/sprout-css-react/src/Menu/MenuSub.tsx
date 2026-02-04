import { SPACE_AROUND } from "../FloatingPrimitive";
import { MenuItem, type MenuItemProps } from "./MenuItem";
import { MenuTrigger, type MenuTriggerProps } from "./MenuTrigger";

export type MenuSubProps = Omit<MenuTriggerProps, "children" | "trigger"> &
  MenuItemProps;

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
