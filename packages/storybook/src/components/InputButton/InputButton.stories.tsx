import { fn } from "storybook/test";

import { InputButton, Tooltip, classNames } from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputButtonArgTypes } from "./InputButton.argTypes";

type Story = StoryObj<typeof InputButton>;
const meta: Meta = {
  title: "Components/InputButton",
  component: InputButton,
  parameters: {},
};
export default meta;

const onClick = fn();

export const Playground: StoryObj = {
  render: (props) => (
    <div
      className={classNames("p-xs")}
      data-testid="wrapper"
      style={{ inlineSize: "300px" }}
    >
      <InputButton {...props} onClick={onClick} />
    </div>
  ),
  args: {
    "aria-label": "Clear input",
  },
  argTypes: InputButtonArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTest: Story = {
  render: () => (
    <div className={classNames("flex", "gap-s")}>
      <h2 className={classNames("font-heading-l", "text-default")}>
        InputButton
      </h2>
      <div className={classNames("flex", "gap-xxl", "flex-row")}>
        <div className={classNames("flex", "gap-m", "flex-col")}>
          <InputButton aria-label="Remove" onClick={onClick} size="xs" />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="xs"
            data-testid="hover"
          />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="xs"
            data-testid="active"
          />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="xs"
            data-testid="focus"
          />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="xs"
            disabled
          />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="xs"
            loading
          />
        </div>

        <div className={classNames("flex", "gap-m", "flex-col")}>
          <InputButton aria-label="Remove" onClick={onClick} size="s" />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="s"
            data-testid="hover"
          />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="s"
            data-testid="active"
          />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="s"
            data-testid="focus"
          />
          <InputButton
            aria-label="Remove"
            onClick={onClick}
            size="s"
            disabled
          />
          <InputButton aria-label="Remove" onClick={onClick} size="s" loading />
        </div>
      </div>

      <h2 className={classNames("font-heading-l", "text-default")}>
        InputButton with Tooltip
      </h2>
      <div className={classNames("flex", "gap-xxl", "flex-row")}>
        <div className={classNames("flex", "gap-m", "flex-col")}>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="xs" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="xs"
              data-testid="hover"
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="xs"
              data-testid="active"
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="xs"
              data-testid="focus"
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="xs"
              disabled
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="xs"
              loading
            />
          </Tooltip>
        </div>

        <div className={classNames("flex", "gap-m", "flex-col")}>
          <Tooltip title="Remove">
            <InputButton aria-label="Remove" onClick={onClick} size="s" />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="s"
              data-testid="hover"
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="s"
              data-testid="active"
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="s"
              data-testid="focus"
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="s"
              disabled
            />
          </Tooltip>
          <Tooltip title="Remove">
            <InputButton
              aria-label="Remove"
              onClick={onClick}
              size="s"
              loading
            />
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: {
      disable: true,
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]',
    },
  },
};
