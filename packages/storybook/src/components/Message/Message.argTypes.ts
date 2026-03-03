import type { MessageProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const MessageArgTypes: ArgTypes<MessageProps> = {
  title: {
    control: "text",
    description: "The title of the message.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  message: {
    control: "text",
    description: "The content of the message.",
    table: { type: { summary: "ReactNode" } },
  },
  illustration: {
    description: "The illustration of the message.",
    table: { disable: true, type: { summary: "ReactNode" } },
  },
  actions: {
    disable: true,
    description:
      "The actions to let the user interact according to the message.",
    table: { type: { summary: "ReactNode" } },
  },
  progress: {
    control: "object",
    description: "The progress bar of the message.",
    table: { type: { summary: "ProgressBarProps" } },
  },
};
