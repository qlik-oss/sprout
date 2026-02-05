import type { HTMLDivProps } from "../htmlTypes";

import style from "./Tag.module.css";

export type TagGroupsProps = HTMLDivProps;

export function TagGroups({ children, ...props }: TagGroupsProps) {
  return (
    <div className={style.tags_group} {...props}>
      {children}
    </div>
  );
}
