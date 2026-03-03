/* eslint-disable react/no-unescaped-entities */
import { Skeleton, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkeletonArgTypes } from "./Skeleton.argTypes";

type Story = StoryObj<typeof Skeleton>;

const meta: Meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {},
};

export default meta;

export const Playground: Story = {
  render: (props) => (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "p-s",
        "gap-s",
        "h-auto",
        "w-s",
      )}
      data-testid="wrapper"
    >
      <Skeleton {...props} />
    </div>
  ),
  argTypes: SkeletonArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "flex-col", "gap-s")}>
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="text"
      </h2>
      <Skeleton variant="text" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="circle"
      </h2>
      <Skeleton variant="circle" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="rectangle"
      </h2>
      <Skeleton variant="rectangle" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="Button"
      </h2>
      <Skeleton variant="Button" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="IconButton"
      </h2>
      <Skeleton variant="IconButton" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="Input"
      </h2>
      <Skeleton variant="Input" />
      <h2 className={classNames("font-heading-s", "text-default")}>
        variant="InputField"
      </h2>
      <Skeleton variant="InputField" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
