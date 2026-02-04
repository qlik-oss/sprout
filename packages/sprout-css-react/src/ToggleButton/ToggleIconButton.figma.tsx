// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { ToggleIconButton, type ToggleIconButtonProps } from ".";

figma.connect(
  ToggleIconButton,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=19442-5895&node-type=frame&t=MRLT10HDA4aa46fM-11",
  {
    props: {
      variant: figma.enum<ToggleIconButtonProps["variant"]>("Variant", {
        Default: undefined,
        Quiet: "quiet",
      }),
      icon: figma.instance("Icon"),
      toggled: figma.enum("State", { Toggled: true }),
      size: figma.enum<ToggleIconButtonProps["size"]>("Size", {
        default: undefined,
        small: "small",
      }),
      badge: figma.children("Badge"),
      disabled: figma.enum("State", { Disabled: true }),
    },
    example: ({ ...props }) => <ToggleIconButton label="Label" {...props} />,
  },
);
