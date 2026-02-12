# @qlik/sprout-storybook

This package is here to help you setup your storybook quickly.

```bash
pnpm i @qlik/sprout-storybook @storybook/react-vite storybook"
```

Then you can go to your `preview.ts` file and add the following

```typescript
import { getSproutIntialGlobals, getSproutGlobalTypes, sproutCSSDecorator } from "@qlik/sprout-storybook";

const preview: Preview = {
  decorators: [
    sproutCSSDecorator, // inject the theme
    ...
  ],
  initialGlobals: {
    ...getSproutIntialGlobals(),
  },
  globalTypes: {
    ...getSproutGlobalTypes(), // inject the toolbar globals
  }
```

Note: this addon play well with `storybook-dark-mode` and `@storybook/addon-themes`.
