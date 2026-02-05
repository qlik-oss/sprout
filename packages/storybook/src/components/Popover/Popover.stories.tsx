/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { fn } from "storybook/test";

import {
  AlertInline,
  Button,
  List,
  ListItem,
  Menu,
  Popover,
  type PopoverProps,
  classNames,
} from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  PopoverArgTypes,
  PopoverDemoContentArgTypes,
  type PopoverDemoContentProps,
} from "./Popover.argTypes";

type Story = StoryObj<PopoverProps>;

const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
  argTypes: {
    ...PopoverArgTypes,
  },
};

export default meta;

const bodySClass = classNames("font-body-s", "text-default");

const chromatic = {
  chromatic: { disableSnapshot: true },
};

export const Playground: StoryObj<PopoverProps & PopoverDemoContentProps> = {
  render: ({
    demoContainerHeight,
    demoContainerWidth,
    demoContentHeight,
    demoContentWidth,
    content,
    ...props
  }) => (
    <div
      className={classNames(
        "flex",
        "border-box",
        "flex-col",
        "items-center",
        "justify-center",
      )}
      style={{ inlineSize: demoContainerWidth, blockSize: demoContainerHeight }}
    >
      <Popover
        {...props}
        content={
          <div
            style={{
              blockSize: demoContentHeight,
              inlineSize: demoContentWidth,
            }}
          >
            {content}
          </div>
        }
        p="xl"
        pb="m"
      >
        <Button label="My trigger" />
      </Popover>
    </div>
  ),
  args: {
    demoContainerWidth: 400,
    demoContainerHeight: 400,
    demoContentWidth: 100,
    demoContentHeight: 100,
    content: "content string",
    placement: "bottom-start",
    onOpenChange: fn(),
    initialOpen: true,
    minWidth: "reference",
    placementUpdate: false,
  },
  argTypes: {
    ...PopoverDemoContentArgTypes,
    ...PopoverArgTypes,
  },
  parameters: chromatic,
};

export const CustomDropdown: Story = {
  render: (props) => (
    <div
      className={classNames("flex", "flex-col", "p-xl", "gap-xl")}
      style={{ inlineSize: "400px" }}
    >
      <Popover
        {...props}
        minWidth="reference"
        content={
          <List>
            <ListItem onClick={() => {}}>Item 1</ListItem>
            <ListItem onClick={() => {}}>Item 1</ListItem>
          </List>
        }
      >
        <Button label="My trigger" asDropdown />
      </Popover>
    </div>
  ),
  args: {},
  argTypes: {
    ...PopoverArgTypes,
  },
  parameters: chromatic,
};

export const AnchorAPI: Story = {
  render: (props) => {
    const [state, setState] = useState<HTMLButtonElement | undefined>();
    const [open, setOpen] = useState(false);
    return (
      <div
        className={classNames("flex", "flex-col", "gap-xl")}
        style={{ inlineSize: "400px" }}
      >
        <Button
          label="My trigger"
          ref={(e: HTMLButtonElement) => {
            setState(e);
          }}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <Popover
          {...props}
          anchorEl={state}
          open={open}
          onOpenChange={setOpen}
          content={<p className={bodySClass}>placeholder</p>}
        />
      </div>
    );
  },
  args: {
    minWidth: "reference",
  },
  argTypes: {
    ...PopoverArgTypes,
  },
  parameters: chromatic,
};

export const AnchorPositionAPI: Story = {
  render: (props) => {
    const [clickPos, setClickPos] = useState<
      PopoverProps["anchorPosition"] | undefined
    >();
    const [open, setOpen] = useState(false);
    return (
      <div
        className={classNames("flex", "flex-col", "gap-xl")}
        style={{ inlineSize: "400px" }}
      >
        <Menu.Trigger
          menu={
            <Menu.Item
              label="Delete"
              onClick={(e) => {
                setClickPos({
                  top: e.clientY,
                  left: e.clientX,
                });
                setOpen(!open);
              }}
            />
          }
        >
          <Button label="OpenMenu" asDropdown />
        </Menu.Trigger>
        <Popover
          {...props}
          anchorPosition={clickPos}
          p="m"
          open={open}
          onOpenChange={setOpen}
          content={
            <form
              className={classNames(
                "flex",
                "flex-col",
                "gap-m",
                "items-start",
                "bg-default",
              )}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h2
                className={classNames("flex", "text-default", "font-heading-s")}
              >
                Delete confirmation
              </h2>
              <AlertInline severity="warning">
                This action can&apos;t be reverted
              </AlertInline>
              <div
                className={classNames(
                  "flex",
                  "flex-col",
                  "gap-m",
                  "w-full",
                  "items-end",
                )}
              >
                <Button variant="primary" label="Yes" type="submit" />
              </div>
            </form>
          }
        />
      </div>
    );
  },
  args: {
    minWidth: "reference",
  },
  argTypes: {
    ...PopoverArgTypes,
  },
  parameters: chromatic,
};

export const Nested: Story = {
  render: () => (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "gap-xl",
        "p-xl",
        "items-center",
        "justify-center",
      )}
      style={{ inlineSize: "400px", blockSize: "300px" }}
    >
      <Popover
        tree
        p="xl"
        placement="top"
        content={
          <Popover content="Nested content" p="xl" placement="right">
            <button type="button">Nested reference</button>
          </Popover>
        }
      >
        <button type="button">Root reference</button>
      </Popover>
    </div>
  ),
  parameters: chromatic,
};

export const VisualTest: Story = {
  render: () => {
    const [showNested, setShowNested] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowNested(true);
      }, 50);
      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "p-xl",
          "items-center",
          "justify-between",
          "w-full",
        )}
        style={{ blockSize: "100vh" }}
      >
        <div
          className={classNames("flex", "flex-row", "justify-end")}
          style={{ inlineSize: "35%" }}
        >
          <Popover
            initialOpen
            placement="left"
            content={<p className={bodySClass}>placeholder</p>}
          >
            <Button label="left" />
          </Popover>
        </div>

        <div
          className={classNames(
            "flex",
            "flex-col",
            "self-center",
            "gap-3xl",
            "items-center",
          )}
          style={{ inlineSize: "30%" }}
        >
          <Popover
            initialOpen
            placement="top"
            content={<p className={bodySClass}>placeholder</p>}
          >
            <Button label="top" />
          </Popover>
          <Popover
            initialOpen
            placement="bottom"
            content={<p className={bodySClass}>placeholder</p>}
          >
            <Button label="bottom" />
          </Popover>
        </div>
        <div style={{ inlineSize: "35%" }}>
          <Popover
            initialOpen
            placement="right"
            content={<p className={bodySClass}>placeholder</p>}
          >
            <Button label="right" />
          </Popover>
        </div>
        <div style={{ inlineSize: "35%" }}>
          <Popover
            tree
            p="xl"
            placement="top"
            initialOpen
            content={
              <Popover
                content="Nested content"
                p="xl"
                placement="left"
                open={showNested}
                onOpenChange={setShowNested}
              >
                <button type="button" className={bodySClass}>
                  Nested reference
                </button>
              </Popover>
            }
          >
            <button type="button" className={bodySClass}>
              Root reference
            </button>
          </Popover>
        </div>
      </div>
    );
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
};
