import {
  type CSSProperties,
  type ReactNode,
  type Ref,
  type RefObject,
  forwardRef,
  useEffect,
  useState,
} from "react";

import { SliderIcon } from "@qlik/sprout-icons/react";

import type { InputProps } from "../Input";
import { classNames } from "../classNames";
import type { SliderMarkProps } from "./common.types";

import styles from "./Slider.module.css";

type SliderGripProps = {
  index?: number;
  currentPercent?: number;
  overlappingGrips?: boolean;
  rangeEndValue?: number;
  labelPercent?: number;
  trackRef?: RefObject<HTMLDivElement | null>;
  labelRef?: RefObject<HTMLOutputElement | null>;
  orientation?: "horizontal" | "vertical";
  markValues?: Array<SliderMarkProps>;
  valueLabelFormat?: (value: number) => ReactNode;
} & InputProps;

export const SliderGrip = forwardRef<HTMLInputElement, SliderGripProps>(
  SliderGripBase,
);

function SliderGripBase(
  {
    id,
    currentPercent,
    value,
    index,
    step,
    overlappingGrips,
    rangeEndValue,
    labelPercent,
    trackRef,
    labelRef,
    orientation = "horizontal",
    markValues,
    valueLabelFormat,
    ...rest
  }: SliderGripProps,
  ref?: Ref<HTMLInputElement>,
) {
  const gripIndex = index ?? 0;
  const isVertical = orientation === "vertical";
  const dataListId = markValues ? `${id}-marks` : undefined;
  const [labelOffsetPx, setLabelOffsetPx] = useState<number>(0);

  useEffect(() => {
    if (
      labelPercent !== undefined &&
      currentPercent !== undefined &&
      trackRef?.current
    ) {
      const trackElement = trackRef.current;
      const trackSize = isVertical
        ? trackElement.offsetHeight
        : trackElement.offsetWidth;
      const offsetPercent = labelPercent - currentPercent;

      const isRtl = getComputedStyle(trackElement).direction === "rtl";
      let directionMultiplier = 1;
      if (isVertical) {
        directionMultiplier = -1;
      } else if (isRtl) {
        directionMultiplier = -1;
      }

      const offsetPx = (offsetPercent / 100) * trackSize * directionMultiplier;
      setLabelOffsetPx(offsetPx);
    } else {
      setLabelOffsetPx(0);
    }
  }, [labelPercent, currentPercent, trackRef, isVertical]);

  let displayValue: ReactNode;
  if (rangeEndValue !== undefined) {
    // For vertical sliders, reverse the order since higher values are at the top
    const firstValue = isVertical ? rangeEndValue : value;
    const secondValue = isVertical ? value : rangeEndValue;
    const separator = isVertical ? "\n" : " - ";

    if (valueLabelFormat) {
      displayValue = `${valueLabelFormat(Number(firstValue))}${separator}${valueLabelFormat(Number(secondValue))}`;
    } else {
      displayValue = `${firstValue}${separator}${secondValue}`;
    }
  } else {
    displayValue = valueLabelFormat ? valueLabelFormat(Number(value)) : value;
  }

  const labelStyle: CSSProperties | undefined =
    labelOffsetPx !== 0
      ? ({ "--label-offset": `${labelOffsetPx}px` } as CSSProperties)
      : undefined;

  return (
    <div
      role="presentation"
      data-orientation={orientation}
      className={classNames(
        "absolute",
        "radius-subtle",
        "border-box",
        "border-default",
        "flex",
        "items-center",
        "justify-center",
        "box-shadow-default",
        styles.slider_grip,
      )}
      style={
        isVertical
          ? { insetBlockEnd: `${currentPercent}%` }
          : { insetInlineStart: `${currentPercent}%` }
      }
    >
      <output
        aria-live="off"
        htmlFor={id}
        data-orientation={orientation}
        className={classNames(
          "text-default",
          "font-label-s-emphasized",
          "absolute",
          "pointer-events-none",
          styles.slider_grip_value,
          {
            hidden: !!overlappingGrips && gripIndex === 1,
            "text-disabled": !!rest.disabled,
          },
        )}
        style={labelStyle}
        ref={labelRef}
      >
        {displayValue}
      </output>

      <SliderIcon />
      <input
        {...rest}
        aria-valuemin={Number(rest.min)}
        aria-valuemax={Number(rest.max)}
        aria-valuenow={Number(value)}
        aria-orientation={orientation}
        id={id}
        tabIndex={0}
        value={value}
        step={step}
        list={dataListId}
        className={classNames(
          "sr-only",
          "w-full",
          "h-full",
          styles.slider_input,
        )}
        type="range"
        ref={ref}
      />
      {Array.isArray(markValues) && dataListId !== undefined ? (
        <datalist id={dataListId}>
          {markValues.map((mark) => (
            <option
              key={mark.value}
              value={mark.value}
              aria-label={String(mark.value)}
            />
          ))}
        </datalist>
      ) : null}
    </div>
  );
}

SliderGripBase.displayName = "Slider.Grip";
