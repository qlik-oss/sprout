import type { InputButtonProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

const SIZES = [undefined, "xs", "s"];

export const InputButtonArgTypes: ArgTypes<InputButtonProps> = {
  "aria-label": {
    control: {
      type: "text",
    },
    description:
      "The `aria-label` attribute is optional for `InputButton` but required to pass [WCAG compliance](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) since the it does not have a describing text",
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
  initialLoading: {
    control: {
      type: "boolean",
    },
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  loading: {
    control: {
      type: "boolean",
    },
    description:
      "See [Progress](./?path=/docs/components-progress--docs) for details.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  onClick: {
    table: {
      type: {
        summary: "() => void | Promise<any>",
      },
    },
  },
  onLoadingChange: {
    table: {
      type: {
        summary: "(loading: boolean) => void",
      },
    },
  },
  size: {
    control: {
      type: "select",
    },
    options: SIZES,
    table: {
      type: {
        summary: `xs | s`,
      },
    },
  },
};
