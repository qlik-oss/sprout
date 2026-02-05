import { Tag, type TreeProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { ICONS_MAP, ICON_OPTIONS } from "../internal/icons/Icons";

export const TreeItemArgTypes: ArgTypes<TreeProps["TreeItem"]> = {
  id: {
    control: "text",
    description: "Unique identifier for the tree item.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  label: {
    control: "text",
    description: "The label of the tree item.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  path: {
    control: "object",
    description: "An array representing the path to the tree item, used for nesting.",
    table: {
      type: {
        summary: "string[]",
      },
    },
  },
  isLeaf: {
    control: "boolean",
    description: "Indicates if the tree item is a leaf node (no children).",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  disabled: {
    control: "boolean",
    description: "Disables the tree item and prevents user interaction.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  nesting: {
    control: "number",
    description: "The nesting level of the tree item, used for indentation.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  expanded: {
    control: "boolean",
    description: "Controls the expanded state of the tree item.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  onExpand: {
    control: "object",
    description: "Callback function when the tree item is expanded or collapsed.",
    table: {
      type: {
        summary: "(id: string, expanded: boolean) => void",
      },
    },
  },
  icon: {
    control: "select",
    if: { arg: "expandedIcon", exists: false },
    description: "Icon to display next to the tree item label.",
    table: {
      type: {
        summary: "ReactNode | (expanded: boolean) => ReactNode",
      },
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
  },
  children: {
    control: "select",
    description: "The content of the tree item.",
    options: ["Text", "Tag"],
    mapping: {
      Text: "This is a tree item",
      Tag: <Tag text="Tag" />,
    },
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
};
