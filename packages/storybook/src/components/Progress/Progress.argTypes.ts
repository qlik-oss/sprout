import type {
  ProgressBarProps,
  ProgressCircularProps,
} from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

export const ProgressBarArgTypes: ArgTypes<ProgressBarProps> = {
  "aria-label": {
    control: {
      type: "text",
    },
    description:
      "Accessible label describing the progress bar. **Required if no label or tooltip is provided.**",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  contained: {
    control: {
      type: "boolean",
    },
    description:
      "If true, the progress bar will be contained within its parent element.",
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
    description:
      "Label describing the progress bar. **Required if no aria-label or tooltip is provided.**",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  percent: {
    control: {
      max: 100,
      min: 0,
      type: "number",
    },
    description:
      "The progress percentage (0-100). If undefined or 0, the progress bar is indetermined.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  tooltip: {
    control: {
      type: "text",
    },
    description:
      "Tooltip text shown on hover. **Required if no label or aria-label is provided.**",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};

export const ProgressCircularArgTypes: ArgTypes<ProgressCircularProps> = {
  "aria-label": {
    control: {
      type: "text",
    },
    description:
      "Accessible label describing the progress circular. **Required.**",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  percent: {
    control: {
      max: 100,
      min: 0,
      type: "number",
    },
    description:
      "The progress percentage (0-100). If undefined, the progress circular is indetermined.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  size: {
    control: {
      type: "select",
    },
    description: "Size of the progress circular.",
    options: [undefined, "s", "m", "l"],
    table: {
      defaultValue: {
        summary: "m",
      },
      type: {
        summary: "s | m | l",
      },
    },
  },
  variant: {
    control: {
      type: "select",
    },
    description: "Visual variant of the progress circular.",
    options: ["default", "destructive"],
    table: {
      defaultValue: {
        summary: "default",
      },
      type: {
        summary: "default | destructive",
      },
    },
  },
};
