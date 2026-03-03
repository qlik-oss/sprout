import type { TagProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const SIZES = [undefined, "s"];
export const COLORS = [undefined, "error", "info", "success", "warning"];

export const TagArgTypes: ArgTypes<TagProps> = {
  text: {
    control: {
      type: "text",
    },
    description: "The text content displayed in the tag.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  size: {
    control: {
      type: "select",
    },
    options: SIZES,
    description: "Size of the tag. When undefined, the tag uses default size.",
    table: {
      defaultValue: {
        summary: "default",
      },
      type: {
        summary: "s | undefined",
      },
    },
  },
  color: {
    control: {
      type: "select",
    },
    options: COLORS,
    description:
      "Color variant of the tag. When undefined, uses neutral color. Not available on TagLink and TagButton variants.",
    table: {
      defaultValue: {
        summary: "neutral",
      },
      type: {
        summary: "error | info | success | warning | undefined",
      },
    },
  },
  avatar: {
    control: false,
    description:
      "Avatar component displayed at the start of the tag. See [Avatar](./?path=/docs/components-avatar--docs) for details.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  icon: {
    control: false,
    description:
      "Icon component displayed at the start of the tag, before the text.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  badge: {
    control: false,
    description:
      "Badge component or badge props displayed at the end of the tag. See [Badge](./?path=/docs/components-badge--docs) for details.",
    table: {
      type: {
        summary: "BadgeProps | ReactElement<typeof Badge>",
      },
    },
  },
  onRemove: {
    control: false,
    description:
      "Callback function called when the remove button is clicked. When provided, a remove button is displayed. Not available on TagLink and TagButton variants.",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
  removeLabel: {
    control: {
      type: "text",
    },
    description:
      "Custom label for the remove button. Defaults to 'remove' from i18n translations.",
    table: {
      defaultValue: {
        summary: "'remove'",
      },
      type: {
        summary: "string",
      },
    },
  },
  id: {
    control: {
      type: "text",
    },
    description: "HTML id attribute for the tag element.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
