import {
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useId } from "@qlik/sprout-css-hooks";
import CrossOutline from "@qlik/sprout-icons/react/CrossOutline";

import type { AlertInlineSeverity } from "../AlertInline";
import { Button, type ButtonProps, IconButton } from "../Button";
import { Dialog } from "../Dialog";
import { SEVERITY_ICONS } from "../Icons/SeverityIcon";
import { mergeRefs } from "../Utils/mergeRef";
import { classNames } from "../classNames";
import { useI18n } from "../hooks/useI18n";
import type { HTMLDivProps } from "../htmlTypes";

import style from "./Toast.module.css";

export type ToastProps = {
  title?: string;
  action?: ButtonProps;
  severity?: AlertInlineSeverity;
  message: ReactNode;
  "data-testid"?: string;
  onClose?: (e?: KeyboardEvent) => void;
} & HTMLDivProps;

const TOAST_CLASS: Record<AlertInlineSeverity, string> = {
  info: style.toast_info,
  warning: style.toast_warning,
  error: style.toast_error,
  success: style.toast_success,
};
export const Toast = forwardRef<HTMLDivElement, ToastProps>(ToastBase);

function ToastBase(
  {
    title,
    message,
    action,
    severity,
    onClose,
    "data-testid": dataTestId,
    ...props
  }: ToastProps,
  ref?: Ref<HTMLDivElement>,
) {
  const [show, setShow] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [mount, setMount] = useState(true);
  const titleId = useId();
  const descriptionId = useId();
  const t = useI18n();
  const dismissLabel = t("toast.dismiss");
  const onCloseToast = useMemo(() => {
    return (e?: KeyboardEvent) => {
      setShow(false);
      setTimeout(() => {
        onClose?.(e);
        setMount(false);
      }, 400);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mergeRef = mergeRefs([ref, dialogRef]);

  useEffect(() => {
    const clear = setTimeout(() => {
      setShow(true);
    }, 0);
    const closeListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseToast(e);
      }
    };
    document.addEventListener("keydown", closeListener);
    return () => {
      document.removeEventListener("keydown", closeListener);
      clearTimeout(clear);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const role: HTMLDivProps = {
    role: "alert",
    "aria-labelledby": descriptionId,
  };

  if (title) {
    role["aria-labelledby"] = titleId;
    role["aria-describedby"] = descriptionId;
  }

  if (!mount) {
    return null;
  }

  const actionBtn = action && (
    <div className={classNames("self-start")}>
      <Button
        variant="quiet"
        size="small"
        data-testid={dataTestId ? `${dataTestId}-action` : undefined}
        {...action}
        onClick={(e) => {
          action.onClick?.(e);
          onCloseToast();
        }}
      />
    </div>
  );

  return (
    <Dialog
      ref={mergeRef}
      data-testid={dataTestId}
      visible
      {...role}
      {...props}
      className={classNames(
        "inline-flex",
        "border-box",
        "items-start",
        "border-moderate",
        "radius-subtle",
        "bg-default",
        "text-default",
        "box-shadow-moderate",
        "relative",
        "p-m",
        style.toast,
        {
          [TOAST_CLASS[severity || "info"]]: !!severity,
          [style.show]: show,
          "pl-xl": !severity,
          "pr-xl": !onClose && !action,
        },
      )}
    >
      <div
        className={classNames(
          "flex",
          "w-full",
          "flex-row",
          "gap-s",
          "items-center",
          "relative",
        )}
      >
        {!!severity && (
          <div
            className={classNames(
              "flex",
              "items-center",
              "justify-center",
              "p-s",
              style.severity_icon,
              {
                "self-start": !!title || (!!message && !title),
              },
            )}
          >
            {SEVERITY_ICONS[severity]}
          </div>
        )}
        <div data-type="content" className={classNames("overflow-hidden")}>
          {!!title && (
            <div
              className={classNames(
                "flex",
                "flex-row",
                "gap-s",
                "items-center",
              )}
            >
              <strong
                className={classNames(
                  "w-full",
                  "font-label-xs-emphasized",
                  "truncate",
                  "my-s",
                )}
                id={titleId}
                data-testid={dataTestId ? `${dataTestId}-title` : undefined}
              >
                {title}
              </strong>
              {actionBtn}
            </div>
          )}
          {typeof message === "string" ? (
            <div
              className={classNames(
                "flex",
                "flex-row",
                "items-center",
                "gap-s",
              )}
            >
              <p
                className={classNames(
                  "font-label-xs",
                  "m-0",
                  "overflow-hidden",
                  style.max_rows,
                  {
                    "mb-s": !!title,
                    "mr-s": !!onClose,
                  },
                )}
                id={descriptionId}
                data-testid={dataTestId ? `${dataTestId}-message` : undefined}
              >
                {message}
              </p>
              {!title && actionBtn}
            </div>
          ) : (
            <div
              className={classNames(
                "font-label-xs",
                "m-0",
                "overflow-y-auto",
                "overflow-x-hidden",
                style.max_height,
                {
                  "mb-s": !!title,
                  "mr-s": !!onClose,
                },
              )}
              id={descriptionId}
              data-testid={dataTestId ? `${dataTestId}-message` : undefined}
            >
              {message}
            </div>
          )}
        </div>

        {typeof message !== "string" && !title && actionBtn}

        {!!onClose && (
          <div className={classNames("shrink-0", "grow-0", "self-start")}>
            <IconButton
              size="small"
              variant="quiet"
              onClick={() => {
                onCloseToast();
              }}
              icon={<CrossOutline height={undefined} />}
              aria-label={dismissLabel}
              data-testid={dataTestId ? `${dataTestId}-close` : undefined}
            />
          </div>
        )}
      </div>
    </Dialog>
  );
}

ToastBase.displayName = "Toast.Content";
