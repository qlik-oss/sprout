import type { FieldLabelProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react";

export const FieldLabelArgTypes: ArgTypes<FieldLabelProps> = {
  children: {
    control: false,
    description: "The content to be displayed inside the FieldLabel component.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "If true, the field label is displayed in a disabled state.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  htmlFor: {
    control: {
      type: "text",
    },
    description:
      "The id of the form element that this label is associated with.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  infoIconPopover: {
    control: "text",
    description:
      "Popover text that appears when clicking on the info icon next to the label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  infoIconTooltip: {
    control: "text",
    description:
      "Tooltip text that appears when hovering over the info icon next to the label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  label: {
    control: {
      type: "text",
    },
    description: "The text label for the field.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  optional: {
    control: {
      type: "boolean",
    },
    description: "If true, marks the field as optional.",
  },
};
