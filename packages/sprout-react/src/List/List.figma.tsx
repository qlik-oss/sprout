// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";
import sprout from "@qlik/sprout-css-modules";

import { List, ListItem } from ".";

figma.connect(
  List,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=24482-1758&node-type=frame&m=dev",
  {
    props: {
      listItems: figma.children("*"),
    },
    example: (props) => <List>{props.listItems}</List>,
  },
);

figma.connect(
  ListItem,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6591-48882&node-type=frame&m=dev",
  {
    props: {
      active: figma.enum("State", { Selected: true }),
      content: figma.children("*"),
      hasPadding: figma.boolean("Has Padding"),
      onClick: figma.boolean("Interactive", {
        true: () => {},
        false: undefined,
      }),
      //TODO - implement list item content
    },
    example: ({ content, ...props }) => (
      <ListItem {...props}>{content}</ListItem>
    ),
  },
);

figma.connect(
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=24453-5384&node-type=symbol&t=2OkrIxIbW3HANZ5b-11",
  {
    props: {
      text: figma.string("Text"),
    },
    example: (props) => (
      <div className={sprout.classNames("flex", "border-box", "p-m", "pl-l")}>
        {props.text}
      </div>
    ),
  },
);
