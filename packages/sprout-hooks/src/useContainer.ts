import { useLayoutEffect, useRef, useState } from "react";

import sprout, { type BoxSizing, type ContainerSize } from "@qlik/sprout-css-modules";

export type UseContainerProps = {
  boxSizing?: BoxSizing;
  initialSize?: ContainerSize;
};

/**
 * React hook that tracks the width of a DOM node and exposes helpers that are
 * aware of the current **container size** ("xxs" → "4xl") from
 * `@qlik/sprout-css-modules`.
 *
 * Attach the returned `ref` to a container element. The hook uses a
 * `ResizeObserver` internally (via `sprout.widthObserver`) to keep the active
 * size in sync, and then returns the `get()` and `classNames()` helpers from
 * `sprout.createContainer(size, element)`.
 *
 * @template T extends HTMLElement
 * @param {UseContainerProps} [props]
 * @param {BoxSizing} [props.boxSizing="content-box"]
 *   Which box model to measure. Use `"border-box"` if your layout is based on the border box; defaults to `"content-box"`.
 *
 * @returns {{
 *   ref: RefObject<T>,
 *   get: <U>(options: Partial<Record<ContainerSize, U>>) => U,
 *   classNames: (options: Partial<Record<ContainerSize, string | string[]>>, className?: string) => string
 * }} An object with:
 * - `ref`: attach to the element whose width determines the container size.
 * - `get(options)`: selects a value for the current size.
 * - `classNames(options, className?)`: composes class names for the current size,
 *   optionally merging a base `className`.
 *
 *
 * @example
 * const container = useContainer();
 *
 * return (
 *  <div ref={container.ref}>
 *    <Button justified={container.get<boolean>({ xxs: true, m: false })} />;
 *  </div>
 * )
 *
 * @see sprout.createContainer
 * @see sprout.widthObserver
 */
export function useContainer<T extends HTMLElement = HTMLDivElement>({
  boxSizing,
  initialSize = "s",
}: UseContainerProps = {}) {
  const [size, setSize] = useState<ContainerSize>(initialSize);
  const ref = useRef<T>(null);
  const prevSize = useRef<string | null>(null);

  const [container, setContainer] = useState(() => sprout.createContainer(initialSize, null));

  useLayoutEffect(() => {
    setContainer(sprout.createContainer(size, ref.current));
  }, [size]);

  useLayoutEffect(() => {
    // box defaults to "content-box" in `sprout.widthObserver`
    const observer = sprout.widthObserver(() => ref.current, {
      boxSizing,
      onResize: (newWidth: number | undefined) => {
        if (typeof newWidth === "undefined") return;
        const nextSize = container.match(newWidth);
        if (prevSize.current !== nextSize) {
          prevSize.current = nextSize;
          setSize(nextSize);
        }
      },
    });

    observer.observe();

    return () => {
      observer.disconnect();
    };
  }, [boxSizing, container]);

  return {
    ref,
    get: container.get,
    classNames: container.classNames,
  };
}
