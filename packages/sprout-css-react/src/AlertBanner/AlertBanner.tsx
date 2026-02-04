import { type ReactNode, type Ref, forwardRef } from "react";

import { tokens } from "@qlik/design-tokens";
import CrossOutline from "@qlik/sprout-icons/react/CrossOutline";

import { IconButton } from "../Button";
import { SEVERITY_ICONS } from "../Icons/SeverityIcon";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./AlertBanner.module.css";

type AlertBannerOnlyProps = {
  action?: ReactNode;
  content: ReactNode;
  dismissLabel?: string;
  justify?: "center";
  link?: ReactNode;
  onClickDismiss?: () => void;
  variant?: "error" | "warning" | "success" | "info";
};

export type AlertBannerProps = Omit<HTMLDivProps, "content" | "title"> &
  AlertBannerOnlyProps;

export const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
  AlertBannerBase,
);

function AlertBannerBase(
  {
    variant,
    justify,
    content,
    children,
    action,
    link,
    dismissLabel,
    onClickDismiss,
    ...props
  }: AlertBannerProps,
  ref?: Ref<HTMLDivElement>,
) {
  const t = useI18n();
  const dismissLabelDefault = t("alertbanner.dismiss");

  const sharedContentClassnames = classNames(
    "m-0",
    "pr-m",
    "my-m",
    "font-body-s",
    "text-default",
    "overflow-hidden",
    {
      grow: justify !== "center",
      "overflow-y-auto": typeof content !== "string",
      "overflow-x-hidden": typeof content !== "string",
      [styles.content_max_height]: typeof content !== "string",
      [styles.content_max_rows]: typeof content === "string",
    },
  );

  return (
    <div
      role="status"
      aria-live="polite"
      className={classNames("bg-default", "w-full")}
      data-variant={variant || "info"}
      ref={ref}
      {...props}
    >
      <div
        className={classNames(
          "flex-noreset",
          "items-center",
          "border-box",
          "border-b-default",
          {
            "bg-danger-weak": variant === "error",
            border_danger: variant === "error",
            "bg-warning-weak": variant === "warning",
            border_warning: variant === "warning",
            "bg-success-weak": variant === "success",
            border_success: variant === "success",
            "bg-info-weak": variant === "info" || !variant,
            border_info: variant === "info" || !variant,
          },
        )}
        style={{ minBlockSize: tokens.common_sizing_5xl }}
      >
        <div
          className={classNames(
            "flex-noreset",
            "border-box",
            "w-full",
            "items-center",
            "grow",
            "flex-row",
            "justify-start",
            {
              "justify-center": justify === "center",
            },
          )}
        >
          <span
            className={classNames(
              "flex-noreset",
              "shrink-0",
              "items-center",
              "py-l",
              "px-xl",
              "icon-size-xl",
            )}
          >
            {SEVERITY_ICONS[variant || "info"]}
          </span>
          <div className={sharedContentClassnames}>{content}</div>
          {children ? (
            <div className={sharedContentClassnames}>{children}</div>
          ) : null}
          {link ? (
            <div
              className={classNames(
                "flex",
                "items-center",
                "justify-self-end",
                {
                  "pl-0": justify !== "center",
                  "pl-m": justify === "center",
                  "pr-m": !onClickDismiss || !!action,
                },
              )}
            >
              {link}
            </div>
          ) : null}
          {action ? (
            <div
              className={classNames(
                "flex",
                "items-center",
                "justify-self-end",
                "pl-0",
                {
                  "pr-m": !onClickDismiss,
                },
              )}
            >
              {action}
            </div>
          ) : null}
        </div>

        {onClickDismiss ? (
          <span
            className={classNames("px-m", "mr-auto", {
              "pl-0": !action && !link,
            })}
          >
            <IconButton
              variant="quiet"
              onClick={() => {
                onClickDismiss();
              }}
              label={dismissLabel || dismissLabelDefault}
              icon={<CrossOutline />}
            />
          </span>
        ) : null}
      </div>
    </div>
  );
}

AlertBannerBase.displayName = "AlertBanner";
