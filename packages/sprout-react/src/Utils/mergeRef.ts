/* eslint-disable import-x/no-deprecated */
import type { LegacyRef, MutableRefObject, RefCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeRefs<T = any>(
  refs: Array<MutableRefObject<T> | LegacyRef<T> | undefined | null>,
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        // eslint-disable-next-line no-param-reassign
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}
