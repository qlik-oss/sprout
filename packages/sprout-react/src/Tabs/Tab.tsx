import { type ReactNode, useContext } from "react";

import { Tooltip } from "../Tooltip";
import { classNames } from "../classNames";
import type { DataAttributes, HTMLButtonProps } from "../htmlTypes";
import { TabsInternalContext } from "./TabsContext";

import style from "./Tabs.module.css";

export type TabProps = Omit<
  HTMLButtonProps,
  "onClick" | "type" | "children"
> & {
  ["aria-controls"]: string;
  title: string;
  badge?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  useIconButton?: boolean;
} & DataAttributes;

/**
 * The `Tabs.Tab` component renders onto a `button` HTML element. It accepts all `HTMLButtonElement` attributes except `onClick`, `type`, and `children`, plus the following:
 * @param aria-controls - The id of the panel this tab controls (required).
 * @param title - The visible tab label.
 * @param icon - Optional icon displayed inside the tab.
 * @param badge - Optional badge content displayed inside the tab.
 * @param disabled - If true, the tab is disabled.
 * @param useIconButton - If true, renders the tab as an icon-only button.
 */
export function Tab({ icon, badge, title, useIconButton, ...props }: TabProps) {
  const context = useContext(TabsInternalContext);
  const isSmall = context?.size === "s";
  const a11y: HTMLButtonProps = {
    role: "tab",
    "aria-selected": props["aria-controls"] === context?.value,
    tabIndex: props["aria-controls"] === context?.value ? 0 : -1,
  };
  if (useIconButton) {
    a11y["aria-label"] = title;
  }
  let content = (
    <button
      {...props}
      {...a11y}
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "py-0",
        "justify-center",
        "items-center",
        style.tab,
        {
          [style.tab_small]: isSmall,
          "px-l": !isSmall,
          "px-0": isSmall,
        }
      )}
      onClick={(e) => context?.onChange(e, props["aria-controls"])}
      type="button"
    >
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "content-center",
          "items-center",
          "self-stretch",
          "gap-m",
          "justify-center",
          style.inner
        )}
      >
        {icon}
        {!useIconButton && (
          <span
            className={classNames(style.tab__label, {
              "font-label-s-emphasized": !isSmall,
              "font-label-xs-emphasized": isSmall,
            })}
          >
            {title}
          </span>
        )}
        {badge}
      </div>
    </button>
  );
  if (useIconButton) {
    content = <Tooltip title={title}>{content}</Tooltip>;
  }
  return content;
}
Tab.displayName = "Tabs.Tab";
