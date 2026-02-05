import {
  type ChangeEvent,
  type ChangeEventHandler,
  type ReactNode,
  type Ref,
  forwardRef,
  useRef,
} from "react";

import { tokens } from "@qlik/design-tokens";
import ErrorIcon from "@qlik/sprout-icons/react/Error";

import { InputButton } from "../InputButton";
import { mergeRefs } from "../Utils/mergeRef";
import { classNames } from "../classNames";
import type { PossibleFont } from "../css";
import { useI18n } from "../hooks/useI18n";
import { useValueControl } from "../hooks/useValueControl";
import type { HTMLInputProps } from "../htmlTypes";
import { Affix, type AffixProps } from "./Affix";
import { SearchIcon } from "./SearchIcon";

import styles from "./Input.module.css";

export type ChangeReasons = "clear";

export type InputProps = Omit<HTMLInputProps, "onChange"> & {
  font?: PossibleFont;
  labelClear?: string;
  leftAffix?: AffixProps | ReactNode;
  leftIcon?: ReactNode;
  rightAffix?: AffixProps | ReactNode;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  designSize?: "default" | "small";
  onChange?: (
    ev: Parameters<ChangeEventHandler<HTMLInputElement>>[0],
    reason?: ChangeReasons,
  ) => void;
};

const adornmentClassName = classNames(
  "font-label-s",
  "text-weak",
  "bg-transparent",
  "h-full",
  "flex",
  "justify-center",
  "items-center",
  "self-center",
);

/**
 * Firefox has agent styles that force every lib owner to fix the height of the input based on the line-height.
 */
function getFixedHeight(font: PossibleFont, designSize?: "default" | "small") {
  const [type, size] = font.split("-");
  const lineHeight = `var(--sprout-${type}-font-${size}-line-height)`;
  return `calc(${lineHeight} - 2 * ${tokens.common_border_default_width} + 2 * ${designSize === "small" ? tokens.common_spacing_s : tokens.common_spacing_m})`;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);

function InputBase(props: InputProps, ref?: Ref<HTMLInputElement>) {
  const {
    id,
    font,
    labelClear,
    leftAffix,
    leftIcon,
    rightAffix,
    leftAdornment,
    rightAdornment,
    readOnly = false,
    disabled = false,
    type,
    hasError,
    designSize,
    value,
    onChange,
    defaultValue,
    placeholder,
    ...rest
  } = props;

  const t = useI18n();
  const internalRef = useRef<HTMLInputElement>(null);
  const labelClearDefault = t("input.clear");
  const safeFont: PossibleFont =
    designSize === "small" && !font ? "label-xs" : font || "label-s";
  const height = getFixedHeight(safeFont, designSize);

  const controlled = useValueControl<InputProps>({
    defaultValue,
    value,
    onChange,
  });

  let safeType = type || "text";
  if (type === "search") {
    safeType = "text";
  }

  let inputPlaceholder: string | undefined;
  if (typeof placeholder !== "undefined") {
    inputPlaceholder = placeholder;
  } else if (type === "search") {
    inputPlaceholder = "";
  } else {
    inputPlaceholder = undefined;
  }

  return (
    <div
      className={classNames(
        "flex",
        "border-box",
        "border-moderate",
        "radius-pill",
        "w-full",
        "flex-row",
        "items-center",
        "overflow-hidden",
        styles.field,
        {
          [styles.field_error]: !!hasError,
          [styles.field_disabled]: disabled,
          [styles.small]: designSize === "small",
        },
      )}
    >
      {leftAffix ? <Affix affix={leftAffix} /> : null}
      <div
        className={classNames(
          "w-full",
          "overflow-hidden",
          styles.fieldcontent,
          {
            "gap-m": designSize !== "small",
            "gap-s": designSize === "small",
          },
        )}
      >
        <div
          className={classNames(
            "w-full",
            "flex",
            "flex-row",
            "pr-s",
            "items-center",
            "gap-m",
            "text-default",
          )}
        >
          {leftAdornment ? (
            <span className={adornmentClassName}>{leftAdornment}</span>
          ) : null}
          {type === "search" ? <SearchIcon /> : leftIcon}
          <input
            {...rest}
            {...controlled}
            placeholder={inputPlaceholder}
            id={id}
            type={safeType}
            ref={mergeRefs([ref, internalRef])}
            disabled={disabled}
            readOnly={readOnly}
            className={classNames(
              "flex",
              "flex-row",
              "items-center",
              "m-0",
              "p-0",
              "bg-transparent",
              "border-box",
              "text-default",
              "flex-1",
              "border-none",
              "block",
              "w-full",
              "truncate",
              styles.input,
              {
                [`font-${safeFont}`]: !!safeFont,
              },
            )}
            aria-invalid={hasError ? "true" : undefined}
            data-size={designSize}
            style={{
              blockSize: height,
            }}
          />
          {rightAdornment ? (
            <span className={adornmentClassName}>{rightAdornment}</span>
          ) : null}
        </div>
        {hasError ? (
          <ErrorIcon
            data-icon="error"
            data-testid="input-error-icon"
            width={undefined}
            height={undefined}
          />
        ) : null}
      </div>
      {type === "search" && (
        <InputButton
          data-feature="input-search-clear"
          onClick={() => {
            if (internalRef.current) {
              internalRef.current.value = "";
            }
            if (controlled.onChange) {
              controlled.onChange(
                {
                  target: {
                    value: "",
                  },
                } as ChangeEvent<HTMLInputElement>,
                "clear",
              );
            }
          }}
          aria-label={labelClear || labelClearDefault}
          size={designSize === "small" ? "xs" : "s"}
        />
      )}
      {rightAffix ? <Affix affix={rightAffix} /> : null}
    </div>
  );
}

InputBase.displayName = "Input";
