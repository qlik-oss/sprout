import type { ReactNode } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import style from "./Thumbnail.module.css";

export type ThumbnailProps = {
  size?: "xs" | "s" | "l" | "xl";
  type: "icon" | "img";
  children?: ReactNode;
} & HTMLDivProps;

export function Thumbnail({ size, type, children, ...props }: ThumbnailProps) {
  return (
    <div
      className={classNames(style.thumb, {
        [style.thumb__xs]: size === "xs",
        [style.thumb__s]: size === "s",
        [style.thumb__l]: size === "l",
        [style.thumb__xl]: size === "xl",
        [style.thumb__icon]: type === "icon",
        [style.thumb__img]: type === "img",
      })}
      {...props}
    >
      {children}
    </div>
  );
}
Thumbnail.displayName = "Thumbnail";
