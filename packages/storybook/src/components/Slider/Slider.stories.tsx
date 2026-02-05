import { Slider, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { SliderRangeArgTypes, SliderSingleArgTypes } from "./Slider.argTypes";

type SingleStory = StoryObj<typeof Slider.Single>;
type RangeStory = StoryObj<typeof Slider.Range>;

const meta: Meta = {
  title: "Components/Slider",
  component: Slider.Single,
  parameters: {},
};

export default meta;

export const PlaygroundSingle: SingleStory = {
  render: (props) => (
    <div className={classNames("w-s")}>
      <Slider.Single {...props} />
    </div>
  ),
  args: {
    label: "Slider single",
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
  },
  argTypes: SliderSingleArgTypes,
  parameters: { chromatic: { disableSnapshot: true } },
};

export const PlaygroundRange: RangeStory = {
  render: (props) => (
    <div className={classNames("w-s")}>
      <Slider.Range {...props} />
    </div>
  ),
  args: {
    label: "Slider range",
    defaultValue: [20, 80],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
  },
  argTypes: SliderRangeArgTypes,
  parameters: { chromatic: { disableSnapshot: true } },
};

export const VisualTest = {
  render: () => (
    <div className={classNames("flex", "flex-row", "gap-xxl")}>
      <div className={classNames("flex", "flex-col", "gap-l", "w-xs")}>
        <Slider.Single defaultValue={50} label="Default" />
        <Slider.Single defaultValue={50} label="Hover" data-testid="hover" />
        <Slider.Single defaultValue={50} label="Focus" data-testid="focusVisible" />
        <Slider.Single defaultValue={50} label="Disabled" disabled />
        <Slider.Single
          defaultValue={50}
          label="With mark labels"
          marks={[
            { value: 0, label: "Min" },
            { value: 25 },
            { value: 50, label: "Mid" },
            { value: 75 },
            { value: 100, label: "Max" },
          ]}
          markLabels
        />
        <Slider.Single
          defaultValue={50}
          label="Vertical mark labels"
          step={10}
          marks
          markLabels
          verticalMarkLabels
          valueLabelFormat={(value) => `${value}%`}
        />
        <Slider.Single
          defaultValue={50}
          label="With helper text"
          helpText="Use the slider to choose a value within the allowed range"
        />
        <Slider.Single defaultValue={50} label="With error" errorMessages={["This is an error"]} />
      </div>

      <div className={classNames("flex", "flex-col", "gap-l", "w-xs")}>
        <Slider.Range label="Range" />
        <Slider.Range label="Range with marks" defaultValue={[30, 70]} step={10} marks />
        <Slider.Range label="Range custom min/max" min={100} max={600} defaultValue={[200, 470]} />
        <Slider.Range
          label="Range with optional"
          defaultValue={[40, 70]}
          optional
          infoIconTooltip="Info icon tooltip"
        />
      </div>

      <div className={classNames("flex", "flex-row", "gap-l")}>
        <Slider.Single defaultValue={50} label="Vertical" orientation="vertical" />
        <Slider.Range label="Vertical Range" orientation="vertical" defaultValue={[20, 80]} />
        <Slider.Single
          defaultValue={50}
          label="Vertical with marks"
          orientation="vertical"
          helpText="Helper text"
          marks={[
            { value: 0, label: "0" },
            { value: 25 },
            { value: 50, label: "50" },
            { value: 75 },
            { value: 100, label: "100" },
          ]}
        />
        <Slider.Range
          label="Vertical with error"
          orientation="vertical"
          defaultValue={[20, 80]}
          errorMessages={["This is an error"]}
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: '[data-testid="hover"] [role="presentation"] [role="presentation"]',
      focusVisible: '[data-testid="focusVisible"] input[type="range"]',
    },
  },
};
