/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable react/no-array-index-key */
import { type ReactNode, isValidElement } from "react";

import { MenuDivider } from "./MenuDivider";
import { MenuGroup } from "./MenuGroup";
import { MenuGroupLabel, type MenuGroupLabelProps } from "./MenuGroupLabel";
import { MenuItem, type MenuItemProps } from "./MenuItem";
import { MenuTriggerBase, type MenuTriggerBaseProps } from "./MenuTriggerBase";

type MenuItemstructure = {
  component: "item";
} & MenuItemProps;

type MenuDividerStructure = {
  component: "divider";
};

type MenuGroupStructure = {
  component: "group";
  menu: Array<MenuRowStruct>;
} & Omit<MenuGroupLabelProps, "children">;

type MenuGroupLabelStructure = {
  component: "grouplabel";
} & Omit<MenuGroupLabelProps, "children">;

type MenuSubProps = Omit<MenuTriggerBaseProps, "children" | "menu"> &
  MenuItemProps;
type MenuRowStruct =
  | MenuGroupStructure
  | MenuItemstructure
  | MenuDividerStructure
  | MenuGroupLabelStructure
  | ({
      component: "sub";
      menu: Array<MenuRowStruct>;
    } & MenuSubProps);

type MenuDataStructure = Array<MenuRowStruct>;

export type MenuRendererProps = { menu: MenuDataStructure | ReactNode };

export function MenuRenderer({ menu }: MenuRendererProps) {
  const isRTL = document.dir === "rtl";
  if (isValidElement(menu)) {
    return menu as ReactNode;
  }
  // trick a bit the type system
  const safeMenu = menu as MenuDataStructure;
  return safeMenu.map((item, index) => {
    if (item.component === "item") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { component, ...props } = item;
      return <MenuItem key={index} {...props} />;
    }
    if (item.component === "divider") {
      return <MenuDivider key={index} />;
    }
    if (item.component === "grouplabel") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { component, ...props } = item;
      return <MenuGroupLabel key={index} {...props} />;
    }
    if (item.component === "group") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow
      const { component, menu, ...props } = item;
      return (
        <MenuGroup key={index} {...props}>
          <MenuRenderer menu={menu} />
        </MenuGroup>
      );
    }
    if (item.component === "sub") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow
      const { component, menu, ...props } = item;
      return (
        <MenuTriggerBase
          key={index}
          menu={<MenuRenderer menu={menu} />}
          placement={isRTL ? "left" : "right"}
        >
          <MenuItem {...props} isNested />
        </MenuTriggerBase>
      );
    }
    return null;
  });
}

MenuRenderer.displayName = "Menu.Renderer";
