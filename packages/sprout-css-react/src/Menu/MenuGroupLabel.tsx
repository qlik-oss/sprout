import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

export type MenuGroupLabelProps = {
  label: string;
} & HTMLDivProps;

export function MenuGroupLabel({ label, ...props }: MenuGroupLabelProps) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "font-label-s-emphasized",
        "text-default",
        "px-l",
        "py-m",
      )}
      {...props}
    >
      {label}
    </div>
  );
}

MenuGroupLabel.displayName = "Menu.GroupLabel";
