import type { ReactNode } from "react";

import sprout from "@qlik/sprout-css-modules";
import TickOutline from "@qlik/sprout-icons/react/TickOutline";

import { classNames } from "../classNames";
import { ChevronRight } from "./MenuIcon";

import style from "./Menu.module.css";

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
      className={sprout.classNames(
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
        "w-full",
      )}
    >
      {selectable && !selected ? <NotSelected /> : null}
      {selectable && selected ? (
        <TickOutline
          className={sprout.classNames(
            "shrink-0",
            "fill-default",
            "self-start",
          )}
        />
      ) : null}
      {!label && (
        <div
          className={sprout.classNames(
            "overflow-hidden",
            "grow-0",
            "break-words",
            "w-full",
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
            "shrink-0",
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
      className={sprout.classNames(
        "overflow-hidden",
        "flex",
        "gap-m",
        "flex-row",
        "items-center",
        "w-full",
      )}
    >
      {icon !== undefined && (
        <span data-part="icon" className={style.menu_icon}>
          {icon}
        </span>
      )}
      <div
        className={sprout.classNames(
          "overflow-hidden",
          "flex",
          "border-box",
          "flex-col",
          "items-start",
          "gap-xs",
          "w-full",
        )}
      >
        <span
          data-part="label"
          className={sprout.classNames(
            "font-label-s",
            "text-start",
            "w-full",
            "break-words",
            style.menu_content_label,
          )}
        >
          {/* Add space after label to split label and description texts for search algorithm */}
          {label}{" "}
        </span>
        {description ? (
          <span
            data-part="description"
            className={sprout.classNames(
              "font-label-xs",
              "text-start",
              "break-words",
              "w-full",
              style.menu_content_description,
              {
                "text-weak": !disabled,
                "text-disabled": !!disabled,
              },
            )}
          >
            {description}
          </span>
        ) : null}
      </div>
      <div
        className={sprout.classNames("font-label-xs", "self-start", "shrink-0")}
      >
        {valueLabel}
      </div>
    </div>
  );
}

MenuContentPrimitive.displayName = "Menu.ContentPrimitive";
