export type Theme = {
  theme: string;
};

export type ThemeDataset = {
  qlikTheme?: string;
};

export function getTheme(
  // where do we start from
  element?: HTMLElement,
  // that is user preference on the current page (dark light)
  optionalTheme?: Theme["theme"],
): Theme {
  let parent: Partial<Theme> = {};

  if (element) {
    parent = {
      theme:
        (
          element.parentElement?.closest(
            `[data-qlik-theme]`,
          ) as HTMLElement | null
        )?.getAttribute(`data-qlik-theme`) || undefined,
    };
  }
  return {
    // options || parent  || default
    theme: optionalTheme || parent.theme || "qlik-light",
  };
}

export function themeToDataset(theme: Theme): ThemeDataset {
  return {
    qlikTheme: theme.theme,
  };
}
