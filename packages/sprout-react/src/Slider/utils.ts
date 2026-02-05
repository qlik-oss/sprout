import type { ReactNode } from "react";

export function getClampedPercentFromValue(
  value: number,
  min: number,
  max: number,
): number {
  if (min === max) return 0;
  const PERCENT_MIN = 0;
  const PERCENT_MAX = 100;

  const valueRange = max - min;
  const distanceFromMin = value - min;
  const percent = (distanceFromMin / valueRange) * 100;

  return Math.min(PERCENT_MAX, Math.max(PERCENT_MIN, percent));
}

export function getValueFromPointer(
  trackRect: DOMRect,
  isRtl: boolean,
  orientation: "horizontal" | "vertical",
  min: number,
  max: number,
  step: number,
  event: PointerEvent,
): number {
  let percent: number;

  if (orientation === "vertical") {
    const offsetY = trackRect.bottom - event.clientY;
    percent = Math.min(Math.max(offsetY / trackRect.height, 0), 1);
  } else {
    const offsetX = isRtl
      ? trackRect.right - event.clientX
      : event.clientX - trackRect.left;
    percent = Math.min(Math.max(offsetX / trackRect.width, 0), 1);
  }

  const rawValue = min + percent * (max - min);
  const clampedRawValue = Math.min(max, Math.max(min, rawValue));

  const effectiveStep = Number.isFinite(step) && step > 0 ? step : 1;
  const newValue = Math.round(clampedRawValue / effectiveStep) * effectiveStep;
  const clampedNewValue = Math.min(max, Math.max(min, newValue));

  return clampedRawValue >= max - effectiveStep * 0.1 ? max : clampedNewValue;
}

export const isRangeOutOfBounds = (
  [start, end]: Array<number>,
  min: number,
  max: number,
) => start < min || end < min || start > max || end > max;

export const isValueOutOfBounds = (value: number, min: number, max: number) =>
  value < min || value > max;

export function resolveMarkValues(
  marks: boolean | Array<{ value: number; label?: ReactNode }> | undefined,
  min: number,
  max: number,
  step: number,
): Array<{ value: number; label?: ReactNode }> | undefined {
  if (!marks) return undefined;

  let values: Array<{ value: number; label?: ReactNode }>;

  if (marks === true) {
    values = [];
    const effectiveStep = Number.isFinite(step) && step > 0 ? step : 1;

    if (min === max) {
      values.push({ value: min });
    } else {
      for (let i = min; i <= max; i += effectiveStep) {
        values.push({ value: i });
      }
    }
  } else {
    values = [...marks];
  }

  if (!values.find((m) => m.value === min)) {
    values.unshift({ value: min });
  }
  if (values[values.length - 1].value !== max) {
    values.push({ value: max });
  }

  return values;
}
