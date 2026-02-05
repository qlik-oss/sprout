import type { ToastProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react-vite";

export type ToastArgs = ToastProps["Content"] & {
  placement: "top" | "bottom" | "top-end" | "bottom-end";
};

export const ToastArgTypes: ArgTypes<ToastArgs> = {
  children: {
    table: {
      type: {
        summary: "ReactNode",
      },
      subcategory: "Toast.Container",
    },
  },
  placement: {
    control: {
      type: "select",
    },
    options: [
      "top-start",
      "top",
      "top-end",
      "bottom-start",
      "bottom",
      "bottom-end",
    ],
    table: { subcategory: "Toast.Container" },
  },
  action: {
    description: "Optional action button defined by an object",
    control: {
      type: "object",
    },
    table: { subcategory: "Toast.Content" },
  },
  message: {
    control: {
      type: "text",
    },
    table: { subcategory: "Toast.Content" },
  },
  title: {
    control: {
      type: "text",
    },
    table: { subcategory: "Toast.Content" },
  },
  severity: {
    options: [undefined, "info", "warning", "error", "success"],
    control: {
      default: "info",
      type: "select",
    },
    table: { subcategory: "Toast.Content" },
  },
  "data-testid": {
    table: {
      disable: true,
    },
  },
  onClose: {
    table: { subcategory: "Toast.Content", summary: "function" },
  },
};
