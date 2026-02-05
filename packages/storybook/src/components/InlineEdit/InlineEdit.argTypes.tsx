import type { InlineEditProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

export const InlineEditArgTypes: ArgTypes<
  InlineEditProps["MultiSelect"] | InlineEditProps["TextField"] | InlineEditProps["Select"]
> = {
  showEditIcon: {
    control: { type: "boolean" },
    description: "Displays an edit icon next to the value.",
    table: {
      type: { summary: "boolean" },
    },
  },
  showFormButtons: {
    control: { type: "boolean" },
    description: "Displays form buttons (save/cancel) when editing as an overlay to the edit view.",
    table: {
      type: { summary: "boolean" },
    },
  },
  onSave: {
    control: false,
    description: "function called when the user validate the action",
    table: { type: { summary: "() => void" } },
  },
  onCancel: {
    control: false,
    description: "function called when the user cancel the action",
    table: { type: { summary: "() => void" } },
  },
  showEditButton: { table: { disable: true } },
  blurAction: {
    control: { type: "select" },
    options: ["cancel", "save"],
    description: "Action to perform when the input loses focus.",
    table: {
      type: { summary: '"cancel" | "save"' },
    },
  },
  isEditing: {
    control: { type: "select" },
    options: [undefined, true, false],
    description: "Controls whether the component is in editing mode.",
    table: {
      type: { summary: "boolean" },
    },
  },
  isEditingDefault: {
    control: { type: "select" },
    options: [undefined, true, false],
    description: "Initial state of the component when it is first rendered.",
    table: {
      type: { summary: "boolean" },
    },
  },
  onEdit: {
    control: false,
    description: "Function called when the user clicks on the edit icon.",
    table: {
      type: { summary: "(isEditing: boolean) => void" },
    },
  },
  errorMessages: {
    control: { type: "object" },
    description: "Array of error messages to display when the input has errors.",
    table: {
      type: { summary: "string[]" },
    },
  },
  placeholder: {
    control: { type: "text" },
    description: "Placeholder text for the multi-select input.",
    table: {
      type: { summary: "string" },
    },
  },
  hasError: {
    control: { type: "boolean" },
    description: "Indicates whether the multi-select has an error state.",
    table: {
      type: { summary: "boolean" },
    },
  },
};

export const InlineEditPrimitiveArgTypes: ArgTypes<InlineEditProps["Primitive"]> = {
  view: {
    control: false,
    description: "Custom view component to render the value in view mode.",
    table: {
      type: { summary: "JSX.Element | (() => JSX.Element)" },
    },
  },
  edit: {
    control: false,
    description: "Custom edit component to render the value in edit mode.",
    table: {
      type: { summary: "JSX.Element | (() => JSX.Element)" },
    },
  },
  editFocusSelector: {
    control: { type: "text" },
    description: "CSS selector to focus the edit component when it is opened.",
    table: {
      type: { summary: "string" },
      defaultValue: {
        summary:
          'a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])',
      },
    },
  },
  editOffsetX: {
    control: { type: "number" },
    description: "Horizontal offset for the edit component.",
    table: {
      type: { summary: "number" },
    },
  },
};

export const InlineEditTextFieldArgTypes: ArgTypes<InlineEditProps["TextField"]> = {
  value: {
    control: { type: "text" },
    description: "Current value of the text field in Controlled mode.",
    table: {
      type: { summary: "string" },
    },
  },
  defaultValue: {
    control: { type: "text" },
    description: "Initial value of the text field in Uncontrolled mode.",
    table: {
      type: { summary: "string" },
    },
  },
  onChange: {
    control: false,
    description: "Function called when the input value changes.",
    table: {
      type: { summary: "(value: string) => void" },
    },
  },
  font: {
    control: { type: "select" },
    options: ["label_xl", "label_l", "label_m", "label_s", "label_xs"],
    description: "Sets the font style for the text field.",
    table: {
      type: {
        summary: '"label_xl" | "label_l" | "label_m" | "label_s" | "label_xs"',
      },
      defaultValue: { summary: "label_s" },
    },
  },
};

export const InlineEditSelectArgTypes: ArgTypes<InlineEditProps["Select"]> = {
  children: {
    control: "object",
    description: "Options to display in the select dropdown.",
  },
  defaultValue: {
    control: { type: "select" },
    options: ["red", "blue", "green", "yellow", "purple", "orange"],
    description: "Initial value of the select in Uncontrolled mode.",
    table: {
      type: { summary: "string" },
    },
  },
  value: {
    control: { type: "select" },
    options: ["red", "blue", "green", "yellow", "purple", "orange"],
    description: "Current value of the select in Controlled mode.",
    table: {
      type: { summary: "string" },
    },
  },
  onChange: {
    control: false,
    description: "Function called when the selected option changes.",
    table: {
      type: {
        summary: "(value: string, reason?: ChangeReasons | 'cancel') => void",
      },
    },
  },
};

export const InlineEditMultiSelectArgTypes: ArgTypes<InlineEditProps["MultiSelect"]> = {
  children: {
    control: false,
    description: "Options to display in the multi-select dropdown.",
    table: {
      type: { summary: "ReactNode" },
    },
  },

  defaultValue: {
    control: { type: "multi-select" },
    options: ["red", "blue", "green", "yellow", "purple", "orange"],
  },
  value: {
    control: { type: "multi-select" },
    options: ["red", "blue", "green", "yellow", "purple", "orange"],
  },
  onChange: {
    control: false,
    description: "Function called when the selected options change.",
    table: {
      type: {
        summary: "(value: string[], reason?: ChangeReasons | 'cancel') => void",
      },
    },
  },
};
