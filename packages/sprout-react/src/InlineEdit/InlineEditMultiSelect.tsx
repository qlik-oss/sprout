import {
  type ChangeEventHandler,
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";

import { useControl } from "@qlik/sprout-hooks";

import type { ChangeReasons } from "../Input";
import { Select, type SelectProps } from "../Select";
import type { SelectOptionProps } from "../Select/SelectOption";
import type { ChangeEvent } from "../Select/SelectUtils";
import {
  getSelectedOptions,
  getSelectedValueString,
} from "../Select/getSelectedOption";
import { Tag, TagGroups } from "../Tag";
import {
  InlineEditPrimitive,
  type InlineEditPrimitiveProps,
} from "./InlineEditPrimitive";
import { Placeholder } from "./Placeholder";

export type InlineEditMultiSelectProps = Omit<
  InlineEditPrimitiveProps,
  "view" | "edit"
> & {
  placeholder?: SelectProps["Multi"]["placeholder"];
  value?: SelectProps["Multi"]["value"];
  children: ReactNode;
  defaultValue?: SelectProps["Multi"]["defaultValue"];
  onChange?: (
    e: Parameters<ChangeEventHandler<HTMLInputElement>>[0],
    reason?: ChangeReasons | "cancel",
  ) => void;
  hasError?: SelectProps["Multi"]["hasError"];
  errorMessages?: SelectProps["Multi"]["errorMessages"];
};

export const InlineEditMultiSelect = forwardRef<
  HTMLDivElement,
  InlineEditMultiSelectProps
>(InlineEditMultiSelectBase);

function InlineEditMultiSelectBase(
  {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
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
    hasError,
    onChange,
    ...props
  }: InlineEditMultiSelectProps,
  ref?: Ref<HTMLDivElement>,
) {
  const controlled = useControl<Array<string>>(
    {
      value,
      onChange,
      defaultValue,
    },
    {
      onChangeKey: "onChange",
      valueKey: "value",
      defaultValueKey: "defaultValue",
      selector: (e) =>
        e.target.selectedOptions.map((o: { value: string }) => o.value),
    },
  );
  const [selectedProps, setSelectedProps] = useState<
    Record<string, SelectOptionProps>
  >({});
  useEffect(() => {
    const selected = getSelectedOptions(children, controlled.value);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (selected) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedProps(selected);
    }
  }, [children, controlled.value]);

  return (
    <InlineEditPrimitive
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
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
            type: "select-multiple",
            value: "",
            selectedOptions: (defaultValue || value || []).map((v) => ({
              value: v,
            })),
          },
        };
        controlled.onChange(myevent, "cancel");
      }}
      showFormButtons={showFormButtons}
      errorMessages={errorMessages}
      {...props}
      view={
        <TagGroups>
          {(controlled.value || []).map((v) => (
            <Tag
              key={v}
              text={getSelectedValueString(selectedProps, v)}
              size="s"
            />
          ))}
          {(controlled.value || []).length === 0 && !!placeholder && (
            <Placeholder>{placeholder}</Placeholder>
          )}
        </TagGroups>
      }
      edit={
        <Select.Multi
          hideBackdrop
          hasError={hasError}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          placeholder={placeholder}
          value={controlled.value}
          onChange={(e) => {
            controlled.onChange(e);
          }}
        >
          {children}
        </Select.Multi>
      }
    />
  );
}

InlineEditMultiSelectBase.displayName = "InlineEdit.MultiSelect";
