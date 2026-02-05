import type { AvatarProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { ICONS_MAP, ICON_OPTIONS } from "../internal/icons/Icons";

type AvatarArgTypes = ArgTypes<AvatarProps>;

const AVATAR_SIZES: Array<AvatarProps["size"]> = ["xs", "s", "m", "l", "xl", "illustration"];
const size: AvatarArgTypes["size"] = {
  control: {
    type: "select",
  },
  options: AVATAR_SIZES,
  table: {
    defaultValue: {
      summary: "m",
    },
    type: {
      summary: AVATAR_SIZES.join("|"),
    },
  },
};
const bgIndex: AvatarArgTypes["bgIndex"] = {
  control: {
    type: "number",
  },
  description: "Background color index for the avatar",
  table: {
    type: {
      summary: "number",
    },
  },
};

export const AvatarTextArgTypes: AvatarArgTypes = {
  bgIndex,
  size,
  text: {
    control: {
      type: "text",
    },
    description: "Text to display inside the avatar. Only the first two characters will be shown.",
  },
};

export const AvatarIconArgTypes: AvatarArgTypes = {
  bgIndex,
  size,
  icon: {
    control: {
      type: "select",
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description: "Accepts a `ReactElement`. Use an icon from `@qlik/sprout-icons`",
    table: {
      type: {
        summary: "ReactElement",
      },
    },
  },
};

export const AvatarImgArgTypes: AvatarArgTypes = {
  size,
  img: {
    control: {
      type: "object",
    },
    description: "Accepts props and attributes for an `img` tag. Excluded `className`, `style`, and `color`.",
    table: {
      type: {
        summary: "HTMLImageElement",
      },
    },
  },
};
