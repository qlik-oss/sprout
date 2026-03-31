import { type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { MenuGroupLabel } from "./MenuGroupLabel";

export type MenuGroupProps = {
  label: string;
} & HTMLDivProps;

/**
 * The Menu.Group component accepts all the native div props and also supports the following custom props:
 * @param label - the accessible group label text rendered as a heading.
 * @param children - the menu items belonging to this group.
 */
export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>(
  MenuGroupBase
);

function MenuGroupBase(
  { label, children, ...props }: MenuGroupProps,
  ref?: Ref<HTMLDivElement>
) {
  return (
    <div
      className={classNames("flex", "flex-col", "border-box")}
      role="group"
      {...props}
      ref={ref}
    >
      <MenuGroupLabel label={label} />
      {children}
    </div>
  );
}

MenuGroupBase.displayName = "Menu.Group";
