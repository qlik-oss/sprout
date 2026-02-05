import { SegmentedControl, classNames } from "@qlik/sprout-css-react";
import {BookmarkIcon} from "@qlik/sprout-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  SegmentedControlGroupArgTypes,
  SegmentedControlSegmentArgTypes,
} from "./SegmentedControl.argTypes";

type StoryGroup = StoryObj<typeof SegmentedControl.Group>;
type StorySegment = StoryObj<typeof SegmentedControl.Segment>;

const meta: Meta = {
  title: "Components/SegmentedControl",
  component: SegmentedControl.Group,
};
export default meta;

export const Playground: StoryGroup = {
  render: (props) => {
    return (
      <div className={classNames("flex")} data-testid="wrapper">
        <SegmentedControl.Group {...props}>
          <SegmentedControl.Segment
            value="A"
            label="Segment"
            icon={<BookmarkIcon />}
            defaultChecked
          />
          <SegmentedControl.Segment
            value="B"
            label="Segment"
            icon={<BookmarkIcon />}
          />
          <SegmentedControl.Segment
            value="C"
            label="Segment"
            icon={<BookmarkIcon />}
            disabled
          />
          <SegmentedControl.Segment
            value="D"
            label="Segment"
            icon={<BookmarkIcon />}
          />
          <SegmentedControl.Segment
            value="E"
            label="Segment"
            icon={<BookmarkIcon />}
          />
        </SegmentedControl.Group>
      </div>
    );
  },
  args: {
    name: "segmented-control-group",
    orientation: "horizontal",
  },
  argTypes: SegmentedControlGroupArgTypes,
};

export const Segment: StorySegment = {
  render: (props) => (
    <div
      className={classNames("flex", "w-full", "gap-3xl")}
      data-testid="wrapper"
    >
      <SegmentedControl.Segment {...props} />
    </div>
  ),
  args: {
    value: "segment",
    label: "Segment",
  },
  argTypes: SegmentedControlSegmentArgTypes,
};

export const VisualTest: StoryObj = {
  render: () => (
    <div className={classNames("flex", "flex-row", "gap-xxl")}>
      <div className={classNames("flex", "flex-col")}>
        <div
          className={classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <SegmentedControl.Segment label="Default" />
        </div>
        <div
          className={classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <SegmentedControl.Segment label="Hover" data-testid="hover" />
        </div>
        <div
          className={classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <SegmentedControl.Segment label="Pressed" data-testid="pressed" />
        </div>
        <div
          className={classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <SegmentedControl.Segment label="Focus" data-testid="focus" />
        </div>
        <div
          className={classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <SegmentedControl.Segment label="Toggled" checked />
        </div>
        <div
          className={classNames("flex", "p-m", "w-fit")}
          data-testid="wrapper"
        >
          <SegmentedControl.Segment label="Disabled" disabled />
        </div>
      </div>

      <div className={classNames("flex", "flex-1")}>
        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>
            {" "}
            Default
          </h2>
          <SegmentedControl.Group name="segmented-control-group-1">
            <SegmentedControl.Segment
              value="A"
              label="Segment"
              defaultChecked
            />
            <SegmentedControl.Segment value="B" label="Segment" />
            <SegmentedControl.Segment value="C" label="Segment" disabled />
            <SegmentedControl.Segment value="D" label="Segment" />
            <SegmentedControl.Segment value="E" label="Segment" />
          </SegmentedControl.Group>

          <h2 className={classNames("font-heading-m", "text-default")}>
            {" "}
            With label
          </h2>
          <SegmentedControl.Group
            name="segmented-control-group-2"
            label="Segmented Control Field Label"
          >
            <SegmentedControl.Segment
              value="A"
              label="Segment"
              defaultChecked
            />
            <SegmentedControl.Segment value="B" label="Segment" />
            <SegmentedControl.Segment value="C" label="Segment" disabled />
            <SegmentedControl.Segment value="D" label="Segment" />
            <SegmentedControl.Segment value="E" label="Segment" />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>
            Justified
          </h2>
          <SegmentedControl.Group name="segmented-control-group-3" justified>
            <SegmentedControl.Segment
              value="A"
              label="Segment"
              icon={<BookmarkIcon />}
              defaultChecked
            />
            <SegmentedControl.Segment
              value="B"
              label="Segment"
              icon={<BookmarkIcon />}
            />
            <SegmentedControl.Segment
              value="C"
              label="Segment"
              icon={<BookmarkIcon />}
              disabled
            />
            <SegmentedControl.Segment
              value="D"
              label="Segment"
              icon={<BookmarkIcon />}
            />
            <SegmentedControl.Segment
              value="E"
              label="Segment"
              icon={<BookmarkIcon />}
            />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>
            Icon Only
          </h2>
          <SegmentedControl.Group name="segmented-control-group-4" iconOnly>
            <SegmentedControl.Segment
              value="A"
              label="Segment"
              icon={<BookmarkIcon />}
              defaultChecked
            />
            <SegmentedControl.Segment
              value="B"
              label="Segment"
              icon={<BookmarkIcon />}
            />
            <SegmentedControl.Segment
              value="C"
              label="Segment"
              icon={<BookmarkIcon />}
              disabled
            />
            <SegmentedControl.Segment
              value="D"
              label="Segment"
              icon={<BookmarkIcon />}
            />
            <SegmentedControl.Segment
              value="E"
              label="Segment"
              icon={<BookmarkIcon />}
            />
          </SegmentedControl.Group>
        </span>

        <span>
          <h2 className={classNames("font-heading-m", "text-default")}>
            Vertical
          </h2>
          <SegmentedControl.Group
            name="segmented-control-group-5"
            orientation="vertical"
            iconOnly
          >
            <SegmentedControl.Segment
              value="A"
              label="Segment"
              icon={<BookmarkIcon />}
              defaultChecked
            />
            <SegmentedControl.Segment
              value="B"
              label="Segment"
              icon={<BookmarkIcon />}
            />
            <SegmentedControl.Segment
              value="C"
              label="Segment"
              icon={<BookmarkIcon />}
              disabled
            />
            <SegmentedControl.Segment
              value="D"
              label="Segment"
              icon={<BookmarkIcon />}
            />
            <SegmentedControl.Segment
              value="E"
              label="Segment"
              icon={<BookmarkIcon />}
            />
          </SegmentedControl.Group>
        </span>
      </div>
    </div>
  ),
  parameters: {
    pseudo: {
      hover: "[data-testid=hover]",
      focusVisible: "[data-testid=focus]",
      active: "[data-testid=pressed]",
    },
  },
};
