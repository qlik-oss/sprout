// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { FieldLabel } from ".";

figma.connect(
  FieldLabel,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7628-86408",
  {
    props: {
      label: figma.string("Field label"),
      disabled: figma.enum("Variant", {
        Disabled: true,
      }),
      optional: figma.boolean("Optional"),
      infoIconTooltip: figma.boolean("Has info icon tooltip", {
        true: "My tooltip",
        false: undefined,
      }),
    },
    example: (props) => <FieldLabel htmlFor="fieldId" {...props} />,
  },
);
