import {
  type JSX,
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import sprout from "@qlik/sprout-css-modules";
import { useControl } from "@qlik/sprout-hooks";
import { ErrorIcon } from "@qlik/sprout-icons/react";

import { InputButton } from "../InputButton";
import { Tooltip } from "../Tooltip";
import { useI18n } from "../hooks/useI18n";
import type { HTMLInputProps } from "../htmlTypes";
import { DropdownArrow } from "../icons";
import type { SelectOptionProps } from "./SelectOption";
import { getSelectedOptions } from "./getSelectedOption";

import multiStyles from "./MultiSelect.module.css";

type ComboboxOptionChild = {
  type: { displayName: string };
  props: SelectOptionProps;
};
export type ComboboxOptionsChildren = Array<ComboboxOptionChild>;

export type ComboboxPropsEditable = Omit<HTMLInputProps, "children"> & {
  renderValues: (
    value: Array<string>,
    selectedProps: Record<string, SelectOptionProps>,
    filterInput: ReactNode,
  ) => JSX.Element;
  children: ReactNode;
  values?: Array<string>;
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  onClear?: () => void;
  labelClear?: string;
  "data-testid"?: string;
};

export const ComboboxEditable = forwardRef<
  HTMLDivElement,
  ComboboxPropsEditable
>(ComboboxEditableBase);

function ComboboxEditableBase(
  props: ComboboxPropsEditable,
  ref?: Ref<HTMLDivElement>,
) {
  const {
    id,
    type,
    values,
    renderValues,
    children,
    disabled,
    readOnly,
    hasError,
    value,
    onChange,
    defaultValue,
    onClear,
    labelClear,
    "data-testid": dataTestId,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    ...rest
  } = props;
  const t = useI18n();
  const labelClearDefault = t("select.comboboxeditable.clear");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const controlled = useControl<string>(
    {
      value,
      onChange,
      defaultValue,
    },
    {
      onChangeKey: "onChange",
      valueKey: "value",
      defaultValueKey: "defaultValue",
      selector: (e) => e.target.value,
    },
  );
  const [selectedProps, setSelectedProps] = useState<
    Record<string, SelectOptionProps>
  >({});
  useEffect(() => {
    const selected = getSelectedOptions(children, values);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedProps(selected);
  }, [children, values]);
  const filterInput =
    (!readOnly && values) || !values ? (
      <input
        {...rest}
        aria-label={ariaLabel}
        id={id}
        value={controlled.value}
        onChange={controlled.onChange}
        type={type || "text"}
        disabled={disabled || readOnly}
        readOnly={readOnly}
        className={sprout.classNames(
          "relative",
          "flex-noreset",
          "flex-1",
          "border-none",
          "bg-transparent",
          "text-default",
          "font-label-s",
          "py-s",
          "px-xs",
          "outline-none",
          multiStyles.search_input,
          {
            "cursor-text": !disabled,
            "cursor-not-allowed": !!disabled,
          },
        )}
        ref={inputRef}
      />
    ) : null;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={sprout.classNames(
        "border-box",
        "box-shadow-transparent",
        "flex-noreset",
        "flex-row",
        "items-center",
        "justify-stretch",
        "w-full",
        "relative",
        "border-moderate",
        "radius-pill",
        "bg-default",
        "overflow-hidden",
        multiStyles.input,
        {
          [multiStyles.input_error]: !!hasError,
          [multiStyles.input_readonly]: !!readOnly,
          [multiStyles.input_disabled]: !!disabled,
        },
      )}
      data-testid={dataTestId}
      ref={ref}
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <button
        type="button"
        className={sprout.classNames(
          "absolute",
          "bg-transparent",
          "outline-none",
          "border-none",
          "w-full",
          "h-full",
          "p-0",
          "m-0",
          "left-0",
          "top-0",
          {
            "cursor-pointer": !disabled,
            "cursor-not-allowed": !!disabled,
          },
        )}
        onClick={() => {
          if (disabled || readOnly) {
            return;
          }

          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
      />
      {renderValues(values || [], selectedProps, filterInput)}
      {!!onClear && !readOnly && !disabled && (
        <Tooltip title={labelClear || labelClearDefault}>
          <InputButton
            data-clear="true"
            id={`${id}-clear`}
            onClick={() => {
              controlled.onChange({
                target: {
                  value: "",
                },
              });
              onClear();
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
            aria-label={labelClear || labelClearDefault}
            size="s"
          />
        </Tooltip>
      )}
      {!!hasError && (
        <ErrorIcon
          width={undefined}
          height={undefined}
          className={sprout.classNames(
            "self-center",
            "size-xl",
            "shrink-0",
            "mr-m",
            "text-danger",
          )}
        />
      )}
      <DropdownArrow
        className={sprout.classNames(
          "fill-default",
          "shrink-0",
          "self-center",
          {
            "fill-disabled": !!disabled || !!readOnly,
          },
        )}
      />
    </div>
  );
}

ComboboxEditableBase.displayName = "ComboboxEditable";
