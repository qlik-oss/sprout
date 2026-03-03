import {
  type ChangeEventHandler,
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";

import { useControl } from "@qlik/sprout-react-hooks";

import type { ChangeReasons } from "../Input";
import { Select, type SelectProps } from "../Select";
import type { ChangeEvent } from "../Select/SelectUtils";
import { getSelectedOption } from "../Select/getSelectedOption";
import { classNames } from "../classNames";
import {
  InlineEditPrimitive,
  type InlineEditPrimitiveProps,
} from "./InlineEditPrimitive";
import { Placeholder } from "./Placeholder";

export type InlineEditSelectProps = Omit<
  InlineEditPrimitiveProps,
  "view" | "edit"
> & {
  placeholder?: SelectProps["Select"]["placeholder"];
  value?: SelectProps["Select"]["value"];
  children: ReactNode;
  defaultValue?: SelectProps["Select"]["defaultValue"];
  onChange?: (
    e: Parameters<ChangeEventHandler<HTMLInputElement>>[0],
    reason?: ChangeReasons | "cancel",
  ) => void;
  hasError?: SelectProps["Select"]["hasError"];
  errorMessages?: SelectProps["Select"]["errorMessages"];
};

export const InlineEditSelect = forwardRef<
  HTMLDivElement,
  InlineEditSelectProps
>(InlineEditSelectBase);

function InlineEditSelectBase(
  {
    "aria-label": ariaLabel,
    placeholder,
    isEditingDefault,
    isEditing,
    errorMessages,
    onSave,
    onCancel,
    showFormButtons,
    defaultValue,
    value,
    children,
    onChange,
    hasError,
    ...props
  }: InlineEditSelectProps,
  ref?: Ref<HTMLDivElement>,
) {
  const controlled = useControl<string>(
    {
      value,
      onChange,
      defaultValue,
    },
    {
      onChangeKey: "onChange",
      valueKey: "value",
      defaultValueKey: "defaultValue",
      selector: (e) => e?.target?.value,
    },
  );
  const [selectedProps, setSelectedProps] = useState<SelectProps["Option"]>({
    children: "",
  });
  useEffect(() => {
    const selected = getSelectedOption(children, controlled.value);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (selected) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedProps(selected as SelectProps["Option"]);
    }
  }, [children, controlled.value]);
  return (
    <InlineEditPrimitive
      aria-label={ariaLabel}
      ref={ref}
      editFocusSelector={`[role="combobox"]`}
      isEditingDefault={isEditingDefault}
      isEditing={isEditing}
      onSave={onSave}
      onCancel={() => {
        onCancel?.();
        const myevent: ChangeEvent = {
          type: "change",
          target: {
            type: "select-one",
            value: defaultValue || value || "",
            selectedOptions: [],
          },
        };
        controlled.onChange(myevent, "cancel");
      }}
      showFormButtons={showFormButtons}
      errorMessages={errorMessages}
      {...props}
      view={
        <div
          className={classNames(
            "overflow-hidden",
            "w-full",
            "break-words",
            "text-default",
            "text-start",
          )}
        >
          {selectedProps.children || controlled.value || (
            <Placeholder>{placeholder || ""}</Placeholder>
          )}
        </div>
      }
      edit={
        <Select.Select
          hideBackdrop
          aria-label={ariaLabel}
          defaultOpen
          placeholder={placeholder}
          value={controlled.value}
          onChange={(e) => {
            controlled.onChange(e);
          }}
          hasError={hasError}
        >
          {children}
        </Select.Select>
      }
    />
  );
}

InlineEditSelectBase.displayName = "InlineEdit.Select";
