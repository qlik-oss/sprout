import type { ThumbnailProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

export const ThumbnailArgTypes: ArgTypes<ThumbnailProps> = {
  size: {
    description: "The size of the thumbnail.",
    control: {
      type: "select",
    },
    options: ["xs", "s", "m", "l", "xl"],
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "m",
      },
    },
  },
  type: {
    description:
      'The type specifies the type of content expected inside the Thumbnail component. `type="icon"` expects an svg icon, while `type="img"` expects an image element.',
    control: {
      type: "select",
    },
    options: ["icon", "img"],
    table: {
      type: {
        summary: "string",
      },
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
};
