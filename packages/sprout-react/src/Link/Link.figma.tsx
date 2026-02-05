// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Link, type LinkProps } from "./Link";

figma.connect(
  Link,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18388%3A3499",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      isExternal: figma.boolean("Is external"),
      children: figma.string("Label"),
      font: figma.enum<LinkProps["font"]>("Font", {
        "body-xxl": "body-xxl",
        "body-xl": "body-xl",
        "body-l": "body-l",
        "body-m": "body-m",
        "body-s": "body-s",
        "body-xs": "body-xs",
      }),
    },
    example: ({ children, ...props }) => <Link {...props}>{children}</Link>,
  },
);
