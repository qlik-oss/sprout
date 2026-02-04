// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import type { BadgeProps } from "../Badge";
import { Button, type ButtonProps } from "./Button";

figma.connect(
  Button,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7602-60727&node-type=frame&t=PnaKgNTyvjElXTXa-0",
  {
    variant: { "As dropdown": false },
    props: {
      label: figma.string("Text"),
      variant: figma.enum<ButtonProps["variant"]>("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Quiet: "quiet",
        Destructive: "destructive",
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      loading: figma.enum("State", {
        Loading: true,
      }),
      size: figma.enum<ButtonProps["size"]>("Size", {
        Small: "small",
      }),
      badge: figma.nestedProps("Badge", {
        variant: "alphanumeric" as const,
        text: figma.string("Text"),
        color: figma.enum<BadgeProps["color"]>("Color", {
          Default: "info",
          Danger: "danger",
          Warning: "warning",
          Success: "success",
          Selected: "selected",
          Neutral: undefined,
        }),
      }),
      icon: figma.boolean("Has icon", {
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        true: figma.instance("Icon"),
        false: false,
      }),
    },
    example: (props) => <Button {...props} />,
  },
);
