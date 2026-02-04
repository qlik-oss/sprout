import type { BreadCrumbProps } from "@qlik/sprout-css-react";
import type { ArgTypes } from "@storybook/react";

export const BreadcrumbArgTypes: ArgTypes<BreadCrumbProps> = {
  children: {
    control: false,
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  items: {
    control: false,
    description:
      "Renders a breadcrumb from an array of items (label + href). When using this API, required WAI-ARIA breadcrumb attributes are applied automatically.",
    table: {
      type: {
        summary: "BreadcrumbItemProps",
      },
    },
  },
  label: {
    control: "text",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};
