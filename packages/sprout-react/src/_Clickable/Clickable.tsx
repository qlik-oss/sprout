import { type CSSProperties, type Ref, forwardRef } from "react";

import { classNames } from "../classNames";
import type { HTMLButtonProps } from "../htmlTypes";

import style from "./Clickable.module.css";

export type ClickableProps = {
  className?: string;
  style?: CSSProperties;
} & HTMLButtonProps;

export const Clickable = forwardRef<HTMLButtonElement, ClickableProps>(
  ClickableBase,
);

function ClickableBase(
  { className, disabled, ...props }: ClickableProps,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      type="button"
      {...props}
      disabled={disabled}
      className={classNames(
        "p-0",
        "m-0",
        "border-box",
        "border-none",
        "bg-transparent",
        "outline-none",
        style.clickable,
        {
          [className || ""]: !!className,
          "cursor-default": !!disabled,
          "cursor-pointer": !disabled,
        },
      )}
    />
  );
}
ClickableBase.displayName = "Clickable";
