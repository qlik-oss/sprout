import type { DividerProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

export const DividerArgTypes: ArgTypes<DividerProps> = {
  height: {
    control: {
      type: "select",
    },
    description: "Height of the vertical divider.",
    if: {
      arg: "orientation",
      eq: "vertical",
    },
    options: ["auto", "100%"],
    table: {
      defaultValue: {
        summary: '"auto"',
      },
      type: {
        summary: '"auto" | "100%"',
      },
    },
  },
  orientation: {
    control: {
      type: "select",
    },
    description: "Separator's orientation.",
    options: ["horizontal", "vertical"],
    table: {
      defaultValue: {
        summary: '"horizontal"',
      },
      type: {
        summary: '"horizontal" | "vertical"',
      },
    },
  },
  width: {
    control: {
      type: "select",
    },
    description: "Width of the horizontal divider.",
    if: {
      arg: "orientation",
      eq: "horizontal",
    },
    options: ["auto", "100%"],
    table: {
      defaultValue: {
        summary: '"100%"',
      },
      type: {
        summary: '"auto" | "100%"',
      },
    },
  },
};
