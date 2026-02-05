import { fn } from "storybook/test";

import { Switch, type SwitchProps, classNames } from "@qlik/sprout-react";
import type { StoryObj } from "@storybook/react-vite";

import { SwitchArgTypes } from "./Switch.argTypes";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {},
};

type Story = StoryObj<typeof Switch>;

const disableSnap = { chromatic: { disableSnapshot: true } };

export const Uncontrolled: Story = {
  render: (args: SwitchProps) => (
    <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "w-fit", "p-m")}>
      <Switch {...args} />
    </div>
  ),
  args: {
    name: "switch",
    label: "Label",
  },
  argTypes: SwitchArgTypes,
  parameters: disableSnap,
};

export const Controlled: Story = {
  render: (args: SwitchProps) => (
    <div data-testid="wrapper" className={classNames("flex", "flex-row", "border-box", "w-fit", "p-m")}>
      <Switch {...args} />
    </div>
  ),
  args: {
    name: "switch",
    label: "Label",
    onChange: fn(),
  },
  argTypes: {
    ...SwitchArgTypes,
    checked: {
      control: "select",
      options: [undefined, true, false],
    },
  },
  parameters: disableSnap,
};
export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "flex-col", "border-box", "gap-m")}>
      <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>unchecked + label</h3>
          <Switch label="Default" />
          <Switch label="Hover" data-testid="hover" />
          <Switch label="Pressed" data-testid="active" />
          <Switch label="Focus" data-testid="focus" />
          <Switch label="Disabled" disabled />
          <Switch label="readOnly" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>checked + label</h3>
          <Switch label="Checked" checked />
          <Switch label="Hover" checked data-testid="hover" />
          <Switch label="Pressed" checked data-testid="active" />
          <Switch label="Focus" checked data-testid="focus" />
          <Switch label="Disabled" checked disabled />
          <Switch label="readOnly" checked readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>unchecked + aria-label</h3>
          <Switch aria-label="Checked" />
          <Switch aria-label="Hover" data-testid="hover" />
          <Switch aria-label="Pressed" data-testid="active" />
          <Switch aria-label="Focus" data-testid="focus" />
          <Switch aria-label="Disabled" disabled />
          <Switch aria-label="readOnly" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>checked + aria-label</h3>
          <Switch aria-label="Checked" checked />
          <Switch aria-label="Hover" checked data-testid="hover" />
          <Switch aria-label="Pressed" checked data-testid="active" />
          <Switch aria-label="Focus" checked data-testid="focus" />
          <Switch aria-label="Disabled" checked disabled />
          <Switch aria-label="readOnly" checked readOnly />
        </div>
      </div>

      <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
        <div
          className={classNames("flex", "flex-row", "border-box", "p-l", "gap-m", "flex-col", "border-default")}
          style={{ inlineSize: "150px" }}
        >
          <h3 className={classNames("font-heading-s", "text-default")}>overflow</h3>
          <Switch label="LongLabelWithOverflow" checked />
          <Switch
            label="LongLabelWithOverflowWithHelpText"
            helpText="thisisareallylonghelptextanditjustkeepsgoingandgoingwithoutanyspaces"
            checked
          />
          <Switch label="Really long label with overflow but not one long string" />
          <Switch
            label="Really long label with overflow but not one long string with help text"
            helpText="this is a really long help text and it just keeps going and going"
          />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>label + helpText + info icon</h3>
          <Switch label="Default" helpText="this is a help text" infoIconTooltip="info icon tooltip" />
          <Switch
            label="Hover"
            helpText="this is a help text"
            infoIconTooltip="info icon tooltip"
            data-testid="hover"
          />
          <Switch
            label="Pressed"
            helpText="this is a help text"
            infoIconTooltip="info icon tooltip"
            data-testid="active"
          />
          <Switch
            label="Focus"
            helpText="this is a help text"
            infoIconTooltip="info icon tooltip"
            data-testid="focus"
          />
          <Switch label="Disabled" helpText="this is a help text" infoIconTooltip="info icon tooltip" disabled />
          <Switch label="readOnly" helpText="this is a help text" infoIconTooltip="info icon tooltip" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>unchecked + label + helpText</h3>
          <Switch label="Default" helpText="this is a help text" />
          <Switch label="Hover" helpText="this is a help text" data-testid="hover" />
          <Switch label="Pressed" helpText="this is a help text" data-testid="active" />
          <Switch label="Focus" helpText="this is a help text" data-testid="focus" />
          <Switch label="Disabled" helpText="this is a help text" disabled />
          <Switch label="readOnly" helpText="this is a help text" readOnly />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "p-l", "flex-col", "gap-m", "border-default")}>
          <h3 className={classNames("font-heading-s", "text-default")}>checked + label + helpText</h3>
          <Switch label="Default" checked helpText="this is a help text" />
          <Switch label="Hover" checked helpText="this is a help text" data-testid="hover" />
          <Switch label="Pressed" checked helpText="this is a help text" data-testid="active" />
          <Switch label="Focus" checked helpText="this is a help text" data-testid="focus" />
          <Switch label="Disabled" checked helpText="this is a help text" disabled />
          <Switch label="readOnly" checked helpText="this is a help text" readOnly />
        </div>
      </div>
    </div>
  ),

  parameters: {
    pseudo: {
      hover: "span:has([data-testid=hover]) input",
      focusVisible: "[data-testid=focus]",
      active: "span:has([data-testid=active]) input",
    },
    controls: { disable: true },
  },
};
