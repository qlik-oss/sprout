// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Thumbnail, type ThumbnailProps } from "./Thumbnail";

figma.connect(
  Thumbnail,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=21182-180",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      type: figma.enum<ThumbnailProps["type"]>("Type", {
        Image: "img",
        Icon: "icon",
      }),
      size: figma.enum<ThumbnailProps["size"]>("Size", {
        "Extra large": "xl",
        Large: "l",
        Small: "s",
        "Extra small": "xs",
        Default: undefined,
      }),
      children: figma.enum("Type", {
        Image: <img alt="" src="" />,
        Icon: figma.children("*"),
      }),
    },
    example: ({ children, ...props }) => (
      <Thumbnail {...props}>{children}</Thumbnail>
    ),
  },
);
