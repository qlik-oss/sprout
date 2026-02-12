// side effect
import "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css";
import type { Parameters, StoryContext, StoryFn } from "@storybook/react-vite";
import { addons, useEffect } from "storybook/preview-api";
import "./storybook-preview.css";
import { getTheme, themeToDataset } from "./theme";

const IS_TOUCH_KEY = "localstorageservice.deviceType";

export const sproutCSSDecorator = (Story: StoryFn, context: StoryContext): ReturnType<StoryFn> => {
  const theme = getTheme(document.body);

  // try to detect dark mode from different storybook addons
  // storybook-dark-mode addon => class = dark
  // @storybook/addon-themes => context.globals.theme = dark
  const isDark =
    context.globals.theme === "dark" ||
    document.body.classList.contains("dark") ||
    context.globals.backgrounds?.value === "dark";
  theme.theme = isDark ? "qlik-dark" : "qlik-light";
  Object.assign(document.body.dataset, themeToDataset(theme));

  const channel = addons.getChannel(); //Or use context.channel

  useEffect(() => {
    // support storybook-dark-mode addon
    const handleMyEvent = (data: boolean) => {
      document.body.dataset.qlikTheme = data ? "qlik-dark" : "qlik-light";
    };

    channel.on("DARK_MODE", handleMyEvent);

    return () => {
      channel.removeListener("DARK_MODE", handleMyEvent);
    };
  }, [channel]);

  const isTouch = context.globals.touch;
  let isTouchLocal;
  try {
    isTouchLocal = JSON.parse(localStorage.getItem(IS_TOUCH_KEY) || "{}").value?.value === "touch";
  } catch (error) {
    console.warn("Could not parse isTouch from localStorage", error);
  }

  if (typeof isTouch === "boolean" && isTouchLocal !== isTouch) {
    localStorage.setItem(IS_TOUCH_KEY, isTouch ? `{"value":{"value":"touch"}}` : `{"value":{"value":"desktop"}}`);
  }

  if (isTouch === undefined) {
    localStorage.removeItem(IS_TOUCH_KEY);
  }

  return Story({}, context);
};

export function getSproutIntialGlobals(opts?: any): Parameters["initialGlobals"] {
  return {};
}

const isTouchDevice = window.matchMedia ? window.matchMedia("(any-pointer: coarse)").matches : false;

export function getSproutGlobalTypes(opts?: any) {
  const obj: Parameters["globals"] = {
    touch: {
      description: "Enable isTouch",
      toolbar: {
        title: `Touch (${isTouchDevice})`,
        items: [
          { value: undefined, title: `Touch (${isTouchDevice})` },
          isTouchDevice ? { value: false, title: "Touch (false)" } : { value: true, title: "Touch (true)" },
        ],
        dynamicTitle: true,
      },
    },
  };
  return obj;
}
