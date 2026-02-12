import type { RadioGroupProps, RadioProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { FieldArgTypes } from "../Field.argTypes";

export const RadioGroupArgTypes: ArgTypes<RadioGroupProps> = {
  errorMessages: {
    control: {
      labels: {
        first: "One error message",
        second: "Two error messages",
      },
      type: "select",
    },
    description:
      "The error messages that will be shown if the field is marked as error. Note when errorMessages is set, the helpText is ignored.",
    mapping: {
      "one msg": ["Error message 1"],
      "two msg": ["Error message 1", "Error message 2"],
    },
    options: [undefined, "one msg", "two msg"],
    table: {
      type: {
        summary: "string[]",
      },
    },
  },
  helpText: {
    control: "text",
    description: "Help text displayed below the radio group.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  isError: {
    control: "boolean",
    description: "If true, the radio group will be marked as error.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  label: {
    control: "text",
    description: "The label for the radio group.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  name: {
    control: "text",
    description:
      "The name of the radio group, used to group the radios together.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};

export const RadioArgTypes: ArgTypes<RadioProps> = {
  checked: {
    control: "boolean",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  defaultChecked: {
    control: "boolean",
    description: "The default checked state of the radio.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  disabled: {
    control: "boolean",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  label: {
    control: "text",
    description: "The label for the radio.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  helpText: {
    control: "text",
    description: "Help text displayed below the individual radio.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  infoIconTooltip: {
    if: { arg: "label" },
    ...FieldArgTypes.infoIconTooltip,
  },
  name: {
    control: "text",
    description: "The name of the radio, used to group radios together.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  readOnly: {
    control: "boolean",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  value: {
    control: "text",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
