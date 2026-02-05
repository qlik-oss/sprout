// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { AlertBanner, type AlertBannerProps } from "./AlertBanner";

figma.connect(
  AlertBanner,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20335%3A703",
  {
    props: {
      // TODO: not supported right now
      // dismissable: figma.boolean("Dismissable", { true: () => {}, false: undefined }),
      action: figma.boolean("Has action", {
        true: figma.children("Button"),
        false: undefined,
      }),
      content: figma.string("Content"),
      type: figma.enum<AlertBannerProps["variant"]>("Type", {
        Warning: "warning",
        Error: "error",
        Info: "info",
        Success: "success",
      }),
      justify: figma.enum<AlertBannerProps["justify"]>("Content style", {
        Centered: "center",
      }),
    },
    example: (props) => (
      <AlertBanner
        justify={props.justify}
        variant={props.type}
        content={props.content}
        action={props.action}
      />
    ),
  },
);
