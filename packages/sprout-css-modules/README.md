# @qlik/sprout-css-modules

This package contains CSS modules implementation of a [tailwindcss](https://tailwindcss.com/) like api. We are picking names from it to give access to sprout design-tokens in a way it is easier for everyone regardless the use of any frontend framework.

We are limiting the number of selectors to only being core class of tailwindcss. We do not want to support prefixed class like `dark:` or `md:`.

## How to use

```tsx
import sprout from "@qlik/sprout-css-modules";

// you can use sprout.classNames with React like this
function MyComponent(props) {
  return (
    <div
      className={sprout.classNames("p-m", "flex", {
        "flex-col": !!props.condition,
      })}
    >
      hello world
    </div>
  );
}
```

If you are using `@qlik/sprout-css-react` you can directly import classNames from it which is convinient because it uses a named export

```ts
import { classNames } from "@qlik/sprout-css-react";
```

## How to contribute

We will accept any classNames that exists in tailwindcss `core` as mentionned (no prefix) and that is usefull to build application on top of sprout.
