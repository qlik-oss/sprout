import {
  Tooltip,
  type TooltipProps,
  classNames,
} from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { TooltipArgTypes } from "./Tooltip.argTypes";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
};
export default meta;

const buttonClass = classNames("font-body-s", "text-default");

export const Playground: StoryObj<
  TooltipProps & { disableContainerScroll?: boolean }
> = {
  render: ({ disableContainerScroll, ...rest }) => (
    <div
      className={classNames("overflow-scroll", "border-default")}
      data-testid="wrapper"
      style={!disableContainerScroll ? { width: 500, height: 150 } : undefined}
      ref={(ref) => {
        if (ref && !disableContainerScroll) {
          ref.scrollTo({ top: 80, left: 250 });
        }
      }}
    >
      <div
        className={classNames(
          "flex",
          "flex-row",
          "grow-1",
          "shrink-0",
          "items-center",
          "justify-center",
        )}
        style={{ inlineSize: 1000, blockSize: 300 }}
      >
        <Tooltip {...rest}>
          <button type="button" className={buttonClass}>
            Hover me
          </button>
        </Tooltip>
      </div>
    </div>
  ),
  args: {
    title: "Tooltip",
    initialOpen: true,
    disableContainerScroll: false,
  },
  argTypes: {
    disableContainerScroll: {
      control: "boolean",
      description: "Disable scroll on the container div",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    ...TooltipArgTypes,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export function VisualTest() {
  return (
    <div className={classNames("flex", "border-box", "flex-row")}>
      <div
        className={classNames(
          "flex",
          "border-box",
          "flex-col",
          "p-3xl",
          "justify-start",
          "items-center",
          "gap-3xl",
        )}
        style={{ inlineSize: 300 }}
      >
        <Tooltip title="placement=top" initialOpen placement="top">
          <button type="button" className={buttonClass}>
            Top
          </button>
        </Tooltip>
        <Tooltip title="placement=left" initialOpen placement="left">
          <button type="button" className={buttonClass}>
            Left
          </button>
        </Tooltip>
        <Tooltip title="placement=right" initialOpen placement="right">
          <button type="button" className={buttonClass}>
            Right
          </button>
        </Tooltip>
        <Tooltip title="placement=bottom" initialOpen placement="bottom">
          <button type="button" className={buttonClass}>
            Center
          </button>
        </Tooltip>
      </div>
      <div
        className={classNames(
          "flex",
          "border-box",
          "flex-col",
          "justify-start",
          "items-start",
          "gap-3xl",
        )}
      >
        <Tooltip
          title="ACCOUNT_NAME_UPPERCASE_SHOULD_WRAP_WITH"
          initialOpen
          placement="right"
        >
          <button type="button" className={buttonClass}>
            Long text
          </button>
        </Tooltip>
        <Tooltip
          title={"This\nText\nIs\nSplit\nInto\nMultiple\nLines"}
          initialOpen
          placement="bottom"
        >
          <button type="button" className={buttonClass}>
            Long text with newlines
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
