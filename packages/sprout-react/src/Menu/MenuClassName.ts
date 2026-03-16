import { classNames } from "../classNames";

import styleSheet from "./Menu.module.css";

export const menuStyle = {
  menu: classNames(
    "flex",
    "border-box",
    "flex-col",
    "bg-floating",
    "box-shadow-moderate",
    "outline-none",
    "p-s",
    "overflow-y-auto",
    "radius-subtle",
    "max-w-s",
    styleSheet.menu,
  ),
  menuitem: classNames(
    "cursor-pointer",
    "bg-transparent",
    "text-default",
    "font-label-s",
    "flex-noreset",
    "w-full",
    "border-none",
    "radius-subtle",
    "m-0",
    "p-0",
    "outline-none",
    styleSheet.menuitem,
  ),
  menu_icon: classNames(
    "self-start",
    "size-xl",
    "shrink-0",
    styleSheet.menu_icon,
  ),
  menu_content_description: (disabled?: boolean) =>
    classNames(
      "font-label-xs",
      "text-start",
      "break-words",
      "w-full",
      styleSheet.menu_content_description,
      {
        "text-weak": !disabled,
        "text-disabled": !!disabled,
      },
    ),
  menu_content_label: classNames(
    "font-label-s",
    "text-start",
    "w-full",
    "break-words",
    styleSheet.menu_content_label,
  ),
};
