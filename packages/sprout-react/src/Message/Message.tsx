import { useState, type ReactNode } from "react";

import sprout from "@qlik/sprout-css-modules";

import { ProgressBar, type ProgressBarProps } from "../Progress/ProgressBar";
import type { HTMLDivProps } from "../htmlTypes";

import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import { Button } from "../Button";

export type MessageProps = HTMLDivProps & {
  title: string;
  message?: ReactNode;
  illustration?: ReactNode;
  actions?: ReactNode;
  progress?: ProgressBarProps;
  "data-testid"?: string;
  layout?: "vertical" | "horizontal";
  details?: ReactNode;
};

/**
 * The Message component renders onto a `div` HTML element. It accepts all `HTMLDivElement` attributes plus the following:
 * @param title - The title to display.
 * @param message - Optional description content.
 * @param illustration - Optional illustration content to display.
 * @param actions - Optional action content (e.g. buttons).
 * @param progress - Optional progress bar configuration.
 * @param layout - Optional layout configuration ("vertical" or "horizontal").
 * @param details - Optional details content to display below the main message content.
 */
export function Message({
  title,
  message,
  illustration,
  actions,
  progress,
  layout = "vertical",
  "data-testid": dataTestId,
  details,
  ...props
}: MessageProps) {
  const isHorizontal = layout === "horizontal";
  const t = useI18n();
  const [displayDetails, setDisplayDetails] = useState(false);

  return (
    <div
      data-testid={dataTestId}
      role={progress ? "status" : undefined}
      aria-live={progress ? "polite" : undefined}
      {...props}
      className={classNames(
        "flex",
        "items-center",
        "justify-center",
        "px-xl",
        "gap-xl",
        "max-w-l",
        {
          "flex-row": isHorizontal,
          "items-start": isHorizontal,
        }
      )}
      aria-orientation={isHorizontal ? "horizontal" : undefined}
    >
      {illustration ? (
        <div
          className={classNames(
            "flex",
            "items-center",
            "justify-center",
            "shrink-0",
            "max-w-full",
            "overflow-hidden"
          )}
          data-testid={
            dataTestId
              ? `${dataTestId}.message-illustration`
              : "message-illustration"
          }
        >
          {illustration}
        </div>
      ) : null}

      <div
        className={classNames(
          "flex",
          "items-center",
          "justify-center",
          "gap-xl",
          "text-default",
          {
            "items-start": isHorizontal,
            "max-w-xs": !isHorizontal,
          }
        )}
        data-testid={
          dataTestId ? `${dataTestId}.message-content` : "message-content"
        }
      >
        <div
          className={classNames(
            "flex",
            "items-center",
            "justify-center",
            "gap-m",
            {
              "items-start": isHorizontal,
            }
          )}
        >
          <h2
            className={classNames("font-label-m-emphasized", "m-0")}
            data-testid={
              dataTestId ? `${dataTestId}.message-title` : "message-title"
            }
          >
            {title}
          </h2>
          {message && typeof message === "string" ? (
            <p
              className={classNames("font-body-s", "m-0", "text-center", {
                "text-left": isHorizontal,
              })}
              data-testid={
                dataTestId
                  ? `${dataTestId}.message-description`
                  : "message-description"
              }
            >
              {message}
            </p>
          ) : null}
          {message && typeof message !== "string" ? (
            <div
              className={classNames("font-body-s", "m-0", "text-center", {
                "text-left": isHorizontal,
              })}
              data-testid={
                dataTestId
                  ? `${dataTestId}.message-description`
                  : "message-description"
              }
            >
              {message}
            </div>
          ) : null}
        </div>

        {progress ? <ProgressBar contained {...progress} /> : null}

        {actions || details ? (
          <div
            className={sprout.classNames("flex", "flex-row", "gap-m")}
            data-testid={
              dataTestId ? `${dataTestId}.message-actions` : "message-actions"
            }
          >
            {details ? (
              <Button
                asDropdown
                label={t("message.label.details")}
                onClick={() => {
                  setDisplayDetails(!displayDetails);
                }}
              />
            ) : null}
            {actions}
          </div>
        ) : null}
        {displayDetails ? details : null}
      </div>
    </div>
  );
}
