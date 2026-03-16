import type { ReactNode } from "react";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import style from "./Thumbnail.module.css";

export type ThumbnailProps = {
  size?: "xs" | "s" | "l" | "xl";
  type: "icon" | "img";
  children?: ReactNode;
} & HTMLDivProps;

/**
 * The Thumbnail component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param type - The content type of the thumbnail (`icon` or `img`).
 * @param size - The size of the thumbnail (`xs`, `s`, `l`, `xl`).
 * @param children - The icon or image to render inside the thumbnail.
 */
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
