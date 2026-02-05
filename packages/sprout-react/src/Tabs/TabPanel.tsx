import { type ReactNode, useContext, useEffect, useRef, useState } from "react";

import { FOCUSABLE_ELEMENT_SELECTOR } from "../Utils/focus";
import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";
import { TabsInternalContext } from "./TabsContext";

import style from "./Tabs.module.css";

export type TabPanelPropTypes = Omit<HTMLDivProps, "id"> & {
  children: ReactNode | Array<ReactNode>;
  renderIf?: boolean;
  id: string;
};

export function TabPanel({ children, id, renderIf }: TabPanelPropTypes) {
  const [focusable, setFocusable] = useState(true);
  const context = useContext(TabsInternalContext);
  const ref = useRef<HTMLDivElement>(null);
  const isHidden = context?.value !== id;

  // Check if the panel has focusable elements and adapt the tabIndex accordingly
  useEffect(() => {
    const i = setInterval(() => {
      if (ref.current && !isHidden) {
        const hasFocusableElem =
          ref.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR).length === 0;
        if (!focusable && hasFocusableElem) {
          setFocusable(true);
        } else if (focusable && !hasFocusableElem) {
          setFocusable(false);
        }
      }
    }, 500);
    return () => {
      clearInterval(i);
    };
  }, [isHidden, focusable]);

  if (isHidden && renderIf) {
    return null;
  }

  return (
    <div
      id={id}
      role="tabpanel"
      className={classNames(style.tabpanel, {
        [style.tabpanel__hidden]: isHidden,
        "overflow-auto": context?.height === "100%",
      })}
      tabIndex={focusable ? 0 : -1}
      ref={ref}
    >
      {children}
    </div>
  );
}

TabPanel.displayName = "Tabs.Panel";
