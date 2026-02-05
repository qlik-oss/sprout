import type { SkeletonProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

export const SkeletonArgTypes: ArgTypes<SkeletonProps> = {
  variant: {
    options: [
      undefined,
      "text",
      "circle",
      "rectangle",
      "Button",
      "IconButton",
      "Input",
      "InputField",
    ],
    control: { type: "select" },
    description:
      "The default variant is `text`. You can build your own variant by using composition.",
    table: {
      type: {
        summary: `rectangle | circle | text | Button | IconButton | Input | InputField`,
      },
    },
  },
  width: {
    description:
      "The width of the skeleton. The default value depend on the variant.",
    table: {
      type: {
        summary: `CSSProperties["width"]`,
      },
    },
  },
  height: {
    description:
      "The height of the skeleton. The default value depend on the variant.",
    table: {
      type: {
        summary: `CSSProperties["height"]`,
      },
    },
  },
};
