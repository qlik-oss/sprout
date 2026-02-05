import type { AlertBannerProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const AlertBannerArgTypes: ArgTypes<AlertBannerProps> = {
  action: {
    description: "Action content, typically a button.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  content: {
    description: "Content of the alert banner.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  dismissLabel: {
    control: {
      type: "text",
    },
    description: "Label for the dismiss button.",
    table: {
      defaultValue: {
        summary: "Dismiss",
      },
      type: {
        summary: "string",
      },
    },
  },
  justify: {
    control: {
      type: "select",
    },
    description: "Justification of the alert content.",
    options: [undefined, "center"],
    table: {
      type: {
        summary: "undefined | center",
      },
    },
  },
  link: {
    description: "Link content, typically a hyperlink.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  onClickDismiss: {
    description: "Callback when the alert is dismissed.",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
  variant: {
    control: {
      type: "select",
    },
    options: [undefined, "info", "warning", "error", "success"],
    table: {
      type: {
        summary: "info | warning | error | success",
      },
    },
  },
};
