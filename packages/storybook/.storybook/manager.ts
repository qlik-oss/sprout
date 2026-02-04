import { addons } from "storybook/manager-api";

import favicon from "./favicon.png";
import {
  LOCAL_STORAGE_KEY,
  MODE,
  type Mode,
  darkTheme,
  getMode,
  lightTheme,
} from "./theme";

addons.setConfig({
  theme: getMode(),
});

addons.register("sprout-css/mode-switcher", () => {
  const channel = addons.getChannel();

  channel.on("globalsUpdated", ({ globals }) => {
    const mode = globals.mode as Mode;

    if (mode === MODE.DARK || mode === MODE.LIGHT) {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, mode);

      addons.setConfig({
        theme: mode === MODE.DARK ? darkTheme : lightTheme,
      });
    }
  });
});

const link = document.querySelector<HTMLLinkElement>(`link[rel="icon"]`);
if (link) {
  link.setAttribute("type", "image/png");
  link.setAttribute("href", favicon);
  document.head.appendChild(link);
}
