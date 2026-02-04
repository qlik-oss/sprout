/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Menu } from "./Menu";

figma.connect(
  Menu.Container,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=24727-54245&node-type=frame&m=dev",
  {
    props: {
      menuSections: figma.children("_MenuSection"),
    },
    example: (props) => <Menu.Container>{props.menuSections}</Menu.Container>,
  },
);

figma.connect(
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18748-77150&node-type=frame&m=dev",
  {
    props: {
      menuItems: figma.children(["_MenuItem", "_Divider", "_GroupLabel"]),
    },
    example: (props) => props.menuItems, //TODO - think if we can remove the <></> wrapping - implementation has no MenuSection component
  },
);

figma.connect(
  Menu.Item,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18560-15978&node-type=frame&t=2OkrIxIbW3HANZ5b-11",
  {
    variant: { Cascading: false },
    props: {
      disabled: figma.enum("State", { Disabled: true }),
      selectable: figma.boolean("Selectable"),
      selected: figma.boolean("Is selected"),
      label: figma.string("Text"),
      description: figma.boolean("Has description", {
        true: figma.string("Description"),
        false: undefined,
      }),
      valueLabel: figma.boolean("Has value label", {
        true: figma.string("Value label"),
        false: undefined,
      }),
      icon: figma.boolean("Show icon", {
        true: figma.instance("Icon"),
        false: undefined,
      }),
    },
    example: (props) => <Menu.Item {...props} />,
  },
);

figma.connect(
  Menu.Sub,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18560-15978&node-type=frame&t=2OkrIxIbW3HANZ5b-11",
  {
    variant: { Cascading: true },
    props: {
      disabled: figma.enum("State", { Disabled: true }),
      selectable: figma.boolean("Selectable"),
      selected: figma.boolean("Is selected"),
      label: figma.string("Text"),
      description: figma.boolean("Has description", {
        true: figma.string("Description"),
        false: undefined,
      }),
      valueLabel: figma.boolean("Has value label", {
        true: figma.string("Value label"),
        false: undefined,
      }),
      icon: figma.boolean("Show icon", {
        true: figma.instance("Icon"),
        false: undefined,
      }),
    },
    example: (props) => <Menu.Sub {...props} menu={[]} />,
  },
);

figma.connect(
  Menu.Divider,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18560-23109&node-type=symbol&t=2OkrIxIbW3HANZ5b-11",
  {
    example: (/*props*/) => <Menu.Divider />,
  },
);

figma.connect(
  Menu.GroupLabel,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=11217-52922&node-type=symbol&t=2OkrIxIbW3HANZ5b-11",
  {
    props: {
      label: figma.string("Text"),
    },
    example: (props) => <Menu.GroupLabel {...props} />,
  },
);
