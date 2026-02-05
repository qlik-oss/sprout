import { type ReactNode, type Ref, forwardRef } from "react";

import { tokens } from "@qlik/design-tokens";
import sprout from "@qlik/sprout-css-modules";

import type { HTMLDivProps } from "../htmlTypes";
import { GotoIcon } from "../icons";

import style from "./SideNavigation.module.css";

export type SideNavItemContentProps = {
  variant?: "compact";
  icon?: ReactNode;
  iconSize?: "large"; // or default
  label?: ReactNode;
  indentation?: number;
  isExternal?: boolean;
} & HTMLDivProps;

export const SideNavItemContent = forwardRef<
  HTMLDivElement,
  SideNavItemContentProps
>(SideNavItemContentBase);

function SideNavItemContentBase(
  {
    variant,
    icon,
    label,
    indentation,
    iconSize,
    isExternal,
    ...props
  }: SideNavItemContentProps,
  ref?: Ref<HTMLDivElement>,
) {
  const safeIconSize = variant === "compact" ? iconSize : undefined;
  const commonContent = (
    <>
      {!!icon && (
        <span
          className={sprout.classNames("text-default", {
            "size-xxl": safeIconSize === "large",
            "size-xl": safeIconSize !== "large",
          })}
        >
          {icon}
        </span>
      )}
      {!!label && (
        <span
          className={sprout.classNames(
            "flex",
            "grow-1",
            "font-label-s",
            "text-default",
            {
              "text-center": variant === "compact",
            },
          )}
        >
          {label}
        </span>
      )}
    </>
  );

  if (variant !== "compact") {
    return (
      <span
        ref={ref}
        className={sprout.classNames(
          "w-full",
          "flex",
          "border-box",
          "flex-row",
          "gap-l",
          "py-density-l",
          "pr-l",
          "text-default",
        )}
        style={{
          paddingInlineStart: indentation
            ? `calc(${tokens.common_sizing_xl} + ${indentation || 0} * ${tokens.common_sizing_xxl})`
            : tokens.common_sizing_xl,
        }}
        {...props}
      >
        {commonContent}
        {!!isExternal && (
          <span className={sprout.classNames("text-default", "size-xl")}>
            <GotoIcon width={undefined} height={undefined} />
          </span>
        )}
      </span>
    );
  }
  return (
    <span
      ref={ref}
      className={sprout.classNames(
        "w-full",
        "flex",
        "flex-col",
        "py-density-l",
        "radius-subtle",
        "gap-density-l",
        "relative",
        style.item_compact,
      )}
      {...props}
    >
      <span
        className={sprout.classNames(
          "flex",
          "flex-col",
          "items-center",
          "px-m",
          "gap-m",
        )}
      >
        {commonContent}
      </span>
      {!!isExternal && (
        <span
          className={sprout.classNames(
            "absolute",
            "flex",
            "shrink-0",
            "text-default",
            "size-m",
          )}
          style={{
            insetBlockStart: "8px",
            insetInlineEnd: "8px",
          }}
        >
          <GotoIcon width={undefined} height={undefined} />
        </span>
      )}
    </span>
  );
}

SideNavItemContentBase.displayName = "SideNav.Item";
