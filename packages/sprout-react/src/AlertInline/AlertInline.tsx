import { useEffect, useRef, useState } from "react";

import CrossOutline from "@qlik/sprout-icons/react/CrossOutline";

import { IconButton } from "../Button";
import { SEVERITY_ICONS } from "../Icons/SeverityIcon";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { AlertInlineProps } from "./AlertInline.types";

export function AlertInline({
  layout = "vertical",
  severity,
  title,
  message,
  children,
  actionBar,
  onDismiss,
  labelDismiss,
  ...props
}: AlertInlineProps) {
  const content = message || children;
  const contentRef = useRef<HTMLDivElement>(null);
  const [isContentWrapping, setIsContentWrapping] = useState(false);

  const t = useI18n();
  const labelDismissDefault = t("alertinline.dismiss");

  // Check if content is wrapping
  // Note: it's not reacting on window resize
  useEffect(() => {
    const element = contentRef.current;

    if (element) {
      const style = window.getComputedStyle(element);
      const lineHeight = parseFloat(style.lineHeight);
      const height = element.offsetHeight;
      const isWrapping = height > lineHeight;
      setIsContentWrapping(isWrapping);
    }
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      {...props}
      className={classNames(
        "w-full",
        "flex",
        "border-box",
        "flex-row",
        "items-start",
        "shrink-0",
        "p-m",
        "bg-default",
        "border-default",
        "radius-subtle",

        {
          border_info: !severity || severity === "info",
          border_warning: severity === "warning",
          border_error: severity === "error",
          border_success: severity === "success",
        },
      )}
    >
      <div
        className={classNames(
          "p-m",
          "pr-l",
          "icon-size-xl",
          "flex",
          "justify-center",
          "items-center",
          {
            "self-center": !isContentWrapping && !title,
          },
        )}
      >
        {SEVERITY_ICONS[severity || "info"]}
      </div>
      <div
        className={classNames(
          "py-m",
          "pr-m",
          "flex",
          "flex-1",
          "justify-between",
          "overflow-hidden",
          {
            "flex-col": layout === "vertical",
            "flex-row": layout === "horizontal",
            "gap-xl": layout === "horizontal",
            "gap-m": layout === "vertical",
          },
        )}
      >
        <div
          className={classNames("flex", "gap-s", {
            "justify-center": !isContentWrapping,
          })}
        >
          {title ? (
            <strong
              className={classNames(
                "font-label-s-emphasized",
                "text-default",
                "text-wrap",
                "break-words",
              )}
            >
              {title}
            </strong>
          ) : null}
          {content ? (
            <div
              className={classNames(
                "font-label-s",
                "text-default",
                "text-wrap",
                "break-words",
                "flex",
                {
                  "mb-s": layout === "vertical" && !!actionBar,
                },
              )}
              ref={contentRef}
            >
              {content}
            </div>
          ) : null}
        </div>
        {actionBar ? (
          <div className={classNames("shrink-0")}>
            <div
              className={classNames(
                "flex",
                "gap-xl",
                "flex-row",
                "items-center",
              )}
            >
              {actionBar}
            </div>
          </div>
        ) : null}
      </div>
      {onDismiss ? (
        <div
          className={classNames({
            "pt-m": layout === "horizontal" && !!actionBar,
          })}
        >
          <IconButton
            variant="quiet"
            onClick={() => {
              onDismiss();
            }}
            icon={<CrossOutline />}
            label={labelDismiss || labelDismissDefault}
          />
        </div>
      ) : null}
    </div>
  );
}
