import type { TabsCompositionProps, TabsProps } from "@qlik/sprout-react";
import type { ArgTypes } from "@storybook/react";

import { ICONS_MAP, ICON_OPTIONS } from "../internal/icons/Icons";

export const TabsArgTypes: ArgTypes<TabsProps> = {
  defaultActiveKey: {
    control: { type: "text" },
    description: "The default active tab key. Only for uncontrolled usage.",
    table: {
      type: { summary: "string" },
    },
  },
  activeKey: {
    control: { type: "select" },
    options: [undefined, "assets-panel", "settings-panel", "users-panel"],
    description: "The active tab key. Use with `onSelect` for controlled usage.",
    table: {
      type: { summary: "string" },
    },
  },
  onSelect: {
    control: false,
    description: "Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",
    table: {
      type: { summary: "(event: any, key: string) => void" },
    },
  },
  size: {
    control: {
      type: "select",
    },
    options: ["s", "m"],
    description: "The size of the tabs. Can be `s` or `m`. Default is `m`.",
    table: {
      type: { summary: "'s' | 'm'" },
      defaultValue: { summary: "m" },
    },
  },
  height: {
    control: {
      type: "select",
    },
    options: ["100%", undefined],
    description: "Set the height of the tabs container to 100%.",
    table: {
      type: { summary: "'100%' | undefined" },
    },
  },
  tabs: {
    control: false,
    description:
      "Array of tab items. Each item should have `title`, `panel`, `aria-controls` and optionally `icon`, `badge`, and `disabled`. See `Tabs.Tab`.",
    table: {
      type: { summary: "TabItemPropTypes[]" },
    },
  },
  showTrack: {
    control: { type: "boolean" },
    description: "Whether to show the track under the selected tab.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
  },
};

export type TabsCompositionArgTypesProps = TabsCompositionProps["Container"] &
  TabsCompositionProps["List"] &
  TabsCompositionProps["Tab"] &
  TabsCompositionProps["Panel"];

export const TabsCompositionArgTypes: ArgTypes<TabsCompositionArgTypesProps> = {
  children: {
    control: false,
    description:
      "**Tabs.Container**: should contain `Tabs.List` and `Tabs.Panel` components. <br/><br/> **Tabs.List**: should contain `Tabs.Tab` components. <br/><br/> **Tabs.Panel**: should contain the content for each tab.",
    table: {
      type: { summary: "ReactNode" },
    },
  },
  defaultActiveKey: {
    control: { type: "select" },
    options: [undefined, "Assets", "Settings", "Focusable", "Users"],
    description: "The default active tab key. Only for uncontrolled usage.",
    table: {
      type: { summary: "string" },
      subcategory: "Tabs.Container",
    },
  },
  activeKey: {
    control: { type: "select" },
    options: [undefined, "Assets", "Settings", "Focusable", "Users"],
    description: "The active tab key. Use with `onSelect` for controlled usage.",
    table: {
      type: { summary: "string" },
      subcategory: "Tabs.Container",
    },
  },
  onSelect: {
    control: false,
    description: "Callback fired when a tab is selected. Use with `activeKey` for controlled usage.",
    table: {
      type: { summary: "(event: any, key: string) => void" },
      subcategory: "Tabs.Container",
    },
  },
  size: {
    control: {
      type: "select",
    },
    options: ["s", "m"],
    description: "The size of the tabs. Can be `s` or `m`. Default is `m`.",
    table: {
      type: { summary: "'s' | 'm'" },
      defaultValue: { summary: "m" },
      subcategory: "Tabs.Container",
    },
  },
  height: {
    control: {
      type: "select",
    },
    options: ["100%", undefined],
    description: "Set the height of the tabs container to 100%.",
    table: {
      type: { summary: "'100%' | undefined" },
      subcategory: "Tabs.Container",
    },
  },
  showTrack: {
    control: { type: "boolean" },
    description: "Whether to show the track under the selected tab.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      subcategory: "Tabs.List",
    },
  },
  "aria-controls": {
    control: { type: "text" },
    description: "The id of the associated `Tab.Panel`. Used for accessibility.",
    table: {
      type: { summary: "string" },
      subcategory: "Tabs.Tab",
    },
  },
  title: {
    control: { type: "text" },
    description: "The title of the tab.",
    table: {
      type: { summary: "string" },
      subcategory: "Tabs.Tab",
    },
  },
  badge: {
    control: false,
    description:
      "Optional badge to display next to the title. See [Badge](./?path=/docs/components-badge--docs) for details.",
    table: {
      type: { summary: "ReactNode" },
      subcategory: "Tabs.Tab",
    },
  },
  disabled: {
    control: { type: "boolean" },
    description: "Whether the tab is disabled.",
    table: {
      type: { summary: "boolean" },
      subcategory: "Tabs.Tab",
    },
  },
  icon: {
    control: "select",
    options: ICON_OPTIONS,
    mapping: ICONS_MAP,
    description: "Optional icon to display next to the title.",
    table: {
      type: { summary: "ReactNode" },
      subcategory: "Tabs.Tab",
    },
  },
  useIconButton: {
    control: { type: "boolean" },
    description: "If true, Tab will only show the icon with no label.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      subcategory: "Tabs.Tab",
    },
  },
  id: {
    control: { type: "text" },
    description: "The id of the tab panel. Should match the `aria-controls` of the associated `Tab`.",
    table: {
      type: { summary: "string" },
      subcategory: "Tabs.Panel",
    },
  },
  renderIf: {
    control: { type: "boolean" },
    description: "Whether the panel should unmount when hidden. If false, the panel remains in the DOM but hidden.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      subcategory: "Tabs.Panel",
    },
  },
};
