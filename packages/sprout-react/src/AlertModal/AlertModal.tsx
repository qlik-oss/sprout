import { type ForwardedRef, type ReactNode, forwardRef, useState } from "react";

import { Button } from "../Button";
import { SEVERITY_ICONS } from "../Icons/SeverityIcon";
import { Modal, type ModalCompositionProps } from "../Modal";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";

import dialogStyles from "../Dialog/Dialog.module.css";

export type AlertModalProps = Omit<
  ModalCompositionProps["Root"],
  "preventEscaping" | "preventInteractiveBackdrop" | "variant" | "width"
> & {
  /**
   * @description
   * The 'positive' and 'destructive' variants are deprecated and will be
   * removed in a future release.
   * Use 'information' instead of 'positive' and 'error' instead of 'destructive'.
   */
  variant?: "positive" | "destructive" | "error" | "warning" | "information";
  title: string;
  children?: ReactNode;
  details?: ReactNode;
  /**
   * @deprecated No longer used, will be removed in a future release.
   * If provided, it will render alongside `footerRight`.
   */
  footerLeft?: ReactNode;
  footerRight: ReactNode;
};

type NormalizedVariant = Exclude<
  NonNullable<AlertModalProps["variant"]>,
  "positive" | "destructive"
>;

const normalizeVariant = (
  variant: AlertModalProps["variant"],
): NormalizedVariant => {
  if (variant === "positive") {
    return "information";
  }
  if (variant === "destructive") {
    return "error";
  }
  return variant ?? "information";
};

const ICON_BY_VARIANT: Record<NormalizedVariant, ReactNode> = {
  error: SEVERITY_ICONS.error,
  warning: SEVERITY_ICONS.warning,
  information: SEVERITY_ICONS.info,
};

export const AlertModal = forwardRef<HTMLDivElement, AlertModalProps>(
  AlertModalBase,
);

function AlertModalBase(
  {
    title,
    children,
    footerLeft,
    footerRight,
    details,
    "data-testid": dataTestId,
    variant = "information",
    ...props
  }: AlertModalProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const t = useI18n();
  const [displayDetails, setDisplayDetails] = useState(false);

  // "positive" and "destructive" are deprecated variants
  const normalizedVariant = normalizeVariant(variant);
  const icon = ICON_BY_VARIANT[normalizedVariant];

  return (
    <Modal.Root
      ref={ref}
      {...props}
      variant="dialog"
      role="alertdialog"
      preventEscaping
      preventInteractiveBackdrop
      aria-label={title}
      data-testid={dataTestId}
    >
      <div className={classNames("flex-noreset", "flex-row")}>
        {!!icon && (
          <div className={classNames("pt-xxl", "pl-xxl", "icon-size-xxl")}>
            {icon}
          </div>
        )}
        <div
          className={classNames(
            "flex-noreset",
            "flex-col",
            "items-start",
            "overflow-hidden",
          )}
        >
          <div
            data-testid={dataTestId ? `${dataTestId}-title` : undefined}
            className={classNames(
              "font-label-m-emphasized",
              "text-default",
              "pt-xxl",
              "pr-xl",
              "pb-xl",
              "pl-xxl",
            )}
          >
            {title}
          </div>
          <div
            className={classNames(
              "flex-noreset",
              "flex-col",
              "pr-xxl",
              "pb-m",
              "pl-m",
              "gap-m",
              "self-stretch",
            )}
          >
            <div
              className={classNames(
                "pl-xl",
                "gap-m",
                "font-body-s",
                "text-default",
              )}
            >
              {children}
            </div>
            {!!details && (
              <div
                className={classNames(
                  "flex-noreset",
                  "flex-col",
                  "border-box",
                  "items-start",
                  "gap-density-m",
                )}
              >
                <Button
                  variant="quiet"
                  asDropdown
                  label={t("alertmodal.label.details")}
                  onClick={() => {
                    setDisplayDetails(!displayDetails);
                  }}
                />
                {!!displayDetails && (
                  <div
                    className={classNames(
                      "flex-noreset",
                      "flex-col",
                      "border-box",
                      "max-w-full",
                      "overflow-auto",
                      "pl-xl",
                      "gap-xxl",
                      "items-center",
                    )}
                    data-testid={
                      dataTestId ? `${dataTestId}-details` : undefined
                    }
                  >
                    {details}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={classNames("flex-noreset", "justify-end", "items-center", {
          [dialogStyles.dialog_actions]: true,
        })}
      >
        <div
          className={classNames("flex-noreset", "gap-m", "p-xl", {
            [dialogStyles.dialog_actions_container]: true,
            [dialogStyles.dialog_actions_end_section]: true,
          })}
          data-testid={dataTestId ? `${dataTestId}-footer` : undefined}
        >
          {footerLeft}
          {footerRight}
        </div>
      </div>
    </Modal.Root>
  );
}

AlertModal.displayName = "AlertModal";
