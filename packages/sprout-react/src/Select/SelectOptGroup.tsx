import { type Ref, forwardRef } from "react";

import { Menu, type MenuProps } from "../Menu";

export type OptGroupProps = MenuProps["Group"];

export const OptGroup = forwardRef<HTMLDivElement, OptGroupProps>(OptGroupBase);

function OptGroupBase(
  { children, ...props }: OptGroupProps,
  ref?: Ref<HTMLDivElement>,
) {
  // a11y explicitly explain a group must not be empty
  if (!children) {
    return null;
  }

  return (
    <Menu.Group {...props} ref={ref}>
      {children}
    </Menu.Group>
  );
}

OptGroupBase.displayName = "OptGroup";
