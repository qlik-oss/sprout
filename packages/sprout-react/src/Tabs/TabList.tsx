import { type ReactNode, useContext, useEffect, useRef } from "react";

import { classNames } from "../classNames";
import { useListGesture } from "../hooks/useListGesture";
import { TabsInternalContext } from "./TabsContext";
import { Tracker } from "./Tracker";

import style from "./Tabs.module.css";

export type TabListProps = {
  showTrack?: boolean;
  children: ReactNode;
};

function getAllItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(`[role="tab"]:not(:disabled)`);
}
function getSelectedItems(ref: HTMLElement): NodeList {
  return ref.querySelectorAll(
    `[role="tab"][aria-selected="true"]:not(:disabled)`,
  );
}

export function TabList({ showTrack, children }: TabListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(TabsInternalContext);
  const isSmall = context?.size === "s";
  const gesture = useListGesture({
    getAllItems,
    getSelectedItems,
    orientation: "horizontal",
  });
  useEffect(() => {
    if (ref.current) {
      gesture.setElement(ref.current);
    }

    return () => {
      gesture.setElement();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classNames("flex", "flex-row", style.tablist, {
        [style.show_track]: !!showTrack,
        "gap-l": isSmall,
      })}
      role="tablist"
      ref={ref}
    >
      {children}
      <Tracker />
    </div>
  );
}
TabList.displayName = "Tabs.List";
