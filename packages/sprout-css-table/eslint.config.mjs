/* eslint-disable no-redeclare */
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
// eslint-disable-next-line import/no-unresolved
import reactConfig from "@qlik/eslint-config-sprout/react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...reactConfig,
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
    ],
  },

  ...compat.extends(
    "plugin:import/recommended",
    "plugin:import/typescript",
    // too much false positive with this one
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ),
  {
    rules: {
      "react/prop-types": "off",
      "no-console": "error",
    },
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        defaultProject: "tsconfig.eslint.json",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
