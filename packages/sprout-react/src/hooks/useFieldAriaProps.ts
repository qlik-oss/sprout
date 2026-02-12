import type { ReactNode } from "react";

import { useId } from "@qlik/sprout-react-hooks";

import type { FieldProps } from "../Field";
import type { HTMLDivProps } from "../htmlTypes";

export function useFieldAriaProps({
  label,
  helpText,
  errorMessages,
}: {
  label?: ReactNode;
  helpText: ReactNode;
  errorMessages?: Array<string>;
}): {
  fieldProps: Pick<FieldProps, "labelId" | "helpTextId">;
  ariaProps: Pick<HTMLDivProps, "aria-labelledby" | "aria-describedby">;
} {
  const labelId = useId();
  const helpTextId = useId();
  const fieldProps: Pick<FieldProps, "labelId" | "helpTextId"> = {};
  const ariaProps: Pick<HTMLDivProps, "aria-labelledby" | "aria-describedby"> =
    {};

  if (label) {
    fieldProps.labelId = labelId;
    ariaProps["aria-labelledby"] = labelId;
  }
  if (helpText || (errorMessages || []).length > 0) {
    fieldProps.helpTextId = helpTextId;
    ariaProps["aria-describedby"] = helpTextId;
  }
  return {
    fieldProps,
    ariaProps,
  };
}
