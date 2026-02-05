import type { SliderProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

const CommonArgTypes: ArgTypes<SliderProps["Single"]> = {
  optional: {
    control: {
      type: "boolean",
    },
    description:
      'Indicates whether the field is optional. If true, an "(optional)" label will be displayed next to the field label.',
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  infoIconTooltip: {
    control: "text",
    description:
      "Text shown when hovering over the info icon next to the field label. Useful for providing additional context.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  helpText: {
    control: {
      type: "text",
    },
    description:
      "Supplementary text displayed below the slider for guidance. Ignored if errorMessages are present.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  errorMessages: {
    control: {
      type: "select",
      labels: {
        first: "One error message",
        second: "Two error messages",
      },
    },
    options: [undefined, "one msg", "two msg"],
    mapping: {
      "one msg": ["Error message 1"],
      "two msg": ["Error message 1", "Error message 2"],
    },
    table: {
      type: {
        summary: "string[]",
      },
    },
    description:
      "The error messages that will be shown if the field is marked as error. Note when errorMessages is set, the helpText is ignored.",
  },
  label: {
    control: "text",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  min: {
    control: "number",
    description: "The minimum value selectable on the slider.",
    table: {
      defaultValue: {
        summary: "0",
      },
      type: {
        summary: "number",
      },
    },
  },
  max: {
    control: "number",
    description: "The maximum value selectable on the slider.",
    table: {
      defaultValue: {
        summary: "100",
      },
      type: {
        summary: "number",
      },
    },
  },
  step: {
    control: "number",
    description: "The increment between selectable values on the slider.",
    table: {
      defaultValue: {
        summary: "1",
      },
      type: {
        summary: "number",
      },
    },
  },
  hasError: {
    control: "boolean",
    description: "If true, the slider will be marked as error.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  orientation: {
    control: {
      type: "select",
    },
    options: ["horizontal", "vertical"],
    description: "The orientation of the slider.",
    table: {
      defaultValue: {
        summary: "horizontal",
      },
      type: {
        summary: '"horizontal" | "vertical"',
      },
    },
  },
  marks: {
    control: { type: "select" },
    options: [
      "None",
      "Auto (true)",
      "[{ value: 0, label: 'Min' }, { value: 25 }, { value: 50, label: 'Mid' }, { value: 75 }, { value: 100, label: 'Max' }]",
    ],
    mapping: {
      None: undefined,
      "Auto (true)": true,
      "[{ value: 0, label: 'Min' }, { value: 25 }, { value: 50, label: 'Mid' }, { value: 75 }, { value: 100, label: 'Max' }]":
        [
          { value: 0, label: "Min" },
          { value: 25 },
          { value: 50, label: "Mid" },
          { value: 75 },
          { value: 100, label: "Max" },
        ],
    },
    description:
      "Defines marks on the slider. Can be `true` to automatically generate marks at each step interval, `false` or `undefined` for no marks, or an array of mark objects with `value` and optional `label` properties. \n\nExamples:\n- `true` - creates marks at every step\n- `false` or `undefined` - no marks\n- `[{ value: 0, label: 'Min' }, { value: 50 }, { value: 100, label: 'Max' }]`\n - marks at specific positions with custom labels\n\nMin and max marks are always included and labeled when marks are enabled.",
    table: {
      type: {
        summary: "boolean | Array<{ value: number; label?: ReactNode }>",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
  markLabels: {
    control: "boolean",
    description:
      "If true, displays labels for all marks. Min and max labels are always visible regardless of this setting. Only applies when `marks` is provided.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  verticalMarkLabels: {
    control: "boolean",
    description:
      "If true, displays mark labels vertically (rotated 90 degrees). This is useful to save horizontal space when you have many marks or long labels. Only applies to horizontal orientation.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  valueLabelFormat: {
    control: { type: "select" },
    options: [
      "undefined",
      "Percentage (%)",
      "Currency ($)",
      "Temperature (°C)",
    ],
    mapping: {
      undefined,
      "Percentage (%)": (value: number) => `${value}%`,
      "Currency ($)": (value: number) => `$${value}`,
      "Temperature (°C)": (value: number) => `${value}°C`,
    },
    description:
      "A function that formats the display of mark labels. Takes the numeric value and returns a ReactNode.\n\nExamples:\n- `(value) => value + '%'` - displays '50%'\n- `(value) => '$' + value` - displays '$50'\n- `(value) => value + '°C'` - displays '50°C'\n- `(value) => ['Jan', 'Feb', 'Mar', 'Apr', 'May'][value]` - maps values to months\n\nNote: Custom labels in mark objects take precedence over this formatting.",
    table: {
      type: {
        summary: "(value: number) => ReactNode",
      },
      defaultValue: {
        summary: "undefined",
      },
    },
  },
};

export const SliderSingleArgTypes: ArgTypes<SliderProps["Single"]> = {
  ...CommonArgTypes,
  defaultValue: {
    control: "number",
    defaultValue: {
      summary: "min",
    },
    table: {
      type: {
        summary: "number",
      },
    },
  },
  inputRef: {
    control: false,
    description: "A ref to the underlying input element.",
    table: {
      type: {
        summary: "Ref<HTMLInputElement>",
      },
    },
  },
  value: {
    control: "number",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  onChange: {
    control: false,
    description:
      "Callback fired when the slider value changes. Receives the new value and the triggering event.",
    table: {
      type: {
        summary: "(value: number, event: Event) => void",
      },
    },
  },
  onChangeCommitted: {
    control: false,
    description:
      "Callback function that is fired when the `pointerup` is triggered.",
    table: {
      type: {
        summary: "(value: number, event: Event) => void",
      },
    },
  },
};

export const SliderRangeArgTypes: ArgTypes<SliderProps["Range"]> = {
  ...CommonArgTypes,
  defaultValue: {
    control: "object",
    description:
      "An array of numbers representing the default range. If not provided, the slider will default to using [min, max]. Only the first two values will be used, additional values will be ignored.",
    table: {
      defaultValue: {
        summary: "[min, max]",
      },
      type: {
        summary: "number[]",
      },
    },
  },
  endInputRef: {
    control: false,
    description: "A ref to the end grip's underlying input element.",
    table: {
      type: {
        summary: "Ref<HTMLInputElement>",
      },
    },
  },
  endName: {
    control: "text",
    description: "The name attribute for the end grip's input element.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  value: {
    control: "object",
    description:
      "An array of numbers representing the current range value. Only the first two values will be used, additional values will be ignored.",
    table: {
      type: {
        summary: "number[]",
      },
    },
  },
  onChange: {
    control: false,
    description:
      "Callback fired when either grip value changes. Receives a `number[]` (only the first two values will be used), the triggering event, and the index of the active grip.",
    table: {
      type: {
        summary:
          "(value: number[], event: Event, activeGripIndex: number) => void",
      },
    },
  },
  onChangeCommitted: {
    control: false,
    description:
      "Callback function that is fired when the `pointerup` is triggered.",
    table: {
      type: {
        summary: "((value: number[], event: Event) => void",
      },
    },
  },
  startInputRef: {
    control: false,
    description: "A ref to the start grip's underlying input element.",
    table: {
      type: {
        summary: "Ref<HTMLInputElement>",
      },
    },
  },
  startName: {
    control: "text",
    description: "The name attribute for the start grip's input element.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
