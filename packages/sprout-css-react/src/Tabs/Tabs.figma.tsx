/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Tab, TabList, TabPanel, TabsContainer } from ".";

figma.connect(
  TabsContainer,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6579-45197&node-type=frame&t=eXmkEKQVnfPQDKof-11",
  {
    props: {
      tags: figma.children("_TabItem*"),
      showTrack: figma.boolean("Show track"),
    },
    example: (props) => (
      <TabsContainer>
        <TabList showTrack={props.showTrack}>{props.tags}</TabList>
        <TabPanel id="lorem">Lorem</TabPanel>
        <TabPanel id="ipsum">Ipsum</TabPanel>
        {/* add one tab panel per tab */}
      </TabsContainer>
    ),
  },
);

figma.connect(
  Tab,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6579-45104&node-type=frame&m=dev",
  {
    props: {
      disabled: figma.enum("State", { Disabled: true }),
      selected: figma.enum("State", { Selected: true }),
      size: figma.enum("Size", {
        Default: undefined,
        Small: "s",
      }),
      title: figma.boolean("Has label", {
        true: figma.string("Label"),
        false: "",
      }),
      icon: figma.boolean("Has icon", {
        true: figma.instance("Icon"),
        false: undefined,
      }),
      badge: figma.boolean("Has badge", {
        true: figma.children("Badge"),
        false: undefined,
      }),
    },
    example: (props) => {
      return <Tab aria-controls={props.title} {...props} />;
    },
  },
);
