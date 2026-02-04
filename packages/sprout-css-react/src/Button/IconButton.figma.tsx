// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import type { BadgeProps } from "../Badge";
import type { ButtonProps } from "./Button";
import { IconButton } from "./IconButton";

figma.connect(
  IconButton,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18318%3A40996",
  {
    variant: { "As dropdown": false },
    props: {
      asDropdown: figma.boolean("As dropdown"),
      size: figma.enum<ButtonProps["size"]>("Size", {
        Small: "small",
      }),
      variant: figma.enum<ButtonProps["variant"]>("Variant", {
        Primary: "primary",
        Destructive: "destructive",
        Quiet: "quiet",
        Secondary: "secondary",
      }),
      loading: figma.enum<ButtonProps["loading"]>("State", {
        Loading: true,
      }),
      disabled: figma.enum("State", {
        Disabled: true,
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
      icon: figma.instance("Icon"),
    },
    example: ({ ...props }) => <IconButton label="Label" {...props} />,
  },
);
