import { useId as useIdBase } from "react";

/**
 * Ensure a unique id is generated for an element if not passed by the user.
 * This is usefull for associating labels with inputs for example.
 * @param id - A custom id.
 * @returns A unique id.
 * @example
 * const safeId = useId(); // :r0:
 * const safeId = useId("custom-id"); // custom-id
 */
export function useId(id?: string): string {
  const safeId = useIdBase();
  if (id) {
    return id;
  }
  return safeId;
}
