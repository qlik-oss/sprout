export default {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules", "@qlik/stylelint-config-sprout/next"],
  rules: {
    "color-named": "always-where-possible",
    "declaration-block-no-duplicate-properties": true,
    "function-calc-no-unspaced-operator": true,
    "max-nesting-depth": 5,
    "selector-class-pattern": ["^(?!_).*$", { resolveNestedSelectors: true }],
    "selector-id-pattern": "^(?!_).*$",
    "selector-max-compound-selectors": null,
    "selector-max-id": null,
    "selector-no-qualifying-type": [true, { ignore: ["attribute"] }],
  },
};
