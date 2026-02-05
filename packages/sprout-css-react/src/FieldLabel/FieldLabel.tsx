import type { ReactNode } from "react";

import { InfoPopoverPrimitive } from "../_InfoPopoverPrimitive";
import { InfoTooltipPrimitive } from "../_InfoTooltipPrimitive";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLLabelProps } from "../htmlTypes";

export type FieldLabelProps = Omit<HTMLLabelProps, "label"> & {
  label?: ReactNode;
  optional?: boolean;
  htmlFor?: string;
  infoIconTooltip?: ReactNode;
  infoIconPopover?: ReactNode;
  disabled?: boolean;
};

export function FieldLabel({
  children,
  label,
  infoIconTooltip,
  infoIconPopover,
  optional,
  htmlFor,
  disabled,
  ...props
}: FieldLabelProps) {
  const t = useI18n();
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={classNames(
        "flex-noreset",
        "gap-s",
        "items-center",
        "font-label-xs-emphasized",
        {
          "text-default": !disabled,
          "text-disabled": !!disabled,
        },
      )}
    >
      {children}
      {label}
      {optional ? (
        <span
          className={classNames("font-label-xs", {
            "text-weak": !disabled,
            "text-disabled": !!disabled,
          })}
        >
          ({t("fieldlabel.optional")})
        </span>
      ) : null}
      {infoIconTooltip ? (
        <InfoTooltipPrimitive title={infoIconTooltip} />
      ) : null}
      {!infoIconTooltip && infoIconPopover ? (
        <InfoPopoverPrimitive content={infoIconPopover} />
      ) : null}
    </label>
  );
}
FieldLabel.displayName = "FieldLabel";
