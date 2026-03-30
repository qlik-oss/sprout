import type { PanelProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const PanelPrimitiveArgTypes: ArgTypes<PanelProps["Primitive"]> = {
  placement: {
    control: false,
    description: "The side of the container where the panel is attached.",
    table: {
      type: {
        summary: "'top' | 'left' | 'right' | 'bottom'",
      },
    },
  },
  resizable: {
    control: {
      type: "boolean",
    },
    description: "Enables mouse and keyboard resizing.",
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: "boolean",
      },
    },
  },
  showResizeHandle: {
    control: {
      type: "boolean",
    },
    description:
      "When true, displays the resize icon inside the resize button while hovered or focused.",
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: "boolean",
      },
    },
  },
  overlay: {
    control: {
      type: "select",
    },
    options: [false, "s", "m", "l", "xl", "xxl", "3xl", "4xl"],
    description:
      "If provided, displays the panel as an overlay with the given size.",
    table: {
      type: {
        summary: "boolean | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl'",
      },
    },
  },
  onResize: {
    control: false,
    description: "Callback fired after resizing ends.",
    table: {
      type: {
        summary: "(size: number) => void",
      },
    },
  },
  minWidth: {
    control: false,
    description: "Minimum width of the panel.",
    table: {
      type: {
        summary: "number | string",
      },
    },
  },
  maxWidth: {
    control: false,
    description: "Maximum width of the panel.",
    table: {
      type: {
        summary: "number | string",
      },
    },
  },
  minHeight: {
    control: false,
    description: "Minimum height of the panel.",
    table: {
      type: {
        summary: "number | string",
      },
    },
  },
  maxHeight: {
    control: false,
    description: "Maximum height of the panel.",
    table: {
      type: {
        summary: "number | string",
      },
    },
  },
  initialSize: {
    control: false,
    description: "Initial panel size in pixels.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  children: {
    control: false,
    description: "Content rendered inside the panel.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
};
