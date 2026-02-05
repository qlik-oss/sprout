/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { ToggleButton, type ToggleButtonProps } from ".";

figma.connect(
  ToggleButton,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=19183-75585",
  {
    props: {
      variant: figma.enum<ToggleButtonProps["variant"]>("Variant", {
        Default: undefined,
        Quiet: "quiet",
      }),
      label: figma.string("Label"),
      icon: figma.boolean("Has icon", {
        false: undefined,
        true: figma.instance("Icon"),
      }),
      toggled: figma.enum("State", { Toggled: true }),
      size: figma.enum<ToggleButtonProps["size"]>("Size", {
        default: undefined,
        small: "small",
      }),
      badge: figma.children("Badge"),
      disabled: figma.enum("State", { Disabled: true }),
    },
    example: ({ ...props }) => <ToggleButton {...props} />,
  },
);
