import { Menu } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuGroupLabelArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.GroupLabel> = {
  title: "Components/Menu/Composition/Group Label",
  component: Menu.GroupLabel,
};
export default meta;

export const GroupLabel: StoryObj<typeof Menu.GroupLabel> = {
  render: (props) => (
    <div>
      <Menu.GroupLabel {...props} />
      <Menu.Item label="Reload" />
      <Menu.Item label="Share" />
    </div>
  ),
  argTypes: MenuGroupLabelArgTypes,
  args: {
    label: "User",
  },
  parameters: { chromatic: { disableSnapshot: true } },
};
