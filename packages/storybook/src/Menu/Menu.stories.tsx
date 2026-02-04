/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { type MouseEvent, useState } from "react";
import { fn } from "storybook/test";

import { Button, Menu, classNames } from "@qlik/sprout-css-react";
import { CogwheelIcon, ControlIcon } from "@qlik/sprout-icons/react";
import BinOutline from "@qlik/sprout-icons/react/BinOutline";
import EditOutline from "@qlik/sprout-icons/react/EditOutline";
import LogOut from "@qlik/sprout-icons/react/LogOut";
import Person from "@qlik/sprout-icons/react/Person";
import type { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Components/Menu",
  component: Menu.Trigger,
} as Meta;

const parameters = {
  chromatic: { disableSnapshot: true },
};

export const JsxApi: StoryObj<typeof Menu.Trigger> = {
  render: () => (
    <Menu.Trigger
      menu={
        <>
          <Menu.GroupLabel label="User" />
          <Menu.Item icon={<Person />} label="Profile" disabled />
          <Menu.Item icon={<LogOut />} label="Logout" />
          <Menu.Item icon={null} label="Reload" />
          <Menu.Item icon={null} label="Share" />
          <Menu.Sub
            icon={<CogwheelIcon />}
            label="Settings"
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
          <Menu.Sub
            icon={<ControlIcon />}
            label="More options"
            menu={
              <>
                <Menu.Item label="Reload" />
                <Menu.Item label="Schedule" />
                <Menu.Item label="History" />
              </>
            }
          />
          <Menu.Divider />
          <Menu.Item
            icon={<EditOutline />}
            label="Edit"
            description="Don’t remember what we said about overflow, but this would be it."
            valueLabel="⌘ E"
          />
          <Menu.Item icon={<BinOutline />} label="Delete" />
          <Menu.Divider />
          <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
          <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
          <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>
  ),
  parameters: { ...parameters },
};

export const Selections: StoryObj<typeof Menu.Trigger> = {
  render: () => (
    <Menu.Trigger
      defaultOpen
      menu={
        <>
          <Menu.Item label="Bold" selectable />
          <Menu.Item label="Italic" selectable selected />
          <Menu.Item label="Underline" selectable />
          <Menu.Divider />
          <Menu.Item label="Small" selectable />
          <Menu.Item label="Medium" selectable />
          <Menu.Item label="Large" selectable />
        </>
      }
    >
      <Button label="Open Menu" />
    </Menu.Trigger>
  ),
  parameters: { ...parameters },
};

export const MuiApi: StoryObj<typeof Menu.Contextual> = {
  render: () => {
    const [contextMenu, setContextMenu] = useState<MouseEvent | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent) => {
      setAnchorEl(event.currentTarget as HTMLElement);
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setContextMenu(event);
    };

    const handleClose = () => {
      setContextMenu(null);
      setAnchorEl(null);
    };
    return (
      <div
        className={classNames("flex", "flex-row", "w-full")}
        onContextMenu={handleContextMenu}
        style={{ cursor: "context-menu" }}
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
          <h1
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "font-heading-m",
              "text-default",
            )}
          >
            Contextual Menu demo using MUI api
          </h1>
          <p
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "font-body-m",
              "text-default",
            )}
          >
            This a paragraph with a bit of text.
          </p>
          <Button label="Menu" onClick={handleClick} />
        </div>
        <Menu.Contextual
          minWidth="xxs"
          menu={
            <>
              <Menu.Item onClick={handleClose} label="Copy" />
              <Menu.Item onClick={handleClose} label="Print" />
              <Menu.Item onClick={handleClose} label="Highlight" />
              <Menu.Item onClick={handleClose} label="Email" />
            </>
          }
          open={Boolean(contextMenu)}
          onOpenChange={(value) => {
            if (!value) {
              setContextMenu(null);
            }
          }}
          anchorPosition={
            contextMenu
              ? { left: contextMenu.clientX, top: contextMenu.clientY }
              : undefined
          }
        />
        <Menu.Trigger
          anchorEl={anchorEl || undefined}
          open={open}
          onOpenChange={(value) => {
            if (!value) {
              setAnchorEl(null);
            }
          }}
          menu={
            <>
              <Menu.Item onClick={handleClose} label="Copy" />
              <Menu.Item onClick={handleClose} label="Print" />
              <Menu.Item onClick={handleClose} label="Highlight" />
              <Menu.Item onClick={handleClose} label="Email" />
            </>
          }
        />
      </div>
    );
  },
  parameters: {
    ...parameters,
    controls: { disable: true },
  },
};

export const VisualTest: StoryObj<typeof Menu.Trigger> = {
  render: (props) => (
    <div
      className={classNames("flex", "flex-row", "items-start")}
      style={{ blockSize: "650px", inlineSize: "300px" }}
    >
      <Menu.Trigger
        {...props}
        menu={
          <>
            <Menu.GroupLabel label="Menu.GroupLabel" />
            <Menu.Item icon={null} label="Default" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Hover" data-testid="hover" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Active" data-testid="active" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Focus" data-testid="focus" />
            <Menu.Divider />
            <Menu.Item icon={<Person />} label="Disabled" disabled />
            <Menu.Divider />
            <Menu.Item
              icon={<EditOutline />}
              label="Edit with a super long menu too so it should also overflow"
              description="Don’t remember what we said about overflow, but this would be it."
              valueLabel="⌘ E"
              selectable
              selected
            />
            <Menu.Item
              icon={null}
              label="An_too_long_label_with_very_long_word_that_goes_beyond_the_parent_size_and_with_no_space"
              selectable
              valueLabel="⌘ E"
            />

            <Menu.Item
              variant="destructive"
              icon={<BinOutline />}
              label="Delete"
            />
            <Menu.Divider />
            <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
            <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
            <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
            <Menu.Divider />
            <Menu.Item label="Bold" selectable />
            <Menu.Item label="Italic" selectable selected />
            <Menu.Item label="Underline" selectable />
            <Menu.Divider />
            <Menu.Split>
              <Menu.Item label="Link" selectable />
              <Menu.SecondaryAction
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
          </>
        }
      >
        <Button label="Controlled Menu" />
      </Menu.Trigger>
    </div>
  ),
  args: {
    open: true,
    defaultOpen: true,
    onOpenChange: fn(),
  },
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]',
      active: '[data-testid="active"]',
    },
    chromatic: { delay: 100 },
  },
};
