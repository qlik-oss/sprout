import {
  type ChangeEventHandler,
  type JSX,
  type ReactNode,
  type Ref,
  forwardRef,
} from "react";

import { useControl } from "@qlik/sprout-css-hooks";

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
        "truncate",
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
    reason?: ChangeReasons | "cancel",
  ) => void;
  hasError?: TextFieldProps["hasError"];
  errorMessages?: TextFieldProps["errorMessages"];
};

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
  ref?: Ref<HTMLDivElement>,
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
    },
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
          "cancel",
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
