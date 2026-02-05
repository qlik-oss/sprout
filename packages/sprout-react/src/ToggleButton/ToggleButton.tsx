import { type ReactNode, type Ref, forwardRef, isValidElement } from "react";

import { Badge, type BadgeProps } from "../Badge";
import { classNames } from "../classNames";
import type { HTMLButtonProps } from "../htmlTypes";
import { DropdownArrow } from "../icons";
import { type UseToggleProps, useToggle } from "./hook";

import style from "../Button/Button.module.css";

export type ToggleButtonProps = Omit<
  HTMLButtonProps,
  "type" | "onClick" | "onChange"
> & {
  label: string;
  variant?: "quiet";
  badge?: BadgeProps | ReactNode;
  size?: "small" | "default";
  icon?: ReactNode;
  asDropdown?: boolean;
} & UseToggleProps;

export const ToggleButton = forwardRef(BaseToggleButton);

function BaseToggleButton(
  {
    size,
    variant,
    badge,
    label,
    toggled,
    icon,
    asDropdown = false,
    defaultToggled,
    onChange,
    ...props
  }: ToggleButtonProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const controlled = useToggle({
    onChange,
    toggled,
    defaultToggled,
  });

  let badgeContent = null;
  if (badge) {
    if (isValidElement(badge)) {
      badgeContent = badge;
    } else if (typeof badge === "object") {
      badgeContent = <Badge {...badge} />;
    }
  }

  //   set default state if uncontrolled
  return (
    <button
      ref={ref}
      {...props}
      type="button"
      className={classNames(style.button, style.toggle, {
        [style.nolabel]: !label,
      })}
      data-variant={variant || "default"}
      data-size={size || "default"}
      aria-pressed={controlled.value ? "true" : "false"}
      onClick={() => {
        controlled.onChange(!controlled.value);
      }}
    >
      <span className={style.content}>
        {!!icon && <span data-type="icon">{icon}</span>}
        {!!label && <span data-label>{label}</span>}
        {!!badgeContent && <span className={style.badge}>{badgeContent}</span>}
        {!!asDropdown && <DropdownArrow data-dropdown data-type="icon" />}
      </span>
    </button>
  );
}

BaseToggleButton.displayName = "ToggleButton";
