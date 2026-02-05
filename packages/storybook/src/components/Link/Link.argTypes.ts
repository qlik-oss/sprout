import type { LinkProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

const FONT_OPTIONS = ["body_xxl", "body_xl", "body_l", "body_m", "body_s", "body_xs", "inherit"];

export const LinkArgTypes: ArgTypes<LinkProps> = {
  children: {
    control: "object",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  disabled: {
    control: "boolean",
    description: "Disables the link and prevents user interaction.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  font: {
    control: {
      type: "select",
    },
    options: FONT_OPTIONS,
    description: "Sets the font style for the link text.",
    table: {
      defaultValue: {
        summary: "body_m",
      },
      type: {
        summary: FONT_OPTIONS.join(" | "),
      },
    },
  },
  href: { control: "text" },
  isExternal: {
    control: "boolean",
    description: "Displays an external link icon next to the link text.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  withEllipsis: {
    control: "boolean",
    description: "Truncates the link text with an ellipsis if it overflows its container.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
};
