import { useMemo, useState } from "react";

import { ListGesture, type ListGestureArguments } from "../Utils/gesture/list";

/**
 * useListGesture provide a gesture API for list of items.
 * ArrowDown will move the focus to the next element
 * ArrowUp will move the focus to the previous element
 * Home will move the focus to the first element
 * End will move the focus to the last element
 *
 * @returns gesture API for list of items
 */
export function useListGesture(args: ListGestureArguments) {
  // avoid the new in the useState() fn call to avoid creating a new ListGesture instances on each calls
  const [cachedGesture, setCachedGesture] = useState<ListGesture>();
  const gesture = useMemo(() => {
    if (cachedGesture) {
      if (cachedGesture.getAllItems !== args.getAllItems) {
        cachedGesture.getAllItems = args.getAllItems;
      }
      if (cachedGesture.getSelectedItems !== args.getSelectedItems) {
        cachedGesture.getSelectedItems = args.getSelectedItems;
      }
      if (cachedGesture.loop !== args.loop && args.loop !== undefined) {
        cachedGesture.loop = args.loop;
      }
      return cachedGesture;
    }
    const newGesture = new ListGesture(args);
    setCachedGesture(newGesture);
    return newGesture;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.getAllItems, args.getSelectedItems, args.loop]);
  return gesture;
}
