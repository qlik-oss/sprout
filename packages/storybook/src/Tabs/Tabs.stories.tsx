import type { ReactNode } from "react";
import { useState } from "react";
import { fn } from "storybook/test";

import { Badge, Button, Tabs, classNames } from "@qlik/sprout-css-react";
import BookOutline from "@qlik/sprout-icons/react/BookOutline";
import Cogwheel from "@qlik/sprout-icons/react/Cogwheel";
import Star from "@qlik/sprout-icons/react/Star";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  TabsArgTypes,
  TabsCompositionArgTypes,
  type TabsCompositionArgTypesProps,
} from "./Tabs.argTypes";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const disableSnap = { chromatic: { disableSnapshot: true } };

function P({ children }: { children: ReactNode }) {
  return (
    <p className={classNames("font-body-s", "text-default")}>{children}</p>
  );
}

export const Uncontrolled: StoryObj<TabsCompositionArgTypesProps> = {
  render: (props) => {
    const {
      defaultActiveKey,
      activeKey,
      size,
      height,
      onSelect,
      showTrack,
      title,
      icon,
      useIconButton,
    } = props;

    return (
      <div
        className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")}
        data-testid="wrapper"
      >
        <Tabs.Container
          defaultActiveKey={defaultActiveKey}
          activeKey={activeKey}
          size={size}
          height={height}
          onSelect={onSelect}
        >
          <Tabs.List showTrack={showTrack}>
            <Tabs.Tab
              aria-controls="Assets"
              title={title || "Assets"}
              icon={icon || <BookOutline />}
              useIconButton={useIconButton}
            />
            <Tabs.Tab
              aria-controls="Settings"
              title="Settings"
              icon={<Cogwheel />}
              useIconButton={useIconButton}
            />
            <Tabs.Tab
              aria-controls="Focusable"
              title="Focusable"
              useIconButton={useIconButton}
            />
            <Tabs.Tab
              aria-controls="Users"
              title="Users"
              icon={<Star />}
              disabled
              useIconButton={useIconButton}
            />
          </Tabs.List>
          <Tabs.Panel id="Assets">
            <P>Tab content for Assets</P>
          </Tabs.Panel>
          <Tabs.Panel id="Settings">
            <P>Tab content for Settings</P>
          </Tabs.Panel>
          <Tabs.Panel id="Focusable">
            <P>
              This panel content has some focusable elements so the focus should
              move directly to it if you use keyboard navigation.
            </P>
            <Button label="Focusable button" />
          </Tabs.Panel>
          <Tabs.Panel id="Users">Tab content for Users</Tabs.Panel>
        </Tabs.Container>
      </div>
    );
  },
  args: {
    defaultActiveKey: "Assets",
    onSelect: fn(),
    showTrack: true,
    title: "Assets",
  },
  argTypes: TabsCompositionArgTypes,
  parameters: disableSnap,
};

export const TabsWithoutPanel: StoryObj = {
  render: function TabsWithoutPanel() {
    const [activeTab, setActiveTab] = useState("Assets");

    return (
      <div
        className={classNames("flex", "flex-col", "p-s", "gap-s")}
        data-testid="wrapper"
      >
        <Tabs.Container
          activeKey={activeTab}
          onSelect={(_event, key) => {
            setActiveTab(key);
          }}
        >
          <Tabs.List showTrack>
            <Tabs.Tab
              aria-controls="Assets"
              title="Assets"
              icon={<BookOutline />}
            />
            <Tabs.Tab
              aria-controls="Settings"
              title="Settings"
              icon={<Cogwheel />}
            />
            <Tabs.Tab aria-controls="Users" title="Users" icon={<Star />} />
          </Tabs.List>
        </Tabs.Container>

        <div className={classNames("p-m")} id={activeTab} role="tabpanel">
          <P>
            Current active tab: <strong>{activeTab}</strong>
          </P>
          <P>
            This demonstrates a controlled Tabs component without Panels - the
            tab state is managed externally and can be used to control other
            parts of your UI.
          </P>
        </div>
      </div>
    );
  },
  parameters: { ...disableSnap },
};

export const Height: StoryObj<TabsCompositionArgTypesProps> = {
  render: (props) => {
    const {
      defaultActiveKey,
      activeKey,
      size,
      height,
      onSelect,
      showTrack,
      title,
      icon,
      useIconButton,
    } = props;

    return (
      <div
        className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")}
        style={{ blockSize: "500px" }}
        data-testid="wrapper"
      >
        <Tabs.Container
          defaultActiveKey={defaultActiveKey}
          activeKey={activeKey}
          size={size}
          height={height}
          onSelect={onSelect}
        >
          <Tabs.List showTrack={showTrack}>
            <Tabs.Tab
              aria-controls="Assets"
              title={title || "Assets"}
              icon={icon || <BookOutline />}
              useIconButton={useIconButton}
            />
            <Tabs.Tab
              aria-controls="Settings"
              title="Settings"
              icon={<Cogwheel />}
              useIconButton={useIconButton}
            />
            <Tabs.Tab
              aria-controls="Focusable"
              title="Focusable"
              useIconButton={useIconButton}
            />
            <Tabs.Tab
              aria-controls="Users"
              title="Users"
              icon={<Star />}
              disabled
              useIconButton={useIconButton}
            />
          </Tabs.List>
          <Tabs.Panel id="Assets">
            {Array.from({ length: 50 }, (_, i) => (
              <P key={i}>Assets - Item {i + 1}</P>
            ))}
          </Tabs.Panel>
          <Tabs.Panel id="Settings">
            {Array.from({ length: 50 }, (_, i) => (
              <P key={i}>Settings- Item {i + 1}</P>
            ))}
          </Tabs.Panel>
          <Tabs.Panel id="Focusable">
            {Array.from({ length: 50 }, (_, i) => (
              <P key={i}>Focusable - Item {i + 1}</P>
            ))}
            <Button label="Focusable button" />
          </Tabs.Panel>
          <Tabs.Panel id="Users">
            {Array.from({ length: 50 }, (_, i) => (
              <P key={i}>Focusable - Item {i + 1}</P>
            ))}
          </Tabs.Panel>
        </Tabs.Container>
      </div>
    );
  },
  args: {
    defaultActiveKey: "Assets",
    onSelect: fn(),
    showTrack: true,
    title: "Assets",
    height: "100%",
  },
  argTypes: TabsCompositionArgTypes,
};

const TABS = [
  {
    title: "Assets",
    "aria-controls": "assets-panel",
    icon: <BookOutline />,
    badge: <Badge text="3" color="warning" variant="alphanumeric" />,
    panel: (
      <div className={classNames("font-body-s", "text-default")}>
        Tab 1 content
      </div>
    ),
  },
  {
    title: "Settings",
    "aria-controls": "settings-panel",
    icon: <Cogwheel />,
    panel: (
      <div className={classNames("font-body-s", "text-default")}>
        Tab 2 content
      </div>
    ),
  },
  {
    title: "Users",
    "aria-controls": "users-panel",
    icon: <Star />,
    panel: (
      <div className={classNames("font-body-s", "text-default")}>
        Tab 3 content
      </div>
    ),
  },
];

export const UncontrolledWithTabsProp: StoryObj<typeof Tabs> = {
  render: ({ showTrack }) => (
    <div
      className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")}
      data-testid="wrapper"
    >
      <Tabs showTrack={showTrack} tabs={TABS} />
    </div>
  ),

  args: {
    showTrack: false,
  },
  argTypes: TabsArgTypes,
  parameters: disableSnap,
};

export const ControlledWithTabsProp: StoryObj<typeof Tabs> = {
  render: (props) => (
    <div
      className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")}
      data-testid="wrapper"
    >
      <Tabs {...props} tabs={TABS} />
    </div>
  ),
  args: {
    showTrack: false,
    activeKey: "assets-panel",
    onSelect: fn(),
  },
  argTypes: TabsArgTypes,
  parameters: disableSnap,
};

export const VisualTests: StoryObj<typeof Tabs> = {
  render: () => (
    <div
      className={classNames("flex", "flex-col", "p-s", "gap-s", "w-fit")}
      data-testid="wrapper"
    >
      <Tabs.Container defaultActiveKey="Active">
        <Tabs.List showTrack>
          <Tabs.Tab
            aria-controls="Active"
            title="ActiveTab"
            icon={<BookOutline />}
            badge={<Badge variant="alphanumeric" color="warning" text="3" />}
          />
          <Tabs.Tab
            aria-controls="Enabled"
            title="EnabledTab"
            icon={<BookOutline />}
          />
          <Tabs.Tab
            aria-controls="Hovered"
            title="HoveredTab"
            data-testid="hover"
          />
          <Tabs.Tab
            aria-controls="Focused"
            title="FocusedTab"
            data-testid="focus"
          />
          <Tabs.Tab
            aria-controls="DisabledTab"
            title="DisabledTab"
            icon={<Star />}
            disabled
          />
        </Tabs.List>
        <Tabs.Panel id="Active">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Enabled">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Hovered">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Focused">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Users">
          <P>content</P>
        </Tabs.Panel>
      </Tabs.Container>

      <Tabs.Container defaultActiveKey="Small Active" size="s">
        <Tabs.List showTrack>
          <Tabs.Tab
            aria-controls="Small Active"
            title="Small ActiveTab"
            icon={<BookOutline />}
            badge={<Badge variant="alphanumeric" color="warning" text="3" />}
          />
          <Tabs.Tab
            aria-controls="Small Enabled"
            title="Small EnabledTab"
            icon={<BookOutline />}
          />
          <Tabs.Tab
            aria-controls="Small Hovered"
            title="Small HoveredTab"
            data-testid="hover"
          />
          <Tabs.Tab
            aria-controls="Small Focused"
            title="Small FocusedTab"
            data-testid="focus"
          />
          <Tabs.Tab
            aria-controls="Small DisabledTab"
            title="Small DisabledTab"
            icon={<Star />}
            disabled
          />
        </Tabs.List>
        <Tabs.Panel id="Small Active">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small Enabled">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small Hovered">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small Focused">
          <P>content</P>
        </Tabs.Panel>
        <Tabs.Panel id="Small DisabledTab">
          <P>content</P>
        </Tabs.Panel>
      </Tabs.Container>

      <Tabs showTrack tabs={TABS} />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]',
    },
  },
};
