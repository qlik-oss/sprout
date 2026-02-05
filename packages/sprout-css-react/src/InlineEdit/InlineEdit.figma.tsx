// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { InlineEdit } from ".";

const InlineEditTextField = InlineEdit.TextField;

figma.connect(
  InlineEditTextField,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=31296-1970",
  {
    props: {
      // get figma from text
      defaultValue: figma.nestedProps("_TextComponent", {
        text: figma.string("Text"),
      }),
      showEditIcon: figma.boolean("Show edit button on hover"),
    },
    example: (props) => (
      <InlineEdit.TextField
        defaultValue={props.defaultValue.text}
        showEditIcon={props.showEditIcon}
      />
    ),
  },
);
