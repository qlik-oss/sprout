import type { SegmentedControlProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { ICONS_MAP, ICON_OPTIONS } from "../internal/icons/Icons";

export const SegmentedControlGroupArgTypes: ArgTypes<SegmentedControlProps["Group"]> = {
  label: {
    control: {
      type: "text",
    },
    description: "The text that describes the field.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  justified: {
    control: "boolean",
    if: { arg: "orientation", eq: "horizontal" },
    table: { type: { summary: "boolean" } },
  },
  name: {
    control: "text",
    description: "Must be set on each Segment or once on Group to link the segments together.",
    table: { type: { summary: "string" } },
  },
  iconOnly: { control: "boolean", table: { type: { summary: "boolean" } } },
  orientation: {
    control: {
      type: "select",
    },
    options: ["horizontal", "vertical"],
    description: "Sets the orientation of the segmented control. Vertical orientation is limited to icon only. ",

    table: {
      defaultValue: { summary: "horizontal" },
      type: {
        summary: '"horizontal" | "vertical"',
      },
    },
  },
};

export const SegmentedControlSegmentArgTypes: ArgTypes<SegmentedControlProps["Segment"]> = {
  disabled: { control: "boolean", table: { type: { summary: "boolean" } } },
  label: { control: "text", table: { type: { summary: "string" } } },
  value: { control: "text", table: { type: { summary: "string" } } },
  icon: {
    control: {
      type: "select",
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description: "Accepts a `ReactNode` and is rendered before the label. Use an icon from `@qlik/sprout-icons`",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  name: {
    control: "text",
    description: "Must be set on each Segment or once on Group to link the segments together.",
    table: { type: { summary: "string" } },
  },
};
