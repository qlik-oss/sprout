import { type ReactNode, type Ref, forwardRef } from "react";

import { Badge, type BadgeProps } from "../Badge";
import { ProgressCircular } from "../Progress";
import { classNames } from "../classNames";
import { DropdownArrow } from "../glyphs";
import type { HTMLButtonProps } from "../htmlTypes";

import style from "./Button.module.css";

const LABEL_LENGTH_FOR_TITLE = 20;

export type ButtonProps = Omit<HTMLButtonProps, "label"> & {
  /**
   * Variant of the button. destructive is deprecated you should use the dedicated property instead.
   */
  variant?: "primary" | "secondary" | "quiet" | "default" | "destructive";
  /**
   * Apply to variant primary and secondary for now
   */
  destructive?: boolean;
  badge?: BadgeProps;
  asDropdown?: boolean;
  justified?: boolean;
  size?: "small" | "default";
  label?: string;
  loading?: boolean;
  icon?: ReactNode;
};

/**
 * The Button component accepts all the native button props outside of `label`, and also supports the following custom props:
 * @param variant - the variant of the button, can be primary, secondary, quiet, default or destructive. destructive is deprecated, use the dedicated `destructive` prop instead.
 * @param destructive - whether the button is destructive, applies to variant primary and secondary.
 * @param badge - the badge props, renders a badge on the top right corner of the button.
 * @param asDropdown - whether the button is a dropdown, renders a dropdown arrow on the right side of the button.
 * @param justified - whether the button is justified, makes the button take the full width of its container.
 * @param size - the size of the button, can be small or default.
 * @param label - the label of the button, rendered as the content of the button.
 * @param loading - whether the button is in loading state, renders a loader on top of the button and disables it.
 * @param icon - the icon of the button, rendered on the left side of the label.
 */
export const Button = forwardRef(BaseButton);

function BaseButton(
  {
    variant = "default",
    badge,
    asDropdown,
    justified,
    size = "default",
    destructive,
    disabled,
    loading,
    label,
    type = "button",
    icon,
    title,
    ...props
  }: ButtonProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const safeVariant = variant === "destructive" ? "primary" : variant;
  const safeDestructive = destructive || variant === "destructive";

  return (
    <button
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      data-surface="button"
      className={classNames(style.button, {
        [style.nolabel]: !label,
        [style.borderless]:
          safeVariant === "quiet" || safeVariant === "primary",
      })}
      data-variant={safeVariant}
      data-destructive={safeDestructive}
      data-size={size}
      disabled={disabled || loading}
      data-loading={loading}
      data-justified={justified || false}
      title={
        title ||
        (label && label.length > LABEL_LENGTH_FOR_TITLE ? label : undefined)
      }
      {...props}
    >
      <span className={style.content}>
        {icon ? <span data-type="icon">{icon}</span> : null}
        {label ? <span data-label>{label}</span> : null}
        {badge ? (
          <span className={style.badge}>
            <Badge {...badge} />
          </span>
        ) : null}
        {asDropdown ? (
          <DropdownArrow
            height={undefined}
            width={undefined}
            data-dropdown
            data-type="icon"
          />
        ) : null}
        {loading ? (
          <ProgressCircular
            data-loader
            size={size === "small" ? "s" : "m"}
            variant={destructive ? "destructive" : "default"}
          />
        ) : null}
      </span>
    </button>
  );
}

BaseButton.displayName = "Button";
