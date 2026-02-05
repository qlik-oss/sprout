import type { ReactNode } from "react";

import { tokens } from "@qlik/design-tokens";

import { classNames } from "../classNames";
import type {
  CommonSliderProps,
  PickedFieldProps,
  SliderMarkProps,
} from "./common.types";

import styles from "./Slider.module.css";

function TextAndMark({
  mark,
  disabled,
  orientation = "horizontal",
  showLabel = true,
  valueLabelFormat,
  verticalMarkLabels,
  isSelected = false,
  inSelectedRange = true,
}: {
  mark: SliderMarkProps;
  disabled?: SliderIntervalsProps["disabled"];
  orientation?: CommonSliderProps["orientation"];
  showLabel?: boolean;
  valueLabelFormat?: (value: number) => ReactNode;
  verticalMarkLabels?: boolean;
  isSelected?: boolean;
  inSelectedRange?: boolean;
}) {
  return (
    <>
      <div
        className={classNames("flex", "items-center", {
          "px-m": orientation === "horizontal",
          "px-xs": orientation === "vertical",
        })}
      >
        <span
          className={classNames(styles.slider_interval_mark)}
          data-orientation={orientation}
        />
      </div>
      {showLabel ? (
        <span
          className={
            classNames("font-label-s", styles.slider_interval_label, {
              "text-default": inSelectedRange,
              "text-weak": !inSelectedRange,
              "text-disabled": !!disabled,
              [styles.slider_interval_label_selected]: isSelected,
            }) +
            (verticalMarkLabels && orientation === "horizontal"
              ? ` ${styles.slider_interval_label_vertical}`
              : "")
          }
        >
          {mark.label ??
            (valueLabelFormat ? valueLabelFormat(mark.value) : mark.value)}
        </span>
      ) : null}
    </>
  );
}

type SliderIntervalsProps = Pick<
  CommonSliderProps,
  "max" | "min" | "orientation"
> &
  Pick<PickedFieldProps, "disabled"> & {
    markValues?: Array<SliderMarkProps>;
    markLabels?: boolean;
    verticalMarkLabels?: boolean;
    valueLabelFormat?: (value: number) => ReactNode;
    currentValue?: number | Array<number>;
    onMarkPress?: (value: number, event: Event) => void;
  };

export function SliderIntervals({
  disabled,
  min,
  max,
  orientation = "horizontal",
  markValues,
  markLabels,
  verticalMarkLabels,
  valueLabelFormat,
  currentValue,
  onMarkPress,
}: SliderIntervalsProps) {
  if (min === undefined || max === undefined) {
    return null;
  }

  const isVertical = orientation === "vertical";
  const range = max - min;

  // Always show min and max, plus any mark values if provided
  const allValues = Array.isArray(markValues)
    ? markValues
    : [{ value: min }, { value: max }];

  const isMarkSelected = (markValue: number): boolean => {
    if (currentValue === undefined) return false;
    if (Array.isArray(currentValue)) {
      return currentValue.includes(markValue);
    }
    return currentValue === markValue;
  };

  const isMarkInSelectedRange = (markValue: number): boolean => {
    if (currentValue === undefined) return true;
    if (Array.isArray(currentValue)) {
      // Range slider: in range if within the range
      const [start, end] = currentValue;
      return markValue >= start && markValue <= end;
    }
    // Single slider: in range if less than or equal to current value
    return markValue <= currentValue;
  };

  return (
    <div
      className={classNames({
        "pl-m": !isVertical,
        "pr-m": !isVertical,
        "pb-m": isVertical,
        "pt-m": isVertical,
      })}
    >
      <div
        className={classNames(styles.slider_intervals_container, {
          "w-full": !isVertical,
        })}
        data-orientation={orientation}
      >
        {allValues.map((mark) => {
          const normalizedPercent = ((mark.value - min) / range) * 100;
          const gripHalfWidth = `calc(${tokens.common_sizing_xl} / 2)`;
          const adjustedPosition = `calc(${normalizedPercent}% * (100% - ${tokens.common_sizing_xl}) / 100% + ${gripHalfWidth})`;

          return (
            <div
              key={mark.value}
              className={classNames({
                [styles.slider_interval_position_horizontal]: !isVertical,
              })}
              style={
                isVertical
                  ? {
                      gridColumn: 1,
                      gridRow: 1,
                      alignSelf: "end",
                      position: "relative",
                      bottom: adjustedPosition,
                      transform: "translateY(50%)",
                    }
                  : {
                      gridColumn: 1,
                      gridRow: 1,
                      justifySelf: "start",
                      marginInlineStart: adjustedPosition,
                    }
              }
            >
              <button
                type="button"
                className={classNames(
                  styles.slider_interval_button,
                  "flex",
                  "items-center",
                  {
                    "gap-m": !isVertical,
                    "gap-xs": isVertical,
                    "flex-col": !isVertical,
                    "flex-row": isVertical,
                  },
                )}
                aria-label={String(mark.value)}
                disabled={!!disabled}
                onClick={(event) => {
                  event.stopPropagation();
                  onMarkPress?.(mark.value, event.nativeEvent);
                }}
              >
                <TextAndMark
                  mark={mark}
                  disabled={disabled}
                  orientation={orientation}
                  valueLabelFormat={valueLabelFormat}
                  verticalMarkLabels={verticalMarkLabels}
                  isSelected={isMarkSelected(mark.value)}
                  inSelectedRange={isMarkInSelectedRange(mark.value)}
                  showLabel={
                    mark.value === min ||
                    mark.value === max ||
                    markLabels === true ||
                    ("label" in mark && mark.label !== undefined)
                  }
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

SliderIntervals.displayName = "Slider.Intervals";
