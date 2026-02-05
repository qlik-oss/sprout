/* eslint-disable no-redeclare */
import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import reactConfig from "@qlik/eslint-config-sprout/react";

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
  ...compat.extends("plugin:import/recommended", "plugin:import/typescript"),
  {
    rules: {
      "import/no-cycle": ["error", { maxDepth: Infinity }],
    },
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.mjs", "*.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
      },
    },
  },
];
