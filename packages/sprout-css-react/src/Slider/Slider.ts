import { RangeSlider, type RangeSliderProps } from "./RangeSlider";
import { SingleSlider, type SingleSliderProps } from "./SingleSlider";

export const Slider = {
  Single: SingleSlider,
  Range: RangeSlider,
};

export type SliderProps = {
  Single: SingleSliderProps;
  Range: RangeSliderProps;
};
