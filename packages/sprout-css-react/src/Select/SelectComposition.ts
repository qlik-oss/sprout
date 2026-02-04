import {
  MultiSelect as MultiSelectBase,
  type MultiSelectProps as MultiSelectBaseProps,
} from "./MultiSelect";
import { OptionCreate } from "./OptionCreate";
import {
  Select as SelectBase,
  type SelectProps as SelectBaseProps,
} from "./Select";
import { Combobox, type ComboboxProps } from "./SelectCombobox";
import { SelectContext, type SelectContextType } from "./SelectContext";
import { Divider } from "./SelectDivider";
import { Listbox, type ListboxProps } from "./SelectListbox";
import { OptGroup, type OptGroupProps } from "./SelectOptGroup";
import {
  OptionStyled,
  SelectOption,
  type SelectOptionProps,
} from "./SelectOption";
import { SelectSearch } from "./SelectSearch";
import type { ChangeEvent } from "./SelectUtils";

export const Select = {
  Select: SelectBase,
  Context: SelectContext,
  Multi: MultiSelectBase,
  Combobox,
  Search: SelectSearch,
  Listbox,
  Option: SelectOption,
  OptionStyled,
  OptionCreate,
  OptGroup,
  Divider,
};

export type SelectProps = {
  Context: SelectContextType;
  Select: SelectBaseProps;
  Multi: MultiSelectBaseProps;
  ChangeEvent: ChangeEvent;
  Combox: ComboboxProps;
  ListBox: ListboxProps;
  Option: SelectOptionProps;
  OptGroup: OptGroupProps;
};
