import { type RefObject, useEffect } from "react";

import type { ComboboxGesture } from "../Utils/gesture/Combobox";
import type { ChangeEvent } from "./SelectUtils";

type TypeaheadState = {
  buffer: string;
  timerId: number | null;
  selectedValue: string | null;
};

const TYPEAHEAD_TIMEOUT_MS = 500;
/**
 * We use a WeakMap so when a ComboboxGesture goes away (component unmounts),
 * its state can be garbage‑collected. That keeps us from holding on to stale
 * entries and helps avoid leaks.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 */
const typeaheadStateMap = new WeakMap<
  ComboboxGesture<unknown>,
  TypeaheadState
>();

function getTypeaheadState(gesture: ComboboxGesture<unknown>): TypeaheadState {
  let state = typeaheadStateMap.get(gesture);
  if (!state) {
    state = { buffer: "", timerId: null, selectedValue: null };
    typeaheadStateMap.set(gesture, state);
  }
  return state;
}

function clearResetTimer(state: TypeaheadState) {
  if (state.timerId !== null && typeof window !== "undefined") {
    window.clearTimeout(state.timerId);
    state.timerId = null;
  }
}

function scheduleReset(state: TypeaheadState) {
  clearResetTimer(state);
  if (typeof window === "undefined") return;
  state.timerId = window.setTimeout(() => {
    state.buffer = "";
    state.timerId = null;
    state.selectedValue = null;
  }, TYPEAHEAD_TIMEOUT_MS);
}

// Look for the first option whose label starts with the entire buffered string
function findStartingWithIndex(
  optionLabels: Array<string>,
  buffer: string,
  startIndex?: number,
): number {
  if (!buffer || optionLabels.length === 0) return -1;
  const optionsLength = optionLabels.length;

  // If no "current" index is given, scan linearly from the start
  if (typeof startIndex === "undefined" || startIndex < 0) {
    for (let index = 0; index < optionsLength; index++) {
      if (optionLabels[index].startsWith(buffer)) {
        return index;
      }
    }
    return -1;
  }

  // Otherwise, scan circularly starting after the current index
  for (let i = 1; i <= optionsLength; i++) {
    const index = (startIndex + i) % optionsLength;
    if (optionLabels[index].startsWith(buffer)) {
      return index;
    }
  }
  return -1;
}

// If no full match, look for the option whose label starts with the closest matching first letter; if none found, wrap around to the alphabetically earliest option
function findClosestWithIndex(
  optionsLabels: Array<string>,
  targetFirst: string,
  startIndex?: number,
): number {
  const optionsLength = optionsLabels.length;
  if (!optionsLength || !targetFirst) {
    return -1;
  }

  let wrapAroundOptionIndex = -1;
  let wrapAroundOptionFirstCharacter: string | null = null;
  let nextAlphabeticalOptionIndex = -1;
  let nextAlphabeticalOptionFirstCharacter: string | null = null;

  const checkOption = (index: number) => {
    const firstChar = optionsLabels[index].charAt(0);
    if (!firstChar) return;

    // Track the alphabetically earliest starting character across all options (used for wrap-around)
    if (
      wrapAroundOptionFirstCharacter === null ||
      firstChar < wrapAroundOptionFirstCharacter
    ) {
      wrapAroundOptionFirstCharacter = firstChar;
      wrapAroundOptionIndex = index;
    }

    // Track the earliest starting character that is not earlier than the user's first typed character (forward candidate)
    if (
      firstChar >= targetFirst &&
      (nextAlphabeticalOptionFirstCharacter === null ||
        firstChar < nextAlphabeticalOptionFirstCharacter)
    ) {
      nextAlphabeticalOptionFirstCharacter = firstChar;
      nextAlphabeticalOptionIndex = index;
    }
  };

  // Walk the labels and pick a "closest" match:
  // - No start index: scan from the top.
  // - With a start index: loop around from the next item.
  // `checkOption` remembers the best forward hit and a wrap‑around fallback.
  if (typeof startIndex === "undefined" || startIndex < 0) {
    for (let index = 0; index < optionsLength; index++) {
      checkOption(index);
    }
  } else {
    for (let index = 1; index <= optionsLength; index++) {
      checkOption((startIndex + index) % optionsLength);
    }
  }

  // Prefer the next forward match; otherwise use the wrap‑around.
  return nextAlphabeticalOptionIndex !== -1
    ? nextAlphabeticalOptionIndex
    : wrapAroundOptionIndex;
}

export function useTypeahead<V, T extends ComboboxGesture<V>>(
  gestureRef: RefObject<T | null>,
) {
  // On unmount, wipe the buffer and cancel the timer so nothing keeps ticking
  // after the combobox is gone.
  useEffect(() => {
    return () => {
      resetTypeahead(gestureRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeydown = ({
    typedCharacter,
    open,
    onChange,
    name,
  }: {
    typedCharacter: string;
    open?: boolean;
    onChange: (event: ChangeEvent) => void;
    name?: string;
  }) => {
    const gesture = gestureRef.current;
    if (!gesture) return;

    const state = getTypeaheadState(gesture);

    // Add the typed character and restart the idle timer
    const normalizedTypedCharacter = typedCharacter.toLowerCase();
    state.buffer += normalizedTypedCharacter;
    scheduleReset(state);

    // Grab all option buttons and lowercase their labels for matching
    const buttons = Array.from(gesture._getAllItems()) as Array<HTMLElement>;
    if (!buttons.length) return;

    const optionsLength = buttons.length;
    const normalizedOptionLabels = buttons.map((btn) =>
      btn.textContent.trim().toLowerCase(),
    );

    const buffer = state.buffer;
    if (!buffer || !optionsLength) return;

    // When closed, choose by content only (don’t move focus)
    if (!open) {
      const firstMatchIndex = findStartingWithIndex(
        normalizedOptionLabels,
        buffer,
      );
      if (firstMatchIndex !== -1) {
        // Set selected value to the button's value not its label
        state.selectedValue =
          buttons[firstMatchIndex].getAttribute("data-option");

        const myEvent: ChangeEvent = {
          type: "change",
          target: {
            type: "select-one",
            name,
            value: state.selectedValue || "",
            selectedOptions: [],
          },
        };
        onChange(myEvent);
        return;
      }

      const closestMatchIndex = findClosestWithIndex(
        normalizedOptionLabels,
        buffer[0],
      );
      state.selectedValue =
        closestMatchIndex !== -1
          ? buttons[closestMatchIndex].getAttribute("data-option")
          : null;

      const myEvent: ChangeEvent = {
        type: "change",
        target: {
          type: "select-one",
          name,
          value: state.selectedValue || "",
          selectedOptions: [],
        },
      };
      onChange(myEvent);
      return;
    }

    // When open, search relative to current focus and move focus
    const comboboxListState = gesture.getListInfo();
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!comboboxListState) return;
    const currentFocusIndex = comboboxListState.focusIndex;

    const firstMatchIndex = findStartingWithIndex(
      normalizedOptionLabels,
      buffer,
      currentFocusIndex,
    );
    if (firstMatchIndex !== -1) {
      gesture.focusOn(comboboxListState, firstMatchIndex);
      return;
    }

    const closestMatchIndex = findClosestWithIndex(
      normalizedOptionLabels,
      buffer[0],
      currentFocusIndex,
    );
    if (closestMatchIndex !== -1) {
      gesture.focusOn(comboboxListState, closestMatchIndex);
    }
  };

  function resetTypeahead(
    mygestureRef?: RefObject<ComboboxGesture<unknown> | null>,
  ) {
    const gesture = mygestureRef?.current;
    if (!gesture) return;
    const state = getTypeaheadState(gesture);
    state.buffer = "";
    clearResetTimer(state);
  }

  return {
    onKeydown,
    resetTypeahead,
  };
}
