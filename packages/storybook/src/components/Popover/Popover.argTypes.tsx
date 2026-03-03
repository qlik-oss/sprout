import type { PopoverProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

export type PopoverDemoContentProps = {
  demoContentWidth?: number;
  demoContentHeight?: number;
  demoContainerWidth?: number;
  demoContainerHeight?: number;
};

export const PopoverDemoContentArgTypes: ArgTypes<PopoverDemoContentProps> = {
  demoContentWidth: {
    control: { type: "number", min: 0, step: 50 },
  },
  demoContentHeight: {
    control: { type: "number", min: 0, step: 50 },
  },
  demoContainerWidth: {
    control: { type: "number", min: 0, step: 50 },
  },
  demoContainerHeight: {
    control: { type: "number", min: 0, step: 50 },
  },
};

export const PopoverArgTypes: ArgTypes<Partial<PopoverProps>> = {
  content: {
    control: false,
    description: "The content of the popover.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  children: {
    control: false,
    description:
      "The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  anchorEl: {
    control: false,
    description:
      "The anchor element that the popover is attached to. It's not required as you can use anchorPosition instead.",
    table: {
      type: { summary: "HTMLElement | null" },
    },
  },
  placement: {
    control: {
      type: "select",
    },
    options: [
      undefined,
      "bottom",
      "bottom-start",
      "bottom-end",
      "left",
      "left-start",
      "left-end",
      "right",
      "right-start",
      "right-end",
      "top",
      "top-start",
      "top-end",
    ],
    description:
      "The preferred placement of the popover relative to the anchor element.",
    table: {
      defaultValue: { summary: "bottom-start" },
      type: { summary: "string" },
    },
  },
  placementUpdate: {
    control: {
      type: "select",
    },
    options: [undefined, true, false, "dropdown"],
    description:
      "If true, the popover will update its position when the anchor element changes position.",
    table: {
      defaultValue: { summary: undefined },
      type: { summary: "boolean" },
    },
  },
  anchorPosition: {
    control: {
      type: "object",
    },
    description:
      "The position of the anchor element in the viewport. Used when there is no children prop.",
    table: {
      type: { summary: "{ top: number; left: number }" },
    },
  },
  open: {
    control: {
      type: "select",
    },
    options: [undefined, true, false],
    description:
      "Controls the visibility of the popover. If undefined, the popover will manage its own state.",
    table: {
      defaultValue: { summary: undefined },
      type: { summary: "boolean" },
    },
  },
  initialOpen: {
    control: {
      type: "select",
    },
    options: [undefined, true, false],
    description: "Controls the initial visibility of the popover.",
    table: {
      defaultValue: { summary: undefined },
      type: { summary: "boolean" },
    },
  },
  onOpenChange: {
    control: false,
    description: "Callback fired when the open state of the popover changes.",
    table: {
      type: { summary: "(open: boolean) => void" },
    },
  },
  hideBackdrop: {
    control: {
      type: "boolean",
    },
    description:
      "If true, hides the backdrop overlay (no overlay is rendered behind the popover), allowing interaction with the background.",
    table: {
      defaultValue: { summary: "true" },
      type: { summary: "boolean" },
    },
  },
  disableScrollLock: {
    control: {
      type: "boolean",
    },
    description:
      "If true, disables scroll locking when the backdrop/overlay is shown (i.e., when hideBackdrop is false), allowing the page to continue scrolling in the background.",
    table: {
      defaultValue: { summary: "true" },
      type: { summary: "boolean" },
    },
  },
  width: {
    control: {
      type: "select",
    },
    options: [
      undefined,
      "reference",
      "screen",
      "xxs",
      "xs",
      "s",
      "m",
      "l",
      "xl",
      "100px",
    ],
    description:
      "Sets the width of the popover. Can be a predefined size or a custom CSS value.",
    table: {
      defaultValue: { summary: "fit-content" },
      type: {
        summary:
          ' "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string',
      },
    },
  },
  minWidth: {
    control: {
      type: "select",
    },
    options: [
      undefined,
      "reference",
      "screen",
      "xxs",
      "xs",
      "s",
      "m",
      "l",
      "xl",
      "100px",
    ],
    description:
      "Sets the minimum width of the popover. Can be a predefined size or a custom CSS value.",
    table: {
      defaultValue: { summary: undefined },
      type: {
        summary:
          ' "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string',
      },
    },
  },
  maxWidth: {
    control: {
      type: "select",
    },
    options: [
      undefined,
      "reference",
      "screen",
      "xxs",
      "xs",
      "s",
      "m",
      "l",
      "xl",
      "100px",
    ],
    description:
      "Sets the maximum width of the popover. Can be a predefined size or a custom CSS value.",
    table: {
      defaultValue: { summary: "s" },
      type: {
        summary:
          ' "reference" | "screen" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | string',
      },
    },
  },

  role: {
    control: {
      type: "text",
    },
    description: "The ARIA role attribute for the popover element.",
    table: {
      defaultValue: { summary: "dialog" },
      type: { summary: "string" },
    },
  },
  "aria-label": {
    control: {
      type: "text",
    },
    description: "The ARIA label attribute for the popover element.",
    table: {
      defaultValue: { summary: "popover" },
      type: { summary: "string" },
    },
  },
  forceMount: {
    control: {
      type: "boolean",
    },
    description:
      "If true, the popover will be rendered in the DOM even when it's not open.",
    table: {
      defaultValue: { summary: "false" },
      type: { summary: "boolean" },
    },
  },
  onMount: {
    control: false,
    description:
      "This callback is called multiple times controlled by react itself under the reference callback. Helpful to manage react state or query HTML elements.",
    table: {
      type: {
        summary: "(reference?: HTMLElement, floating?: HTMLElement) => void;",
      },
    },
  },
  tree: {
    control: {
      type: "boolean",
    },
    description:
      "If true, the popover will be able to manage popover in popover.",
    table: {
      defaultValue: { summary: "false" },
      type: { summary: "boolean" },
    },
  },
  p: {
    control: {
      type: "select",
    },
    options: [undefined, "0", "xxs", "xs", "s", "m", "l", "xl", "xxl", "3xl"],
    description: "Sets padding on all sides of the popover.",
    table: {
      defaultValue: { summary: undefined },
      type: { summary: ' "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl"' },
    },
  },
};
PopoverArgTypes.px = PopoverArgTypes.p;
PopoverArgTypes.py = PopoverArgTypes.p;
PopoverArgTypes.pt = PopoverArgTypes.p;
PopoverArgTypes.pr = PopoverArgTypes.p;
PopoverArgTypes.pb = PopoverArgTypes.p;
PopoverArgTypes.pl = PopoverArgTypes.p;
