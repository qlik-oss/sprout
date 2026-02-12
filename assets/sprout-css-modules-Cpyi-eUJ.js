import{j as e,M as r}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as t}from"./index-BtGsBDbQ.js";import"./sprout-css-modules.stories-Broo-x6y.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-CWCWYkgH.js";function o(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"CSS/sprout-css-modules"}),`
`,e.jsx(s.h1,{id:"qliksprout-css-modules",children:"@qlik/sprout-css-modules"}),`
`,e.jsx(s.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"@qlik/sprout-css-modules"}),` is our main CSS Modules that is framework independant. It's API is taken from tailwindcss and is a great way to use sprout in your application.
It decrease the size of your bundle as we reuse the same CSS over and over again by just dropping few classes. There are two ways to use it. The first is to use it directly in your framework.`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:'// First usage, framework agnostic\nimport sprout from "@qlik/sprout-css-modules";\n\nsprout.classNames("flex, bg-default", "text-default") === `${sprout.flex} ${sprout.bg_default} ${sprout.text_default}`;\n'})}),`
`,e.jsxs(s.p,{children:["The main function is ",e.jsx(s.code,{children:"classNames"})," which rely on ",e.jsx(s.a,{href:"https://www.npmjs.com/package/classnames",rel:"nofollow",children:"classnames"})," with a small difference in it's definition to provide a better experience with sprout."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`function classNames(...args: Array<ClassNameArg>): string;
`})}),`
`,e.jsx(s.p,{children:"So if you want to use your own className you can do it like this:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import style from "./myComponent.module.css";

classNames("flex", style.my_class, {
  [style.maybe_class]: condition,
});
`})}),`
`,e.jsx(s.h2,{id:"classnames",children:"classNames"}),`
`,e.jsxs(s.p,{children:["The second usage is when you already rely on ",e.jsx(s.code,{children:"@qlik/sprout-react"})," you don't need to add both package as this one re-export ",e.jsx(s.code,{children:"className"})," function for you."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return <div className={classNames("flex", "bg-default", "text-default")}>Hello world</div>;
}
`})}),`
`,e.jsx(s.h2,{id:"vscode-snippet",children:"VSCode snippet"}),`
`,e.jsxs(s.p,{children:[`Set up the following snippets to further boost your productivity.
They provide shorthand replacements for `,e.jsx(s.code,{children:"<Box>"})," and ",e.jsx(s.code,{children:"getBoxProps"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-json",children:`{
  "className-box": {
    "prefix": "classNames",
    "body": ["className={classNames(\\"flex\\", \\"border-box\\", \\"flex-row\\"$1)}"],
    "description": "add classNames={classNames(\\"flex\\", \\"flex-row\\", \\"border-box\\"$1)}"
  }
}
`})})]})}function u(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{u as default};
