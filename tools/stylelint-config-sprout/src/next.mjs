import baseConfig, { plugin } from "./index.mjs";

const nextRules = {
  "logical-css/require-logical-properties": [true, { severity: "warning" }],
  "logical-css/require-logical-keywords": [true, { severity: "warning" }],
  "declaration-property-value-disallowed-list": {
    transition: ["/all/"],
  },
  "declaration-no-important": true,
};

const nextPlugins = ["stylelint-plugin-logical-css"];

const rules = {
  ...baseConfig?.rules,
  ...nextRules,
};

const plugins = Array.from(
  new Set([...(baseConfig?.plugins ?? []), plugin, ...nextPlugins])
);

const config = {
  ...baseConfig,
  plugins,
  rules,
};

export default config;
