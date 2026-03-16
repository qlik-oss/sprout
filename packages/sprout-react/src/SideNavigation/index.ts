import { SideNav as Nav, type SideNavProps as NavProps } from "./SideNav";
import {
  SideNavItemContent,
  type SideNavItemContentProps,
} from "./SideNavItemContent";
import { SideNavLinkItem, type SideNavLinkItemProps } from "./SideNavLinkItem";
import { SideNavSection, type SideNavSectionProps } from "./SideNavSection";

/**
 * The SideNav component supports the following sub-components:
 * - `SideNav.Nav` — The root `nav` container. Accepts `variant` for compact mode.
 * - `SideNav.Item` — A navigation item with icon, label, and indentation support.
 * - `SideNav.Section` — A labeled section grouping navigation items.
 * - `SideNav.Link` — An anchor-based navigation item with the same visual options as `Item`.
 */
export const SideNav = {
  Nav,
  Item: SideNavItemContent,
  Section: SideNavSection,
  Link: SideNavLinkItem,
};

export type SideNavProps = {
  Nav: NavProps;
  Item: SideNavItemContentProps;
  Section: SideNavSectionProps;
  Link: SideNavLinkItemProps;
};
