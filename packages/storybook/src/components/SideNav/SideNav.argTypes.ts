import type { SideNavProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react-vite";

import { ICONS_MAP, ICON_OPTIONS } from "../../internal/icons/Icons";

export const SideNavNavArgTypes: ArgTypes<SideNavProps["Nav"]> = {
  variant: {
    control: {
      type: "select",
    },
    options: [undefined, "compact"],
    description: "If compact, applies compact spacing styles.",
    table: {
      type: { summary: "'compact' | undefined" },
    },
  },
  children: {
    control: false,
    description: "Content rendered inside SideNav.Nav.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
};

export const SideNavItemArgTypes: ArgTypes<SideNavProps["Item"]> = {
  variant: {
    control: {
      type: "select",
    },
    options: [undefined, "compact"],
    description: "If compact, applies compact layout.",
    table: {
      type: { summary: "'compact' | undefined" },
    },
  },
  icon: {
    control: {
      type: "select",
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description: "Optional icon displayed before the label.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  iconSize: {
    if: { arg: "variant", eq: "compact" },
    control: {
      type: "select",
    },
    options: [undefined, "large"],
    description: "Icon size variant. Only applied when variant is compact.",
    table: {
      type: { summary: "'large' | undefined" },
    },
  },
  label: {
    control: {
      type: "text",
    },
    description: "The text label of the navigation item.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  indentation: {
    control: {
      type: "number",
    },
    description: "Indentation level of the item.",
    table: {
      type: { summary: "number | undefined" },
    },
  },
  isExternal: {
    control: {
      type: "select",
    },
    options: [undefined, true, false],
    description: "If true, shows an external link indicator.",
    table: {
      type: { summary: "boolean | undefined" },
    },
  },
};

export const SideNavSectionArgTypes: ArgTypes<SideNavProps["Section"]> = {
  label: {
    control: {
      type: "text",
    },
    description: "Optional visible label for the section.",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  level: {
    control: {
      type: "select",
    },
    options: [undefined, "h2", "h3", "h4", "h5", "h6"],
    description:
      "Heading level for the section label. Defaults to `h2` when omitted.",
    table: {
      type: { summary: "'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined" },
      defaultValue: { summary: "h2" },
    },
  },
  children: {
    control: false,
    description: "Content rendered inside SideNav.Section.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
};

export const SideNavLinkArgTypes: ArgTypes<SideNavProps["Link"]> = {
  href: {
    control: {
      type: "text",
    },
    description: "Destination URL for the anchor element.",
    table: {
      type: { summary: "string | undefined" },
    },
  },
  variant: {
    control: {
      type: "select",
    },
    options: [undefined, "compact"],
    description: "If compact, applies compact layout.",
    table: {
      type: { summary: "'compact' | undefined" },
    },
  },
  icon: {
    control: {
      type: "select",
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description: "Optional icon displayed before the label.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  iconSize: {
    if: { arg: "variant", eq: "compact" },
    control: {
      type: "select",
    },
    options: [undefined, "large"],
    description: "Icon size variant. Only applied when variant is compact.",
    table: {
      type: { summary: "'large' | undefined" },
      defaultValue: { summary: "undefined" },
    },
  },
  label: {
    control: {
      type: "text",
    },
    description: "The text label of the link item.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  indentation: {
    control: {
      type: "number",
    },
    description: "Indentation level of the link item.",
    table: {
      type: { summary: "number | undefined" },
    },
  },
  isExternal: {
    control: {
      type: "select",
    },
    options: [undefined, true, false],
    description: "If true, shows an external link indicator.",
    table: {
      type: { summary: "boolean | undefined" },
    },
  },
};
