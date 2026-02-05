// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Accordion, type AccordionProps } from "./Accordion";

figma.connect(
  Accordion.Container,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=23941-331&node-type=frame&t=S7oVEM1sBwoQZP3l-11",
  {
    props: {
      children: figma.children("Accordion.Item"),
    },
    example: ({ children }) => (
      <Accordion.Container>{children}</Accordion.Container>
    ),
  },
);
figma.connect(
  Accordion.Item,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=23934-7699&node-type=frame&m=dev",
  {
    props: {
      opened: figma.boolean("Opened"),
      width: figma.enum<AccordionProps["Item"]["width"]>("Width", {
        Compact: "compact",
        Full: undefined,
      }),
      variant: figma.enum<AccordionProps["Item"]["variant"]>("Variant", {
        Quiet: "quiet",
      }),
      headerProps: figma.nestedProps("_AccordionHeader", {
        disabled: figma.enum("State", { Disabled: true }),
        //style: figma.enum("Style", { Rounded: "rounded" }), //TODO - implement Style rounded
        icon: figma.boolean("Has icon", {
          // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
          true: figma.instance("Icon"),
          false: false,
        }),
        header: figma.string("Header"),
        description: figma.boolean("Has description", {
          true: figma.string("Description"),
          false: "",
        }),
        value: figma.boolean("Has value label", {
          true: figma.string("Value label"),
          false: "",
        }),
      }),
      content: figma.instance("Content"),
    },
    example: ({ headerProps, content, ...props }) => (
      <Accordion.Item
        {...props}
        disabled={headerProps.disabled}
        icon={headerProps.icon}
        header={headerProps.header}
        description={headerProps.description}
        value={headerProps.value}
      >
        {content}
      </Accordion.Item>
    ),
  },
);
