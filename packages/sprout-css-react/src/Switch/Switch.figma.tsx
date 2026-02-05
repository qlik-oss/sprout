// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Switch } from "./Switch";

figma.connect(
  Switch,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6564%3A39128",
  {
    props: {
      label: figma.boolean("Show label", {
        true: figma.string("Label"),
        false: "",
      }),
      // it is not supported :(
      // "aria-label": figma.boolean("Show label", {
      //   false: figma.string("label"),
      // }),
      disabled: figma.enum<boolean>("State", {
        Disabled: true,
      }),
      readOnly: figma.enum("State", {
        "Read-only": true,
      }),
      checked: figma.boolean("Checked"),
    },
    example: ({ ...props }) => <Switch {...props} />,
  },
);
