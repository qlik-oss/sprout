import { type Ref, forwardRef } from "react";

import { type CommonFieldProps, Field, useFieldProps } from "../Field";
import { useValueControl } from "../hooks/useValueControl";
import { TextareaNative, type TextareaNativeProps } from "./TextareaNative";

export type TextareaProps = TextareaNativeProps & CommonFieldProps;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  TextareaBase,
);

function TextareaBase(
  { ...props }: TextareaProps,
  ref?: Ref<HTMLTextAreaElement>,
) {
  const { fieldProps, useField, inputProps } = useFieldProps(props);
  const controlled = useValueControl<TextareaNativeProps>({
    value: props.value,
    onChange: props.onChange,
    defaultValue: props.defaultValue,
  });
  const characterLimitExceeded =
    fieldProps.maxCharacterCount && controlled.value
      ? String(controlled.value).length > fieldProps.maxCharacterCount
      : false;
  let content = (
    <TextareaNative
      ref={ref}
      {...controlled}
      {...inputProps}
      hasError={characterLimitExceeded || inputProps.hasError}
    />
  );
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

TextareaBase.displayName = "Textarea";
