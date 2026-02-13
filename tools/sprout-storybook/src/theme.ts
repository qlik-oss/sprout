type ThemeInternalAPI = {
  theme?: string; // default goes qlik-light
};

type ThemeDatasetProperty = {
  qlikTheme?: string;
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

  if (element) {
    parent = {
      theme: getParentDataAttribute<string>(element, "theme"),
    };
  }
  return {
    // options || context || parent || global  || default
    theme: optionalTheme || parent.theme || "qlik-light",
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
