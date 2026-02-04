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
  isValueOutOfBounds,
  resolveMarkValues,
} from "./utils";

import styles from "./Slider.module.css";

export type SingleSliderProps = {
  defaultValue?: number;
  inputRef?: Ref<HTMLInputElement>;
  name?: string;
  value?: number;
  onChange?: (value: number, event: Event) => void;
  onChangeCommitted?: (value: number, event: Event) => void;
} & CommonSliderProps &
  PickedFieldProps;

export const SingleSlider = forwardRef<HTMLDivElement, SingleSliderProps>(
  SingleSliderBase,
);

function SingleSliderBase(
  {
    defaultValue,
    disabled,
    errorMessages,
    hasError,
    helpText,
    helpTextId,
    htmlFor,
    infoIconTooltip,
    inputRef,
    label,
    labelId,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    optional,
    orientation = "horizontal",
    step: stepProp = 1,
    marks,
    markLabels,
    valueLabelFormat,
    verticalMarkLabels,
    value,
    ...rest
  }: SingleSliderProps,
  ref?: Ref<HTMLDivElement>,
) {
  const step = Number.isFinite(stepProp) && stepProp > 0 ? stepProp : 1;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const innerTrackRef = useRef<HTMLDivElement | null>(null);

  const [uncontrolledValue, setUncontrolledValue] = useState<number>(
    defaultValue ?? min,
  );
  const isControlled = typeof value !== "undefined";
  const currentValue = isControlled ? value : uncontrolledValue;

  if (isValueOutOfBounds(currentValue, min, max)) {
    // eslint-disable-next-line no-console
    console.warn(
      `SingleSlider: current value ${currentValue} is out of bounds [${min}, ${max}].`,
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
      newValue: number,
      event: Event | ChangeEvent<HTMLInputElement> | KeyboardEvent,
    ) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }

      onChange?.(newValue, event as Event);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentValue, isControlled, onChange],
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

      updateSliderValue(newValue, event);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min, max, step, orientation, currentValue, updateSliderValue, markValues],
  );

  const valueInPercent = useMemo(() => {
    return getClampedPercentFromValue(currentValue, min, max);
  }, [currentValue, min, max]);

  useEffect(() => {
    const trackElement = trackRef.current;
    if (!trackElement) return;

    const handleTrackPointerDown = (event: PointerEvent) => {
      updateValueFromPointer(event);

      document.addEventListener("pointermove", updateValueFromPointer);

      const handlePointerUp = () => {
        document.removeEventListener("pointermove", updateValueFromPointer);
        document.removeEventListener("pointerup", handlePointerUp);
        onChangeCommitted?.(currentValue, event);
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

  return (
    <div
      {...rest}
      role="group"
      aria-labelledby={fieldProps.labelId}
      aria-disabled={fieldProps.disabled}
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
              start={0}
              width={valueInPercent}
              disabled={fieldProps.disabled}
              orientation={orientation}
            />
            <SliderGrip
              disabled={inputProps.disabled}
              aria-labelledby={`${inputProps.id}-0 ${inputProps.id}`}
              id={`${inputProps.id}-0`}
              value={currentValue}
              currentPercent={valueInPercent}
              index={0}
              min={min}
              max={max}
              name={name}
              step={step}
              orientation={orientation}
              markValues={markValues}
              valueLabelFormat={valueLabelFormat}
              ref={inputRef}
              onChange={(event) => {
                const newValue = Math.min(
                  Math.max(event.target.valueAsNumber, min),
                  max,
                );
                updateSliderValue(newValue, event);
              }}
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
              updateSliderValue(markValue, event);
            }}
          />
        </div>
      </Field>
    </div>
  );
}

SingleSliderBase.displayName = "Slider.Single";
