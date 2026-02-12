import sprout from "@qlik/sprout-css-modules";
import { FieldLabel } from "@qlik/sprout-react";
import type { StoryObj } from "@storybook/react-vite";

import { FieldLabelArgTypes } from "./FieldLabel.argTypes";

export default {
  title: "Components/FieldLabel",
  component: FieldLabel,
};

export const Playground: StoryObj<typeof FieldLabel> = {
  render: ({ children, ...props }) => (
    <FieldLabel {...props}>{children}</FieldLabel>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    htmlFor: "test",
    infoIconTooltip: "This is a tooltip",
    optional: true,
    disabled: false,
    children: "Label",
  },
  argTypes: FieldLabelArgTypes,
};

export const Visualtests: StoryObj<typeof FieldLabel> = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className={sprout.classNames("flex-noreset", "flex-col", "gap-m")}>
      <FieldLabel htmlFor="default">Label</FieldLabel>
      <FieldLabel htmlFor="default" optional>
        Label
      </FieldLabel>
      <FieldLabel
        htmlFor="default"
        optional
        infoIconTooltip="My info to display"
      >
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" infoIconTooltip="My info to display">
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" infoIconPopover="My info to display">
        Label with info icon popover
      </FieldLabel>
      <FieldLabel htmlFor="default" disabled>
        Label
      </FieldLabel>
      <FieldLabel
        htmlFor="default"
        disabled
        infoIconTooltip="My info to display"
      >
        Label
      </FieldLabel>
      <FieldLabel
        htmlFor="default"
        disabled
        optional
        infoIconTooltip="My info to display"
      >
        Label
      </FieldLabel>
      <FieldLabel htmlFor="default" disabled optional>
        Label
      </FieldLabel>
      <input type="hidden" name="default" disabled />
    </div>
  ),
};
