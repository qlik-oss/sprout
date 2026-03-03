import type { SelectProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { CommonFieldArgTypes, FieldArgTypes } from "../Field.argTypes";

export const getSelectArgTypes = ({
  options,
}: {
  options: Array<string>;
}): ArgTypes<SelectProps["Select"]> => ({
  ...FieldArgTypes,
  ...CommonFieldArgTypes,
  size: {
    control: { type: "select" },
    options: [undefined, "default", "small"],
    table: {
      defaultValue: {
        summary: "default",
      },
      type: {
        summary: "default | small",
      },
    },
  },
  defaultValue: {
    control: "select",
    description: "The default value of the field.",
    table: { type: { summary: "string" } },
    options,
  },
  value: {
    control: "select",
    options,
    description: "The value of the field.",
    table: { type: { summary: "string" } },
  },
  onChange: {
    description:
      "The function that will be called when the value of the field changes.",
    table: {
      type: {
        summary: "(e: ChangeEvent) => void",
      },
    },
  },
  renderValue: {
    description:
      "The function that will be called to render the value of the field if any.",
    table: {
      type: {
        summary: "(value: string, selectedProps?: OptionProps) => ReactNode;",
      },
    },
  },
  selectedValueDisplay: {
    description:
      "Defines how the selected value is displayed in the closed select field.",
    control: { type: "select" },
    options: ["full", "label"],
    table: {
      defaultValue: {
        summary: "full",
      },
      type: {
        summary: "full | label",
      },
    },
  },
  children: {
    description:
      "The options of the field. They are used to populate the field.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
});
