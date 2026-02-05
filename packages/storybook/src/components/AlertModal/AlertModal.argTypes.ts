import type { AlertModalProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react";

import { CommonModalArgTypes } from "../Modal/Modal.argTypes";

// Omit props that are not applicable to AlertModal
const {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  preventEscaping,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  preventInteractiveBackdrop,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  width,
  ...AlertModalCommonModalArgTypes
} = CommonModalArgTypes;

export const AlertModalArgTypes: ArgTypes<AlertModalProps> = {
  ...AlertModalCommonModalArgTypes,
  details: {
    control: false,
    description: "Additional details to display, can be toggled.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  footerRight: {
    control: false,
    description: "Content for the right footer area, typically buttons.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  title: {
    control: "text",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  variant: {
    control: {
      type: "select",
    },
    options: ["error", "warning", "information"],
    table: {
      defaultValue: {
        summary: "information",
      },
      type: {
        summary: "'error' | 'warning' | 'information'",
      },
    },
  },
};
