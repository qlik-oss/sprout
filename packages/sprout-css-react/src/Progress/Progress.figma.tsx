// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { ProgressCircular, type ProgressCircularProps } from ".";

// TODO: add progress bar

figma.connect(
  ProgressCircular,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6586-47016&node-type=frame&m=dev",
  {
    props: {
      size: figma.enum<ProgressCircularProps["size"]>("Size", {
        Default: undefined,
        Small: "s",
        Large: "l",
      }),
      percent: figma.enum("Type", { Determined: 75, Indetermined: undefined }),
    },
    example: ({ ...props }) => <ProgressCircular {...props} />,
  },
);
