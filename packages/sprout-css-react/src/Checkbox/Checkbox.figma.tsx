// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Checkbox } from "./Checkbox";

figma.connect(
  Checkbox,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6543%3A43052",
  {
    props: {
      indeterminate: figma.enum<boolean>("Checked", {
        indetermined: true,
        true: false,
        false: false,
      }),
      checked: figma.enum("Checked", {
        true: true,
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      label: figma.boolean("Has label", {
        true: figma.string("Label"),
        false: "",
      }),
      helpText: figma.boolean("Has Helper text", {
        true: figma.string("Helper text"),
        false: "",
      }),
    },
    example: (props) => <Checkbox {...props} />,
  },
);
