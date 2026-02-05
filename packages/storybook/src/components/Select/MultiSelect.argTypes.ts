import { Field, type SelectProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

import { CommonFieldArgTypes, FieldArgTypes } from "../Field.argTypes";

type MultiSelectArgTypes = {
  value?: Array<string>;
  defaultValue?: Array<string>;
  options?: Array<string>;
};

export const getMultiSelectArgTypes = ({
  options,
}: MultiSelectArgTypes): ArgTypes<SelectProps["Multi"] & { defaultValues: Array<string> }> => ({
  ...FieldArgTypes,
  ...CommonFieldArgTypes,
  defaultValue: {
    table: {
      disable: true,
    },
  },
  defaultValues: {
    control: "multi-select",
    description: "The default value of the field.",
    options,
    table: { type: { summary: "string[]" } },
  },
  value: {
    control: "multi-select",
    options,
    description: "The array of values of the field.",
    table: { type: { summary: "string[]" } },
  },
  onChange: {
    description: "The function that will be called when the value of the field changes.",
    table: {
      type: {
        summary: "(e: ChangeEvent) => void",
      },
    },
  },
  renderValue: {
    description: "The function that will be called to render the value of the field if any.",
    table: {
      type: {
        summary: "(value: string, selectedProps?: OptionProps) => ReactNode;",
      },
    },
  },
  children: {
    description: "The options of the field. They are used to populate the field.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
});
