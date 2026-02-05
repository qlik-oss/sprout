import { type Ref, forwardRef, useState } from "react";

import { type CommonFieldProps, Field, useFieldProps } from "../Field";
import type { FloatingPublicProps } from "../FloatingPrimitive";
import { KEYBOARD_KEYS } from "../Utils/keyboardKeys";
import { SelectFloating, type SelectFloatingProps } from "./SelectFloating";

export type SelectProps = Omit<SelectFloatingProps, "open" | "onOpenChange"> &
  CommonFieldProps & {
    /** @deprecated please use errorMessages instead */
    isError?: boolean;
    selectedValueDisplay?: "full" | "label";
  } & Pick<FloatingPublicProps, "disableScrollLock" | "hideBackdrop">;

export const Select = forwardRef<HTMLInputElement, SelectProps>(SelectBase);

function SelectBase(
  {
    isError,
    defaultOpen,
    disableScrollLock,
    hideBackdrop,
    selectedValueDisplay = "full",
    ...props
  }: SelectProps,
  ref?: Ref<HTMLInputElement>,
) {
  const [isOpen, setIsOpen] = useState<boolean>(!!defaultOpen);
  const { fieldProps, inputProps, useField } = useFieldProps(props);

  let content = (
    <SelectFloating
      data-selected-value-display={selectedValueDisplay}
      ref={ref}
      disableScrollLock={disableScrollLock}
      hideBackdrop={hideBackdrop}
      {...inputProps}
      hasError={isError || inputProps.hasError}
      defaultOpen={defaultOpen}
      open={isOpen}
      onOpenChange={setIsOpen}
    />
  );
  if (useField) {
    content = (
      <Field
        {...fieldProps}
        isError={isError || inputProps.hasError}
        onKeyDownCapture={(event) => {
          const isTab = event.key === KEYBOARD_KEYS.TAB;
          const isShiftTab = event.shiftKey && isTab;

          if ((isTab || isShiftTab) && isOpen) {
            setIsOpen(false);
          }
        }}
      >
        {content}
      </Field>
    );
  }

  return content;
}

SelectBase.displayName = "Select";
