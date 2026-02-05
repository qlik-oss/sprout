/* eslint-disable no-redeclare */
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsConfig from "@qlik/eslint-config-sprout";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const gitignorePatterns = fs
  .readFileSync(path.join(__dirname, ".gitignore"), "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

export default [
  ...tsConfig,
  {
    ignores: ["**/dist", "**/.prettierignore", "./src/flex.module.css.d.ts", ...gitignorePatterns],
  },
  ...compat.extends("plugin:import/recommended", "plugin:import/typescript"),
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
];
