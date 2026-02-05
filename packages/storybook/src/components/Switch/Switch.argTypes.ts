import type { SwitchProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const SwitchArgTypes: ArgTypes<SwitchProps> = {
  disabled: {
    control: "boolean",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  readOnly: {
    control: "boolean",
    description:
      "Custom prop to visualize the read-only state. Checkboxes does not support `readonly` as a native attribute. [HTML attribute: readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/readonly)",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  label: {
    control: "text",
    description: "Label for the switch",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  infoIconTooltip: {
    if: { arg: "label", truthy: true },
    control: "text",
    description: "Tooltip text that appears when hovering over the info icon next to the label.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  helpText: {
    if: { arg: "label", truthy: true },
    control: {
      type: "text",
    },
    description:
      "The text that describes the switch. It is optional if you only want the switch. It can't be used without a label.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  "aria-label": {
    control: "text",
    description: "Accessible label for the switch, required if label is not provided",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  "aria-labelledby": {
    control: "text",
    description: "ID of an element that labels the switch, required if label is not provided",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
