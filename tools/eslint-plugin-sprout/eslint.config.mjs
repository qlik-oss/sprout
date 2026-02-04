import qlik from "@qlik/eslint-config";

export default qlik.compose(...qlik.configs.esm, {
  rules: {
    "no-console": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
  },
});
