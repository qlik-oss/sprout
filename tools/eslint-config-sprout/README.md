# @qlik/eslint-config-sprout

This package is a plugin, so to set it up you need to add it to your devDependencies:

```
pnpm i @qlik/eslint-config-sprout
```

## Configurations

We have multiple entry points:

- `default` for only ts project without react
- `react` for sprout ts project with react
- `rules` with only sprout related rules

### Default

> This config builds upon and extends the shared [@qlik/eslint-config](https://github.com/qlik-oss/dev-tools-js/tree/main/packages/eslint-config)

Then you can add it to your `eslint.config.mjs`:

```javascript
// General ESLint rules
import sproutConfig from "@qlik/eslint-config-sprout";

export default [
  ...sproutConfig,
  //...
];
```

### React

```javascript
// React specific rules
import sproutReactConfig from "@qlik/eslint-config-sprout/react";

export default [
  ...sproutReactConfig,
  //...
];
```

> **Note:** The React config already extends the base Sprout config, so you don't need to include both.

### Rules

This package comes with **only** `@qlik/eslint-plugin-sprout` which define all the specific rules of sprout and configure them.

This one is the recommended for any react project that already have an eslint config and would like to introduce sprout.

```javascript
// React specific rules
import sproutConfig from "@qlik/eslint-config-sprout/rules";

export default [
  ...sproutConfig,
  //...
];
```
