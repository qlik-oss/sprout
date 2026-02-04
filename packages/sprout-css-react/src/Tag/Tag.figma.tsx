/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import type { ReactElement } from "react";

// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Tag, TagGroups, type TagProps } from ".";
import type { Badge } from "../Badge";

figma.connect(
  TagGroups,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7628%3A86414",
  {
    props: {
      tags: figma.children("Tag"),
    },
    example: (props) => <TagGroups>{props.tags}</TagGroups>,
  },
);

figma.connect(
  Tag,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7611-69671",
  {
    props: {
      // in this case we go to read in the SubComponent to hoist the props
      text: figma.string("Text"),
      size: figma.enum<TagProps["size"]>("Size", {
        Default: undefined,
        Small: "s",
      }),
      color: figma.enum<TagProps["color"]>("Color", {
        Neutral: undefined,
        Error: "error",
        Info: "info",
        Warning: "warning",
        Success: "success",
      }),
      // TODO: not supported right now
      // onRemove: figma.boolean("Is dismissable", {
      //   true: () => {},
      //   false: undefined,
      // }),
      avatar: figma.boolean("Has avatar", {
        true: figma.children("Avatar"),
        false: undefined,
      }),
      icon: figma.boolean("Has icon", {
        true: figma.instance("Icon"),
        false: undefined,
      }),
      badge: figma.boolean("Has badge", {
        true: figma.children("Badge") as ReactElement<typeof Badge>,
        false: undefined,
      }),
    },
    example: (props: TagProps) => {
      return <Tag {...props} />;
    },
  },
);
