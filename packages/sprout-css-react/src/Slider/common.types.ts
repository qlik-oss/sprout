import type { ReactNode } from "react";

import type { FieldProps } from "../Field";
import type { DataAttributes } from "../htmlTypes";

export type SliderMarkProps = {
  value: number;
  label?: ReactNode;
};

export type PickedFieldProps = Pick<
  FieldProps,
  | "errorMessages"
  | "labelId"
  | "label"
  | "helpTextId"
  | "helpText"
  | "optional"
  | "disabled"
  | "htmlFor"
  | "infoIconTooltip"
>;

export type CommonSliderProps = {
  hasError?: boolean;
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  marks?: boolean | Array<SliderMarkProps>;
  markLabels?: boolean;
  verticalMarkLabels?: boolean;
  valueLabelFormat?: (value: number) => ReactNode;
} & DataAttributes;
