import type { ButtonGroupProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react";

export const ButtonGroupArgTypes: ArgTypes<ButtonGroupProps> = {
  children: {
    control: false,
    description: "The buttons to be rendered inside the ButtonGroup.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  fullWidth: {
    control: {
      type: "boolean",
    },
    description:
      "If true, the button group will take the full width of its container.",
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: "boolean",
      },
    },
  },
  orientation: {
    control: {
      type: "select",
    },
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
};
