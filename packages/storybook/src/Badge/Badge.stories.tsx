import type { ReactNode } from "react";

import {
  Avatar,
  Badge,
  Button,
  classNames,
} from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { BadgeArgTypes } from "./Badge.argTypes";

type Story = StoryObj<typeof Badge>;

const meta: Meta = {
  title: "Components/Badge",
};
export default meta;

const parameters = {
  chromatic: { disableSnapshot: true },
};

export const Playground: Story = {
  render: ({ ...props }) => (
    <div
      className={classNames("flex", "flex-row", "w-fit", "p-s")}
      data-testid="wrapper"
    >
      <Badge {...props} />
    </div>
  ),
  args: {
    variant: "dot",
  },
  argTypes: BadgeArgTypes,
  parameters,
};

export const WithAvatar: Story = {
  render: (props) => (
    <div>
      <Avatar size="s" text="OC" badge={<Badge {...props} />} />
    </div>
  ),

  parameters: {
    ...parameters,
  },
  args: {
    text: "1",
    variant: "alphanumeric",
    color: "danger",
  },
  argTypes: BadgeArgTypes,
};

/**
 * @deprecated The `type` prop is deprecated and will be removed in future releases. Remove this story once the `type` prop is removed.
 */
export const DeprecatedTypeProp: Story = {
  render: (props) => (
    <div
      className={classNames("flex", "flex-row", "w-fit", "p-s")}
      data-testid="wrapper"
    >
      <Badge {...props} />
    </div>
  ),
  args: {
    type: "dot",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["dot", "number"],
    },
    text: {
      control: {
        type: "text",
      },
    },
    color: BadgeArgTypes.color,
  },
};

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className={classNames("p-0", "m-0", "font-heading-s", "text-default")}>
      {children}
    </h2>
  );
}

export const VisualTest: Story = {
  render: () => (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "border-box",
        "w-fit",
        "p-s",
        "gap-m",
      )}
      data-testid="wrapper"
    >
      <H2>Dot</H2>
      <Badge />
      <Badge color="info" />
      <Badge color="danger" />
      <Badge color="warning" />
      <Badge color="success" />
      <Badge color="selected" />

      <H2>Number</H2>
      <Badge text="p" variant="alphanumeric" />
      <Badge text="d" variant="alphanumeric" color="info" />
      <Badge text="2" variant="alphanumeric" color="danger" />
      <Badge text="1" variant="alphanumeric" color="warning" />
      <Badge text="1" variant="alphanumeric" color="success" />
      <Badge text="1" variant="alphanumeric" color="selected" />

      <H2>Text</H2>
      <Badge text="hello worlp" variant="alphanumeric" />
      <Badge
        text="hello worlp natural overflow"
        variant="alphanumeric"
        color="selected"
      />
      <div
        className={classNames("flex", "flex-col", "gap-s", "overflow-hidden")}
        style={{ inlineSize: 50 }}
      >
        <Badge
          text="hello world what happens when the container shrinks ?"
          variant="alphanumeric"
        />
        <Badge text="hello world" variant="alphanumeric" />
      </div>

      <H2>With Avatar</H2>
      <Avatar size="xs" text="OC" badge={<Badge color="info" />} />
      <Avatar size="s" text="OC" badge={<Badge color="info" />} />
      <Avatar text="OC" badge={<Badge color="info" />} />
      <Avatar size="l" text="OC" badge={<Badge color="info" />} />
      <Avatar size="xl" text="OC" badge={<Badge color="info" />} />
      <h2>Within Button</h2>
      <Button
        variant="default"
        label="label"
        justified
        asDropdown
        badge={{ text: "hello world truncated", variant: "alphanumeric" }}
      />
    </div>
  ),
};
