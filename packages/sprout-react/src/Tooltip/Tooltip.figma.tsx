// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Tooltip, type TooltipProps } from ".";

figma.connect(
  Tooltip,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18374-74455",
  {
    props: {
      placement: figma.enum<TooltipProps["placement"]>("Position", {
        Top: "top",
      }),
      title: figma.string("Text"),
      children: figma.string("Button"),
    },
    example: ({ placement, title, children }) => (
      <Tooltip placement={placement} title={title}>
        <button type="button">{children}</button>
      </Tooltip>
    ),
  },
);
