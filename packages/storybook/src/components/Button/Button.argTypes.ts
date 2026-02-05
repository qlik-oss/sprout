import type { ButtonProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

import { ICONS_MAP, ICON_OPTIONS } from "../internal/icons/Icons";

export const SIZES = [undefined, "small", "default"];
const VARIANTS = [undefined, "default", "primary", "secondary", "destructive", "quiet"];

export const ButtonArgTypes: ArgTypes<ButtonProps> = {
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
  badge: {
    control: {
      type: "object",
    },
    description: "See [Badge](./?path=/docs/components-badge--docs) for details",
    table: {
      type: {
        summary: "BadgeProps",
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
  justified: {
    control: {
      type: "boolean",
    },
    description: "When true, the button will be full width.",
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
    description: "The text content of the button",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  loading: {
    control: {
      type: "boolean",
    },
    description: "See [Progress](./?path=/docs/components-progress--docs) for details.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  size: {
    control: {
      type: "select",
    },
    options: SIZES,
    table: {
      defaultValue: {
        summary: "default",
      },
      type: {
        summary: `small | default`,
      },
    },
  },
  variant: {
    control: {
      type: "select",
    },
    options: VARIANTS,
    table: {
      defaultValue: {
        summary: "default",
      },
      type: {
        summary: "default | primary | secondary | destructive | quiet",
      },
    },
  },
  destructive: {
    control: {
      type: "boolean",
    },
    description:
      "When true, applies destructive styling to the button. Only applicable when variant is `primary` or `secondary`.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
};

export const ButtonIconArgTypes: ArgTypes = {
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
};
