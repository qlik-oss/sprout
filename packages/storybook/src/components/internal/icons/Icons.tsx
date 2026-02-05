import type { ReactNode } from "react";

import * as AllIcons from "@qlik/sprout-icons/react";

const getIcon = (name?: keyof typeof AllIcons) => {
  if (typeof name === "undefined") {
    return null;
  }

  const Icon = AllIcons[name];
  return <Icon />;
};

export const ICON_OPTIONS = [undefined, ...Object.keys(AllIcons)] as Array<
  keyof typeof AllIcons | undefined
>;

export const ICONS_MAP = Object.fromEntries(
  ICON_OPTIONS.map((icon) => [icon, getIcon(icon)]),
) as Record<keyof typeof AllIcons, ReactNode>;
