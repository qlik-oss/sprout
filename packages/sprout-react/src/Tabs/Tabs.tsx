import { type ReactNode, useEffect, useState } from "react";

import { Tab, type TabProps } from "./Tab";
import { TabList, type TabListProps } from "./TabList";
import { TabPanel, type TabPanelPropTypes } from "./TabPanel";
import {
  TabsContainer,
  type TabsContainerProps,
  type TabsProviderProps,
} from "./TabsContainer";

type TabItemPropTypes = Omit<TabProps, "aria-controls"> & {
  panel: ReactNode;
  "aria-controls"?: string;
};

export type TabsProps = TabsProviderProps & {
  tabs: Array<TabItemPropTypes>;
  showTrack?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const randomUUID = () => window.crypto?.randomUUID() || "42";

function TabsPrimitive({
  tabs,
  showTrack,
  size,
  activeKey,
  defaultActiveKey,
  ...props
}: TabsProps) {
  const [ids, setIds] = useState<Array<string>>(tabs.map(() => randomUUID()));
  useEffect(() => {
    if (ids.length !== tabs.length) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIds(tabs.map(() => randomUUID()));
    }
  }, [tabs, ids]);
  if (tabs.length === 0) {
    return <nav />;
  }
  const tabProviderProps: Partial<TabsContainerProps> = {
    ...props,
    size,
    activeKey,
    defaultActiveKey,
  };
  // select the first tab if are selected
  if (ids.length > 0 && !activeKey && !defaultActiveKey) {
    tabProviderProps.defaultActiveKey = tabs[0]["aria-controls"] || ids[0];
  }
  return (
    <TabsContainer {...tabProviderProps}>
      <TabList showTrack={showTrack}>
        {tabs.map((tab: TabItemPropTypes, index: number) => {
          const tabProps: Partial<TabProps> = {};
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { panel, ...rest } = tab;
          tabProps["aria-controls"] = tab["aria-controls"] || ids[index];
          Object.assign(tabProps, rest);
          return (
            <Tab key={tabProps["aria-controls"]} {...(tabProps as TabProps)} />
          );
        })}
      </TabList>
      {tabs.map((tab: TabItemPropTypes, index: number) => {
        const tabPanelProps: Partial<TabPanelPropTypes> = {};
        tabPanelProps.id = tab["aria-controls"] || ids[index];
        return (
          <TabPanel
            key={tabPanelProps.id}
            {...(tabPanelProps as TabPanelPropTypes)}
          >
            {tab.panel}
          </TabPanel>
        );
      })}
    </TabsContainer>
  );
}

TabsPrimitive.displayName = "Tabs";

/**
 * The Tabs component supports the following props and sub-components:
 *
 * Props API:
 * @param tabs - Array of tab items, each with `title`, `aria-controls?`, `panel`, and optional `icon`, `badge`, `disabled`.
 * @param showTrack - If true, shows a visual track behind the tabs.
 * @param activeKey - Controlled active tab key.
 * @param defaultActiveKey - The default active tab key.
 * @param onSelect - Callback when the active tab changes.
 * @param size - Tab size (`s` or `m`).
 *
 * Composition API sub-components:
 * - `Tabs.Container` — Root container. Accepts `activeKey`, `defaultActiveKey`, `onSelect`, `size`, `height`.
 * - `Tabs.List` — Tab button list. Accepts `showTrack`.
 * - `Tabs.Tab` — Individual tab button. Requires `aria-controls` and `title`.
 * - `Tabs.Panel` — Tab content panel. Requires `id` matching a tab's `aria-controls`.
 */
export const Tabs = Object.assign(TabsPrimitive, {
  Container: TabsContainer,
  List: TabList,
  Tab,
  Panel: TabPanel,
});

export type TabsCompositionProps = {
  Container: TabsContainerProps;
  List: TabListProps;
  Tab: TabProps;
  Panel: TabPanelPropTypes;
};
