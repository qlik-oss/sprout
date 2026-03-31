import type { MessageProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const MessageArgTypes: ArgTypes<MessageProps> = {
  actions: {
    description:
      "The actions to let the user interact according to the message.",
    disable: true,
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  details: {
    control: false,
    description:
      "The details content of the message, displayed below the main content.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  illustration: {
    description: "The illustration of the message.",
    table: {
      disable: true,
      type: {
        summary: "ReactNode",
      },
    },
  },
  layout: {
    control: "select",
    description: "The layout of the message.",
    options: ["vertical", "horizontal"],
    table: {
      defaultValue: {
        summary: '"vertical"',
      },
      type: {
        summary: '"vertical" | "horizontal"',
      },
    },
  },
  message: {
    control: "text",
    description: "The content of the message.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  progress: {
    control: "object",
    description:
      "The [progress bar](./?path=/docs/components-progress--docs#properties) of the message.",
    table: {
      type: {
        summary: "ProgressBarProps",
      },
    },
  },
  title: {
    control: "text",
    description: "The title of the message.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
