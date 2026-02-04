// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Avatar, type AvatarProps } from "./Avatar";

figma.connect(
  Avatar,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18990%3A447",
  {
    props: {
      size: figma.enum<AvatarProps["size"]>("Size", {
        "Extra small": "xs",
        Small: "s",
        Large: "l",
        "Extra large": "xl",
      }),
      text: figma.enum("Type", { Text: figma.string("Text") }),
      img: figma.enum("Type", {
        Image: {
          alt: "Avatar",
          src: "https://effective-chainsaw-mz3je65.pages.github.io/assets/image-CprsGvi_.png",
        },
      }),
      icon: figma.enum("Type", {
        Icon: figma.instance("Icon"),
      }),
      badge: figma.boolean("Has badge", {
        true: figma.children("Badge"),
        false: undefined,
      }),
    },
    example: (props) => <Avatar {...props} />,
  },
);
