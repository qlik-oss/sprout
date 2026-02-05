import { useId } from "@qlik/sprout-hooks";

import type { FieldProps } from ".";
import { useFieldAriaProps } from "../hooks/useFieldAriaProps";

export type CommonFieldProps = Pick<
  FieldProps,
  | "label"
  | "helpText"
  | "errorMessages"
  | "maxCharacterCount"
  | "infoIconTooltip"
  | "infoIconPopover"
  | "optional"
> & {
  /** Force the input to be wrapped in the Field component */
  useField?: boolean;
};

/**
 * useFieldProps split the field props from the input props
 */
export function useFieldProps<
  T extends CommonFieldProps & {
    hasError?: boolean;
    id?: string;
    disabled?: boolean;
  },
>(
  props: T,
): {
  fieldProps: CommonFieldProps & { htmlFor?: string };
  inputProps: Omit<T, keyof CommonFieldProps> & {
    hasError?: boolean;
    id: string;
    disabled?: boolean;
  };
  useField?: boolean;
} {
  const {
    id,
    label,
    helpText,
    errorMessages,
    maxCharacterCount,
    infoIconTooltip,
    infoIconPopover,
    optional,
    useField,
    ...inputProps
  } = props;
  const safeId = useId(id);
  const { fieldProps: baseProps, ariaProps } = useFieldAriaProps({
    label,
    helpText,
    errorMessages,
  });
  const hasError = inputProps.hasError || (errorMessages || []).length > 0;
  const disabled = props.disabled || false;

  const fieldProps = {
    ...baseProps,
    htmlFor: safeId,
    label,
    optional,
    infoIconTooltip,
    infoIconPopover,
    helpText,
    errorMessages,
    maxCharacterCount,
    disabled,
  };

  return {
    fieldProps,
    useField: !!label || !!helpText || !!errorMessages || useField,
    inputProps: {
      ...(inputProps as Omit<T, keyof CommonFieldProps>),
      id: safeId,
      hasError,
      disabled,
      ...ariaProps,
    },
  };
}
