# @qlik/sprout-react

This package contains the react implementation of [Components 2.0](https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components) using [React](https://react.dev/) and our `@qlik/sprout-css-modules`

## How to use

You can install it as any npm dependencies in your project and start to use it.

## Create a new Component

We will list here a few guidelines about quality and API

A component must provide:

- documentation (link to figma, api, ...)
- visual tests: One VisualTest story with all possible visual combination
- [accessibility tests](https://playwright.dev/docs/accessibility-testing)

A component must avoid:

- external library that render HTML
- [context](https://react.dev/learn/passing-data-deeply-with-context) as this make the library harder to udpate.
- translations (which needs external library)
