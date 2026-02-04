import { SideNav as Nav, type SideNavProps as NavProps } from "./SideNav";
import {
  SideNavItemContent,
  type SideNavItemContentProps,
} from "./SideNavItemContent";
import { SideNavLinkItem, type SideNavLinkItemProps } from "./SideNavLinkItem";
import { SideNavSection, type SideNavSectionProps } from "./SideNavSection";

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
