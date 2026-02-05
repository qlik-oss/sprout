// for demo purpose do not rely on those two files
import { getSproutGlobalTypes, getSproutIntialGlobals, sproutCSSDecorator } from "@qlik/sprout-css-storybook";
import { Controls, Description, Primary, Stories, Subtitle, Title } from "@storybook/addon-docs/blocks";
import { type Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";

import { DocsContainer } from "./docsContainer";

const preview: Preview = {
  decorators: [sproutCSSDecorator],
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
    backgrounds: {
      values: [
        { name: "default", value: "var(--sprout-common-background-color-default)" },
        { name: "weak", value: "var(--sprout-common-background-color-weak)" },
        { name: "moderate", value: "var(--sprout-common-background-color-moderate)" },
        { name: "strong", value: "var(--sprout-common-background-color-strong)" },
        { name: "enabled", value: "var(--sprout-common-background-color-enabled)" },
      ],
      default: "weak",
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
          "Docs",
          ["Getting Started", "Design Tokens", "Components"],
          "CSS",
          "Components",
          "Integration",
          "Examples",
        ],
      },
    },
    darkMode: {
      stylePreview: true,
      current: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    },
    docs: {
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
    locale: "en",
  },
  globalTypes: {
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

MINIMAL_VIEWPORTS["xs"] = {
  name: "xs",
  styles: {
    width: "480px",
    height: "800px",
  },
  type: "mobile",
};
MINIMAL_VIEWPORTS["s"] = {
  name: "s",
  styles: {
    width: "768px",
    height: "800px",
  },
  type: "tablet",
};
MINIMAL_VIEWPORTS["m"] = {
  name: "m",
  styles: {
    width: "1280px",
    height: "1024px",
  },
  type: "desktop",
};
MINIMAL_VIEWPORTS["l"] = {
  name: "l",
  styles: {
    width: "1768px",
    height: "1280px",
  },
  type: "desktop",
};

MINIMAL_VIEWPORTS["xl"] = {
  name: "xl",
  styles: {
    width: "2160px",
    height: "1280px",
  },
  type: "desktop",
};

export default preview;
