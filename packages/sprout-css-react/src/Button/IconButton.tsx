import { type Ref, forwardRef } from "react";

import { Tooltip } from "../Tooltip";
import { Button, type ButtonProps } from "./Button";

export type ButtonIconProps = ButtonProps;

export const IconButton = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ButtonIconBase,
);

function ButtonIconBase(
  { label, "aria-label": ariaLabel, ...props }: ButtonIconProps,
  ref?: Ref<HTMLButtonElement>,
) {
  if (!label) {
    return <Button aria-label={ariaLabel} {...props} ref={ref} />;
  }
  return (
    <Tooltip placement="top" title={label} ref={ref}>
      <Button aria-label={ariaLabel || label} {...props} />
    </Tooltip>
  );
}
