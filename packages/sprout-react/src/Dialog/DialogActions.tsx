import type { ReactNode } from "react";

import { useContainer } from "@qlik/sprout-hooks";

import { Button } from "../Button";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./Dialog.module.css";

export type DialogActionsProps = HTMLDivProps & {
  left?: ReactNode;
  metaLabel?: string;
  onClickClose?: () => void;
  labelClose?: string;
  preventClose?: boolean;
};

export function DialogActions({
  children,
  labelClose,
  left,
  metaLabel,
  onClickClose,
  preventClose = false,
  ...rest
}: DialogActionsProps) {
  const container = useContainer({ boxSizing: "border-box" });

  const t = useI18n();
  const labelCloseDefault = t("dialog.actions.close");

  return (
    <div
      {...rest}
      // eslint-disable-next-line react-hooks/refs
      ref={container.ref}
      className={classNames("border-box", styles.dialog_actions)}
    >
      <div
        className={classNames(
          "flex",
          "justify-end",
          "flex-row",
          "border-box",
          "items-center",
          "py-xl",
          "px-xxl",
          "w-full",
          "gap-l",
          "flex-wrap",
          styles.dialog_actions_container,
        )}
      >
        {/* Start section */}
        {left || metaLabel ? (
          <div
            className={classNames(
              "flex",
              "flex-row",
              "justify-between",
              "grow-1",
              "flex-wrap",
              "gap-m",
              styles.dialog_actions_start_section,
            )}
          >
            {left ? (
              <div className={classNames("flex", "items-center")}>{left}</div>
            ) : null}

            {metaLabel ? (
              <span
                className={classNames(
                  "flex",
                  "flex-row",
                  "border-box",
                  "font-label-s",
                )}
              >
                {metaLabel}
              </span>
            ) : null}
          </div>
        ) : null}

        {/* End section */}
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "justify-end",
            "gap-m",
            "flex-wrap",
            styles.dialog_actions_end_section,
          )}
        >
          {!preventClose && (
            <Button
              variant="quiet"
              onClick={() => {
                if (onClickClose) {
                  onClickClose();
                }
              }}
              data-testid="modal.buttons.close"
              data-feature="modal.buttons.close"
              label={labelClose || labelCloseDefault}
              // eslint-disable-next-line react-hooks/refs
              justified={container.get<boolean>({
                xxs: true,
                s: false,
              })}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
