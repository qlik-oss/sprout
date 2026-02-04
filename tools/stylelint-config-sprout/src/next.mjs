import baseConfig, { plugin } from "./index.mjs";

const nextRules = {
  "plugin/use-logical-properties-and-values": [true, { severity: "warning" }],
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

const plugins = Array.from(new Set([...(baseConfig?.plugins ?? []), plugin, ...nextPlugins]));

const config = {
  ...baseConfig,
  plugins,
  rules,
};

export default config;
