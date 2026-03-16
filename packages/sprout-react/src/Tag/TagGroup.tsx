import type { HTMLDivProps } from "../htmlTypes";

import style from "./Tag.module.css";

export type TagGroupsProps = HTMLDivProps;

/**
 * The TagGroups component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes.
 */
export function TagGroups({ children, ...props }: TagGroupsProps) {
  return (
    <div className={style.tags_group} {...props}>
      {children}
    </div>
  );
}
