import { create } from "storybook/theming";

import darkModeLogo from "./sprout-dark.png";
import logo from "./sprout-light.png";

export const LOCAL_STORAGE_KEY = "sprout-storybook-theme";

export const lightTheme = create({
  base: "light",
  brandTitle: "Sprout CSS & React",
  brandImage: logo,
  brandTarget: "_self",
  appPreviewBg: "#FFFFFF",
});

export const darkTheme = create({
  base: "dark",
  brandTitle: "Sprout CSS & React",
  brandImage: darkModeLogo,
  brandTarget: "_self",
  appPreviewBg: "#000000",
});

export const MODE = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Mode = (typeof MODE)[keyof typeof MODE];

const prefersDarkMode =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const getSystemMode = (): Mode =>
  prefersDarkMode ? MODE.DARK : MODE.LIGHT;

function getStoredMode(): Mode | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored === MODE.DARK || stored === MODE.LIGHT) {
    return stored;
  }

  const systemMode = getSystemMode();

  return systemMode;
}

export function getMode(mode?: Mode) {
  const storedMode = getStoredMode();
  const resolved = mode ?? storedMode ?? getSystemMode();

  return resolved === MODE.DARK ? darkTheme : lightTheme;
}

export function getInitialMode() {
  const storedMode = getStoredMode();
  return {
    mode: storedMode ?? getSystemMode(),
  };
}
