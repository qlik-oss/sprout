import type { CSSProperties, ReactElement, ReactNode } from "react";

import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLImageProps, HTMLSpanProps } from "../htmlTypes";

import style from "./Avatar.module.css";

export type AvatarProps = Omit<HTMLSpanProps, "size"> & {
  size?: "xs" | "s" | "m" | "l" | "xl" | "illustration";
  text?: string;
  badge?: ReactNode;
  icon?: ReactElement;
  img?: HTMLImageProps;
  bgIndex?: number;
};

const AVATAR_MODULO = 8;

/**
 * The Avatar component accepts all the native span props outside of `size`, and also supports the following custom props:
 * @param size - the size of the avatar, can be xs, s, m, l, xl or illustration. Defaults to m.
 * @param text - text used to generate initials rendered inside the avatar.
 * @param icon - a React element rendered as the avatar icon.
 * @param img - props for the underlying img element when the avatar shows an image.
 * @param badge - a badge element rendered as an overlay on the avatar.
 * @param bgIndex - index used to pick a background color from the avatar palette.
 */
export function Avatar({
  size = "m",
  text,
  icon,
  img,
  badge,
  bgIndex,
  ...props
}: AvatarProps) {
  let child = null;
  const t = useI18n();
  const a11yProps: Partial<HTMLSpanProps> = {};
  const customStyle: CSSProperties = {};

  if (img) {
    const { src, alt, ...rest } = img;
    child = <img alt={alt} src={src} {...rest} />;
  } else if (icon) {
    child = icon;
  } else if (text) {
    child = text.slice(0, 2);
    a11yProps.role = "img";

    if (!props["aria-label"]) {
      a11yProps["aria-label"] = t("avatar.label.alt");
    }
  }

  let bgClassName;
  if (bgIndex !== undefined) {
    const bgIndexMod = `bg${bgIndex % AVATAR_MODULO}` as keyof typeof style;
    bgClassName = style[bgIndexMod];
  }

  return (
    <span
      {...props}
      {...a11yProps}
      style={customStyle}
      className={classNames(
        "relative",
        "flex-noreset",
        "shrink-0",
        "justify-center",
        "items-center",
        "radius-round",
        "size-3xl",
        "font-label-m",
        style.avatar,
        {
          [`${bgClassName}`]: bgIndex !== undefined,
          [style.xs]: size === "xs",
          [style.s]: size === "s",
          [style.l]: size === "l",
          [style.xl]: size === "xl",
          [style.illustration]: size === "illustration",
        },
      )}
    >
      {child}
      {badge ? (
        <span
          className={classNames("absolute", {
            [style.badge]: true,
          })}
        >
          {badge}
        </span>
      ) : null}
    </span>
  );
}
