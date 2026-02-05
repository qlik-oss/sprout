import {
  type CSSProperties,
  type ReactNode,
  type Ref,
  forwardRef,
} from "react";

import type { HTMLDivProps } from "../htmlTypes";

import style from "./Menu.module.css";

/**
 * @deprecated Use FloatingPrimitive/Popover instead.
 */
export type MenuContainerProps = HTMLDivProps & {
  children: ReactNode;
  style?: CSSProperties;
};
/**
 * @deprecated Use FloatingPrimitive/Popover instead.
 */
export const MenuContainer = forwardRef<HTMLDivElement, MenuContainerProps>(
  MenuContainerBase,
);

function MenuContainerBase(
  { children, ...props }: MenuContainerProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div className={style.menu} ref={ref} {...props}>
      {children}
    </div>
  );
}

MenuContainerBase.displayName = "Menu.Container";
