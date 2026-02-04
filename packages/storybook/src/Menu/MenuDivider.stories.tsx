import { Menu } from "@qlik/sprout-css-react";
import LogOut from "@qlik/sprout-icons/react/LogOut";
import Person from "@qlik/sprout-icons/react/Person";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Menu.Divider> = {
  title: "Components/Menu/Composition/Divider",
  component: Menu.Divider,
};
export default meta;

export const Divider: StoryObj<typeof Menu.Divider> = {
  render: () => (
    <Menu.Container style={{ inlineSize: "200px" }}>
      <Menu.Item icon={<Person />} label="Profile" disabled />
      <Menu.Divider />
      <Menu.Item icon={<LogOut />} label="Logout" />
    </Menu.Container>
  ),
  parameters: { chromatic: { disableSnapshot: true } },
};
