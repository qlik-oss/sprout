import type { CSSProperties, ReactNode } from "react";

import { InfoIcon } from "@qlik/sprout-icons/react";

import { Tooltip } from "../Tooltip";
import { Clickable } from "../_Clickable/Clickable";
import { classNames } from "../classNames";
import type { HTMLButtonProps } from "../htmlTypes";

export type InfoTooltipPrimitiveProps = {
  title: ReactNode;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLButtonProps, "title">;

export function InfoTooltipPrimitive({
  title,
  className,
  disabled,

  ...rest
}: InfoTooltipPrimitiveProps) {
  const button = (
    <Clickable
      {...rest}
      disabled={disabled}
      data-testid="info-tooltip-button"
      className={classNames("inline-flex", "size-l", {
        [className || ""]: !!className,
      })}
      type="button"
    >
      <InfoIcon
        width={undefined}
        height={undefined}
        className={classNames("shrink-0", "fill-current")}
      />
    </Clickable>
  );

  return disabled ? (
    button
  ) : (
    <Tooltip title={title} placement="top">
      {button}
    </Tooltip>
  );
}
InfoTooltipPrimitive.displayName = "InfoTooltipPrimitive";
