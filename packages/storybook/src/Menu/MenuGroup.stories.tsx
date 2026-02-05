import { Menu } from "@qlik/sprout-css-react";
import Person from "@qlik/sprout-icons/react/Person";
import type { Meta, StoryObj } from "@storybook/react";

import { LogoutIcon } from "../icons";
import { MenuGroupArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.Group> = {
  title: "Components/Menu/Composition/Group",
  component: Menu.Group,
};
export default meta;

export const Group: StoryObj<typeof Menu.Group> = {
  render: (props) => (
    <Menu.Group {...props}>
      <Menu.Item icon={<Person />} label="Profile" disabled />
      <Menu.Item icon={<LogoutIcon />} label="Logout" />
      <Menu.Item icon={null} label="Reload" />
      <Menu.Item icon={null} label="Share" />
    </Menu.Group>
  ),
  argTypes: MenuGroupArgTypes,
  args: {
    label: "User",
  },
  parameters: { chromatic: { disableSnapshot: true } },
};
