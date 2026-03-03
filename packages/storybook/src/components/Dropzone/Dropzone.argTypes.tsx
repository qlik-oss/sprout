import type { DropzoneProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { ICONS_MAP, ICON_OPTIONS } from "../../internal/icons/Icons";

export const DropzoneArgTypes: ArgTypes<DropzoneProps> = {
  disabled: {
    control: "boolean",
    description: "Disables the dropzone and prevents user interaction.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  status: {
    control: "select",
    description: "The current status of the dropzone.",
    options: [undefined, "dragging", "hover"],
    table: {
      type: {
        summary: 'undefined | "dragging" | "hover"',
      },
    },
  },
  statusDefault: {
    control: "select",
    description: "The default status of the dropzone when not controlled.",
    options: [undefined, "dragging", "hover"],
    table: {
      type: {
        summary: 'undefined | "dragging" | "hover"',
      },
    },
  },
  onStatusChange: {
    control: false,
    action: "statusChanged",
    description: "Callback function when the status changes.",
    table: {
      type: {
        summary: "(status: 'dragging' | 'hover') => void",
      },
    },
  },
  icon: {
    control: "select",
    description: "The icon displayed in the dropzone.",
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    table: {
      type: {
        summary: "ReactNode | undefined",
      },
    },
  },
  title: {
    control: "text",
    description: "The title displayed in the dropzone.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  description: {
    control: "text",
    description: "The description displayed in the dropzone.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  button: {
    control: "object",
    description: "Configuration for the primary button in the dropzone.",
    table: {
      type: {
        summary: "Partial<ButtonProps>",
      },
    },
  },
  secondaryButton: {
    control: "object",
    description: "Configuration for the secondary button in the dropzone.",
    table: {
      type: {
        summary: "Partial<ButtonProps>",
      },
    },
  },
  onDragOver: {
    control: false,
    description:
      "Callback function when a drag event occurs over the dropzone.",
    table: {
      type: {
        summary: "(event: DragEvent) => void",
      },
    },
  },
};
