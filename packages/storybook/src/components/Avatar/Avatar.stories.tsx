import { Avatar, type AvatarProps, classNames } from "@qlik/sprout-css-react";
import { PersonIcon } from "@qlik/sprout-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import src from "../internal/assets/image.png";
import { AvatarIconArgTypes, AvatarImgArgTypes, AvatarTextArgTypes } from "./Avatar.argTypes";

type Story = StoryObj<AvatarProps>;

const meta: Meta = {
  title: "Components/Avatar",
};
export default meta;

const parameters = {
  chromatic: { disableSnapshot: true },
};

export const TextStory: Story = {
  name: "Text",
  render: (props: AvatarProps) => (
    <div className={classNames("flex", "border-box", "p-s", "w-fit")} data-testid="wrapper">
      <Avatar {...props} />
    </div>
  ),
  args: {
    text: "OC",
  },
  argTypes: AvatarTextArgTypes,
  parameters,
};

export const Img: Story = {
  render: (props: AvatarProps) => (
    <div className={classNames("flex", "border-box", "p-s", "w-fit")} data-testid="wrapper">
      <Avatar {...props} />
    </div>
  ),
  args: {
    img: {
      alt: "Avatar",
      src,
    },
  },
  argTypes: AvatarImgArgTypes,
  parameters,
};

export const Icon: Story = {
  render: (props: AvatarProps) => (
    <div className={classNames("flex", "border-box", "p-s", "w-fit")} data-testid="wrapper">
      <Avatar {...props} />
    </div>
  ),
  args: {
    icon: <PersonIcon />,
  },
  argTypes: AvatarIconArgTypes,
  parameters,
};

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "flex-col", "border-box", "p-s", "gap-m")}>
      <h2 className={classNames("font-heading-s", "text-default")}>Text</h2>
      <div className={classNames("flex", "flex-row", "border-box", "gap-m", "p-m")}>
        <Avatar text="OC" />
        <Avatar text="OC" bgIndex={0} />
        <Avatar text="OC" bgIndex={1} />
        <Avatar text="OC" bgIndex={2} />
        <Avatar text="OC" bgIndex={3} />
        <Avatar text="OC" bgIndex={4} />
        <Avatar text="OC" bgIndex={5} />
        <Avatar text="OC" bgIndex={6} />
        <Avatar text="OC" bgIndex={7} />
      </div>
      <h2 className={classNames("font-heading-s", "text-default")}>Image</h2>
      <Avatar img={{ alt: "Avatar", src }} />
      <h2 className={classNames("font-heading-s", "text-default")}>Icon</h2>
      <Avatar icon={<IconDemo />} />
      <h2 className={classNames("font-heading-s", "text-default")}>Sizes</h2>
      <div className={classNames("flex", "flex-row", "border-box", "gap-m", "p-m")}>
        <Avatar size="xs" text="XS" />
        <Avatar size="s" text="S" />
        <Avatar text="M" />
        <Avatar size="l" text="L" />
        <Avatar size="xl" text="XL" />
        <Avatar size="illustration" text="IL" />
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "gap-m", "p-m")}>
        <Avatar size="xs" img={{ alt: "Avatar", src }} />
        <Avatar size="s" img={{ alt: "Avatar", src }} />
        <Avatar img={{ alt: "Avatar", src }} />
        <Avatar size="l" img={{ alt: "Avatar", src }} />
        <Avatar size="xl" img={{ alt: "Avatar", src }} />
        <Avatar size="illustration" img={{ alt: "Avatar", src }} />
      </div>
      <div className={classNames("flex", "flex-row", "border-box", "gap-m", "p-m")}>
        <Avatar size="xs" icon={<IconDemo />} />
        <Avatar size="s" icon={<IconDemo />} />
        <Avatar icon={<IconDemo />} />
        <Avatar size="l" icon={<IconDemo />} />
        <Avatar size="xl" icon={<IconDemo />} />
        <Avatar size="illustration" icon={<IconDemo />} />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

function IconDemo() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icons/outline/person">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4C12 6.20914 10.2091 8 8 8ZM8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7ZM6 9H10C12.7614 9 15 11.2386 15 14V16H1V14C1 11.2386 3.23858 9 6 9ZM6 10C3.79086 10 2 11.7909 2 14V15H14V14C14 11.7909 12.2091 10 10 10H6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
