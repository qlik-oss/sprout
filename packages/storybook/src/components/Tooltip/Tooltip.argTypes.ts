import type { TooltipProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react";

export const TooltipArgTypes: ArgTypes<TooltipProps> = {
  anchorEl: {
    control: false,
    description:
      "The element to use as a reference to set position of the floating element.",
    table: {
      type: {
        summary: "HTMLElement",
      },
    },
  },
  anchorPosition: {
    control: false,
    description:
      "This is the position that may be used to set the position of the popover. The coordinates are relative to the application's client area.",
    table: {
      type: {
        summary: "{ x: number; y: number } | undefined",
      },
    },
  },
  children: {
    control: false,
    description: "The element that will trigger the tooltip.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  forceMount: {
    control: "boolean",
    description: "Define if the content is mount when not displayed.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  initialOpen: {
    control: {
      type: "select",
    },
    description: "The initial open state when the component is not controlled",
    options: [undefined, true, false],
    table: {
      defaultValue: {
        summary: "undefined",
      },
      type: {
        summary: "undefined | boolean",
      },
    },
  },
  maxWidth: {
    control: {
      type: "select",
    },
    options: ["reference", "xxs", "xs", "s", "m", "l", "xl", "100px"],
    table: {
      type: {
        summary:
          "reference | xxs | xs | s | m | l | xl | CSSProperties['width']",
      },
    },
  },
  minWidth: {
    control: {
      type: "select",
    },
    options: ["reference", "xxs", "xs", "s", "m", "l", "xl", "100px"],
    table: {
      type: {
        summary:
          "reference | xxs | xs | s | m | l | xl | CSSProperties['width']",
      },
    },
  },
  onMount: {
    control: false,
    table: {
      type: {
        summary: "(reference?: HTMLElement, floating?: HTMLElement) => void",
      },
    },
  },
  onOpenChange: {
    control: false,
    table: {
      type: {
        summary: "(open: boolean, reason?: Reason) => void",
      },
    },
  },
  open: {
    control: {
      type: "select",
    },
    description: "Control if the popover is displayed or not",
    options: [undefined, true, false],
    table: {
      defaultValue: {
        summary: "undefined",
      },
      type: {
        summary: "undefined | boolean",
      },
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
    table: {
      defaultValue: {
        summary: "top",
      },
      type: {
        summary:
          "undefined | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end | top | top-start | top-end",
      },
    },
  },
  placementUpdate: {
    control: {
      type: "boolean",
    },
    description:
      "If true the floating element placement can be updated to keep it in view.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  title: {
    control: {
      type: "text",
    },
    description: "The content of the tooltip.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  width: {
    control: {
      type: "select",
    },
    description: "The width of the tooltip.",
    options: ["reference", "xxs", "xs", "s", "m", "l", "xl", "100px"],
    table: {
      type: {
        summary:
          "reference | xxs | xs | s | m | l | xl | CSSProperties['width']",
      },
    },
  },
};
