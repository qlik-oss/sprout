import { type Ref, forwardRef } from "react";

import { type CommonFieldProps, Field, useFieldProps } from "../Field";
import { useValueControl } from "../hooks/useValueControl";
import type { HTMLInputProps } from "../htmlTypes";
import { Input, type InputProps } from "./Input";

export type TextFieldProps = Omit<InputProps, "leftIcon" | "labelClear"> &
  CommonFieldProps;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  TextFieldBase,
);

function TextFieldBase(
  { value, onChange, defaultValue, ...props }: TextFieldProps,
  ref?: Ref<HTMLInputElement>,
) {
  const { fieldProps, inputProps, useField } = useFieldProps(props);
  const controlled = useValueControl<HTMLInputProps>({
    defaultValue,
    value,
    onChange,
  });

  const characterLimitExceeded =
    fieldProps.maxCharacterCount && controlled.value
      ? String(controlled.value).length > fieldProps.maxCharacterCount
      : false;
  let content = (
    <Input
      ref={ref}
      {...controlled}
      {...inputProps}
      hasError={characterLimitExceeded || inputProps.hasError}
    />
  );
  // DLS-151 if you loose the focus when error are displayed: add useField
  if (useField) {
    content = (
      <Field
        {...fieldProps}
        maxCharacterCount={
          typeof controlled.value === "string"
            ? fieldProps.maxCharacterCount
            : undefined
        }
        currentCount={
          fieldProps.maxCharacterCount && controlled.value
            ? String(controlled.value).length
            : 0
        }
      >
        {content}
      </Field>
    );
  }

  return content;
}

TextFieldBase.displayName = "TextField";
