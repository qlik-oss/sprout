import sprout from "@qlik/sprout-css-modules";
import { Radio, RadioGroup } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioArgTypes, RadioGroupArgTypes } from "./RadioGroup.argTypes";

type Story = StoryObj;

const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {},
};

export default meta;

export const Playground: Story = {
  render: (args) => (
    <div
      className={sprout.classNames("flex", "p-m", "w-fit")}
      data-testid="wrapper"
    >
      <RadioGroup {...args}>
        <Radio label="Cat" value="cat" name="test" />
        <Radio label="Dog" value="dog" name="test" />
        <Radio label="Horse" value="horse" name="test" />
        <Radio label="Dodo" value="dodo" disabled name="test" />
      </RadioGroup>
    </div>
  ),
  args: {
    name: "radio-group",
    label: "Radio Group",
    helpText: "Select one of the options",
  },
  argTypes: RadioGroupArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const RadioButton: StoryObj = {
  render: (args) => (
    <div
      className={sprout.classNames("flex", "p-m", "w-fit")}
      data-testid="wrapper"
    >
      <Radio {...args} />
    </div>
  ),
  args: {
    label: "Radio",
  },
  argTypes: RadioArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTests: Story = {
  render: () => (
    <div className={sprout.classNames("flex", "flex-row", "w-fit", "gap-3xl")}>
      <div className={sprout.classNames("flex", "flex-col")}>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Default" />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Hover" data-testid="hover" />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Focus" data-testid="focus" />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            label="With help text"
            helpText="This is help text for this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Disabled" disabled />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="readOnly" readOnly />
        </div>
      </div>
      <div className={sprout.classNames("flex", "flex-col")}>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Checked" checked />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Hover" checked data-testid="hover" />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Focus" checked data-testid="focus" />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="Disabled" checked disabled />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio label="readOnly" readOnly checked />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            label="Checked with help"
            checked
            helpText="Additional context for this option"
          />
        </div>
      </div>
      <div className={sprout.classNames("flex", "flex-row", "w-fit")}>
        <RadioGroup name="radio-group" label="Radio Group" helpText="helpText">
          <Radio label="Cat" value="cat" name="radio-group" checked />
          <Radio label="Dog" value="dog" name="radio-group" />
          <Radio label="Horse" value="horse" name="radio-group" />
          <Radio label="Dodo" value="dodo" disabled name="radio-group" />
          <Radio label="Dodo" value="dodo" readOnly name="radio-group" />
        </RadioGroup>
        <RadioGroup
          name="radio-group-bis"
          label="isError"
          isError
          helpText="helpText"
          errorMessages={["This is an error message"]}
        >
          <Radio label="Cat" value="cat" name="radio-group-bis" />
          <Radio label="Dog" value="dog" name="radio-group-bis" />
          <Radio label="Horse" value="horse" name="radio-group-bis" />
          <Radio label="Dodo" value="dodo" disabled name="radio-group-bis" />
          <Radio label="Dodo" value="dodo" readOnly name="radio-group-bis" />
        </RadioGroup>
      </div>
      <div className={sprout.classNames("flex")}>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            label="Unchecked with tooltip"
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            label="Unchecked with help and tooltip"
            helpText="Additional context for this option"
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            readOnly
            label="Readonly unchecked with help and tooltip"
            helpText="Additional context for this option"
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            disabled
            label="Disabled unchecked with help and tooltip"
            helpText="Additional context for this option"
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            label="Checked with help"
            checked
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            label="Checked with help and tooltip"
            checked
            helpText="Additional context for this option"
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            readOnly
            label="Readonly checked with help and tooltip"
            checked
            helpText="Additional context for this option"
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
        <div
          className={sprout.classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <Radio
            disabled
            label="Disabled checked with help and tooltip"
            checked
            helpText="Additional context for this option"
            infoIconTooltip="This is some additional info about this radio option"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    pseudo: {
      hover: "[data-testid=hover]",
      focusVisible: "[data-testid=focus]",
    },
  },
};
