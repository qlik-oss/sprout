import { type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import style from "./SideNavigation.module.css";

export type SideNavProps = {
  variant?: "compact";
} & HTMLDivProps;

export const SideNav = forwardRef<HTMLDivElement, SideNavProps>(SideNavBase);

function SideNavBase(
  { variant, ...props }: SideNavProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <nav
      ref={ref}
      {...props}
      className={classNames("flex", "flex-col", "w-full", "gap-m", {
        [style.nav_compact]: variant === "compact",
      })}
    />
  );
}

SideNavBase.displayName = "SideNav.Nav";
