import { useState } from "react";

import { tokens } from "@qlik/design-tokens";

import { classNames } from "../classNames";
import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { TabsContainer, type TabsContainerProps } from "./TabsContainer";

export function TabTests({
  showTrack,
  useIconButton,
  ...props
}: Omit<TabsContainerProps, "children"> & {
  showTrack?: boolean;
  useIconButton?: boolean;
}) {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "border-box",
        "gap-s",
        "p-s",
        "w-fit",
      )}
      data-testid="wrapper"
    >
      <TabsContainer {...props}>
        <TabList showTrack={showTrack}>
          <Tab
            aria-controls="Assets"
            title="Assets"
            icon={<svg />}
            useIconButton={useIconButton}
          />
          <Tab
            aria-controls="Settings"
            title="Settings"
            icon={<svg />}
            useIconButton={useIconButton}
          />
          <Tab aria-controls="Focusable" title="Focusable" />
          <Tab
            aria-controls="Users"
            title="Users"
            icon={<svg />}
            disabled
            useIconButton={useIconButton}
          />
        </TabList>
        <TabPanel id="Assets">Tab content for Assets</TabPanel>
        <TabPanel id="Settings">Tab content for Settings</TabPanel>
        <TabPanel id="Users">Tab content for Users</TabPanel>
        <TabPanel id="Focusable">
          <p>
            This panel content has some focusable elements so the focus should
            move directly to it if you use keyboard navigation.
          </p>
          <button type="button">Focusable button</button>
        </TabPanel>
      </TabsContainer>
    </div>
  );
}

export function TabsWithTrackerTest() {
  const [containerWidth, setContainerWidth] = useState(
    tokens.container_sizing_m,
  );
  const [tabTitle, setTabTitle] = useState("Assets");
  return (
    <div
      className={classNames("flex", "flex-col", "border-box", "gap-s", "p-s")}
      style={{ blockSize: containerWidth }}
      data-testid="wrapper"
    >
      <TabsContainer defaultActiveKey="Assets">
        <TabList showTrack>
          <Tab aria-controls="Assets" title={tabTitle} icon={<svg />} />
          <Tab aria-controls="Settings" title="Settings" icon={<svg />} />
          <Tab aria-controls="Focusable" title="Focusable" />
          <Tab aria-controls="Users" title="Users" icon={<svg />} disabled />
        </TabList>
        <TabPanel id="Assets">
          <p>Tab content for Assets</p>
          <button
            data-testid="set-large-width"
            type="button"
            onClick={() => {
              setContainerWidth(tokens.container_sizing_l);
            }}
          >
            Set Large Width
          </button>
          <button
            data-testid="change-tab-title"
            type="button"
            onClick={() => {
              setTabTitle("New Assets");
            }}
          >
            Change Tab Title
          </button>
        </TabPanel>
        <TabPanel id="Settings">Tab content for Settings</TabPanel>
        <TabPanel id="Users">Tab content for Users</TabPanel>
        <TabPanel id="Focusable">
          <p>
            This panel content has some focusable elements so the focus should
            move directly to it if you use keyboard navigation.
          </p>
          <button type="button">Focusable button</button>
        </TabPanel>
      </TabsContainer>
    </div>
  );
}
