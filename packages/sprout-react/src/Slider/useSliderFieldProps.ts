import { useId } from "@qlik/sprout-hooks";

import type { FieldProps } from "../Field";
import { useFieldAriaProps } from "../hooks/useFieldAriaProps";

type UseSliderFieldProps = {
  hasError?: boolean;
  id?: string;
  disabled?: boolean;
} & Pick<
  FieldProps,
  | "label"
  | "helpText"
  | "errorMessages"
  | "infoIconTooltip"
  | "optional"
  | "labelId"
>;

/**
 * Custom version of `useFieldProps` tailored specifically for the Slider component,
 * to address accessibility inconsistencies that don't align with standard field behavior.
 */
export function useSliderFieldProps<T extends UseSliderFieldProps>(
  props: T,
): {
  fieldProps: UseSliderFieldProps;
  inputProps: Omit<T, keyof UseSliderFieldProps> & {
    hasError?: boolean;
    id: string;
    disabled?: boolean;
  };
} {
  const {
    id,
    label,
    helpText,
    errorMessages,
    infoIconTooltip,
    optional,
    ...inputProps
  } = props;
  const safeId = useId(id);
  const { ariaProps } = useFieldAriaProps({
    label,
    helpText,
    errorMessages,
  });
  const hasError = inputProps.hasError || (errorMessages || []).length > 0;
  const disabled = props.disabled || false;

  const fieldProps = {
    label,
    labelId: safeId,
    optional,
    infoIconTooltip,
    helpText,
    errorMessages,
    disabled,
  };

  return {
    fieldProps,
    inputProps: {
      ...(inputProps as Omit<T, keyof UseSliderFieldProps>),
      id: safeId,
      hasError,
      disabled,
      ...ariaProps,
    },
  };
}
