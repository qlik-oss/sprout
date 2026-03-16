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

/**
 * The Select component supports the following sub-components:
 * - `Select.Select` — Single-select dropdown with Field layout integration.
 * - `Select.Multi` — Multi-select dropdown with filtering support.
 * - `Select.Option` — An option item.
 * - `Select.OptGroup` — A group of options with a label.
 * - `Select.Combobox` — Editable combobox input.
 * - `Select.Search` — Search input for filtering options.
 * - `Select.Listbox` — Listbox container for options.
 * - `Select.Divider` — Visual divider between options.
 * - `Select.Context` — Context for composing custom select UIs.
 */
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
