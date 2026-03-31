import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{DataTable as c,t as l}from"./Tokens.stories-BKiDDz8R.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{title:`Design Tokens/Introduction`}),`
`,(0,f.jsx)(n.h1,{id:`design-tokens`,children:`Design Tokens`}),`
`,(0,f.jsxs)(n.p,{children:[`In `,(0,f.jsx)(n.a,{href:`https://internal.qlik.dev/design/sprout/`,rel:`nofollow`,children:`Sprout`}),`, we use `,(0,f.jsx)(n.a,{href:`https://internal.qlik.dev/design/sprout/design-tokens/`,rel:`nofollow`,children:`design tokens`}),`.`]}),`
`,(0,f.jsxs)(n.p,{children:[`We implement tokens using `,(0,f.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/--*`,rel:`nofollow`,children:`CSS Variables`}),`. You can also read the article on `,(0,f.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties`,rel:`nofollow`,children:`Using CSS custom properties (variables)`}),` for more details.`]}),`
`,(0,f.jsx)(n.h2,{id:`source`,children:`Source`}),`
`,(0,f.jsxs)(n.p,{children:[`The tokens are managed outside of this repository in the package `,(0,f.jsx)(n.code,{children:`@qlik/design-tokens`}),`.`]}),`
`,(0,f.jsx)(n.h2,{id:`ide-extensions--developer-experience`,children:`IDE Extensions / Developer Experience`}),`
`,(0,f.jsxs)(n.p,{children:[`If you are using VSCode, we recommend trying the `,(0,f.jsx)(n.a,{href:`https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables`,rel:`nofollow`,children:`CSS Variable Autocomplete`}),` extension. It provides autocompletion for CSS variables, making it easier to work with design tokens.`]}),`
`,(0,f.jsx)(n.h2,{id:`how-to-use`,children:`How to Use`}),`
`,(0,f.jsxs)(n.p,{children:[`If you’ve followed the steps in the Getting Started guide, you’ve already used the `,(0,f.jsx)(n.code,{children:`ThemeProvider`}),`. This means you can now reference tokens directly using native CSS syntax like this:`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-css`,children:`.foo {
  color: var(--sprout-common-foreground-color-default);
  padding: var(--sprout-common-spacing-s);
  width: var(--sprout-common-sizing-3xl);
}
`})}),`
`,(0,f.jsx)(n.p,{children:`The philosophy behind tokens is to avoid relying on specific values and instead trust the semantic meaning of the tokens. As a frontend developer, your code should work seamlessly with different values, even if you don’t control them.`}),`
`,(0,f.jsx)(n.p,{children:`This doesn’t mean you shouldn’t test these values. Storybook provides an excellent way to test the changes supported by Sprout.`}),`
`,(0,f.jsxs)(n.p,{children:[`You can also use our `,(0,f.jsx)(n.a,{href:`?path=/docs/css-sprout-css-modules--docs`,children:`sprout-css-modules`}),` classNames. Here’s an example:`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-jsx`,children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return (
    <div className={classNames("flex", "bg-default", "text-default")}>
      Hello world
    </div>
  );
}
`})}),`
`,(0,f.jsx)(n.h2,{id:`tokens-data-table`,children:`Tokens Data Table`}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(a,{of:c})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),s(),i(),l()}))();export{d as default};