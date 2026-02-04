import type {
  CheckboxGroupProps,
  CheckboxProps,
} from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react";

import { FieldArgTypes } from "../Field.argTypes";

export const CheckboxArgTypes: ArgTypes<CheckboxProps> = {
  checked: {
    control: {
      type: "boolean",
    },
    description: "If true, the checkbox is checked.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  defaultChecked: {
    control: {
      type: "boolean",
    },
    description: "If true, the checkbox is checked by default (uncontrolled).",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "If true, the checkbox is disabled.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  helpText: {
    control: {
      type: "text",
    },
    description: "Additional help text displayed below the checkbox.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  indeterminate: {
    control: {
      type: "boolean",
    },
    description:
      "If true, the checkbox is in an indeterminate state (controlled).",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  infoIconTooltip: FieldArgTypes.infoIconTooltip,
  label: {
    control: {
      type: "text",
    },
    description: "The label text displayed next to the checkbox.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  name: {
    control: {
      type: "text",
    },
    description: "The name attribute for the checkbox input.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  onChange: {
    control: false,
    description: "Callback function invoked when the checkbox state changes.",
    table: {
      type: {
        summary: "(event: ChangeEvent<HTMLInputElement>) => void",
      },
    },
  },
};

export const CheckboxGroupArgTypes: ArgTypes<CheckboxGroupProps> = {
  ...FieldArgTypes,
  children: {
    control: false,
    description: "Checkbox components to be rendered inside the group.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  isError: {
    control: {
      type: "boolean",
    },
    description: "If true, the checkbox group is displayed in an error state.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  options: {
    control: false,
    description: "Array of checkbox options to render within the group.",
    table: {
      type: {
        summary: "CheckboxProps[]",
      },
    },
  },
};
