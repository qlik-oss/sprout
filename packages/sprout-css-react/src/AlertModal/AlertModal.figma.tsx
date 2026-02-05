// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { AlertModal, type AlertModalProps } from ".";

figma.connect(
  AlertModal,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=8743-70329",
  {
    props: {
      variant: figma.enum<AlertModalProps["variant"]>("Variant", {
        "Positive confirmation": "information",
        "Destructive confirmation": "destructive",
        Information: "information",
        Warning: "warning",
        Error: "error",
      }),
      title: figma.textContent("Dialog Title"),
      details: figma.boolean("Has details", {
        true: figma.children("Details"),
        false: undefined,
      }),
      children: figma.textContent("Lorem ipsum dolor sit amet."),
      footerRight: figma.children("DialogActions"),
      footerLeft: figma.children("DestructiveContainer"),
    },
    example: ({ children, ...props }) => (
      <AlertModal visible {...props}>
        {children}
      </AlertModal>
    ),
  },
);
