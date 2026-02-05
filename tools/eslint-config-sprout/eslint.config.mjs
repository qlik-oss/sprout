import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.esm,
  {
    ignores: ["**/*.d.ts"],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },
);
