import { Menu, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuSplitArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.Split> = {
  title: "Components/Menu/Composition/Split",
  component: Menu.Split,
};
export default meta;

export const Split: StoryObj<typeof Menu.Split> = {
  render: (props) => (
    <div className={classNames("w-xs")}>
      <Menu.Split {...props}>
        <Menu.Item label="Link" selectable />
        <Menu.SecondaryAction
          onClick={() => {
            window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
          }}
        />
      </Menu.Split>
    </div>
  ),
  argTypes: MenuSplitArgTypes,
  parameters: { chromatic: { disableSnapshot: true } },
};
