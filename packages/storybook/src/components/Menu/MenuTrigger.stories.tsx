import { fn } from "storybook/test";

import { Button, Menu, classNames } from "@qlik/sprout-react";

import Person from "@qlik/sprout-icons/react/Person";
import type { Meta, StoryObj } from "@storybook/react";

import { LogoutIcon } from "../../icons";
import { MenuTriggerArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.Trigger> = {
  title: "Components/Menu/Composition/Trigger",
  component: Menu.Trigger,
};
export default meta;

export const Trigger: StoryObj<typeof Menu.Trigger> = {
  render: (props) => (
    <div className={classNames("w-m", "flex", "items-center", "justify-center")} style={{ blockSize: 400 }}>
      <Menu.Trigger
        {...props}
        menu={
          <>
            <Menu.Item icon={<Person />} label="Profile" disabled />
            <Menu.Item icon={<LogoutIcon />} label="Logout" />
            <Menu.Item icon={null} label="Reload" />
            <Menu.Item icon={null} label="Share" />
          </>
        }
      >
        <Button label="Open Menu" />
      </Menu.Trigger>
    </div>
  ),
  argTypes: MenuTriggerArgTypes,
  args: {
    onOpenChange: fn(),
  },
  parameters: { chromatic: { disableSnapshot: true } },
};
