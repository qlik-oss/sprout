// eslint-disable-next-line import-x/no-named-as-default
import figma from "@figma/code-connect";

import { TextField, type TextFieldProps } from ".";

figma.connect(
  TextField,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18738-69569",
  {
    props: {
      // in this case we go to read in the SubComponent to hoist the props
      label: figma.boolean("Has field label", {
        true: figma.nestedProps("_FieldLabel", {
          text: figma.string("Field label"),
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
      designSize: figma.enum<TextFieldProps["designSize"]>("Size", {
        Default: undefined,
        Small: "small",
      }),
      leftAdornment: figma.boolean("Has value prefix adornment", {
        true: figma.string("Prefix adornment"),
        false: undefined,
      }),
      rightAdornment: figma.boolean("Has value suffix adornment", {
        true: figma.string("Suffix adornment"),
        false: undefined,
      }),
      placeholder: figma.boolean("Has placeholder", {
        true: figma.string("Placeholder"),
        false: undefined,
      }),
      value: figma.boolean("Has value", {
        true: figma.string("Value"),
        false: undefined,
      }),
      //TODO - add these when DLS-24 is done
      /*leftAffix: figma.children("LeftAffixButton"),
      rightAffix: figma.children("RightAffixButton")*/
    },
    example: ({ label, helpText, ...props }) => (
      <TextField label={label.text} helpText={helpText.text} {...props} />
    ),
  },
);

figma.connect(
  TextField,
  "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=21219-5677",
  {
    props: {
      // in this case we go to read in the SubComponent to hoist the props
      label: figma.boolean("Has field label", {
        true: figma.nestedProps("_FieldLabel", {
          text: figma.string("Field label"),
        }),
        false: { text: undefined },
      }),
      readOnly: figma.enum("State", {
        "Read-only": true,
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      designSize: figma.enum<TextFieldProps["designSize"]>("Size", {
        Default: undefined,
        Small: "small",
      }),
      placeholder: figma.boolean("Has placeholder", {
        true: figma.string("Placeholder"),
        false: undefined,
      }),
      value: figma.boolean("Has value", {
        true: figma.string("Value"),
        false: undefined,
      }),
      //TODO - add these when DLS-24 is done
      //rightAffix: figma.children("ClearButton")
    },
    example: ({ label, ...props }) => (
      <TextField label={label.text} type="search" {...props} />
    ),
  },
);
