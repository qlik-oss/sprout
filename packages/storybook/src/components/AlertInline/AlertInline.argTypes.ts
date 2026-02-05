import type { AlertInlineProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const AlertInlineArgTypes: ArgTypes<AlertInlineProps> = {
  children: {
    control: {
      type: "text",
    },
    description: "Content of the alert inline. `message` prop has been deprecated.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  layout: {
    control: {
      type: "select",
    },
    options: ["horizontal", "vertical"],
    description: "Layout of the `actionBar` in the component.",
    table: {
      type: { summary: "horizontal | vertical" },
      defaultValue: { summary: "vertical" },
    },
  },
  severity: {
    control: {
      type: "select",
    },
    options: ["info", "warning", "error", "success", undefined],
    description: "Severity of the alert inline.",
    table: {
      type: { summary: "info | warning | error | success" },
    },
  },
  actionBar: {
    description: "Action bar content, typically buttons.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  labelDismiss: {
    control: {
      type: "text",
    },
    description: "Label for the dismiss button.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "Dismiss" },
    },
  },
  onDismiss: {
    action: "dismiss",
    description: "Callback when the alert is dismissed.",
    table: {
      type: { summary: "() => void" },
    },
  },
};
