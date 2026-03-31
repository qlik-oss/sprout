import {
  type ChangeEventHandler,
  type JSX,
  type ReactNode,
  type Ref,
  forwardRef,
} from "react";

import { useControl } from "@qlik/sprout-react-hooks";

import { type ChangeReasons, TextField, type TextFieldProps } from "../Input";
import type { PossibleValues } from "../Typography";
import { classNames } from "../classNames";
import {
  InlineEditPrimitive,
  type InlineEditPrimitiveProps,
} from "./InlineEditPrimitive";
import { Placeholder } from "./Placeholder";

export type TextFieldViewProps = {
  children?: ReactNode;
  font?: PossibleValues["font"];
};

function TextFieldView({ children, font }: TextFieldViewProps): JSX.Element {
  return (
    <span
      className={classNames(
        `font_${font || "label_s"}`,
        `text_default`,
        `text_start`,
        "truncate"
      )}
      // Setting inline style to override `white-space: nowrap` in `ellipsis` class
      style={{ whiteSpace: "pre" }}
    >
      {children}
    </span>
  );
}

export type InlineEditTextFieldProps = Omit<
  InlineEditPrimitiveProps,
  "view" | "edit"
> & {
  type?: TextFieldProps["type"];
  placeholder?: TextFieldProps["placeholder"];
  value?: TextFieldProps["value"];
  font?: PossibleValues["font"];
  view?: (props: TextFieldViewProps) => JSX.Element;
  defaultValue?: TextFieldProps["defaultValue"];
  onChange?: (
    e: Parameters<ChangeEventHandler<HTMLInputElement>>[0],
    reason?: ChangeReasons | "cancel"
  ) => void;
  hasError?: TextFieldProps["hasError"];
  errorMessages?: TextFieldProps["errorMessages"];
};

/**
 * The InlineEdit.TextField component provides an inline-editable text field and supports the following custom props:
 * @param value - the controlled value of the text field.
 * @param defaultValue - the uncontrolled default value of the text field.
 * @param placeholder - placeholder text shown when the field is empty.
 * @param type - the input type of the text field.
 * @param font - the font style applied to the text field.
 * @param view - a custom render function for the view (read-only) mode.
 * @param onChange - callback fired when the value changes, with an optional change reason.
 * @param hasError - whether the field is in an error state.
 * @param errorMessages - array of error messages displayed below the field.
 */
export const InlineEditTextField = forwardRef<
  HTMLDivElement,
  InlineEditTextFieldProps
>(InlineEditTextFieldBase);

function InlineEditTextFieldBase(
  {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    placeholder,
    isEditingDefault,
    isEditing,
    errorMessages,
    onSave,
    onCancel,
    hasError,
    showFormButtons,
    defaultValue,
    value,
    view = TextFieldView,
    font,
    type,
    onChange,
    ...props
  }: InlineEditTextFieldProps,
  ref?: Ref<HTMLDivElement>
) {
  const controlled = useControl<string>(
    {
      value,
      defaultValue,
      onChange,
    },
    {
      valueKey: "value",
      defaultValueKey: "defaultValue",
      onChangeKey: "onChange",
      selector: (e) => (e.target as HTMLInputElement).value,
    }
  );

  const View = view;

  const viewNode = (
    <View font={font}>
      {controlled.value || <Placeholder>{placeholder}</Placeholder>}
    </View>
  );

  return (
    <InlineEditPrimitive
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      ref={ref}
      isEditingDefault={isEditingDefault}
      isEditing={isEditing}
      onSave={onSave}
      onCancel={() => {
        onCancel?.();
        controlled.onChange(
          { target: { value: defaultValue || value } },
          "cancel"
        );
      }}
      showFormButtons={showFormButtons}
      errorMessages={errorMessages}
      {...props}
      view={viewNode}
      edit={
        <TextField
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          placeholder={placeholder}
          value={controlled.value}
          font={font || "label_s"}
          hasError={hasError}
          type={type}
          onChange={(e, r) => {
            controlled.onChange(e, r);
          }}
        />
      }
    />
  );
}

InlineEditTextFieldBase.displayName = "InlineEdit.TextField";
