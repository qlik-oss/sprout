import { Thumbnail, classNames } from "@qlik/sprout-css-react";
import { TenantIcon } from "@qlik/sprout-icons/react";
import type { StoryObj } from "@storybook/react-vite";

import src from "../internal/assets/truck.png";
import { ThumbnailArgTypes } from "./Thumbnail.argTypes";

export default {
  title: "Components/Thumbnail",
  component: Thumbnail,
  args: {
    type: "icon",
  },
  argTypes: ThumbnailArgTypes,
};

export const Playground: StoryObj<typeof Thumbnail> = {
  render: (props) => (
    <Thumbnail {...props}>{props.type === "icon" ? <TenantIcon /> : <img src={src} alt="avatar" />}</Thumbnail>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTest: StoryObj<typeof Thumbnail> = {
  render: () => (
    <div className={classNames("flex", "gap-m", "flex-col")}>
      <div className={classNames("flex", "gap-m", "flex-row")}>
        <Thumbnail size="xl" type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail size="l" type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail size="s" type="icon">
          <TenantIcon />
        </Thumbnail>
        <Thumbnail size="xs" type="icon">
          <TenantIcon />
        </Thumbnail>
      </div>
      <div className={classNames("flex", "gap-m", "flex-row")}>
        <Thumbnail size="xl" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail size="l" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail size="s" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
        <Thumbnail size="xs" type="img">
          <img src={src} alt="avatar" />
        </Thumbnail>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
