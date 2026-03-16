import {
  type CSSProperties,
  type ReactNode,
  type Ref,
  forwardRef,
} from "react";

import type { HTMLDivProps } from "../htmlTypes";
import { menuStyle } from "./MenuClassName";

/**
 * @deprecated Use FloatingPrimitive/Popover instead.
 */
export type MenuContainerProps = HTMLDivProps & {
  children: ReactNode;
  style?: CSSProperties;
};
/**
 * @deprecated Use FloatingPrimitive/Popover instead.
 * The Menu.Container component accepts all the native div props and also supports the following custom props:
 * @param children - the menu content to render inside the container.
 * @param style - additional inline styles for the container.
 */
export const MenuContainer = forwardRef<HTMLDivElement, MenuContainerProps>(
  MenuContainerBase,
);

function MenuContainerBase(
  { children, ...props }: MenuContainerProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div className={menuStyle.menu} ref={ref} {...props}>
      {children}
    </div>
  );
}

MenuContainerBase.displayName = "Menu.Container";
