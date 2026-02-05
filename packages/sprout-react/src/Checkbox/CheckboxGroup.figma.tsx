// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { CheckboxGroup } from "./CheckboxGroup";

figma.connect(
  CheckboxGroup,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6543%3A43147",
  {
    props: {
      //checkboxes: figma.children("Checkbox"), // TODO - fix children somehow
      state: figma.enum("State", {
        Error: "error",
      }),
    },
    example: ({ ...props }) => (
      <CheckboxGroup options={[{ label: "Label" }]} {...props} />
    ),
  },
);
