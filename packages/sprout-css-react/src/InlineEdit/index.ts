import {
  InlineEditMultiSelect,
  type InlineEditMultiSelectProps,
} from "./InlineEditMultiSelect";
import {
  InlineEditPrimitive,
  type InlineEditPrimitiveProps,
} from "./InlineEditPrimitive";
import {
  InlineEditSelect,
  type InlineEditSelectProps,
} from "./InlineEditSelect";
import {
  InlineEditTextField,
  type InlineEditTextFieldProps,
  type TextFieldViewProps,
} from "./InlineEditTextField";

export type InlineEditProps = {
  Primitive: InlineEditPrimitiveProps;
  TextField: InlineEditTextFieldProps;
  Select: InlineEditSelectProps;
  MultiSelect: InlineEditMultiSelectProps;
  TextFieldView: TextFieldViewProps;
};

export const InlineEdit = {
  Primitive: InlineEditPrimitive,
  TextField: InlineEditTextField,
  Select: InlineEditSelect,
  MultiSelect: InlineEditMultiSelect,
};
