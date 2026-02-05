import qlik from "@qlik/eslint-config";
import storybook from "eslint-plugin-storybook";

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
      "**/.prettierignore",
      "**/.storybook",
      "**/test-results",
      "playwright.config.ts",
    ],
  },
];
