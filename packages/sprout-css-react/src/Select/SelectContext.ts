import { type KeyboardEvent as ReactKeyboardEvent, createContext } from "react";

export type SelectContextType = {
  /**
   * The value of the select field
   */
  value?: string | Array<string>;
  /**
   * The value of the combobox in editable mode, or value of search input in dropdown
   */
  queryFilter?: string;
  /**
   * Function to update the queryFilter value
   */
  setQueryFilter?: (value: string) => void;
  /**
   * Whether the Select dropdown is open
   */
  open?: boolean;
  onKeyDownCapture?: (
    event: ReactKeyboardEvent<HTMLButtonElement | HTMLInputElement>,
  ) => void;
};

export const SelectContext = createContext<SelectContextType>({});

export const isValueSelected = (
  context: SelectContextType | undefined,
  value?: string,
) => {
  if (value === undefined) {
    return false;
  }
  if (!context) {
    return false;
  }
  if (Array.isArray(context.value)) {
    return context.value.includes(value);
  }
  return context.value === value;
};
