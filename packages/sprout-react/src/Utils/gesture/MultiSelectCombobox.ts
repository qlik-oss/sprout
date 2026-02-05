import type { KeyboardEvent as ReactKeyboardEvent } from "react";

import {
  type ChangeEvent,
  createMultiSelectOnChangeEvent,
} from "../../Select/SelectUtils";
import { KEYBOARD_KEYS } from "../keyboardKeys";
import { ComboboxGesture, type ComboboxGestureArguments } from "./Combobox";

export type MultiSelectComboboxGestureArguments = ComboboxGestureArguments<
  Array<string>
>;

export class MultiSelectComboboxGesture extends ComboboxGesture<Array<string>> {
  constructor(args: MultiSelectComboboxGestureArguments) {
    super(args);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  onKeyDownHandler(event: ReactKeyboardEvent<HTMLElement>) {
    switch (event.key) {
      case KEYBOARD_KEYS.ENTER: {
        event.stopPropagation();
        event.preventDefault();

        const info = this.getListInfo();
        const optionBtn = info.focus;

        if (optionBtn) {
          const newValue = optionBtn.dataset.option;
          const selected = optionBtn.getAttribute("aria-selected") === "true";

          // name is required for react-hook-form
          const changeEvent: ChangeEvent = createMultiSelectOnChangeEvent({
            name: this.name,
            value: newValue,
            values: this.value,
            action: selected ? "remove" : "add",
          });

          this.onSelect?.(changeEvent);
        }
        break;
      }
      default:
        break;
    }

    super.onKeyDownHandler(event);
  }
}
