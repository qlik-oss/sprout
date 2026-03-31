import type { StepperProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

export const StepperContainerArgTypes: ArgTypes<StepperProps["Container"]> = {
  children: {
    control: false,
    description: "The `Stepper.Step` elements rendered inside the container.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  orientation: {
    control: {
      type: "select",
    },
    options: ["horizontal", "vertical"],
    description: "Defines the layout direction of the stepper.",
    table: {
      type: {
        summary: "horizontal | vertical",
      },
    },
  },
  currentStepIndex: {
    control: {
      type: "number",
    },
    description:
      "Zero-based index of the current active step used to compute step semantics.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  currentStepError: {
    control: {
      type: "boolean",
    },
    description:
      "Marks the current step as error when `currentStepIndex` points to it.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  stateLess: {
    control: {
      type: "boolean",
    },
    description:
      "Disables container-managed semantics so each step controls its own state.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
};

export const StepperStepArgTypes: ArgTypes<StepperProps["Step"]> = {
  text: {
    control: {
      type: "text",
    },
    description: "The label displayed for the step.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  semantic: {
    control: {
      type: "select",
    },
    options: ["completed", "active", "inactive", "error"],
    description:
      "Visual status of the step. Controlled by `Stepper.Container` unless `stateLess` is true.",
    table: {
      defaultValue: {
        summary: "inactive",
      },
      type: {
        summary: "completed | active | inactive | error",
      },
    },
  },
  state: {
    control: {
      type: "select",
    },
    options: ["default", "progress"],
    description: "Display mode for the step indicator.",
    table: {
      defaultValue: {
        summary: "default",
      },
      type: {
        summary: "default | progress",
      },
    },
  },
  number: {
    control: {
      type: "text",
    },
    description:
      "Step number text. Usually controlled by `Stepper.Container` when `stateLess` is false.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  children: {
    control: false,
    description: "Additional content rendered below the step label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  isLast: {
    control: {
      type: "boolean",
    },
    description:
      "Indicates if the step is the final item in the sequence. Usually controlled by the container.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  onClick: {
    control: false,
    description:
      "Click handler. When provided, the step becomes keyboard focusable and button-like.",
    table: {
      type: {
        summary: "MouseEventHandler<HTMLDivElement>",
      },
    },
  },
};
