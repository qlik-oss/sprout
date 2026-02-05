import { classNames, type SproutClassKey } from "./classNames";

export type ContainerSize = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl";
export type ContainerSizeBreakpoints = Record<ContainerSize, number>;
export type ContainerOptions<T> = Partial<Record<ContainerSize, T>>;
export type CreateContainerAPI = (
  containerSize: ContainerSize,
  element?: Element | null,
) => {
  classNames: (options: ContainerOptions<Array<SproutClassKey> | SproutClassKey>, className?: string) => string;
  get: <T>(options: ContainerOptions<T>) => T;
  match: (width: number, element?: Element | null) => ContainerSize;
};

/**
 * Creates a container helper bound to a specific container size (e.g. "s", "m", "xl").
 *
 * The returned API lets you:
 * - Select a value based on the current container size via `get()`.
 * - Compose class names for the active size via `classNames()`.
 * - Compute which container size a given numeric width maps to via `match()`.
 *
 * Size thresholds are read from CSS custom properties on the provided `element` (or `document.documentElement`):
 * `--sprout-container-sizing-xxs`, `--sprout-container-sizing-xs`, `--sprout-container-sizing-s`,
 * `--sprout-container-sizing-m`, `--sprout-container-sizing-l`, `--sprout-container-sizing-xl`,
 * `--sprout-container-sizing-xxl`, `--sprout-container-sizing-3xl`, `--sprout-container-sizing-4xl`.
 *
 * @param {ContainerSize} size
 *   The container size context to bind this helper to ("xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl").
 *
 * @param {Element | null} [element]
 *   Optional element whose computed styles hold the container sizing CSS variables.
 *   Defaults to `document.documentElement` if not provided.
 *
 * @returns {{
 *   classNames: (options: Partial<Record<ContainerSize, Array<SproutClassKey> | SproutClassKey>>, className?: string) => string;
 *   get: <T>(options: Partial<Record<ContainerSize, T>>) => T;
 *   match: (width: number, element?: Element | null) => keyof Record<ContainerSize, number>;
 * }}
 *   An object with three methods:
 *   - `classNames(options, className?)`: Returns a space-delimited string of classes for the active size.
 *      You may pass a single class or an array for each size key. If a key is missing for the current size,
 *      the function falls back to progressively smaller/larger sizes until a value is found.
 *   - `get(options)`: Selects and returns the value for the active size using the same fallback order as `classNames()`.
 *   - `match(width, element?)`: Returns the `ContainerSize` key that the provided `width` maps to, using the CSS
 *      variables read from `element` (or `document.documentElement`).
 *
 * @example
 * const container = sprout.createContainer(size, element);
 *
 *<div
 *  className={container.classNames(
 *    {
 *      xxs: ["grid_cols_1", "gap_s"],
 *      xs: ["grid_cols_2", "gap_s"],
 *      s: ["grid_cols_3", "gap_m"],
 *      m: ["grid_cols_4", "gap_m"],
 *      l: ["grid_cols_5", "gap_l"],
 *      xl: ["grid_cols_6", "gap_l"],
 *      xxl: ["grid_cols_7", "gap_xl"],
 *      "3xl": ["grid_cols_8", "gap_xl"],
 *      "4xl": ["grid_cols_9", "gap_xl"],
 *    },
 *    sprout.classNames("grid", "border_box", "p_m"),
 *   )}
 * >
 */
export const createContainer: CreateContainerAPI = (size, element) => {
  const container = {
    get<T>({ xxs, xs, s, m, l, xl, xxl, "3xl": threeXl, "4xl": fourXl }: ContainerOptions<T>): T {
      switch (size) {
        case "xxs":
          return (xxs ?? xs ?? s ?? m ?? l ?? xl ?? xxl ?? threeXl ?? fourXl) as T;
        case "xs":
          return (xs ?? xxs ?? s ?? m ?? l ?? xl ?? xxl ?? threeXl ?? fourXl) as T;
        case "s":
          return (s ?? xs ?? xxs ?? m ?? l ?? xl ?? xxl ?? threeXl ?? fourXl) as T;
        case "m":
          return (m ?? s ?? xs ?? xxs ?? l ?? xl ?? xxl ?? threeXl ?? fourXl) as T;
        case "l":
          return (l ?? m ?? s ?? xs ?? xxs ?? xl ?? xxl ?? threeXl ?? fourXl) as T;
        case "xl":
          return (xl ?? l ?? m ?? s ?? xs ?? xxs ?? xxl ?? threeXl ?? fourXl) as T;
        case "xxl":
          return (xxl ?? xl ?? l ?? m ?? s ?? xs ?? xxs ?? threeXl ?? fourXl) as T;
        case "3xl":
          return (threeXl ?? xxl ?? xl ?? l ?? m ?? s ?? xs ?? xxs ?? fourXl) as T;
        case "4xl":
        default:
          return (fourXl ?? threeXl ?? xxl ?? xl ?? l ?? m ?? s ?? xs ?? xxs) as T;
      }
    },
    classNames(
      {
        xxs,
        xs,
        s,
        m,
        l,
        xl,
        xxl,
        "3xl": threeXl,
        "4xl": fourXl,
      }: ContainerOptions<Array<SproutClassKey> | SproutClassKey>,
      className?: string,
    ) {
      const safeArgs = {
        xxs: normalizeArg(xxs),
        xs: normalizeArg(xs),
        s: normalizeArg(s),
        m: normalizeArg(m),
        l: normalizeArg(l),
        xl: normalizeArg(xl),
        xxl: normalizeArg(xxl),
        "3xl": normalizeArg(threeXl),
        "4xl": normalizeArg(fourXl),
      };
      return container.get<string>({
        xxs: safeArgs.xxs ? classNames(...safeArgs.xxs, { [className || ""]: !!className }) : "",
        xs: safeArgs.xs ? classNames(...safeArgs.xs, { [className || ""]: !!className }) : "",
        s: safeArgs.s ? classNames(...safeArgs.s, { [className || ""]: !!className }) : "",
        m: safeArgs.m ? classNames(...safeArgs.m, { [className || ""]: !!className }) : "",
        l: safeArgs.l ? classNames(...safeArgs.l, { [className || ""]: !!className }) : "",
        xl: safeArgs.xl ? classNames(...safeArgs.xl, { [className || ""]: !!className }) : "",
        xxl: safeArgs.xxl ? classNames(...safeArgs.xxl, { [className || ""]: !!className }) : "",
        "3xl": safeArgs["3xl"] ? classNames(...safeArgs["3xl"], { [className || ""]: !!className }) : "",
        "4xl": safeArgs["4xl"] ? classNames(...safeArgs["4xl"], { [className || ""]: !!className }) : "",
      });
    },
  };

  return {
    classNames(
      {
        xxs,
        xs,
        s,
        m,
        l,
        xl,
        xxl,
        "3xl": threeXl,
        "4xl": fourXl,
      }: ContainerOptions<Array<SproutClassKey> | SproutClassKey>,
      className?: string,
    ) {
      return container.classNames({ xxs, xs, s, m, l, xl, xxl, "3xl": threeXl, "4xl": fourXl }, className);
    },
    get<U>({ xxs, xs, s, m, l, xl, xxl, "3xl": threeXl, "4xl": fourXl }: ContainerOptions<U>): U {
      return container.get<U>({
        xxs,
        xs,
        s,
        m,
        l,
        xl,
        xxl,
        "3xl": threeXl,
        "4xl": fourXl,
      });
    },
    match(width: number): ContainerSize {
      const tokens = getContainerTokens(element);
      return getContainerSize(width, tokens);
    },
  };
};

//#region helpers
function getTokenValue(token: string, el?: Element | null): number {
  const target = el ?? document.documentElement;
  const value = getComputedStyle(target).getPropertyValue(token);

  return parseFloat(value);
}

function normalizeArg<T>(v: T | Array<T> | undefined): Array<T> | undefined {
  if (v === undefined) return undefined;
  return Array.isArray(v) ? v : [v];
}

function getContainerTokens(el?: Element | null): ContainerSizeBreakpoints {
  return {
    xxs: getTokenValue("--sprout-container-sizing-xxs", el),
    xs: getTokenValue("--sprout-container-sizing-xs", el),
    s: getTokenValue("--sprout-container-sizing-s", el),
    m: getTokenValue("--sprout-container-sizing-m", el),
    l: getTokenValue("--sprout-container-sizing-l", el),
    xl: getTokenValue("--sprout-container-sizing-xl", el),
    xxl: getTokenValue("--sprout-container-sizing-xxl", el),
    "3xl": getTokenValue("--sprout-container-sizing-3xl", el),
    "4xl": getTokenValue("--sprout-container-sizing-4xl", el),
  };
}

function getContainerSize(width: number, widths: ContainerSizeBreakpoints): ContainerSize {
  if (width < widths.xs) return "xxs";
  if (width < widths.s) return "xs";
  if (width < widths.m) return "s";
  if (width < widths.l) return "m";
  if (width < widths.xl) return "l";
  if (width < widths.xxl) return "xl";
  if (width < widths["3xl"]) return "xxl";
  if (width < widths["4xl"]) return "3xl";
  return "4xl";
}
//#endregion
