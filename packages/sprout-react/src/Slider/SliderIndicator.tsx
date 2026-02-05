import { classNames } from "../classNames";

import styles from "./Slider.module.css";

type SliderIndicatorProps = {
  start?: number;
  width?: number;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
};

export function SliderIndicator({
  disabled,
  start,
  width,
  orientation = "horizontal",
}: SliderIndicatorProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      data-disabled={disabled}
      className={classNames(
        "radius-round",
        "border-box",
        "absolute",
        styles.slider_indicator,
        {
          "h-full": !isVertical,
          "w-full": isVertical,
        },
      )}
      role="presentation"
      style={
        isVertical
          ? { insetBlockEnd: `${start}%`, blockSize: `${width}%` }
          : { insetInlineStart: `${start}%`, inlineSize: `${width}%` }
      }
    />
  );
}

SliderIndicator.displayName = "Slider.Indicator";
