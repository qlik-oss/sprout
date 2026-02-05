# @qlik/stylelint-config-sprout

This package is a plugin, so to set it up you need to add it to your devDependencies:

```
pnpm i @qlik/stylelint-config-sprout
```

Then you can add it to your `.stylelintrc.js`:

```javascript
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules", "@qlik/stylelint-config-sprout"],
  //...
};
```

## Rules

The goal of all rules is to help team to adopt design-tokens in their stylesheet.
We will go step by step on rules but the first idea is to track hard coded value inside styles.

### sprout/no-hardcoded-values

Check size using a regexp `/[\d.]+(px|em|rem%)/`.
If found check if the prop is something else than `[min-|max-]width`, `[min-|max-]height`.

### sprout/css-variables-exists

A typo is easy to do when using tokens. This rule will shows up if you use an non existing tokens.
