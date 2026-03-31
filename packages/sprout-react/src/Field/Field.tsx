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

/**
 * The Field component accepts all the native div props and also supports the following custom props:
 * @param children - the form control element (e.g. Input, Select) rendered inside the field.
 * @param label - the label text rendered above the control.
 * @param optional - whether the field is optional, renders an optional indicator next to the label.
 * @param htmlFor - the id of the control this label is associated with.
 * @param infoIconTooltip - content for an info tooltip icon shown next to the label.
 * @param infoIconPopover - content for an info popover shown next to the label.
 * @param disabled - whether the field is disabled.
 * @param helpText - helper text rendered below the control.
 * @param isError - whether the field is in an error state.
 * @param errorMessages - array of error message strings rendered below the control.
 * @param labelId - override the id of the label element.
 * @param helpTextId - override the id of the helper text element.
 * @param maxCharacterCount - maximum character count shown in the character counter.
 * @param currentCount - current character count shown in the character counter.
 */
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
  ref?: Ref<HTMLDivElement>
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
