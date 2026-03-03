import { type ReactNode, useMemo, useRef } from "react";

import { useControl } from "@qlik/sprout-react-hooks";

import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { TabsInternalContext } from "./TabsContext";

import style from "./Tabs.module.css";

export type TabsProviderProps = Omit<
  HTMLDivProps,
  "children" | "onSelect" | "height"
> & {
  defaultActiveKey?: string;
  activeKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect?: (event: any, key: string) => void;
  size?: "s" | "m";
  height?: "100%";
};

type WithChildren = {
  children: ReactNode | Array<ReactNode>;
};

export type TabsContainerProps = TabsProviderProps & WithChildren;

export function TabsContainer({
  children,
  size,
  activeKey,
  defaultActiveKey,
  onSelect,
  height,
  ...props
}: TabsContainerProps) {
  const controlled = useControl<string>(
    {
      activeKey,
      defaultActiveKey,
      onSelect,
    },
    {
      valueKey: "activeKey",
      defaultValueKey: "defaultActiveKey",
      onChangeKey: "onSelect",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      selector: (e: any, id: string) => id,
    },
  );
  const contextValue = useMemo(
    () => ({ size, ...controlled, height }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, controlled],
  );
  const navRef = useRef<HTMLDivElement>(null);
  return (
    <nav
      className={classNames(style.track, {
        "h-full": height === "100%",
      })}
      ref={navRef}
      {...props}
    >
      <div
        className={classNames(
          "flex",
          "border-box",
          "flex-col",
          style.container,
        )}
      >
        <TabsInternalContext.Provider value={contextValue}>
          {children}
        </TabsInternalContext.Provider>
      </div>
    </nav>
  );
}

TabsContainer.displayName = "Tabs.Container";
