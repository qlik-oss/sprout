# @qlik/eslint-plugin-sprout

ESLint plugin for Sprout CSS Kit with custom rules.

## Rules

### `no-deprecated-classnames`

Checks for deprecated className usage in `classNames()` calls and suggests replacements with the new naming conventions.

### `no-physical-properties`

Enforces CSS logical properties in inline JSX style for better internationalization support.

## Usage

This plugin is automatically configured when using `@qlik/eslint-config-sprout`.

If you want to use it directly:

```js
import sproutPlugin from "@qlik/eslint-plugin-sprout";

export default [
  {
    plugins: {
      sprout: sproutPlugin,
    },
    rules: {
      "sprout/no-deprecated-classnames": "warn",
      "sprout/no-physical-properties": "error",
    },
  },
];
```
