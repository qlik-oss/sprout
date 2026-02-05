// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { FloatingWrapper } from ".";

figma.connect(
  FloatingWrapper,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=23650-1451",
  {
    props: {
      children: figma.children("*"),
    },
    example: ({ children }) => <FloatingWrapper>{children}</FloatingWrapper>,
  },
);
