import { classNames } from "../classNames";
import type { Elevation, Layer } from "./tokens";

export type BoxShadowProps = {
  boxShadow?: Elevation;
  zIndex?: Layer;
};

export function getBoxShadow<
  T extends BoxShadowProps & { className?: string },
>({ boxShadow, zIndex, className, ...props }: T) {
  const newClassName = classNames({
    [className || ""]: !!className,
    [`box_shadow_${boxShadow || "default"}`]: !!boxShadow,
    [`z_${zIndex || "context"}`]: !!zIndex,
  });
  return { className: newClassName, ...props };
}
