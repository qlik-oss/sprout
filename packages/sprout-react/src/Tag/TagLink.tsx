import type { HTMLAnchorProps, HTMLButtonProps } from "../htmlTypes";
import { Tag, type TagCoreProps } from "./Tag";

import style from "./Tag.module.css";

type TagProps = Omit<TagCoreProps, "onRemove" | "removeLabel" | "color">;

export type TagLinkProps = Omit<HTMLAnchorProps, "children" | "color"> &
  TagProps;

/**
 * The TagLink component renders onto an `a` HTML element. It accepts all `HTMLAnchorElement` attributes except `children` and `color`, plus the following:
 * @param text - The text content of the tag link.
 * @param avatar - Optional avatar content.
 * @param icon - Optional icon displayed before the text.
 * @param badge - Optional badge to display.
 * @param size - Size of the tag (`s` or default).
 */
export function TagLink({
  avatar,
  icon,
  text,
  badge,
  size,
  ...props
}: TagLinkProps) {
  return (
    <a className={style.interactive} {...props}>
      <Tag text={text} icon={icon} avatar={avatar} badge={badge} size={size} />
    </a>
  );
}

export type TagButtonProps = Omit<HTMLButtonProps, "children" | "color"> &
  TagProps;

export function TagButton({
  avatar,
  icon,
  text,
  badge,
  size,
  ...props
}: TagButtonProps) {
  return (
    <button className={style.interactive} type="button" {...props}>
      <Tag text={text} icon={icon} avatar={avatar} badge={badge} size={size} />
    </button>
  );
}
