import type { ReactNode } from "react";

import { InfoIcon } from "@qlik/sprout-icons/react";

import { Popover } from "../Popover";
import { Clickable } from "../_Clickable/Clickable";
import { classNames } from "../classNames";
import type { HTMLButtonProps } from "../htmlTypes";

export type InfoPopoverPrimitiveProps = {
  content: ReactNode;
} & Omit<HTMLButtonProps, "content">;

export function InfoPopoverPrimitive(props: InfoPopoverPrimitiveProps) {
  const { content, ...rest } = props;

  return (
    <Popover
      content={<div className={classNames("p-l")}>{content}</div>}
      data-testid="info-popover-content"
    >
      <Clickable
        {...rest}
        className={classNames("inline-flex", "size-l")}
        type="button"
        data-testid="info-popover-button"
      >
        <InfoIcon
          width={undefined}
          height={undefined}
          className={classNames("shrink-0", "fill-current")}
        />
      </Clickable>
    </Popover>
  );
}

InfoPopoverPrimitive.displayName = "InfoPopoverPrimitive";
