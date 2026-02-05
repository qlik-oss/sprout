import type { HTMLAnchorProps, HTMLButtonProps } from "../htmlTypes";
import { Tag, type TagCoreProps } from "./Tag";

import style from "./Tag.module.css";

type TagProps = Omit<TagCoreProps, "onRemove" | "removeLabel" | "color">;

export type TagLinkProps = Omit<HTMLAnchorProps, "children" | "color"> &
  TagProps;

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
