// eslint-disable-next-line @typescript-eslint/no-redeclare
import { type FocusEvent, type Ref, forwardRef } from "react";

import sprout from "@qlik/sprout-css-modules";
import ErrorIcon from "@qlik/sprout-icons/react/Error";

import type { HTMLTextareaProps } from "../htmlTypes";

import styles from "./Textarea.module.css";

export type TextareaNativeProps = HTMLTextareaProps & {
  resizable?: boolean | "horizontal" | "vertical";
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
};

export const TextareaNative = forwardRef<
  HTMLTextAreaElement,
  TextareaNativeProps
>(TextareaNativeBase);

function TextareaNativeBase(
  props: TextareaNativeProps,
  ref?: Ref<HTMLTextAreaElement>,
) {
  const {
    id,
    resizable = false,
    readOnly = false,
    disabled = false,
    onBlur,
    hasError,
    value,
    onChange,
    defaultValue,
    ...rest
  } = props;

  const handleBlur = (
    event: FocusEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div
      data-resize={resizable.toString()}
      className={sprout.classNames(
        "flex",
        "border-box",
        "w-full",
        "box-shadow-transparent",
        "radius-subtle",
        "relative",
        "overflow-hidden",
        styles.wrapper,
        {
          [styles.wrapper_error]: !!hasError,
          [styles.wrapper_readonly]: readOnly,
          [styles.wrapper_disabled]: disabled,
          resize_none: !resizable,
          resize: resizable === true,
          resize_x: resizable === "horizontal",
          resize_y: resizable === "vertical",
        },
      )}
    >
      <textarea
        {...rest}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        id={id}
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        onBlur={handleBlur}
        aria-invalid={hasError ? "true" : undefined}
        className={sprout.classNames(
          "block",
          "border-box",
          "w-full",
          "border-none",
          "bg-transparent",
          "font-body-s",
          "text-default",
          "px-m",
          "py-s",
          "w-full",
          "h-full",
          "resize_none",
          "m-0",
          "outline-none",
          styles.textarea,
          {
            [styles.textarea_error]: !!hasError,
          },
        )}
      />

      {!!hasError && (
        <ErrorIcon
          width={undefined}
          height={undefined}
          data-icon="error"
          data-testid="textarea-error-icon"
          className={sprout.classNames(
            "absolute",
            "size-xl",
            "bg-default",
            "radius-pill",
            "text-danger",
            "right-m",
            "top-m",
          )}
        />
      )}
    </div>
  );
}

TextareaNativeBase.displayName = "TextareaNative";
