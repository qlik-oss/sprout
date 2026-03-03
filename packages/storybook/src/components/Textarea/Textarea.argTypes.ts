import type { TextareaProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { CommonFieldArgTypes, FieldArgTypes } from "../Field.argTypes";

export const TextareaArgTypes: ArgTypes<TextareaProps> = {
  ...FieldArgTypes,
  ...CommonFieldArgTypes,
  resizable: {
    control: "select",
    options: ["true", "false", "horizontal", "vertical"],
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: '"true" | "false" | "horizontal" | "vertical"',
      },
    },
  },
  maxCharacterCount: {
    control: "number",
    description:
      "Maximum number of characters allowed. When set, a character counter will be displayed. When the limit is exceeded, the TextField will show error icon and red outline.  This property only works when the text field is in controlled mode.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  id: {
    table: {
      disable: true,
    },
  },
  value: {
    control: {
      type: "select",
    },
    options: [
      undefined,
      "simple value",
      "very very long value that exceeds the width of the text field",
    ],
    description: "The value of the text field in controlled mode.",
  },
  defaultValue: {
    control: {
      type: "text",
    },
    description: "The default value of the text field in uncontrolled mode.",
  },
};
