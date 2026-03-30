import storybook from "eslint-plugin-storybook";

import qlik from "@qlik/eslint-config";

export default [
  ...qlik.configs.esm,
  ...qlik.configs.react,
  ...qlik.configs.playwright,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      // Globally ignored rules
    },
  },
  {
    ignores: [
      "**/dist",
      "**/lib",
      "**/icons",
      "**/playwright",
      "**/playwright-report",
      "**/storybook-static",

      "**/.storybook",
      "**/test-results",
      "playwright.config.ts",
    ],
  },
];
