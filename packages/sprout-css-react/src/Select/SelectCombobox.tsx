import {
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  type MouseEvent,
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";

import sprout from "@qlik/sprout-css-modules";
import DropdownArrow from "@qlik/sprout-icons/react/DropdownArrow";
import ErrorOutlineIcon from "@qlik/sprout-icons/react/ErrorOutline";

import type { HTMLButtonProps } from "../htmlTypes";
import type { SelectOptionProps } from "./SelectOption";
import { getSelectedOption } from "./getSelectedOption";

import style from "./Select.module.css";

export type ComboboxProps = Omit<
  HTMLButtonProps,
  "type" | "children" | "size" | "label"
> & {
  iconElement?: SVGSVGElement;
  hasError?: boolean;
  readOnly?: boolean;
  isOpen?: boolean;
  size?: "default" | "small";
  "aria-controls": string;
  placeholder?: string;
  value?: string;
  label?: string;
  defaultValue?: string;
  renderValue?: (value: string, selectedProps?: SelectOptionProps) => ReactNode;
  children: ReactNode;
};

export const Combobox = forwardRef<HTMLButtonElement, ComboboxProps>(
  ComboboxBase,
);

function ComboboxBase(
  {
    size,
    hasError,
    readOnly,
    isOpen,
    "aria-controls": ariaControls,
    // label,
    // iconElement,
    placeholder,
    disabled,
    value,
    onClick,
    renderValue,
    children,
    ...props
  }: ComboboxProps,
  ref?: Ref<HTMLButtonElement>,
) {
  const [selectedProps, setSelectedProps] = useState<SelectOptionProps>({
    children: "",
  });
  useEffect(() => {
    const selected = getSelectedOption(children, value);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (selected) {
      setSelectedProps(selected as SelectOptionProps);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  return (
    <button
      role="combobox"
      type="button"
      {...props}
      aria-readonly={readOnly ? "true" : "false"}
      disabled={disabled}
      aria-controls={ariaControls}
      aria-expanded={isOpen ? "true" : "false"}
      ref={ref}
      className={sprout.classNames(
        "flex-noreset",
        "border-box",
        "w-full",
        "m-0",
        "text-start",
        "gap-m",
        "justify-start",
        "border-moderate",
        "radius-pill",
        "outline-focus-visible-centered",
        style.input,
        {
          [style.small]: size === "small",
          "cursor-pointer": !disabled,
          "cursor-not-allowed": !!disabled,
          border_error: !!hasError,
          "bg-interactive": !readOnly && !isOpen,
          "bg-disabled": !!readOnly,
          "bg-pressed": !!isOpen,
        },
      )}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        if (!disabled && !readOnly && onClick) {
          onClick(e);
        }
        if (readOnly) {
          const label = e.currentTarget.querySelector(
            `[data-testid="selected-value"]`,
          ) as HTMLElement | undefined;
          if (label) {
            const range = document.createRange();
            const selection = window.getSelection();
            if (selection) {
              selection.removeAllRanges();
              range.selectNodeContents(label);
              selection.addRange(range);
            }
          }
        }
      }}
    >
      {!!value && !!renderValue && (
        <span
          data-testid="selected-value"
          className={sprout.classNames(
            "flex-1",
            "border-box",
            "truncate",
            "pr-m",
            "w-full",
            "text-default",
            "font-label-s",
            "pointer-events-none",
          )}
        >
          {renderValue(value, selectedProps)}
        </span>
      )}
      {!!value && !renderValue && (
        <div
          data-testid="selected-value"
          className={sprout.classNames(
            "overflow-hidden",
            "w-full",
            "truncate",
            "text-default",
            "font-label-s",
          )}
        >
          {selectedProps.children}
        </div>
      )}
      {!value && (
        <span
          className={sprout.classNames(
            "flex-noreset",
            "pr-m",
            "text-weak",
            "font-label-s",
            "w-full",
          )}
        >
          {placeholder}
        </span>
      )}
      {!!hasError && (
        <ErrorOutlineIcon
          data-icon="error"
          width={undefined}
          height={undefined}
          className={sprout.classNames(
            "shrink-0",
            "text-danger",
            "self-center",
            {
              "size-xl": size !== "small",
              "size-l": size === "small",
            },
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
    </button>
  );
}
ComboboxBase.displayName = "Combobox";
