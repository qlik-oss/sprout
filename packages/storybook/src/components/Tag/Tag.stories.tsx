import { fn } from "storybook/test";

import {
  Avatar,
  Badge,
  Tag,
  TagButton,
  TagGroups,
  TagLink,
  type TagProps,
  Tooltip,
  classNames,
} from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { TagArgTypes } from "./Tag.argTypes";

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  argTypes: TagArgTypes,
};
export default meta;

const disableSnap = { chromatic: { disableSnapshot: true } };

export const Playground: Story = {
  render: (props: TagProps) => (
    <div
      className={classNames("flex", "border-box", "p-m", "w-fit")}
      data-testid="wrapper"
    >
      <Tag {...props} />
    </div>
  ),
  args: {
    text: "Tag",
    onRemove: undefined,
  },
  parameters: { ...disableSnap },
};

export const GroupPlayground: Story = {
  render: (props: TagProps) => (
    <TagGroups>
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
    </TagGroups>
  ),
  args: Playground.args,
  parameters: { ...disableSnap },
};

export const Removable: Story = {
  render: (props: TagProps) => (
    <div
      className={classNames("flex", "border-box", "p-m", "w-fit")}
      data-testid="wrapper"
    >
      <Tag {...props} />
    </div>
  ),
  args: {
    text: "Tag",
    onRemove: fn(),
  },
  parameters: { ...disableSnap },
};

export const WithAvatar: Story = {
  render: (args: TagProps) => (
    <div
      className={classNames("flex", "border-box", "p-m", "w-fit")}
      data-testid="wrapper"
    >
      <Tag {...args} avatar={<Avatar size="s" text="OC" />} />
    </div>
  ),
  args: {
    text: "Olivier Carnac",
  },
  parameters: disableSnap,
};

function Icon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_20897_69)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.3 9.7L9 10H8V12H6V14H4V16H0V13L6.3 6.7C6.1 6.2 6 5.6 6 5C6 2.2 8.2 0 11 0C13.8 0 16 2.2 16 5C16 7.8 13.8 10 11 10C10.4 10 9.8 9.9 9.3 9.7ZM7 9H8.58579L9.05916 8.52663L9.67139 8.77152C10.0316 8.91559 10.5015 9 11 9C13.2477 9 15 7.24771 15 5C15 2.75228 13.2477 1 11 1C8.75229 1 7 2.75228 7 5C7 5.49845 7.08441 5.96843 7.22848 6.32861L7.47337 6.94084L1 13.4142V15H3V13H5V11H7V9ZM12 5C11.4667 5 11 4.53333 11 4C11 3.46667 11.4667 3 12 3C12.5333 3 13 3.46667 13 4C13 4.53333 12.5333 5 12 5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_20897_69">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const WithIcon: Story = {
  render: (args: TagProps) => (
    <div
      className={classNames("flex", "border-box", "p-m", "w-fit")}
      data-testid="wrapper"
    >
      <Tag {...args} icon={<Icon />} />
    </div>
  ),
  args: {
    text: "ABCD-1234-EFGH-5678",
  },
  parameters: disableSnap,
};

export const WithBadge: Story = {
  render: (args: TagProps) => (
    <div
      className={classNames("flex", "border-box", "p-m", "w-fit")}
      data-testid="wrapper"
    >
      <Tag {...args} badge={<Badge text="14" variant="alphanumeric" />} />
    </div>
  ),
  args: {
    text: "App",
  },
  parameters: disableSnap,
};

export const VisualTests: Story = {
  render: () => (
    <div className={classNames("flex", "flex-col", "gap-s")}>
      <div className={classNames("flex", "flex-col", "gap-s")}>
        <h2 className={classNames("font-heading-m", "text-default")}>
          Default
        </h2>
        <TagGroups>
          <Tag text="Tag" />
          <Tag text="Tag error" color="error" />
          <Tag text="Tag info" color="info" />
          <Tag text="Tag success" color="success" />
          <Tooltip title="Tooltip over tag" initialOpen>
            <Tag text="Tag warning" color="warning" />
          </Tooltip>
          <Tag text="Tag text is really too long" />
        </TagGroups>
        <TagGroups>
          <Tag text="onRemove" onRemove={() => {}} />
          <Tag text="onRemove error" color="error" onRemove={() => {}} />
          <Tag text="onRemove info" color="info" onRemove={() => {}} />
          <Tag text="onRemove success" color="success" onRemove={() => {}} />
          <Tag text="onRemove warning" color="warning" onRemove={() => {}} />
        </TagGroups>
        <TagGroups>
          <TagLink href="#" text="TagLink" />
          <TagLink href="#" text="TagLink" data-testid="hover" />
          <TagLink href="#" text="TagLink" data-testid="active" />
          <TagLink href="#" text="TagLink" data-testid="focus" />
          <TagLink href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton onClick={() => {}} text="TagButton" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="hover" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="active" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="focus" />
          <TagButton onClick={() => {}} text="TagButton" aria-disabled="true" />
        </TagGroups>
        <Tag text="With icon" icon={<Icon />} />
        <div className={classNames("flex", "flex-row", "gap-s")}>
          <Tag
            text="With badge"
            badge={<Badge text="14" variant="alphanumeric" />}
          />
          <Tag
            text="Apps"
            badge={{ text: "14", variant: "alphanumeric", color: "info" }}
          />
          <Tag
            text="Boolean"
            color="success"
            badge={{ text: "true", variant: "alphanumeric", color: "success" }}
          />
        </div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-xxs")}>
          <Tag
            text="With badge"
            badge={<Badge text="14" variant="alphanumeric" />}
          />
          <Tag
            text="Apps"
            badge={{ text: "14", variant: "alphanumeric", color: "info" }}
          />
          <Tag
            text="Boolean"
            color="success"
            badge={{ text: "true", variant: "alphanumeric", color: "success" }}
          />
        </div>
      </div>
      <div className={classNames("flex", "flex-col", "gap-s")}>
        <h2 className={classNames("font-heading-m", "text-default")}>Small</h2>
        <TagGroups>
          <Tag size="s" text="Tag" />
          <Tag size="s" text="Tag error" color="error" />
          <Tag size="s" text="Tag info" color="info" />
          <Tag size="s" text="Tag success" color="success" />
          <Tag size="s" text="Tag warning" color="warning" />
        </TagGroups>
        <TagGroups>
          <Tag size="s" text="onRemove" onRemove={() => {}} />
          <Tag
            size="s"
            text="onRemove error"
            color="error"
            onRemove={() => {}}
          />
          <Tag size="s" text="onRemove info" color="info" onRemove={() => {}} />
          <Tag
            size="s"
            text="onRemove success"
            color="success"
            onRemove={() => {}}
          />
          <Tag
            size="s"
            text="onRemove warning"
            color="warning"
            onRemove={() => {}}
          />
        </TagGroups>
        <TagGroups>
          <TagLink size="s" href="#" text="TagLink" />
          <TagLink size="s" href="#" text="TagLink" data-testid="hover" />
          <TagLink size="s" href="#" text="TagLink" data-testid="active" />
          <TagLink size="s" href="#" text="TagLink" data-testid="focus" />
          <TagLink size="s" href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton size="s" onClick={() => {}} text="TagButton" />
          <TagButton
            size="s"
            onClick={() => {}}
            text="TagButton"
            data-testid="hover"
          />
          <TagButton
            size="s"
            onClick={() => {}}
            text="TagButton"
            data-testid="active"
          />
          <TagButton
            size="s"
            onClick={() => {}}
            text="TagButton"
            data-testid="focus"
          />
          <TagButton
            size="s"
            onClick={() => {}}
            text="TagButton"
            aria-disabled="true"
          />
        </TagGroups>
        <Tag size="s" text="With icon" icon={<Icon />} />
        <div className={classNames("flex", "flex-row", "gap-s")}>
          <Tag
            size="s"
            text="With badge"
            badge={<Badge text="14" variant="alphanumeric" />}
          />
          <Tag
            size="s"
            text="Apps"
            badge={{ text: "14", variant: "alphanumeric", color: "info" }}
          />
          <Tag
            size="s"
            text="Boolean"
            color="success"
            badge={{ text: "true", variant: "alphanumeric", color: "success" }}
          />
        </div>
        <div className={classNames("flex", "flex-row", "gap-s", "w-xxs")}>
          <Tag
            size="s"
            text="With badge"
            badge={<Badge text="14" variant="alphanumeric" />}
          />
          <Tag
            size="s"
            text="Apps"
            badge={{ text: "14", variant: "alphanumeric", color: "info" }}
          />
          <Tag
            size="s"
            text="Boolean"
            color="success"
            badge={{ text: "true", variant: "alphanumeric", color: "success" }}
          />
        </div>
      </div>
    </div>
  ),

  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]',
    },
    controls: {
      disable: true,
    },
  },
};
