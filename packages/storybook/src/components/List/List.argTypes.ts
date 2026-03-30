import type { ListItemProps, ListProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const ListArgTypes: ArgTypes<ListProps> = {
  gap: {
    control: {
      type: "select",
    },
    description: "Gap between list items.",
    options: ["0", "s", "m", "l", "xl"],
    table: {
      type: {
        summary: '"0" | "s" | "m" | "l" | "xl"',
      },
    },
  },
  useGesture: {
    control: {
      type: "boolean",
    },
    description: "Enables arrow key keyboard navigation between list items.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  hasPadding: {
    control: {
      type: "boolean",
    },
    description: "When false, removes padding from all list items.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
};

export const ListItemArgTypes: ArgTypes<ListItemProps> = {
  children: {
    control: {
      type: "text",
    },
    description: "Content rendered inside the list item.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  selected: {
    control: {
      type: "boolean",
    },
    description: "Marks the list item as selected.",
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
    description: "Disables the interactive button when onClick is provided.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  hasPadding: {
    control: {
      type: "select",
    },
    options: [undefined, true, false],
    description: "Overrides List-level item padding.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  interactive: {
    control: {
      type: "select",
    },
    options: [undefined, true, false],
    description: "Forces interactive styling even without an onClick handler.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  onClick: {
    control: false,
    description: "Click handler that enables keyboard-focusable interaction.",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
};
