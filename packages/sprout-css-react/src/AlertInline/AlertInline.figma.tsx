// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { AlertInline, type AlertInlineProps } from ".";

figma.connect(
  AlertInline,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7611-60484",
  {
    props: {
      severity: figma.enum<AlertInlineProps["severity"]>("Severity", {
        Error: "error",
        Info: "info",
        Warning: "warning",
        Success: "success",
      }),
      title: figma.boolean("Has title", {
        true: figma.string("Title"),
        false: undefined,
      }),
      message: figma.string("Message"),
      // TODO: not supported right now
      // onDismiss: figma.boolean("Dismissable", { true: () => {}, false: undefined }),
      actionButton: figma.boolean("Has actions", {
        true: figma.boolean("Show button", { true: figma.children("Button") }),
        false: undefined,
      }),
      actionLink: figma.boolean("Has actions", {
        true: figma.boolean("Show link", { true: figma.children("Link") }),
        false: undefined,
      }),
    },
    example: ({ actionButton, actionLink, ...props }) => (
      <AlertInline
        actionBar={
          <>
            {actionButton}
            {actionLink}
          </>
        }
        {...props}
      />
    ),
  },
);
