import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./lib-yrlbDAAk.js";import{DataTable as a}from"./Tokens.stories-ChuxVrDm.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{title:`Design Tokens/Introduction`}),`
`,(0,o.jsx)(s.h1,{id:`design-tokens`,children:`Design Tokens`}),`
`,(0,o.jsxs)(s.p,{children:[`In `,(0,o.jsx)(s.a,{href:`https://internal.qlik.dev/design/sprout/`,rel:`nofollow`,children:`Sprout`}),`, we use `,(0,o.jsx)(s.a,{href:`https://internal.qlik.dev/design/sprout/design-tokens/`,rel:`nofollow`,children:`design tokens`}),`.`]}),`
`,(0,o.jsxs)(s.p,{children:[`We implement tokens using `,(0,o.jsx)(s.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/--*`,rel:`nofollow`,children:`CSS Variables`}),`. You can also read the article on `,(0,o.jsx)(s.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties`,rel:`nofollow`,children:`Using CSS custom properties (variables)`}),` for more details.`]}),`
`,(0,o.jsx)(s.h2,{id:`source`,children:`Source`}),`
`,(0,o.jsxs)(s.p,{children:[`The tokens are managed outside of this repository in the package `,(0,o.jsx)(s.code,{children:`@qlik/design-tokens`}),`.`]}),`
`,(0,o.jsx)(s.h2,{id:`ide-extensions--developer-experience`,children:`IDE Extensions / Developer Experience`}),`
`,(0,o.jsxs)(s.p,{children:[`If you are using VSCode, we recommend trying the `,(0,o.jsx)(s.a,{href:`https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables`,rel:`nofollow`,children:`CSS Variable Autocomplete`}),` extension. It provides autocompletion for CSS variables, making it easier to work with design tokens.`]}),`
`,(0,o.jsx)(s.h2,{id:`how-to-use`,children:`How to Use`}),`
`,(0,o.jsxs)(s.p,{children:[`If you’ve followed the steps in the Getting Started guide, you’ve already used the `,(0,o.jsx)(s.code,{children:`ThemeProvider`}),`. This means you can now reference tokens directly using native CSS syntax like this:`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-css`,children:`.foo {
  color: var(--sprout-common-foreground-color-default);
  padding: var(--sprout-common-spacing-s);
  width: var(--sprout-common-sizing-3xl);
}
`})}),`
`,(0,o.jsx)(s.p,{children:`The philosophy behind tokens is to avoid relying on specific values and instead trust the semantic meaning of the tokens. As a frontend developer, your code should work seamlessly with different values, even if you don’t control them.`}),`
`,(0,o.jsx)(s.p,{children:`This doesn’t mean you shouldn’t test these values. Storybook provides an excellent way to test the changes supported by Sprout.`}),`
`,(0,o.jsxs)(s.p,{children:[`You can also use our `,(0,o.jsx)(s.a,{href:`?path=/docs/css-sprout-css-modules--docs`,children:`sprout-css-modules`}),` classNames. Here’s an example:`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-jsx`,children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return (
    <div className={classNames("flex", "bg-default", "text-default")}>
      Hello world
    </div>
  );
}
`})}),`
`,(0,o.jsx)(s.h2,{id:`tokens-data-table`,children:`Tokens Data Table`}),`
`,(0,o.jsx)(t,{of:a}),`
`,(0,o.jsx)(n,{of:a})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};