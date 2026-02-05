import { Menu, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Menu.Skeleton> = {
  title: "Components/Menu/Composition/Skeleton",
  component: Menu.Skeleton,
};
export default meta;

export const Skeleton: StoryObj<typeof Menu.Skeleton> = {
  render: () => (
    <div className={classNames("w-s")}>
      <Menu.Skeleton />
    </div>
  ),
  parameters: { chromatic: { disableSnapshot: true } },
};
