import sproutPlugin from "@qlik/eslint-plugin-sprout";
import qlik from "@qlik/eslint-config";
import eslintReactPlugin from "eslint-plugin-react";
import base from "./index.mjs";

export default qlik.compose(...base, ...qlik.configs.react, ...qlik.configs.playwright, {
  plugins: {
    sprout: sproutPlugin,
    react: eslintReactPlugin,
  },
  rules: {
    "react/prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: ["arrow-function", "function-expression"],
      },
    ],
    "react/display-name": "error",
    "sprout/no-physical-properties": "error",
    "sprout/no-deprecated-classnames": "warn",
  },
});
