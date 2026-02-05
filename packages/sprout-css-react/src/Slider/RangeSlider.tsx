import {
  type ChangeEvent,
  type Ref,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Field } from "../Field";
import { classNames } from "../classNames";
import { SliderGrip } from "./SliderGrip";
import { SliderIndicator } from "./SliderIndicator";
import { SliderIntervals } from "./SliderIntervals";
import { SliderTrack } from "./SliderTrack";
import type { CommonSliderProps, PickedFieldProps } from "./common.types";
import { useSliderFieldProps } from "./useSliderFieldProps";
import {
  getClampedPercentFromValue,
  getValueFromPointer,
  isRangeOutOfBounds,
  resolveMarkValues,
} from "./utils";

import styles from "./Slider.module.css";

export type RangeSliderProps = {
  defaultValue?: Array<number>;
  endInputRef?: Ref<HTMLInputElement>;
  endName?: string;
  value?: Array<number>;
  onChange?: (
    value: Array<number>,
    event: Event,
    activeGripIndex: number,
  ) => void;
  onChangeCommitted?: (value: Array<number>, event: Event) => void;
  startInputRef?: Ref<HTMLInputElement>;
  startName?: string;
} & CommonSliderProps &
  PickedFieldProps;

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  RangeSliderBase,
);

function RangeSliderBase(
  {
    defaultValue,
    disabled,
    endInputRef,
    endName,
    errorMessages,
    hasError,
    helpText,
    helpTextId,
    htmlFor,
    infoIconTooltip,
    label,
    labelId,
    max = 100,
    min = 0,
    onChange,
    onChangeCommitted,
    optional,
    orientation = "horizontal",
    startInputRef,
    startName,
    step: stepProp = 1,
    marks,
    markLabels,
    valueLabelFormat,
    verticalMarkLabels,
    value,
    ...rest
  }: RangeSliderProps,
  ref?: Ref<HTMLDivElement>,
) {
  const step = Number.isFinite(stepProp) && stepProp > 0 ? stepProp : 1;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const innerTrackRef = useRef<HTMLDivElement | null>(null);
  const activeGripRef = useRef<number | null>(null);
  const startLabelRef = useRef<HTMLOutputElement | null>(null);
  const endLabelRef = useRef<HTMLOutputElement | null>(null);

  const [isOverlapping, setIsOverlapping] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<Array<number>>(
    defaultValue ?? [min, max],
  );
  const isControlled = typeof value !== "undefined";
  const resolvedValue = isControlled ? value : uncontrolledValue;

  const currentValue = useMemo(
    () => (resolvedValue.length >= 2 ? resolvedValue.slice(0, 2) : [min, max]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isControlled, value, uncontrolledValue, min, max],
  );

  if (isRangeOutOfBounds(currentValue, min, max)) {
    // eslint-disable-next-line no-console
    console.warn(
      `RangeSlider: current values [${currentValue[0]}, ${currentValue[1]}] is out of bounds [${min}, ${max}].`,
    );
  }

  if (resolvedValue.length > 2) {
    // eslint-disable-next-line no-console
    console.warn(
      "RangeSlider expects exactly 2 values ([start, end]). Extra values will be ignored.",
    );
  }

  const { fieldProps, inputProps } = useSliderFieldProps({
    disabled,
    errorMessages,
    hasError,
    helpText,
    helpTextId,
    htmlFor,
    infoIconTooltip,
    label,
    labelId,
    optional,
  });

  const updateSliderValue = useCallback(
    (
      baseValue: Array<number>,
      event: Event | ChangeEvent<HTMLInputElement> | KeyboardEvent,
      activeGripIndex: number,
    ) => {
      const [start, end] = baseValue;

      // Allow handles to swap - always keep values sorted with min first
      const sortedValue = [Math.min(start, end), Math.max(start, end)];

      if (!isControlled) {
        setUncontrolledValue(sortedValue);
      }

      onChange?.(sortedValue, event as Event, activeGripIndex);
    },
    [isControlled, onChange],
  );

  const markValues = useMemo(() => {
    return resolveMarkValues(marks, min, max, step);
  }, [marks, min, max, step]);

  const updateValueFromPointer = useCallback(
    (event: PointerEvent) => {
      if (!trackRef.current || !innerTrackRef.current) return;
      event.preventDefault();

      const trackRect = innerTrackRef.current.getBoundingClientRect();
      const isRtl = getComputedStyle(trackRef.current).direction === "rtl";

      const newValue = getValueFromPointer(
        trackRect,
        isRtl,
        orientation,
        min,
        max,
        step,
        event,
      );

      const activeGrip = activeGripRef.current ?? 0;
      // Allow handles to cross - just update the active grip's value
      const nextValue =
        activeGrip === 0
          ? [newValue, currentValue[1]]
          : [currentValue[0], newValue];
      updateSliderValue(nextValue, event, activeGrip);
    },
    [min, max, step, currentValue, updateSliderValue, orientation],
  );

  const valueInPercent = useMemo(() => {
    return [
      getClampedPercentFromValue(currentValue[0], min, max),
      getClampedPercentFromValue(currentValue[1], min, max),
    ];
  }, [currentValue, min, max]);

  const indicatorStart = Array.isArray(valueInPercent) ? valueInPercent[0] : 0;
  const indicatorWidth = Array.isArray(valueInPercent)
    ? valueInPercent[1] - indicatorStart
    : valueInPercent;

  useEffect(() => {
    const trackElement = trackRef.current;
    if (!trackElement) return;

    const handleTrackPointerDown = (event: PointerEvent) => {
      if (!trackRef.current || !innerTrackRef.current) return;

      const trackRect = innerTrackRef.current.getBoundingClientRect();
      const isRtl = getComputedStyle(trackRef.current).direction === "rtl";
      const newValue = getValueFromPointer(
        trackRect,
        isRtl,
        orientation,
        min,
        max,
        step,
        event,
      );

      const distanceToStart = Math.abs(currentValue[0] - newValue);
      const distanceToEnd = Math.abs(currentValue[1] - newValue);
      activeGripRef.current = distanceToStart < distanceToEnd ? 0 : 1;

      updateValueFromPointer(event);

      // the event listener is removed by the handlepointer up
      document.addEventListener("pointermove", updateValueFromPointer);

      const handlePointerUp = () => {
        document.removeEventListener("pointermove", updateValueFromPointer);
        document.removeEventListener("pointerup", handlePointerUp);
        onChangeCommitted?.(currentValue, event);
        activeGripRef.current = null;
      };

      document.addEventListener("pointerup", handlePointerUp);
    };

    trackElement.addEventListener("pointerdown", handleTrackPointerDown);

    // eslint-disable-next-line consistent-return
    return () => {
      trackElement.removeEventListener("pointerdown", handleTrackPointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateValueFromPointer, onChangeCommitted]);

  useEffect(() => {
    if (
      !innerTrackRef.current ||
      !startLabelRef.current ||
      !endLabelRef.current
    ) {
      return;
    }

    const trackElement = innerTrackRef.current;
    const startLabel = startLabelRef.current;
    const endLabel = endLabelRef.current;

    // Get dimensions
    const trackSize =
      orientation === "vertical"
        ? trackElement.offsetHeight
        : trackElement.offsetWidth;
    const startLabelSize =
      orientation === "vertical"
        ? startLabel.offsetHeight
        : startLabel.offsetWidth;
    const endLabelSize =
      orientation === "vertical" ? endLabel.offsetHeight : endLabel.offsetWidth;

    // Calculate positions in pixels
    const startPosition = (valueInPercent[0] / 100) * trackSize;
    const endPosition = (valueInPercent[1] / 100) * trackSize;

    // Calculate the distance between grip centers
    const distance = Math.abs(endPosition - startPosition);

    // Labels overlap when the distance between grips is less than half of each label's width combined
    // For vertical, labels are stacked so we need less distance for them to merge
    // For horizontal, use the combined widths with a buffer for the "-" in horizontal orientation
    const buffer = orientation === "vertical" ? 0 : 9;
    const overlapThreshold = startLabelSize / 2 + endLabelSize / 2 + buffer;
    const shouldOverlap = distance < overlapThreshold;

    if (isOverlapping !== shouldOverlap) {
      setIsOverlapping(shouldOverlap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue, min, max, orientation, valueInPercent, valueLabelFormat]);

  return (
    <div
      {...rest}
      role="group"
      aria-labelledby={fieldProps.labelId}
      aria-disabled={disabled}
      data-orientation={orientation}
      className={classNames(styles.slider_field)}
      ref={ref}
    >
      <Field {...fieldProps}>
        <div
          className={classNames(styles.slider_content)}
          data-orientation={orientation}
        >
          <SliderTrack
            ref={trackRef}
            innerTrackRef={innerTrackRef}
            orientation={orientation}
          >
            <SliderIndicator
              start={indicatorStart}
              width={indicatorWidth}
              orientation={orientation}
            />
            <SliderGrip
              aria-labelledby={`${inputProps.id}-0 ${inputProps.id}`}
              id={`${inputProps.id}-0`}
              value={currentValue[0]}
              currentPercent={valueInPercent[0]}
              index={0}
              min={min}
              max={max}
              name={startName}
              step={step}
              overlappingGrips={isOverlapping}
              rangeEndValue={isOverlapping ? currentValue[1] : undefined}
              labelPercent={
                isOverlapping
                  ? (valueInPercent[0] + valueInPercent[1]) / 2
                  : undefined
              }
              trackRef={innerTrackRef}
              labelRef={startLabelRef}
              orientation={orientation}
              markValues={markValues}
              valueLabelFormat={valueLabelFormat}
              ref={startInputRef}
              onChange={(event) => {
                const newValue = Math.min(
                  Math.max(event.target.valueAsNumber, min),
                  max,
                );
                const updated = [newValue, currentValue[1]];
                activeGripRef.current = 0;
                updateSliderValue(updated, event, 0);
              }}
            />
            <SliderGrip
              aria-labelledby={`${inputProps.id}-1 ${inputProps.id}`}
              id={`${inputProps.id}-1`}
              value={currentValue[1]}
              currentPercent={valueInPercent[1]}
              index={1}
              min={min}
              max={max}
              name={endName}
              step={step}
              overlappingGrips={isOverlapping}
              labelRef={endLabelRef}
              orientation={orientation}
              markValues={markValues}
              valueLabelFormat={valueLabelFormat}
              onChange={(event) => {
                const newValue = Math.min(
                  Math.max(event.target.valueAsNumber, min),
                  max,
                );
                const updated = [currentValue[0], newValue];
                activeGripRef.current = 1;
                updateSliderValue(updated, event, 1);
              }}
              ref={endInputRef}
            />
          </SliderTrack>
          <SliderIntervals
            min={min}
            max={max}
            disabled={fieldProps.disabled}
            orientation={orientation}
            markValues={markValues}
            markLabels={markLabels}
            verticalMarkLabels={verticalMarkLabels}
            valueLabelFormat={valueLabelFormat}
            currentValue={currentValue}
            onMarkPress={(markValue, event) => {
              const distanceToStart = Math.abs(currentValue[0] - markValue);
              const distanceToEnd = Math.abs(currentValue[1] - markValue);
              const activeGripIndex = distanceToStart <= distanceToEnd ? 0 : 1;
              activeGripRef.current = activeGripIndex;

              const nextValue: Array<number> =
                activeGripIndex === 0
                  ? [markValue, currentValue[1]]
                  : [currentValue[0], markValue];

              updateSliderValue(nextValue, event, activeGripIndex);
            }}
          />
        </div>
      </Field>
    </div>
  );
}

RangeSliderBase.displayName = "Slider.Range";
