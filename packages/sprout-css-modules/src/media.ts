import { classNames, type SproutClassKey } from "./classNames";

export type ViewportSize = "s" | "m" | "l" | "xl";
export type Breakpoint = "s" | "m" | "l";

/**
 * Options for different viewport sizes
 * It will be used in all API around responsive and adaptive UIs
 */
export type ViewportOptions<T> = Partial<Record<ViewportSize, T>>;
type PrivateMediaAPI = {
  breakpoints: Record<Breakpoint, number>;
  queries: Record<ViewportSize, string>;
};
export type MediaAPI = {
  /**
   * This API helps to get the data structure you want based on viewport sizes.
   * @return The data attached to the current viewport size
   */
  get: <T>(options: ViewportOptions<T>) => T | undefined;
  /**
   * This is a extension of sprout.classNames to support viewport based classNames
   * @param options
   * @param className string
   * @example
   * ```ts
   * sprout.media.classNames({
   *   s: [ "flex_col" ],
   *   m: [ "flex_row" ],
   * });
   * ```
   * @return string
   */
  classNames: (options: ViewportOptions<Array<SproutClassKey> | SproutClassKey>, className?: string) => string;
  /**
   * addListener let you integrate sprout.media with your framework reactivity system.
   * It's based on native matchMedia API.
   * @param listener function called when viewport size change with the current ViewportSize
   * @example
   * ```ts
   * const [ viewportSize, setViewportSize ] = useState<ViewportSize>(sprout.media.getViewportSize());
   * useEffect(() => {
   *   sprout.media.addListener((newViewportSize) => {
   *     setViewportSize(newViewportSize);
   *   });
   *   return () => {
   *     sprout.media.removeListeners();
   *   }
   * });
   */
  addListener: (listener: (viewportSize: ViewportSize) => void) => void;
  /**
   * removeListeners will remove all listeners added with addListener
   */
  removeListeners: () => void;
  /**
   * @return the current viewport size based on the system definition of it
   */
  getViewportSize: () => ViewportSize;
};

function getFirstDefined<T>(name: ViewportSize, s: T, m: T, l: T, xl: T): T {
  switch (name) {
    case "s":
      return s ?? m ?? l ?? xl;
    case "m":
      return m ?? s ?? l ?? xl;
    case "l":
      return l ?? m ?? s ?? xl;
    case "xl":
      return xl ?? l ?? m ?? s;
    default:
      return s ?? m ?? l ?? xl;
  }
}

function getTokenValue(token: string, element?: HTMLElement): number {
  const value = getComputedStyle(element || document.documentElement).getPropertyValue(token);
  // replace any letter in the value
  return parseInt(value.replace(/[^\d]/g, ""), 10);
}

function getInternals(): Pick<PrivateMediaAPI, "breakpoints" | "queries"> {
  const breakpoints: PrivateMediaAPI["breakpoints"] = {
    s: getTokenValue("--sprout-container-breakpoint-s", document.documentElement), // 640
    m: getTokenValue("--sprout-container-breakpoint-m", document.documentElement), // 1024
    l: getTokenValue("--sprout-container-breakpoint-l", document.documentElement), // 1600
  };
  const queries: PrivateMediaAPI["queries"] = {
    s: `(max-width: ${breakpoints.s - 0.02}px)`,
    m: `(min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 0.02}px)`,
    l: `(min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 0.02}px)`,
    xl: `(min-width: ${breakpoints.l}px)`,
  };
  return { breakpoints, queries };
}

class MediaConstructor implements MediaAPI {
  breakpoints: Record<Breakpoint, number>;
  queries: Record<ViewportSize, string>;
  size?: ViewportSize;
  listeners: Array<() => void> = [];
  _listeners: Array<(viewportSize: ViewportSize) => void> = [];

  constructor() {
    this.listeners = [];
    const internals = getInternals();
    this.breakpoints = internals.breakpoints;
    this.queries = internals.queries;
    // add on load event to wait for CSS
    if (Number.isNaN(this.breakpoints.s)) {
      window.addEventListener("load", () => {
        const loadedInternals = getInternals();
        this.breakpoints = loadedInternals.breakpoints;
        this.queries = loadedInternals.queries;
        this._listeners.forEach((listener) => {
          listener(this.getViewportSize());
        });
      });
    }
  }

  addListener(setSize: (viewportSize: ViewportSize) => void) {
    this._listeners.push(setSize);
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!window.matchMedia) {
      return;
    }
    Object.entries(this.queries).forEach(([key, query]) => {
      const media = window.matchMedia(query);
      if (media.matches) {
        this.size = key as ViewportSize;
      }
      const listener = (event: MediaQueryListEvent) => {
        if (event.matches) {
          setSize(key as ViewportSize);
          this.size = key as ViewportSize;
        }
      };
      media.addEventListener("change", listener);
      this.listeners.push(() => {
        media.removeEventListener("change", listener);
      });
    });
    // we watch change but still need to do an initial call to the listener
    setSize(this.getViewportSize());
  }

  removeListeners() {
    this.listeners.forEach((removeListener) => {
      removeListener();
    });
    this.listeners = [];
  }

  getViewportSize(): ViewportSize {
    if (Number.isNaN(this.breakpoints.s)) {
      return "s";
    }
    if (this.size) {
      return this.size;
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!window.matchMedia) {
      return "s";
    }
    const all: Record<ViewportSize, boolean> = {
      s: window.matchMedia(this.queries.s).matches,
      m: window.matchMedia(this.queries.m).matches,
      l: window.matchMedia(this.queries.l).matches,
      xl: window.matchMedia(this.queries.xl).matches,
    };
    return Object.keys(all).find((key) => all[key as ViewportSize]) as ViewportSize;
  }

  get<T>({ s, m, l, xl }: Partial<Record<ViewportSize, T>>): T | undefined {
    const output = getFirstDefined<T | undefined>(this.getViewportSize(), s, m, l, xl);
    return output;
  }

  // Generic method directly in object
  classNames(
    options: Partial<Record<ViewportSize, Array<SproutClassKey> | SproutClassKey>>,
    className?: string,
  ): string {
    const normalizeClasses = (
      value: Array<SproutClassKey> | SproutClassKey | undefined,
    ): Array<SproutClassKey> | undefined => {
      if (value === undefined) return undefined;
      return Array.isArray(value) ? value : [value];
    };
    const safeArgs = {
      s: normalizeClasses(options.s),
      m: normalizeClasses(options.m),
      l: normalizeClasses(options.l),
      xl: normalizeClasses(options.xl),
    };
    return (
      this.get<string>({
        s: safeArgs.s ? classNames(...safeArgs.s, { [className || ""]: !!className }) : undefined,
        m: safeArgs.m ? classNames(...safeArgs.m, { [className || ""]: !!className }) : undefined,
        l: safeArgs.l ? classNames(...safeArgs.l, { [className || ""]: !!className }) : undefined,
        xl: safeArgs.xl ? classNames(...safeArgs.xl, { [className || ""]: !!className }) : undefined,
      }) || ""
    );
  }
}

export const media = new MediaConstructor();
