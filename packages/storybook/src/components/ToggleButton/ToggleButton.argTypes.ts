import type { ToggleButtonProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

export const ToggleButtonArgTypes: ArgTypes<ToggleButtonProps> = {
  label: {
    control: {
      type: "text",
    },
  },
  variant: {
    control: {
      type: "select",
    },
    options: [undefined, "default", "quiet"],
  },
  size: {
    control: {
      type: "select",
    },
    options: [undefined, "default", "small"],
  },
  toggled: {
    control: {
      type: "boolean",
    },
    description:
      "Controls the toggle state. Setting this prop will make the button controlled.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  asDropdown: {
    control: {
      type: "boolean",
    },
    description:
      "When true, a dropdown arrow is added to the button. This is used when the button is a dropdown trigger.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  defaultToggled: {
    description:
      "Boolean indicating if the button should be toggled by default. Setting this prop will make the button controlled. Defaults to `false` if not set.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  onChange: {
    description:
      "Function to call when the toggle state changes. This will be called with the new toggle state as a boolean. Setting this prop will make the button controlled.",
    table: {
      type: {
        summary: "function",
      },
    },
  },
};
