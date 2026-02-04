import { type ReactNode, type Ref, forwardRef, isValidElement } from "react";

import { Field, type FieldProps } from "../Field";
import { classNames } from "../classNames";
import { useFieldAriaProps } from "../hooks/useFieldAriaProps";
import { Radio, type RadioProps } from "./Radio";

export type RadioGroupProps = Omit<FieldProps, "id" | "children"> & {
  /**
   * @deprecated use `children` instead
   */
  options?: Array<RadioProps> | ReactNode;
  id?: string;
  name?: string;
  children?: ReactNode;
};

export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  RadioGroupBase,
);

function RadioGroupBase(
  { name, options, children, ...rest }: RadioGroupProps,
  ref?: Ref<HTMLInputElement>,
) {
  const { fieldProps, ariaProps } = useFieldAriaProps({
    label: rest.label,
    helpText: rest.helpText,
    errorMessages: rest.errorMessages,
  });

  let content: ReactNode;
  if (isValidElement(options)) {
    content = options;
  } else if (Array.isArray(options)) {
    content = options.map((opt) => (
      <Radio ref={ref} key={opt.label} {...opt} name={name} />
    ));
  }

  return (
    <Field {...fieldProps} {...rest}>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "border-box",
          "gap-density-l",
        )}
        role="radiogroup"
        {...ariaProps}
      >
        {content}
        {children}
      </div>
    </Field>
  );
}

RadioGroupBase.displayName = "RadioGroup";
