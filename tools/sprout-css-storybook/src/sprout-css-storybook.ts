import type { Parameters, StoryContext, StoryFn } from "@storybook/react-vite";
import { addons, useEffect } from "storybook/preview-api";
import "./storybook-preview.css";

// side effect
import "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css";

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
function getTheme(
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
function themeToDataset(theme: ThemeInternalAPI): ThemeDatasetProperty {
  return {
    qlikTheme: theme.theme,
    qlikAppearance: theme.appearance,
    qlikDensity: theme.density,
    qlikRoundness: theme.roundness,
    qlikSizing: theme.sizing,
    qlikTypography: theme.typography,
  };
}

function assignIfDefined(target: Record<string, string>, key: string, value: string | undefined) {
  if (value !== undefined) {
    target[key] = value;
  }
}

const IS_TOUCH_KEY = "localstorageservice.deviceType";

export const sproutCSSDecorator = (Story: StoryFn, context: StoryContext): ReturnType<StoryFn> => {
  const theme = getTheme(document.body);

  assignIfDefined(theme, "density", context.globals.density);
  assignIfDefined(theme, "roundness", context.globals.roundness);
  assignIfDefined(theme, "typography", context.globals.typography);
  // try to detect dark mode from different storybook addons
  // storybook-dark-mode addon => class = dark
  // @storybook/addon-themes => context.globals.theme = dark
  const isDark =
    context.globals.theme === "dark" ||
    document.body.classList.contains("dark") ||
    context.globals.backgrounds?.value === "dark";
  theme.appearance = isDark ? "qlik-dark" : context.globals.appearance || "qlik-light";
  Object.assign(document.body.dataset, themeToDataset(theme));

  const channel = addons.getChannel(); //Or use context.channel

  useEffect(() => {
    // support storybook-dark-mode addon
    const handleMyEvent = (data: boolean) => {
      document.body.dataset.qlikAppearance = data ? "qlik-dark" : "qlik-light";
      context.globals.appearance = data ? "qlik-dark" : "qlik-light";
      // should I send a message back to the channel?
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

type SproutGlobalTypesArgs = {
  appearance: boolean;
};

export function getSproutIntialGlobals(opt: SproutGlobalTypesArgs): Parameters["initialGlobals"] {
  const obj: Parameters["initialGlobals"] = {
    density: "comfortable",
    roundness: "soft",
    typography: "source-sans",
  };
  if (opt?.appearance !== false) {
    obj.appearance = "qlik-light";
  }
  return obj;
}

const isTouchDevice = window.matchMedia ? window.matchMedia("(any-pointer: coarse)").matches : false;

export function getSproutGlobalTypes(opt: SproutGlobalTypesArgs) {
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
    density: {
      description: "choose density of the display",
      toolbar: {
        title: "Density",
        dynamicTitle: true,
        items: [
          { value: "comfortable", title: "Comfortable" },
          { value: "dense", title: "Dense" },
          { value: "spacious", title: "Spacious" },
        ],
      },
    },
    roundness: {
      description: "choose roundness of the display",
      toolbar: {
        title: "Roundness",
        dynamicTitle: true,
        items: [
          { value: "rounded", title: "Rounded" },
          { value: "sharp", title: "Sharp" },
          { value: "soft", title: "Soft" },
        ],
      },
    },
    typography: {
      description: "choose typography of the display",
      toolbar: {
        title: "Typography",
        dynamicTitle: true,
        items: [
          { value: "source-sans", title: "Source Sans Pro" },
          { value: "inter", title: "Inter" },
        ],
      },
    },
  };
  if (opt?.appearance !== false) {
    obj.appearance = {
      description: "choose appearance of the display",
      toolbar: {
        title: "Appearance",
        dynamicTitle: true,
        items: [
          { value: undefined, title: "Auto" },
          { value: "qlik-light", title: "Light" },
          { value: "qlik-dark", title: "Dark" },
        ],
      },
    };
  }
  return obj;
}
