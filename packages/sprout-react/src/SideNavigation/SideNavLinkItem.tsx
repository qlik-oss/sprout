import { type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLAnchorProps } from "../htmlTypes";
import {
  SideNavItemContent,
  type SideNavItemContentProps,
} from "./SideNavItemContent";

export type SideNavLinkItemProps = HTMLAnchorProps &
  Pick<
    SideNavItemContentProps,
    "variant" | "icon" | "iconSize" | "label" | "indentation" | "isExternal"
  >;

export const SideNavLinkItem = forwardRef<
  HTMLAnchorElement,
  SideNavLinkItemProps
>(SideNavLinkItemBase);

function SideNavLinkItemBase(
  {
    variant,
    icon,
    iconSize,
    label,
    indentation,
    isExternal,
    ...props
  }: SideNavLinkItemProps,
  ref?: Ref<HTMLAnchorElement>,
) {
  return (
    <a
      ref={ref}
      {...props}
      className={classNames("flex", "w-full", "no-underline")}
    >
      <SideNavItemContent
        variant={variant}
        icon={icon}
        iconSize={iconSize}
        label={label}
        indentation={indentation}
        isExternal={isExternal}
      />
    </a>
  );
}

SideNavLinkItemBase.displayName = "SideNav.Link";
