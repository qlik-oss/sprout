import { type Ref, forwardRef } from "react";

import { MenuRenderer, type MenuRendererProps } from "./MenuRenderer";
import { MenuTriggerBase, type MenuTriggerBaseProps } from "./MenuTriggerBase";

export type MenuTriggerProps = Pick<MenuRendererProps, "menu"> &
  MenuTriggerBaseProps;

export const MenuTrigger = forwardRef<HTMLDivElement, MenuTriggerProps>(
  TriggerBase,
);

function TriggerBase(
  { menu, ...props }: MenuTriggerProps,
  parentRef?: Ref<HTMLDivElement>,
) {
  return (
    <MenuTriggerBase
      menu={<MenuRenderer menu={menu} />}
      {...props}
      ref={parentRef}
    />
  );
}

TriggerBase.displayName = "Menu.Trigger";
