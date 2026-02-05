// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Textarea } from ".";

figma.connect(
  Textarea,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=19916-83517",
  {
    props: {
      // in this case we go to read in the SubComponent to hoist the props
      label: figma.boolean("Has field label", {
        true: figma.nestedProps("_FieldLabel", {
          text: figma.string("Field label text"),
        }),
        false: { text: undefined },
      }),
      helpText: figma.boolean("Has helper text", {
        true: figma.nestedProps("_HelperText", {
          text: figma.string("Text"),
        }),
        false: { text: undefined },
      }),
      isError: figma.enum("State", {
        Error: true,
      }),
      readOnly: figma.enum("State", {
        "Read-only": true,
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      designSize: figma.enum("Size", {
        Default: undefined,
        Small: "small",
      }),
      placeholder: figma.string("Placeholder text"),
      value: figma.string("Value text"),
      resizable: figma.boolean("Resizeable"),
      rows: figma.enum("Rows", {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
      }),
    },
    example: ({ label, helpText, ...props }) => (
      <Textarea label={label.text} helpText={helpText.text} {...props} />
    ),
  },
);
