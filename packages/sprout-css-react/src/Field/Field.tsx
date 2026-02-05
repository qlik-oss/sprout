import { type ReactNode, type Ref, forwardRef } from "react";

import sprout from "@qlik/sprout-css-modules";

import { CharacterCount } from "../CharacterCount";
import { FieldLabel, type FieldLabelProps } from "../FieldLabel";
import { HelperText, type HelperTextProps } from "../HelperText";
import type { HTMLDivProps } from "../htmlTypes";

import styles from "./Field.module.css";

export type FieldProps = Partial<Omit<FieldLabelProps, "id">> &
  Partial<Omit<HelperTextProps, "id">> & {
    errorMessages?: Array<string>;
    children: ReactNode;
    labelId?: string;
    helpTextId?: string;
    maxCharacterCount?: number | undefined;
    currentCount?: number;
  } & HTMLDivProps;

export const Field = forwardRef<HTMLDivElement, FieldProps>(FieldBase);

function FieldBase(
  {
    children,
    htmlFor,
    optional,
    label,
    labelId,
    helpText,
    helpTextId,
    errorMessages,
    isError,
    disabled,
    maxCharacterCount,
    infoIconTooltip,
    infoIconPopover,
    currentCount = 0,
    ...props
  }: FieldProps,
  ref?: Ref<HTMLDivElement>,
) {
  return (
    <div className={styles.field} ref={ref} {...props}>
      {label ? (
        <FieldLabel
          optional={optional}
          htmlFor={htmlFor}
          id={labelId}
          label={label}
          disabled={disabled}
          infoIconTooltip={infoIconTooltip}
          infoIconPopover={infoIconPopover}
        />
      ) : null}
      {children}
      {maxCharacterCount || helpText || (errorMessages || []).length > 0 ? (
        <div className={sprout.classNames("flex", "flex-row", "w-full")}>
          <div className={sprout.classNames("w-full", "flex-auto")}>
            {helpText && (errorMessages || []).length === 0 ? (
              <HelperText
                helpText={helpText}
                isError={isError}
                id={helpTextId}
              />
            ) : null}
            {(errorMessages || []).map((errorMsg, index) => (
              <HelperText
                isError
                key={errorMsg}
                helpText={errorMsg}
                id={index === 0 ? helpTextId : undefined}
              />
            ))}
          </div>
          {maxCharacterCount ? (
            <div className={sprout.classNames("flex-none", "ml-xl")}>
              <CharacterCount
                maxCount={maxCharacterCount}
                currentCount={currentCount}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

FieldBase.displayName = "Field";
