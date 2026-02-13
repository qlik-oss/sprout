# Design Tokens

This is a repository stores the single source of truth for tokens `/tokens` and the generated output in all the following formats: css, js, json.

---

## How to run and try it out

`pnpm gen-tokens` will compile together a token set from the default values for all token-modules.

You can open the `token-test.html` locally to see the result of the default token configuration and modify the imports to run against custom modules.

## How it works

The token source is owned and updated by the System Design team through a Figma extension called [Token Studio](https://tokens.studio/). We are using the package `@qlik/sprout-cli` to generate the output.
