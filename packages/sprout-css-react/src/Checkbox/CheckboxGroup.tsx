import type { ReactNode } from "react";

import { Field, type FieldProps } from "../Field";
import { classNames } from "../classNames";
import { useFieldAriaProps } from "../hooks/useFieldAriaProps";
import { Checkbox, type CheckboxProps } from "./Checkbox";

export type CheckboxGroupProps = Omit<FieldProps, "children"> & {
  options?: Array<Omit<CheckboxProps, "ref">>;
  children?: ReactNode;
  name?: string;
};

export function CheckboxGroup({
  // name doesn't make any sens in this context
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  name,
  options,
  children,
  ...rest
}: CheckboxGroupProps) {
  const { fieldProps, ariaProps } = useFieldAriaProps({
    label: rest.label,
    helpText: rest.helpText,
    errorMessages: rest.errorMessages,
  });

  return (
    <Field {...fieldProps} {...rest}>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "border-box",
          "gap-density-l",
        )}
        role="group"
        {...ariaProps}
      >
        {(options || []).map((opt) => (
          <Checkbox key={opt.label || opt.name} {...opt} />
        ))}
        {children}
      </div>
    </Field>
  );
}

CheckboxGroup.displayName = "CheckboxGroup";
