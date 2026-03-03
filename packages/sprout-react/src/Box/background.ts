import { classNames } from "../classNames";
import type { BackgroundColor } from "./tokens";

export type BackgroundProps = {
  bgColor?: BackgroundColor;
};

export function getBackgroundProps<
  T extends BackgroundProps & { className?: string },
>({ bgColor, className, ...props }: T) {
  const newClassName = classNames({
    [className || "not_existing"]: !!className,
    [`bg_${bgColor || "default"}`]: !!bgColor,
  });
  return { className: newClassName, ...props };
}
