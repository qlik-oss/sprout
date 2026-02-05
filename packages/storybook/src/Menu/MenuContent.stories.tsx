import { Menu, classNames } from "@qlik/sprout-css-react";
import Person from "@qlik/sprout-icons/react/Person";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuContentArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.Content> = {
  title: "Components/Menu/Composition/Content",
  component: Menu.Content,
};
export default meta;

export const Content: StoryObj<typeof Menu.Content> = {
  render: (props) => (
    <div className={classNames("flex", "w-s", "gap-m")}>
      <h2 className={classNames("font-heading-s")}>
        Create your own menu item
      </h2>

      <button type="button">
        <Menu.Content {...props} />
      </button>
    </div>
  ),
  argTypes: MenuContentArgTypes,
  args: {
    label: "Profile",
    description: "Optional secondary text for the menu item.",
    icon: <Person />,
    valueLabel: "⌘ P",
    selectable: true,
    selected: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
