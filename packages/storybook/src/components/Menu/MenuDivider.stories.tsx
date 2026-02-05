import { Menu } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";
import { LogoutIcon, PersonIcon } from "../../icons";

const meta: Meta<typeof Menu.Divider> = {
  title: "Components/Menu/Composition/Divider",
  component: Menu.Divider,
};
export default meta;

export const Divider: StoryObj<typeof Menu.Divider> = {
  render: () => (
    <Menu.Container style={{ inlineSize: "200px" }}>
      <Menu.Item icon={<PersonIcon />} label="Profile" disabled />
      <Menu.Divider />
      <Menu.Item icon={<LogoutIcon />} label="Logout" />
    </Menu.Container>
  ),
  parameters: { chromatic: { disableSnapshot: true } },
};
