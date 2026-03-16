import { RangeSlider, type RangeSliderProps } from "./RangeSlider";
import { SingleSlider, type SingleSliderProps } from "./SingleSlider";

/**
 * The Slider component supports the following sub-components:
 * - `Slider.Single` — Single-handle slider. Accepts `value`, `defaultValue`, `name`, `onChange`, `onChangeCommitted`, and shared props (`min`, `max`, `step`, `orientation`, `marks`, `label`, etc.).
 * - `Slider.Range` — Dual-handle range slider. Accepts `value` (array), `startName`, `endName`, `onChange`, `onChangeCommitted`, and the same shared props.
 */
export const Slider = {
  Single: SingleSlider,
  Range: RangeSlider,
};

export type SliderProps = {
  Single: SingleSliderProps;
  Range: RangeSliderProps;
};
