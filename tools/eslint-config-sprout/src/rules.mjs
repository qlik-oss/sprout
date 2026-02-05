import sproutPlugin from "@qlik/eslint-plugin-sprout";

export default {
  plugins: {
    sprout: sproutPlugin,
  },
  rules: {
    "sprout/no-physical-properties": "error",
    "sprout/no-deprecated-classnames": "warn",
  },
};
