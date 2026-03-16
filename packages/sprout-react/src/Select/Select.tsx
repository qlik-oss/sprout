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

/**
 * The `Select.Select` component renders onto a `button` HTML element. It accepts all Field props plus the following:
 * @param defaultOpen - If true, the dropdown is open by default.
 * @param hasError - If true, displays the select in an error state.
 * @param size - Size of the select control (`default` or `small`).
 * @param placeholder - Placeholder text when no value is selected.
 * @param value - The controlled selected value.
 * @param defaultValue - The default selected value.
 * @param onChange - Callback when the selected value changes.
 * @param renderValue - Custom render function for the selected value display.
 * @param selectedValueDisplay - How to display the selected value (`full` or `label`). Defaults to `full`.
 * @param readOnly - If true, the select is read-only.
 * @param disableScrollLock - If true, scrolling is not locked when the dropdown is open.
 * @param hideBackdrop - If true, no backdrop overlay is rendered.
 * @param isError - @deprecated Use `errorMessages` instead.
 */
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
