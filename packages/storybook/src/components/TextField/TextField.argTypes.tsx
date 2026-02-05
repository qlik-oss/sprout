import {
  AffixWrapper,
  IconButton,
  type TextFieldProps,
} from "@qlik/sprout-css-react";
import Copy from "@qlik/sprout-icons/react/Copy";
import type { ArgTypes } from "@storybook/react-vite";

import { CommonFieldArgTypes, FieldArgTypes } from "../Field.argTypes";

const AFFIX_ICON_BUTTON = (
  <AffixWrapper>
    <IconButton
      variant="quiet"
      size="small"
      label="Copy"
      icon={<Copy width={undefined} height={undefined} />}
    />
  </AffixWrapper>
);

export const TextFieldArgTypes: ArgTypes<TextFieldProps> = {
  ...FieldArgTypes,
  ...CommonFieldArgTypes,
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
  designSize: {
    control: {
      type: "select",
    },
    table: {
      type: {
        summary: "string",
      },
    },
    options: ["default", "small"],
  },
  leftAdornment: {
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
  rightAdornment: {
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "string",
      },
    },
  },
  maxCharacterCount: {
    control: "number",
    description:
      "Maximum number of characters allowed. When set, a character counter will be displayed. When the limit is exceeded, the TextField will show error icon and red outline. This property only works when the text field is in controlled mode.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  type: {
    control: {
      type: "select",
    },
    options: ["text", "search"],
    description:
      'Type "search" adds a search icon to the left of the text field.',
    table: {
      defaultValue: {
        summary: '"text"',
      },
      type: {
        summary: '"text" | "search"',
      },
    },
  },
  leftAffix: {
    description:
      "Text fields can nest a prefix (leftAffix) component with custom content such as [IconButton](./?path=/docs/components-button--docs). This allows the textfield to have supporting actions associated with the field value. LeftAffix and rightAffix is not compatible with small (designSize) textfields.",
    control: {
      type: "select",
      labels: {
        first: "No left affix",
        second: "IconButton",
      },
    },
    options: ["No left affix", "IconButton"],
    mapping: {
      "No left affix": undefined,
      IconButton: AFFIX_ICON_BUTTON,
    },
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  rightAffix: {
    description:
      "Text fields can nest a suffix (rightAffix) component with custom content such as [IconButton](./?path=/docs/components-button--docs). This allows the textfield to have supporting actions associated with the field value. LeftAffix and rightAffix is not compatible with small (designSize) textfields.",
    control: {
      type: "select",
      labels: {
        first: "No right affix",
        second: "IconButton",
      },
    },
    options: ["No right affix", "IconButton"],
    mapping: {
      "No right affix": undefined,
      IconButton: AFFIX_ICON_BUTTON,
    },
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
};
