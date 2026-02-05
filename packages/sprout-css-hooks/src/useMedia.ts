import { useEffect, useMemo, useState } from "react";

import sprout, { type MediaAPI } from "@qlik/sprout-css-modules";

export type UseMedia = Pick<MediaAPI, "classNames" | "get" | "getViewportSize">;
/**
 * Hook to get the current viewport size and utility methods for responsive and adaptive design
 * @returns Viewport object with current viewport size, grid gap, get and classNames methods
 * @example
 * const viewport = useMedia();
 * const gridClass = viewport.classNames({ m: ['col_span_6'], s: ['col_span_12'] }, 'my-custom-class');
 * const adaptiveBoolean = viewport.get<boolean>({ s: true, m: false });
 * const adaptiveProps = viewport.get<MyProps>({ s: { propA: 'value' }, m: { propA: 'otherValue' } });
 */
export function useMedia(): UseMedia {
  const [viewportSize, setViewportSize] = useState(sprout.media.getViewportSize());
  useEffect(() => {
    sprout.media.addListener(setViewportSize);
    return () => {
      sprout.media.removeListeners();
    };
  }, []);

  return useMemo<UseMedia>(
    () => ({
      classNames: sprout.media.classNames,
      get: sprout.media.get,
      getViewportSize: () => sprout.media.getViewportSize(),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewportSize],
  );
}
