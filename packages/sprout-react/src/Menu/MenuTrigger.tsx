import { type Ref, forwardRef } from "react";

import { MenuRenderer, type MenuRendererProps } from "./MenuRenderer";
import { MenuTriggerBase, type MenuTriggerBaseProps } from "./MenuTriggerBase";

export type MenuTriggerProps = Pick<MenuRendererProps, "menu"> &
  MenuTriggerBaseProps;

/**
 * The Menu.Trigger component wraps any element or button and opens a floating menu on interaction. It supports the following custom props:
 * @param menu - the menu ReactNode to render in the floating dropdown.
 * @param defaultOpen - whether the menu is open by default (uncontrolled).
 */
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
