import type { ChangeEvent, Ref } from "react";
import { forwardRef, useRef } from "react";

import { useId } from "@qlik/sprout-hooks";

import type { FieldProps } from "../Field";
import { HelperText } from "../HelperText";
import { TextOverflow } from "../TextOverflow/TextOverflow";
import { mergeRefs } from "../Utils/mergeRef";
import { InfoTooltipPrimitive } from "../_InfoTooltipPrimitive";
import { classNames } from "../classNames";
import type { HTMLInputProps } from "../htmlTypes";
import { Tick } from "./Tick";

import styles from "./Switch.module.css";

type BaseSwitchProps = {
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & Omit<HTMLInputProps, "value" | "type" | "prefix" | "ref"> &
  Partial<Pick<FieldProps, "helpText" | "infoIconTooltip">>;

export type SwitchProps = BaseSwitchProps &
  (
    | { "aria-label": string }
    | { "aria-labelledby": string }
    | {
        /** accessible label is required: label | aria-label | aria-labelledby */
        label: string;
      }
  );

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(SwitchBase);

function SwitchBase(props: SwitchProps, ref?: Ref<HTMLInputElement>) {
  const {
    id,
    label,
    /**
     * Read only is not a standard attribute for checkboxes, but used to
     * indicate that the switch should not be interactive.
     *
     * https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only
     */
    readOnly,
    disabled,
    required,
    children,
    onKeyDown,
    helpText,
    infoIconTooltip,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  let switchId = useId();

  if (id) {
    switchId = id;
  }

  return (
    <span className={classNames(styles.switch)} data-readonly={readOnly}>
      <label
        htmlFor={switchId}
        style={readOnly ? { pointerEvents: "none" } : {}}
      >
        <input
          {...rest}
          className={classNames("sr-only")}
          role="switch"
          type="checkbox"
          id={switchId}
          disabled={disabled || readOnly}
          required={required}
          onKeyDown={(e) => {
            onKeyDown?.(e);
            // accessibility optional Enter
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              inputRef.current?.click();
            }
          }}
          ref={mergeRefs([inputRef, ref])}
        />
        <span className={styles.slider_track} role="presentation">
          <span className={styles.slider_foreground}>
            <span className={styles.checkbox_frame}>
              <Tick />
            </span>
          </span>
          <span className={styles.knob} role="presentation" />
        </span>
        <span data-focus />
        {label || children ? (
          <span
            className={classNames(
              "flex",
              "flex-col",
              "gap-s",
              "overflow-hidden",
              "text-default",
              styles.label_wrapper,
              {
                "text-disabled": !!disabled,
              },
            )}
          >
            <span
              className={classNames(
                "flex",
                "flex-row",
                "gap-s",
                "items-center",
              )}
            >
              <TextOverflow
                variant="wrap"
                className={classNames("font-label-s")}
              >
                {label || children}
              </TextOverflow>
              {infoIconTooltip ? (
                <InfoTooltipPrimitive
                  title={infoIconTooltip}
                  disabled={disabled}
                  className={classNames({
                    "cursor-not-allowed": !!disabled,
                  })}
                />
              ) : null}
            </span>

            {typeof helpText === "string" && (
              <HelperText helpText={helpText} variant="quiet" />
            )}
          </span>
        ) : null}
      </label>
    </span>
  );
}

SwitchBase.displayName = "Switch";
