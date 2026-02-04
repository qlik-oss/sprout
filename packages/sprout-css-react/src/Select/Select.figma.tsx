// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { Select, type SelectProps } from ".";

figma.connect(
  Select.Select,
  "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6570%3A40745",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      size: figma.enum<SelectProps["Select"]["size"]>("Size", {
        Small: "small",
      }),

      hasError: figma.enum("State", { Error: true }), //TODO - border is wrong color
      placeholder: figma.boolean("Has placeholder", {
        true: figma.string("Placeholder"),
        false: "",
      }),
      defaultValue: figma.boolean("Has value", {
        true: figma.string("Value"),
        false: "",
      }),
      helpText: figma.boolean("Has helper text", {
        true: figma.nestedProps("_HelperText", { text: figma.string("Text") }),
        false: { text: undefined },
      }),
      label: figma.boolean("Has field label", {
        true: figma.nestedProps("_FieldLabel", {
          text: figma.string("Field label"),
        }),
        false: { text: undefined },
      }),
      optionValue: figma.boolean("Has value", {
        true: figma.string("Value"),
        false: "",
      }),
      optionLabel: figma.boolean("Has value", {
        true: figma.string("Value"),
        false: "",
      }),
      optionIcon: figma.boolean("Has icon", {
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        true: figma.instance("Icon"),
        false: "",
      }),
    },
    example: ({
      helpText,
      label,
      optionValue,
      optionLabel,
      optionIcon,
      ...props
    }) => (
      <Select.Select
        label={label.text}
        helpText={helpText.text}
        {...props}
        onChange={() => {}}
      >
        <Select.Option value={optionValue}>
          <Select.OptionStyled icon={optionIcon} label={optionLabel} />
        </Select.Option>
      </Select.Select>
    ),
  },
);
