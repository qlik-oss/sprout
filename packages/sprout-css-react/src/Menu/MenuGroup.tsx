import { type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { MenuGroupLabel } from "./MenuGroupLabel";

export type MenuGroupProps = {
  label: string;
} & HTMLDivProps;

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>(
  MenuGroupBase,
);

function MenuGroupBase(
  { label, children, ...props }: MenuGroupProps,
  ref?: Ref<HTMLDivElement>,
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
