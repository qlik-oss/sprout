import { Menu, classNames } from "@qlik/sprout-css-react";
import Cogwheel from "@qlik/sprout-icons/react/Cogwheel";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuSubArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.Sub> = {
  title: "Components/Menu/Composition/Sub",
  component: Menu.Sub,
};
export default meta;

export const Sub: StoryObj<typeof Menu.Sub> = {
  render: ({ ...rest }) => (
    <div className={classNames("w-s")}>
      <Menu.Sub
        {...rest}
        menu={
          <>
            <Menu.Item label="Text" />
            <Menu.Item label="Video" />
            <Menu.Sub
              label="Image"
              menu={
                <>
                  <Menu.Item label=".png" />
                  <Menu.Item label=".jpg" />
                  <Menu.Item label=".svg" />
                  <Menu.Item label=".gif" />
                </>
              }
            />
          </>
        }
      />
    </div>
  ),
  argTypes: MenuSubArgTypes,
  args: {
    icon: <Cogwheel />,
    label: "Settings",
  },
  parameters: { chromatic: { disableSnapshot: true } },
};
