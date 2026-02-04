import { useState } from "react";

import { Slider, type SliderProps } from "./Slider";

export function SingleSliderTest(props: SliderProps["Single"]) {
  return (
    <div data-testid="wrapper" id="component-testing">
      <Slider.Single label="Max Budget" {...props} />
    </div>
  );
}

export function ControlledSingleSliderTest() {
  const [value, setValue] = useState(50);

  return (
    <div data-testid="wrapper" id="component-testing">
      <Slider.Single
        label="Controlled Slider"
        value={value}
        onChange={setValue}
      />
      <div data-testid="value">{value}</div>
    </div>
  );
}

export function RangeSliderTest(props: SliderProps["Range"]) {
  return (
    <div data-testid="wrapper" id="component-testing">
      <Slider.Range label="Price Range" {...props} />
    </div>
  );
}

export function ControlledRangeSliderTest() {
  const [value, setValue] = useState<Array<number>>([20, 80]);

  return (
    <div data-testid="wrapper" id="component-testing">
      <Slider.Range
        label="Controlled Range Slider"
        value={value}
        onChange={(val, _event, index) => {
          setValue((prev) => {
            const next = [...prev];
            next[index] = val[index];
            return next;
          });
        }}
      />
      <div data-testid="value">{value.join(" - ")}</div>
    </div>
  );
}
