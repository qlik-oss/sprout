// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Skeleton, type SkeletonProps } from "./Skeleton";

figma.connect(
  Skeleton,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6596%3A49017",
  {
    props: {
      variant: figma.enum<SkeletonProps["variant"]>("Variant", {
        Circle: "circle",
        Text: "text",
        Rectangle: "rectangle",
        Button: "Button",
        "Icon button": "IconButton",
        "Input field": "InputField",
      }),
    },
    example: (props) => <Skeleton variant={props.variant} />,
  },
);
