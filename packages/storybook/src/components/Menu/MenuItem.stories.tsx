import { Menu, classNames } from "@qlik/sprout-react";
import Person from "@qlik/sprout-icons/react/Person";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuItemArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.Item> = {
  title: "Components/Menu/Composition/Item",
  component: Menu.Item,
};
export default meta;

export const Item: StoryObj<typeof Menu.Item> = {
  render: (props) => (
    <div className={classNames("w-s")}>
      <Menu.Item {...props} />
    </div>
  ),
  argTypes: MenuItemArgTypes,
  args: {
    icon: <Person />,
    label: "Profile",
    description: "Optional secondary text for the menu item.",
    valueLabel: "⌘ P",
    disabled: false,
    selectable: true,
    selected: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
