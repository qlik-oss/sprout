type ThemeInternalAPI = {
  theme?: string; // default goes qlik-light
  appearance: "qlik-light" | "qlik-dark";
  density: "comfortable" | "dense" | "spacious";
  roundness: "rounded" | "sharp" | "soft";
  sizing: "mid-sized";
  typography: "source-sans";
};

type ThemeDatasetProperty = {
  qlikTheme?: string;
  qlikAppearance: ThemeInternalAPI["appearance"];
  qlikDensity: ThemeInternalAPI["density"];
  qlikRoundness: ThemeInternalAPI["roundness"];
  qlikSizing: ThemeInternalAPI["sizing"];
  qlikTypography: ThemeInternalAPI["typography"];
};

const THEME_DEFAULT: ThemeInternalAPI = {
  appearance: "qlik-light",
  density: "comfortable",
  roundness: "soft",
  sizing: "mid-sized",
  typography: "source-sans",
};

function getParentDataAttribute<T>(element: HTMLElement, attribute: string): T | undefined {
  return (
    ((element.parentElement?.closest(`[data-qlik-${attribute}]`) as HTMLElement | null)?.getAttribute(
      `data-qlik-${attribute}`,
    ) as T) || undefined
  );
}
/**
 * This function is considered private and should be used only if you know what you are doing
 * It is used to get the internal theme object from the DOM dataset property that can exists in the parents
 * @private
 */
export function getTheme(
  // where do we start from
  element?: HTMLElement,
  // that is user preference on the current page (dark light)
  optionalTheme?: string,
): ThemeInternalAPI {
  let parent: Partial<ThemeInternalAPI> = {};
  const isDark = optionalTheme ? optionalTheme.indexOf("dark") !== -1 : false;

  if (element) {
    parent = {
      theme: getParentDataAttribute<string>(element, "theme"),
      appearance: getParentDataAttribute<ThemeInternalAPI["appearance"]>(element, "appearance"),
      density: getParentDataAttribute<ThemeInternalAPI["density"]>(element, "density"),
      roundness: getParentDataAttribute<ThemeInternalAPI["roundness"]>(element, "roundness"),
      sizing: getParentDataAttribute<ThemeInternalAPI["sizing"]>(element, "sizing"),
      typography: getParentDataAttribute<ThemeInternalAPI["typography"]>(element, "typography"),
    };
  }
  let appearance: ThemeInternalAPI["appearance"];
  if (optionalTheme) {
    appearance = isDark ? "qlik-dark" : "qlik-light";
  } else {
    appearance = parent.appearance || THEME_DEFAULT.appearance;
  }
  return {
    // options || context || parent || global  || default
    theme: optionalTheme || parent.theme || "qlik-light",
    appearance,
    density: parent.density || THEME_DEFAULT.density,
    roundness: parent.roundness || THEME_DEFAULT.roundness,
    sizing: parent.sizing || THEME_DEFAULT.sizing,
    typography: parent.typography || THEME_DEFAULT.typography,
  };
}

/**
 * This function is considered private and should be used only if you know what you are doing
 * It is used to spread the theme object into the DOM dataset property
 * @private
 * @returns
 */
export function themeToDataset(theme: ThemeInternalAPI): ThemeDatasetProperty {
  return {
    qlikTheme: theme.theme,
    qlikAppearance: theme.appearance,
    qlikDensity: theme.density,
    qlikRoundness: theme.roundness,
    qlikSizing: theme.sizing,
    qlikTypography: theme.typography,
  };
}

export function applyTheme(element?: HTMLElement, theme: string = "qlik-light") {
  if (!element) {
    return;
  }
  // enforce a limitation at runtime until we have all the needs
  const themeObj = getTheme(element, theme);
  Object.assign(element.dataset, themeToDataset(themeObj));
}
