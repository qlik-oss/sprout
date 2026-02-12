import type { MenuProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

import { ICONS_MAP, ICON_OPTIONS } from "../../internal/icons/Icons";
import { ButtonArgTypes, ButtonIconArgTypes } from "../Button/Button.argTypes";

export const MenuContentArgTypes: ArgTypes<MenuProps["Content"]> = {
  label: {
    control: "text",
    description: "The main text label for the menu content.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  description: {
    control: "text",
    description: "Optional secondary text for the menu content.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  valueLabel: {
    control: "text",
    description:
      "Optional value label displayed on the opposite side of the main label.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  icon: {
    control: {
      type: "select",
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description: "Optional icon to display alongside the menu content label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  isNested: {
    control: "boolean",
    description: "Indicates if the menu content is part of a nested submenu.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  selectable: {
    control: "boolean",
    description:
      "If true, the menu content will display a selection indicator (e.g., a checkmark) when selected.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  selected: {
    if: { arg: "selectable", truthy: true },
    control: "boolean",
    description:
      "If true, the menu content will be marked as selected. Only relevant if `selectable` is true.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  children: {
    control: false,
    description: "The children elements of the menu content.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
};

export const MenuContextualArgTypes: ArgTypes<MenuProps["Contextual"]> = {
  anchorPosition: {
    control: false,
    description:
      "The position of the anchor element in the viewport. Used for positioning the menu when not using an anchor element.",
    table: {
      type: {
        summary: "{ top: number; left: number }",
      },
    },
  },
  children: {
    control: false,
    description: "The anchor element that the menu is positioned relative to.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  closeOnRightClickOutside: {
    control: "boolean",
    description:
      "If true, the menu will close when a right-click is detected outside of the menu.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "true",
      },
    },
  },
  menu: {
    control: false,
    description: "The menu content.",
    table: {
      type: {
        summary: "ReactNode | MenuRendererProps['menu']",
      },
    },
  },
  onOpenChange: {
    control: false,
    description:
      "Callback fired when the open state of the menu changes. Receives the new open state and the event that triggered the change.",
    table: {
      type: {
        summary: "(open: boolean, event?: MouseEvent) => void",
      },
    },
  },
  open: {
    control: "boolean",
    description: "Controls the open state of the menu.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  wrapperClassName: {
    control: "text",
    description: "Class name to be applied to the wrapper element.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};

export const MenuGroupArgTypes: ArgTypes<MenuProps["Group"]> = {
  label: {
    control: "text",
    description:
      "The label for the menu group. Renders a `Menu.GroupLabel` internally.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  children: {
    control: false,
    description: "The content of the menu group.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
};

export const MenuGroupLabelArgTypes: ArgTypes<MenuProps["GroupLabel"]> = {
  label: {
    control: "text",
    description:
      "The text label for the menu group. Rendered inside a `Menu.Group`.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
};

export const MenuItemArgTypes: ArgTypes<MenuProps["Item"]> = {
  label: {
    control: "text",
    description: "The main text label for the menu item.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  description: {
    control: "text",
    description: "Optional secondary text for the menu item.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  valueLabel: {
    control: "text",
    description:
      "Optional value label displayed on the opposite side of the main label.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  icon: {
    control: {
      type: "select",
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description: "Optional icon to display alongside the menu item label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  variant: {
    control: "select",
    options: [undefined, "default", "destructive"],
    description: "The variant style of the menu item.",
    table: {
      type: {
        summary: "'default' | 'destructive'",
      },
      defaultValue: {
        summary: "'default'",
      },
    },
  },
  selectable: {
    control: "boolean",
    description:
      "If true, the menu item will display a selection indicator (e.g., a checkmark) when selected.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  selected: {
    if: { arg: "selectable", truthy: true },
    control: "boolean",
    description:
      "If true, the menu item will be marked as selected. Only relevant if `selectable` is true.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  disabled: {
    control: "boolean",
    description: "If true, the menu item will be disabled and not interactive.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
};

export const MenuSubArgTypes: ArgTypes<MenuProps["Sub"]> = {
  "data-testid": {
    control: "text",
    description:
      "Test ID applied to the submenu's floating menu (the popover element).",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  "data-testid-submenu": {
    control: "text",
    description:
      "Test ID applied to the submenu trigger item (the nested Menu.Item).",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  menu: {
    control: false,
    description: "The submenu content.",
    table: {
      type: {
        summary: "ReactNode | MenuRendererProps['menu']",
      },
    },
  },
  disabled: {
    control: "boolean",
    description:
      "If true, the submenu trigger will be disabled and not interactive.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  variant: {
    control: "select",
    options: ["default", "destructive"],
    description: "The variant style of the submenu trigger.",
    table: {
      type: {
        summary: "'default' | 'destructive'",
      },
      defaultValue: {
        summary: "'default'",
      },
    },
  },
  label: {
    control: "text",
    description: "The main text label for the submenu trigger.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  description: {
    control: "text",
    description: "Optional secondary text for the submenu trigger.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  valueLabel: {
    control: "text",
    description:
      "Optional value label displayed on the opposite side of the main label.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  icon: {
    control: {
      type: "select",
    },
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description:
      "Optional icon to display alongside the submenu trigger label.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  selectable: {
    control: "boolean",
    description:
      "If true, the submenu trigger will display a selection indicator (e.g., a checkmark) when selected.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  selected: {
    if: { arg: "selectable", truthy: true },
    control: "boolean",
    description:
      "If true, the submenu trigger will be marked as selected. Only relevant if `selectable` is true.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  children: {
    control: false,
    description: "The content of the submenu trigger, usually a `Menu.Item`.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
};

export const MenuTriggerArgTypes: ArgTypes<MenuProps["Trigger"]> = {
  menu: {
    control: false,
    description: "The menu content.",
    table: {
      type: {
        summary: "ReactNode | MenuRendererProps['menu']",
      },
    },
  },
  children: {
    control: false,
    description: "The anchor element that the menu is positioned relative to.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
  closeOnRightClickOutside: {
    control: "boolean",
    description:
      "If true, the menu will close when a right-click is detected outside of the menu.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  onOpenChange: {
    control: false,
    description:
      "Callback fired when the open state of the menu changes. Receives the new open state and the reason that triggered the change.",
    table: {
      type: {
        summary: "(open: boolean, reason?: Reason) => void",
      },
    },
  },
  open: {
    control: "boolean",
    description: "Controls the open state of the menu.",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  defaultOpen: {
    control: "boolean",
    description: "If true, the menu will be open by default (uncontrolled).",
    table: {
      type: {
        summary: "boolean",
      },
    },
  },
  placement: {
    control: "select",
    options: [
      "left",
      "right",
      "top",
      "top-start",
      "top-end",
      "right-start",
      "right-end",
      "bottom",
      "bottom-start",
      "bottom-end",
      "left-start",
      "left-end",
    ],
    description: "The placement of the menu relative to the trigger element.",
    table: {
      type: {
        summary:
          "'left' | 'right' | 'top' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end'",
      },
      defaultValue: {
        summary: "'bottom-start'",
      },
    },
  },
};

export const MenuSecondaryActionArgTypes: ArgTypes<
  MenuProps["SecondaryAction"]
> = {
  ...ButtonIconArgTypes,
  ...ButtonArgTypes,
};

export const MenuSplitArgTypes: ArgTypes<MenuProps["Split"]> = {
  children: {
    control: false,
    description: "The content of the split menu.",
    table: {
      type: {
        summary: "ReactNode",
      },
    },
  },
};
