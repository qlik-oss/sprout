import { type ReactNode, type Ref, forwardRef, isValidElement } from "react";

import { useId } from "@qlik/sprout-react-hooks";
import DropdownArrow from "@qlik/sprout-icons/react/DropdownArrow";

import { Badge } from "../Badge";
import { Tooltip, type TooltipProps } from "../Tooltip";
import { classNames } from "../classNames";
import type { ToggleButtonProps } from "./ToggleButton";
import { useToggle } from "./hook";

import style from "../Button/Button.module.css";

export type ToggleIconButtonProps = ToggleButtonProps & {
  placement?: TooltipProps["placement"];
  icon: ReactNode;
};

export const ToggleIconButton = forwardRef(BaseToggleIconButton);

function BaseToggleIconButton(
  {
    label,
    badge,
    icon,
    placement,
    variant,
    size,
    onChange,
    toggled,
    asDropdown = false,
    defaultToggled,
    id,
    ...props
  }: ToggleIconButtonProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const tooltipId = useId();
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
  return (
    <Tooltip id={tooltipId} title={label} placement={placement} ref={ref}>
      <button
        id={id}
        aria-describedby={tooltipId}
        type="button"
        aria-label={label}
        // label is only for a11y and not visible on the button
        className={classNames(style.button, style.toggle, style.nolabel)}
        data-variant={variant || "default"}
        data-size={size || "default"}
        aria-pressed={controlled.value || false}
        onClick={() => {
          controlled.onChange(!controlled.value);
        }}
        {...props}
      >
        <span className={classNames("gap-m", style.content)}>
          {icon ? <span data-type="icon">{icon}</span> : null}
          {badgeContent ? (
            <span className={style.badge}>{badgeContent}</span>
          ) : null}
          {asDropdown ? <DropdownArrow data-dropdown data-type="icon" /> : null}
        </span>
      </button>
    </Tooltip>
  );
}

BaseToggleIconButton.displayName = "ToggleIconButton";
