import type { ReactNode } from "react";

import sprout from "@qlik/sprout-css-modules";

import { ProgressBar, type ProgressBarProps } from "../Progress/ProgressBar";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./Message.module.css";

export type MessageProps = HTMLDivProps & {
  title: string;
  message?: ReactNode;
  illustration?: ReactNode;
  actions?: ReactNode;
  progress?: ProgressBarProps;
  "data-testid"?: string;
};

export function Message({
  title,
  message,
  illustration,
  actions,
  progress,
  "data-testid": dataTestId,
  ...props
}: MessageProps) {
  return (
    <div
      data-testid={dataTestId}
      role={progress ? "status" : undefined}
      aria-live={progress ? "polite" : undefined}
      {...props}
      className={styles.container}
    >
      {illustration}

      <div className={styles.content}>
        <h2
          className={styles.title}
          data-testid={
            dataTestId ? `${dataTestId}.message-title` : "message-title"
          }
        >
          {title}
        </h2>
        {message && typeof message === "string" ? (
          <p
            className={styles.message}
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
            className={styles.message}
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
      {actions ? (
        <div
          className={sprout.classNames("flex", "flex-row", "gap-m")}
          data-testid={
            dataTestId ? `${dataTestId}.message-actions` : "message-actions"
          }
        >
          {actions}
        </div>
      ) : null}
    </div>
  );
}
