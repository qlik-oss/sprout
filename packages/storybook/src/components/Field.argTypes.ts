import type { FieldProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const FieldArgTypes: ArgTypes<Partial<FieldProps>> = {
  optional: {
    control: {
      type: "boolean",
    },
    description: "If true, the field is optional and will show an '(optional)' label next to the label.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  label: {
    control: {
      type: "text",
    },
    description: "The text that describes the field. It is optional if you only want the inline input.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  "aria-label": {
    control: {
      type: "text",
    },
    description:
      "Defines a string value that labels the current element. Use this when the label is not visible on the screen.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  infoIconTooltip: {
    control: "text",
    description: "Tooltip text that appears when hovering over the info icon next to the label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  infoIconPopover: {
    control: "text",
    description: "Popover text that appears when clicking on the info icon next to the label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  helpText: {
    control: {
      type: "text",
    },
    description: "The text that describes the field. It is optional if you only want the inline input.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean",
      },
    },
  },

  errorMessages: {
    control: {
      type: "select",
      labels: {
        first: "One error message",
        second: "Two error messages",
      },
    },
    options: [undefined, "one msg", "two msg"],
    mapping: {
      "one msg": ["Error message 1"],
      "two msg": ["Error message 1", "Error message 2"],
    },
    table: {
      type: {
        summary: "string[]",
      },
    },
    description:
      "The error messages that will be shown if the field is marked as error. Note when errorMessages is set, the helpText is ignored.",
  },
};

export const CommonFieldArgTypes: ArgTypes<{
  readOnly?: boolean;
  placeholder?: string;
  hasError?: boolean;
}> = {
  readOnly: {
    control: "boolean",
    description: "If true, the field is read only so the user will not be able to select a value.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  placeholder: { control: "text", table: { type: { summary: "string" } } },
  hasError: {
    control: "boolean",
    description: "If true, the field will be marked as error.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
};
