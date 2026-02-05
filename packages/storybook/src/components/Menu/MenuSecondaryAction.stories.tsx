import { Button, Menu, classNames } from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuSecondaryActionArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.SecondaryAction> = {
  title: "Components/Menu/Composition/Secondary Action",
  component: Menu.SecondaryAction,
};
export default meta;

export const SecondaryAction: StoryObj<typeof Menu.SecondaryAction> = {
  render: (props) => (
    <Menu.Trigger
      menu={
        <>
          <Menu.Split>
            <Menu.Item
              label="Open story"
              onClick={() => {
                window.location.href =
                  "/iframe.html?path=/story/components-menu--secondary-action";
              }}
            />
            <Menu.SecondaryAction
              {...props}
              onClick={() => {
                window
                  .open(
                    "/?path=/story/components-menu--secondary-action",
                    "_blank",
                  )
                  ?.focus();
              }}
            />
          </Menu.Split>
          <div className={classNames("disclosure-trigger")}>
            <Menu.Split>
              <Menu.Item
                label="Open story"
                onClick={() => {
                  window.location.href =
                    "/iframe.html?path=/story/components-menu--secondary-action";
                }}
              />
              <span className={classNames("disclosure-target")}>
                <Menu.SecondaryAction
                  {...props}
                  onClick={() => {
                    window
                      .open(
                        "/?path=/story/components-menu--secondary-action",
                        "_blank",
                      )
                      ?.focus();
                  }}
                />
              </span>
            </Menu.Split>
          </div>
          <div className={classNames("disclosure-trigger")}>
            <Menu.Split>
              <Menu.Item
                label="Open story"
                onClick={() => {
                  window.location.href =
                    "/iframe.html?path=/story/components-menu--secondary-action";
                }}
              />
              <span className={classNames("disclosure-target")}>
                <Menu.SecondaryAction
                  {...props}
                  onClick={() => {
                    window
                      .open(
                        "/?path=/story/components-menu--secondary-action",
                        "_blank",
                      )
                      ?.focus();
                  }}
                />
              </span>
            </Menu.Split>
          </div>
        </>
      }
    >
      <Button label="Actions" />
    </Menu.Trigger>
  ),
  argTypes: MenuSecondaryActionArgTypes,
  parameters: { chromatic: { disableSnapshot: true } },
};
