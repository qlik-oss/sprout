import sprout from "@qlik/sprout-css-modules";
import { Button, Divider } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { DividerArgTypes } from "./Divider.argTypes";

type Story = StoryObj;

const meta: Meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {},
};

export default meta;

export const Vertical: Story = {
  render: (props) => (
    <div className={sprout.classNames("flex", "gap-m", "flex-row")}>
      <Button label="Copy" />
      <Button label="Paste" />
      <Divider {...props} />
      <Button label="Delete" />
    </div>
  ),
  argTypes: DividerArgTypes,
  args: {
    orientation: "vertical",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Horizontal: Story = {
  render: (props) => (
    <div className={sprout.classNames("flex", "w-xxs", "gap-m", "text-default", "font-body-s")}>
      Foo
      <Divider {...props} />
      Bar
    </div>
  ),
  argTypes: DividerArgTypes,
  args: {
    orientation: "horizontal",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTest: Story = {
  render: () => (
    <div className={sprout.classNames("flex", "gap-xl", "w-s", "text-default", "font-body-s")}>
      <div className={sprout.classNames("flex", "flex-row", "gap-m")}>
        <Button label="Copy" />
        <Button label="Paste" />
        <Divider orientation="vertical" />
        <Button label="Delete" />
      </div>

      <div className={sprout.classNames("flex", "flex-col", "gap-m", "w-xxs")}>
        Foo
        <Divider orientation="horizontal" />
        Bar
      </div>

      <div
        style={{ blockSize: "300px" }}
        className={sprout.classNames("flex", "gap-m", "w-full", "items-center", "flex-row")}
      >
        <div className={sprout.classNames("flex", "justify-center", "items-center", "w-s")}>
          Flexbox container with Divider that takes the full height of it's parent
        </div>
        <Divider orientation="vertical" height="100%" />
        <div className={sprout.classNames("flex", "justify-center", "items-center", "w-s")}>
          Flexbox container with Divider that takes the full height of it's parent
        </div>
      </div>
    </div>
  ),
};
