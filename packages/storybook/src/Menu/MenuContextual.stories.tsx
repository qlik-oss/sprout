import { type ReactNode, useState } from "react";
import { fn } from "storybook/test";

import { Button, Menu, classNames } from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react";

import { MenuContextualArgTypes } from "./Menu.argTypes";

const meta: Meta<typeof Menu.Contextual> = {
  title: "Components/Menu/Composition/Contextual",
  component: Menu.Contextual,
};
export default meta;

export const Contextual: StoryObj<typeof Menu.Contextual> = {
  render: ({ onClick, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menu, setMenu] = useState<ReactNode>(<Menu.Skeleton />);
    return (
      <Menu.Contextual
        {...rest}
        menu={menu}
        wrapperClassName={classNames("flex", "size-full")}
        onClick={onClick}
        onOpenChange={(open, e) => {
          if (!open) {
            setMenu(<Menu.Skeleton />);
          } else if (e) {
            const tagName = (e.target as HTMLElement).tagName;
            setTimeout(() => {
              setMenu(
                <>
                  <Menu.GroupLabel label={`menu for ${tagName}`} />
                  {tagName !== "BUTTON" && (
                    <>
                      <Menu.Item label="Bold" />
                      <Menu.Item label="Italic" />
                      <Menu.Item label="Underline" />
                      <Menu.Trigger
                        placement="right"
                        menu={
                          <>
                            <Menu.Item label="Lorem" />
                            <Menu.Item label="Ipsum" />
                          </>
                        }
                      >
                        <Menu.Item label="Open Submenu" isNested />
                      </Menu.Trigger>
                    </>
                  )}
                </>,
              );
            }, 1000);
          }
        }}
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "p-m",
            "w-full",
            "border-default",
          )}
          data-testid="contextual"
        >
          <h1 className={classNames("font-heading-m", "text-default")}>
            Main title
          </h1>
          <p className={classNames("font-body-m", "text-default")}>
            This a paragraph with a bit of text.
          </p>
          <Button label="this is a button" onClick={() => {}} />
        </div>
      </Menu.Contextual>
    );
  },
  argTypes: MenuContextualArgTypes,
  args: {
    onClick: fn(),
    closeOnRightClickOutside: true,
  },
  parameters: { chromatic: { disableSnapshot: true } },
};
