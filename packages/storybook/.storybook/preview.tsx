// for demo purpose do not rely on those two files
import { StrictMode, useEffect, useState } from "react";
import { MINIMAL_VIEWPORTS, type ViewportMap } from "storybook/viewport";

import { ThemeProvider as SproutThemeProvider } from "@qlik/sprout-react";
import {
  getSproutGlobalTypes,
  getSproutIntialGlobals,
  sproutCSSDecorator,
} from "@qlik/sprout-storybook";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs/blocks";
import type { Preview } from "@storybook/react";

import { DocsContainer } from "./docsContainer";
import { getInitialMode, getMode, getSystemMode } from "./theme";

const CUSTOM_VIEWPORTS: ViewportMap = {
  s: {
    name: "s",
    styles: {
      width: "480px",
      height: "800px",
    },
    type: "mobile",
  },
  m: {
    name: "m",
    styles: {
      width: "768px",
      height: "800px",
    },
    type: "tablet",
  },
  l: {
    name: "l",
    styles: {
      width: "1280px",
      height: "1024px",
    },
    type: "desktop",
  },
  xl: {
    name: "xl",
    styles: {
      width: "1768px",
      height: "1280px",
    },
    type: "desktop",
  },
};

const preview: Preview = {
  decorators: [
    sproutCSSDecorator,
    (Story, context) => {
      const [lang, setLang] = useState(context.globals.locale);
      const [previewTheme, setPreviewTheme] = useState<
        "qlik-dark" | "qlik-light"
      >("qlik-light");

      useEffect(() => {
        const contextMode = context.globals.mode;
        const newBgColor = getMode(contextMode).appPreviewBg;
        let appearance: "dark" | "light";

        if (contextMode === "dark" || contextMode === "light") {
          appearance = contextMode;
        } else {
          appearance = getSystemMode();
        }

        if (previewTheme !== `qlik-${appearance}`) {
          setPreviewTheme(`qlik-${appearance}`);
        }

        if (typeof document !== "undefined") {
          document.body.style.backgroundColor = newBgColor;
          document.body.setAttribute(
            "data-qlik-appearance",
            `qlik-${appearance}`
          );
          document.body.setAttribute("data-qlik-theme", `qlik-${appearance}`);
        }
      }, [context.globals.mode, previewTheme]);

      useEffect(() => {
        const contextLng = context.globals.locale;
        if (contextLng !== lang) {
          setLang(contextLng);
        }
        if (contextLng && contextLng !== document.documentElement.lang) {
          document.documentElement.lang = contextLng;
        }
      }, [lang, context.globals.locale]);

      return (
        <StrictMode>
          <SproutThemeProvider theme={previewTheme}>
            <Story />
          </SproutThemeProvider>
        </StrictMode>
      );
    },
  ],
  parameters: {
    chromatic: {
      diffThreshold: 0.04, // default is 0.06
    },
    viewport: {
      options: {
        ...CUSTOM_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: {
        method: "alphabetical",
        locales: "en-EN",
        order: [
          "Getting Started",
          "Design Tokens",
          ["Introduction", "All Tokens"],
          "Icons",
          ["UsingTheIcons"],
          "css",
          ["Tokens", "sprout-css-modules"],
          "Components",
          ["Overview"],
          "table",
          ["Getting Started", "Columns", "Rows", "Cell", "Editing", "Sorting"],
          "Integration",
          "Examples",
          "Migration",
        ],
      },
    },
    docs: {
      codePanel: true,
      container: DocsContainer,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  initialGlobals: {
    ...getSproutIntialGlobals({ appearance: false }),
    ...getInitialMode(),
    locale: "en",
  },
  globalTypes: {
    mode: {
      description: "Toggle between dark and light mode",
      toolbar: {
        icon: "mirror",
        dynamicTitle: true,
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
    ...getSproutGlobalTypes({ appearance: false }),
    locale: {
      description: "Internationalization locale",
      toolbar: {
        title: "Locale",
        dynamicTitle: true,
        items: [
          { value: "en", right: "🇺🇸", title: "English" },
          { value: "de", right: "🇩🇪", title: "Deutsch" },
          { value: "fr", right: "🇫🇷", title: "Français" },
          { value: "it", right: "🇮🇹", title: "Italiano" },
          { value: "ja", right: "🇯🇵", title: "日本語" },
          { value: "ko", right: "🇰🇷", title: "한국어" },
          { value: "nl", right: "🇳🇱", title: "Nederlands" },
          { value: "pl", right: "🇵🇱", title: "Polski" },
          { value: "pt", right: "🇵🇹", title: "Português" },
          { value: "ru", right: "🇷🇺", title: "Русский" },
          { value: "sv", right: "🇸🇪", title: "Svenska" },
          { value: "tr", right: "🇹🇷", title: "Türkçe" },
          { value: "zh-CN", right: "🇨🇳", title: "简体中文" },
          { value: "zh-TW", right: "🇹🇼", title: "繁體中文" },
        ],
      },
    },
  },
};

export default preview;
