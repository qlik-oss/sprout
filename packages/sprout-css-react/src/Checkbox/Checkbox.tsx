import {
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import { useId } from "@qlik/sprout-css-hooks";

import { HelperText } from "../HelperText";
import { InfoTooltipPrimitive } from "../_InfoTooltipPrimitive";
import { classNames } from "../classNames";
import { useValueControl } from "../hooks/useValueControl";
import type { HTMLInputProps } from "../htmlTypes";
import { CheckboxIndeterminate, CheckboxTick } from "./CheckboxTick";

import styles from "./Checkbox.module.css";

type CheckboxNativeProps = Omit<
  HTMLInputProps,
  "value" | "type" | "prefix" | "ref"
>;

export type CheckboxProps = CheckboxNativeProps & {
  indeterminate?: boolean;
  label?: string;
  helpText?: string;
  infoIconTooltip?: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  CheckboxBase,
);

function CheckboxBase(
  props: CheckboxProps,
  ref?: Ref<HTMLInputElement | null>,
) {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  // Forward ref to parent ref
  useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement);

  const {
    id,
    label,
    helpText,
    disabled = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    checked,
    indeterminate,
    infoIconTooltip,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange,
    ...rest
  } = props;

  const safeCheckboxId = useId(id);
  const labelId = `${safeCheckboxId}-label`;
  const helpTextId = `${safeCheckboxId}-helptext`;

  const controlled = useValueControl<CheckboxNativeProps>(props, {
    onChangeKey: "onChange",
    valueKey: "checked",
    defaultValueKey: "defaultChecked",
    selector: (e) => e.target.checked,
  });

  useEffect(() => {
    // indeterminate is a controlled value only
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = !!indeterminate;
    }
  }, [checkboxRef, indeterminate, controlled.checked]);
  const ariaProps: {
    "aria-checked"?: "true" | "false" | "mixed";
  } = {};
  if (indeterminate) {
    ariaProps["aria-checked"] = "mixed";
  } else if (typeof controlled.checked !== "undefined") {
    ariaProps["aria-checked"] = controlled.checked ? "true" : "false";
  }
  return (
    <span
      className={classNames(
        "inline-flex",
        "justify-start",
        "gap-m",
        "items-start",
        "relative",
        "w-full",
        styles.checkbox,
      )}
      data-disabled={disabled}
    >
      <input
        type="checkbox"
        className={classNames(
          "m-0",
          "p-0",
          "w-full",
          "h-full",
          "absolute",
          "left-0",
          "top-0",
          "opacity-0",
          "outline-none",
          {
            "cursor-pointer": !disabled,
          },
        )}
        disabled={disabled}
        ref={checkboxRef}
        id={safeCheckboxId}
        {...ariaProps}
        {...rest}
        {...controlled}
      />
      <span
        className={classNames(
          "inline-flex",
          "border-box",
          "shrink-0",
          "items-center",
          "justify-center",
          "size-xl",
          "radius-subtle",
          styles.box,
        )}
      >
        {indeterminate ? <CheckboxIndeterminate /> : null}
        {!indeterminate ? <CheckboxTick /> : null}
      </span>
      {(typeof label === "string" || typeof helpText === "string") && (
        <div className={classNames("flex", "flex-col", "gap-s")}>
          {typeof label === "string" && (
            <div className={classNames("flex-noreset", "gap-m", "items-start")}>
              <label
                id={labelId}
                htmlFor={safeCheckboxId}
                className={classNames("font-label-s", {
                  "text-default": !disabled,
                  "cursor-pointer": !disabled,
                  "text-disabled": disabled,
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
                      "text-disabled": disabled,
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
          )}
          {typeof helpText === "string" && (
            <HelperText
              id={helpTextId}
              helpText={helpText}
              variant="quiet"
              disabled={disabled}
            />
          )}
        </div>
      )}
    </span>
  );
}

CheckboxBase.displayName = "Checkbox";
