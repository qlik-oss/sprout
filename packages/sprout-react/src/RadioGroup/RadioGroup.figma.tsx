// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Radio, RadioGroup } from ".";

figma.connect(
  Radio,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6558%3A39273",
  {
    props: {
      label: figma.boolean("Has label", {
        true: figma.string("Label"),
        false: "",
      }),
      selected: figma.boolean("Selected"),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      readOnly: figma.enum("State", {
        "Read-only": true,
      }),
      //TODO - remove Radio from docs and remove onChange from them - they make no sense to use outside a RadioGroup
    },
    example: (props) => <Radio {...props} />,
  },
);

figma.connect(
  RadioGroup,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6558%3A39344",
  {
    props: {
      helpText: figma.boolean("Has helper text", {
        true: figma.enum("State", {
          Default: figma.nestedProps("_HelperText", {
            text: figma.string("Text"),
          }),
          Error: { text: undefined },
        }),
        false: { text: undefined },
      }),
      isError: figma.enum("State", { Error: true }),
      //TODO - align with designs if helpText and Error text should be able to coexist
      errorMessage: figma.enum("State", {
        Default: { text: undefined },
        Error: figma.nestedProps("_HelperText", { text: figma.string("Text") }),
      }),
      label: figma.string("Label"),
      //options: figma.children("Radio"), //TODO - build out RadioGroup to support inputting Radio element or figure out how to pass children as json props
    },
    example: ({ errorMessage, helpText, ...props }) => (
      <RadioGroup
        options={[{ label: "Label" }]}
        helpText={helpText.text}
        errorMessages={[`${errorMessage.text}`]}
        {...props}
        onChange={() => {}}
      />
    ),
  },
);
