import { type ReactNode, useId } from "react";

import Close from "@qlik/sprout-icons/react/Close";

import { IconButton } from "../Button";
import { useModalContext } from "../Modal/ModalContext";
import { InfoTooltipPrimitive } from "../_InfoTooltipPrimitive";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";
import { DirectionLeftIcon } from "../icons";

export type DialogHeaderProps = HTMLDivProps & {
  children: ReactNode;
  description?: ReactNode;
  descriptionId?: string;
  icon?: ReactNode;
  infoIconTooltip?: ReactNode;
  labelBack?: string;
  labelClose?: string;
  labelId?: string;
  onClickBack?: () => void;
  onClickClose?: () => void;
  preventClose?: boolean;
};

export function DialogHeader({
  "data-testid": dataTestId = "dialog.header",
  children,
  description,
  descriptionId,
  icon,
  infoIconTooltip,
  labelBack,
  labelClose,
  labelId,
  onClickBack,
  onClickClose,
  preventClose = false,
  ...props
}: DialogHeaderProps) {
  const modalContext = useModalContext();
  const t = useI18n();
  const internalLabelId = useId();
  const internalDescriptionId = useId();

  const labelIdDefault = labelId || modalContext.labelId || internalLabelId;
  const descriptionIdDefault =
    descriptionId || modalContext.descId || internalDescriptionId;
  const labelCloseDefault = t("dialog.header.close");
  const labelBackDefault = t("dialog.header.back");

  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "justify-between",
        "p-xl",
        "pl-xxl",
        "shrink-0",
        "items-center",
      )}
      data-testid={dataTestId}
      {...props}
    >
      <div
        className={classNames(
          "flex",
          "flex-col",
          "justify-center",
          "gap-s",
          "overflow-hidden",
        )}
        data-testid={`${dataTestId}.title`}
      >
        <div
          className={classNames(
            "flex",
            "flex-row",
            "items-center",
            "gap-m",
            "flex-wrap",
          )}
        >
          <span
            className={classNames("flex", "flex-row", "items-center", "gap-m")}
          >
            {icon ? (
              <span
                className={classNames(
                  "shrink-0",
                  "pr-m",
                  "flex",
                  "items-center",
                  "justify-center",
                )}
              >
                {icon}
              </span>
            ) : null}

            {onClickBack || labelBack ? (
              <IconButton
                variant="quiet"
                icon={
                  <DirectionLeftIcon
                    className={classNames("rtl-rotate-y-180")}
                  />
                }
                onClick={onClickBack}
                label={labelBack || labelBackDefault}
              />
            ) : null}

            {typeof children === "string" ? (
              <span
                className={classNames(
                  "text-default",
                  "font-label-m-emphasized",
                  "break-words",
                )}
                id={labelIdDefault}
              >
                {children}
              </span>
            ) : (
              children
            )}
          </span>
          {infoIconTooltip ? (
            <InfoTooltipPrimitive
              title={infoIconTooltip}
              aria-labelledby={labelIdDefault}
            />
          ) : null}
        </div>
        {description && typeof description === "string" ? (
          <span
            className={classNames("font-label-s", "text-weak", "break-words")}
            id={descriptionIdDefault}
            data-testid={`${dataTestId}.description`}
          >
            {description}
          </span>
        ) : (
          description
        )}
      </div>
      {!preventClose && (
        <span className={classNames("self-start")}>
          <IconButton
            variant="quiet"
            icon={<Close />}
            onClick={onClickClose}
            label={labelClose || labelCloseDefault}
            data-testid={`${dataTestId}.close`}
          />
        </span>
      )}
    </div>
  );
}
