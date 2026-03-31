import type { ReactNode } from "react";

import { TickOutline } from "../Icons/TickOutline";
import { classNames } from "../classNames";
import { menuStyle } from "./MenuClassName";
import { ChevronRight } from "./MenuIcon";

export type MenuContentProps = {
  label?: string;
  description?: string;
  valueLabel?: string;
  icon?: ReactNode;
  isNested?: boolean;
  selectable?: boolean;
  selected?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};

type MenuContentPrimitiveProps = Pick<
  MenuContentProps,
  "label" | "icon" | "valueLabel" | "description" | "disabled"
>;

const NO_SHRINK = { flexShrink: 0 };

function NotSelected() {
  return <svg width="16" height="16" viewBox="0 0 16 16" style={NO_SHRINK} />;
}

/**
 * The MenuContent component is standalone content layout for a menu item. It supports the following props:
 * @param label - the primary text label.
 * @param description - secondary descriptive text shown below the label.
 * @param icon - an icon rendered at the start.
 * @param valueLabel - a value string rendered at the end.
 * @param isNested - whether this is a nested item.
 * @param selectable - whether the item shows a checked/unchecked indicator.
 * @param selected - whether the item is currently selected.
 * @param disabled - whether the item is disabled.
 * @param children - additional content rendered inside.
 */
export function MenuContent({
  isNested,
  label,
  children,
  icon,
  valueLabel,
  description,
  selectable,
  selected,
  disabled,
}: MenuContentProps) {
  return (
    <div
      className={classNames(
        "flex",
        "border-box",
        "gap-m",
        "flex-row",
        "grow-0",
        "items-center",
        "overflow-hidden",
        "px-l",
        "py-m",
        "pointer-events-none",
        "break-words",
        "text-start",
        "w-full"
      )}
    >
      {selectable && !selected ? <NotSelected /> : null}
      {selectable && selected ? (
        <TickOutline
          className={classNames("shrink-0", "fill-default", "self-start")}
        />
      ) : null}
      {!label && (
        <div
          className={classNames(
            "overflow-hidden",
            "grow-0",
            "break-words",
            "w-full"
          )}
        >
          {children}
        </div>
      )}
      {label ? (
        <MenuContentPrimitive
          icon={icon}
          label={label}
          description={description}
          valueLabel={valueLabel}
          disabled={disabled}
        />
      ) : null}
      {isNested ? (
        <svg
          className={classNames(
            "rtl-rotate-y-180",
            "size-xl",
            "self-center",
            "shrink-0"
          )}
        >
          <ChevronRight className={classNames("fill-current")} />
        </svg>
      ) : null}
    </div>
  );
}

MenuContent.displayName = "Menu.Content";

export function MenuContentPrimitive({
  label,
  icon,
  valueLabel,
  description,
  disabled,
}: MenuContentPrimitiveProps) {
  return (
    <div
      className={classNames(
        "overflow-hidden",
        "flex",
        "gap-m",
        "flex-row",
        "items-center",
        "w-full"
      )}
    >
      {icon !== undefined && (
        <span data-part="icon" className={menuStyle.menu_icon}>
          {icon}
        </span>
      )}
      <div
        className={classNames(
          "overflow-hidden",
          "flex",
          "border-box",
          "flex-col",
          "items-start",
          "gap-xs",
          "w-full"
        )}
      >
        <span data-part="label" className={menuStyle.menu_content_label}>
          {/* Add space after label to split label and description texts for search algorithm */}
          {label}{" "}
        </span>
        {description ? (
          <span
            data-part="description"
            className={menuStyle.menu_content_description(disabled)}
          >
            {description}
          </span>
        ) : null}
      </div>
      <div className={classNames("font-label-xs", "self-start", "shrink-0")}>
        {valueLabel}
      </div>
    </div>
  );
}

MenuContentPrimitive.displayName = "Menu.ContentPrimitive";
