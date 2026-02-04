import { type ReactNode, type Ref, forwardRef } from "react";

import { useId } from "@qlik/sprout-css-hooks";

import { HelperText } from "../HelperText";
import { InfoTooltipPrimitive } from "../_InfoTooltipPrimitive";
import { classNames } from "../classNames";
import type { DataAttributes, HTMLInputProps } from "../htmlTypes";

import styles from "./Radio.module.css";

export type RadioProps = Omit<HTMLInputProps, "type" | "prefix"> &
  DataAttributes & {
    label?: string;
    helpText?: string;
    id?: string;
    infoIconTooltip?: ReactNode;
  };

export const Radio = forwardRef<HTMLInputElement, RadioProps>(RadioBase);

function RadioBase(props: RadioProps, ref?: Ref<HTMLInputElement>) {
  const {
    id,
    label,
    helpText,
    readOnly,
    disabled,
    defaultChecked,
    checked,
    infoIconTooltip,
    ...rest
  } = props;
  const safeRadioId = useId(id);
  const labelId = `${safeRadioId}-label`;
  const helpTextId = `${safeRadioId}-helptext`;

  return (
    <span
      className={classNames(styles.radio, {
        [styles.radio_readOnly]: !!readOnly,
      })}
    >
      <input
        {...rest}
        type="radio"
        className={classNames({
          "cursor-pointer": !disabled && !readOnly,
        })}
        defaultChecked={defaultChecked}
        disabled={disabled || readOnly}
        readOnly={readOnly}
        checked={checked}
        ref={ref}
        id={safeRadioId}
      />
      <span className={styles.box}>
        <svg width="6" height="6" data-tick="checked" viewBox="0 0 6 6">
          <circle r="3" cx="3" cy="3" fill="currentColor" />
        </svg>
      </span>

      {(typeof label === "string" || typeof helpText === "string") && (
        <div className={classNames("flex", "flex-col", "gap-s")}>
          {typeof label === "string" ? (
            <div className={classNames("flex-noreset", "gap-m", "items-start")}>
              <label
                id={labelId}
                htmlFor={safeRadioId}
                className={classNames("font-label-s", {
                  "text-default": !disabled,
                  "cursor-pointer": !disabled,
                  "text-disabled": !!disabled,
                })}
              >
                {label}
              </label>
              {infoIconTooltip ? (
                <span
                  className={classNames(
                    "z-stacked",
                    "flex-noreset",
                    "items-center",
                    "text-default",
                    "p-xs",
                    {
                      "text-disabled": !!disabled,
                    },
                  )}
                >
                  <InfoTooltipPrimitive
                    // referencing the label for accessibility
                    aria-labelledby={labelId}
                    title={infoIconTooltip}
                    disabled={disabled}
                  />
                </span>
              ) : null}
            </div>
          ) : null}
          {typeof helpText === "string" ? (
            <HelperText
              id={helpTextId}
              helpText={helpText}
              variant="quiet"
              disabled={disabled}
            />
          ) : null}
        </div>
      )}
    </span>
  );
}

RadioBase.displayName = "Radio";
