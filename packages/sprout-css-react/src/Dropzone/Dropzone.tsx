/* eslint-disable @typescript-eslint/no-redeclare */
import {
  type CSSProperties,
  type DragEvent,
  type ReactNode,
  type Ref,
  forwardRef,
} from "react";

import { useControl } from "@qlik/sprout-css-hooks";

import { Button, type ButtonProps } from "../Button";
import { classNames } from "../classNames";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./Dropzone.module.css";

type Status = "dragging" | "hover";

export type DropzoneProps = {
  disabled?: boolean;
  status?: Status;
  statusDefault?: Status;
  onStatusChange?: (status: Status) => void;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  button?: Partial<ButtonProps>;
  secondaryButton?: Partial<ButtonProps>;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  width?: CSSProperties["width"];
} & HTMLDivProps;

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(DropzoneBase);

function DropzoneBase(
  {
    icon,
    title,
    disabled,
    status,
    statusDefault,
    children,
    onStatusChange,
    description,
    button,
    secondaryButton,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
    ...props
  }: DropzoneProps,
  ref?: Ref<HTMLDivElement>,
) {
  const controlled = useControl<Status>(
    {
      status,
      statusDefault,
      onStatusChange,
    },
    {
      onChangeKey: "onStatusChange",
      valueKey: "status",
      defaultValueKey: "statusDefault",
      selector: (e) => e,
    },
  );
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const dataState = controlled.value || (disabled && "disabled") || "enabled";

  return (
    <div
      {...props}
      ref={ref}
      tabIndex={disabled ? -1 : 0}
      data-state={dataState}
      aria-disabled={disabled ? "true" : "false"}
      className={classNames(
        "flex-noreset",
        "border-box",
        "flex-col",
        "items-center",
        "radius-subtle",
        "w-full",
        "gap-m",
        {
          [styles.container]: true,
        },
      )}
      onDragOver={(e) => {
        controlled.onChange("dragging");
        onDragOver?.(e);
      }}
      onDragEnter={(e) => {
        controlled.onChange("dragging");
        onDragEnter?.(e);
      }}
      onDragLeave={(e) => {
        controlled.onChange();
        onDragLeave?.(e);
      }}
      onDrop={(e) => {
        controlled.onChange();
        onDrop?.(e);
      }}
    >
      {children}
      <div
        className={classNames(
          "flex-noreset",
          "flex-col",
          "gap-xl",
          "w-full",
          "items-center",
          "justify-center",
        )}
      >
        {icon ? (
          <div
            className={classNames("size-xxl", "icon-size-xxl", {
              "text-default": !disabled,
              "text-disabled": !!disabled,
            })}
          >
            {icon}
          </div>
        ) : null}
        {title || description ? (
          <div
            className={classNames(
              "flex-noreset",
              "flex-col",
              "items-center",
              "gap-s",
            )}
          >
            {title ? (
              <span
                className={classNames("font-label-s-emphasized", {
                  "text-default": !disabled,
                  "text-disabled": !!disabled,
                })}
              >
                {title}
              </span>
            ) : null}
            {description ? (
              <span
                className={classNames("font-label-xs", {
                  "text-weak": !disabled,
                  "text-disabled": !!disabled,
                })}
              >
                {description}
              </span>
            ) : null}
          </div>
        ) : null}
        {button || secondaryButton ? (
          <div className={classNames("flex-noreset", "flex-row", "gap-m")}>
            {secondaryButton ? (
              <Button disabled={disabled} {...secondaryButton} />
            ) : null}
            {button ? <Button disabled={disabled} {...button} /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

DropzoneBase.displayName = "Dropzone";
