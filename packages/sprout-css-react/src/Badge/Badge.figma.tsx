// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Badge, type BadgeProps } from "./Badge";

figma.connect(
  Badge,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18966%3A7228",
  {
    props: {
      variant: figma.enum<BadgeProps["variant"]>("Variant", {
        Alphanumeric: "alphanumeric",
        Dot: "dot",
      }),
      text: figma.string("Text"),
      color: figma.enum<BadgeProps["color"]>("Color", {
        Default: "info",
        Danger: "danger",
        Warning: "warning",
        Success: "success",
        Selected: "selected",
        Neutral: undefined,
      }),
    },
    example: (props) => {
      const variant = props.variant ?? "alphanumeric";
      const { color, text } = props;

      return variant === "dot" ? (
        <Badge variant="dot" color={color} />
      ) : (
        <Badge variant="alphanumeric" text={text} color={color} />
      );
    },
  },
);
