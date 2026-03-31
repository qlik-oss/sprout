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

/**
 * The `SideNav.Link` component renders onto an `a` HTML element. It accepts all `HTMLAnchorElement` attributes plus the following:
 * @param variant - If `compact`, applies compact layout.
 * @param icon - Optional icon displayed before the label.
 * @param iconSize - Icon size variant (`large` or default).
 * @param label - The text label of the link item.
 * @param indentation - Indentation level of the item.
 * @param isExternal - If true, shows an external link indicator.
 */
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
  ref?: Ref<HTMLAnchorElement>
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
