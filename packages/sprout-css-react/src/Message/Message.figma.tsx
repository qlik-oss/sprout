/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Message } from "./Message";

figma.connect(
  Message,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=9048%3A40994",
  {
    props: {
      title: figma.string("Title"),
      message: figma.string("Description"),
      illustration: figma.boolean("Has illustration", {
        true: figma.instance("Illustration"),
        false: undefined,
      }),
      progress: figma.boolean("Show Progress/Bar", {
        true: { "aria-label": "Task in progress" },
        false: undefined,
      }),
      actions: figma.boolean("Has actions", {
        true: figma.boolean("Has secondary action", {
          true: figma.children(["Button", "SecondaryButton"]),
          false: figma.children("Button"),
        }),
        false: undefined,
      }),
    },
    example: ({ ...props }) => <Message {...props} />,
  },
);
