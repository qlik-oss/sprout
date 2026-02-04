import importConfig from "eslint-plugin-import";

import qlik from "@qlik/eslint-config";
import reactConfig from "@qlik/eslint-config-sprout/react";

export default qlik.compose(...reactConfig, importConfig.flatConfigs.recommended, {
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
  rules: {
    "import/no-cycle": ["error", { maxDepth: Infinity }],
  },
  languageOptions: {
    ecmaVersion: 5,
    sourceType: "script",

    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.js", "*.mjs"],
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
});
