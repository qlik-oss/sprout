import qlik from "@qlik/eslint-config";

export default qlik.compose(...qlik.configs.esm, {
  rules: {
    "no-console": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    // https://tkdodo.eu/blog/array-types-in-type-script
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
  },
});
