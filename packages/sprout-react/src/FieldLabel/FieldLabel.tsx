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

/**
 * The FieldLabel component accepts all the native label props outside of `label`, and also supports the following custom props:
 * @param label - the label text rendered inside the element.
 * @param optional - whether the associated field is optional, renders an optional indicator.
 * @param htmlFor - the id of the form control this label is associated with.
 * @param infoIconTooltip - content for an info tooltip icon shown next to the label.
 * @param infoIconPopover - content for an info popover icon shown next to the label.
 * @param disabled - whether the label is in a disabled state.
 */
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
