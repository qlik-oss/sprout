import type { KeyboardEvent as ReactKeyboardEvent } from "react";

import type { ChangeEvent } from "../../Select/SelectUtils";
import { KEYBOARD_KEYS } from "../keyboardKeys";
import { ComboboxGesture, type ComboboxGestureArguments } from "./Combobox";

export type SelectComboboxGestureArguments = ComboboxGestureArguments<string>;

export class SelectComboboxGesture extends ComboboxGesture<string> {
  constructor(args: SelectComboboxGestureArguments) {
    super(args);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  onKeyDownHandler(event: ReactKeyboardEvent<HTMLElement>) {
    switch (event.key) {
      case KEYBOARD_KEYS.ENTER: {
        event.stopPropagation();
        event.preventDefault();

        if (!this.isOpen) {
          this.onOpenChange(true);
        } else {
          const info = this.getListInfo();
          const optionBtn = info.focus;

          if (optionBtn) {
            const changeEvent: ChangeEvent = {
              type: "change",
              target: {
                type: "select-one",
                name: this.name,
                value: optionBtn.dataset.option,
              },
            };
            this.onSelect?.(changeEvent);
          }
          this.onOpenChange(false);
          this.element?.focus();
        }
        break;
      }
      case KEYBOARD_KEYS.ESCAPE:
        if (this.isOpen) {
          event.stopPropagation();
          this.onOpenChange(false);
          this.element?.focus();
        } else if (this.value) {
          const changeEvent: ChangeEvent = {
            type: "change",
            target: {
              type: "select-one",
              name: this.name,
              value: this.value,
            },
          };
          this.onSelect?.(changeEvent);
        }
        break;
      default:
        break;
    }

    super.onKeyDownHandler(event);
  }
}
