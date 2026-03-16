import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{s as t}from"./iframe-BRSAI4nO.js";import{n}from"./lib-EjdzwnHJ.js";import"./sprout-css-modules.stories-DUDUoL6e.js";var r=e();function i(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`CSS/sprout-css-modules`}),`
`,(0,r.jsx)(i.h1,{id:`qliksprout-css-modules`,children:`@qlik/sprout-css-modules`}),`
`,(0,r.jsx)(i.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:`@qlik/sprout-css-modules`}),` is our main CSS Modules that is framework independant. It's API is taken from tailwindcss and is a great way to use sprout in your application.
It decrease the size of your bundle as we reuse the same CSS over and over again by just dropping few classes. There are two ways to use it. The first is to use it directly in your framework.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-typescript`,children:`// First usage, framework agnostic
import sprout from "@qlik/sprout-css-modules";

sprout.classNames("flex, bg-default", "text-default") ===
  \`\${sprout.flex} \${sprout.bg_default} \${sprout.text_default}\`;
`})}),`
`,(0,r.jsxs)(i.p,{children:[`The main function is `,(0,r.jsx)(i.code,{children:`classNames`}),` which rely on `,(0,r.jsx)(i.a,{href:`https://www.npmjs.com/package/classnames`,rel:`nofollow`,children:`classnames`}),` with a small difference in it's definition to provide a better experience with sprout.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-typescript`,children:`function classNames(...args: Array<ClassNameArg>): string;
`})}),`
`,(0,r.jsx)(i.p,{children:`So if you want to use your own className you can do it like this:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import style from "./myComponent.module.css";

classNames("flex", style.my_class, {
  [style.maybe_class]: condition,
});
`})}),`
`,(0,r.jsx)(i.h2,{id:`classnames`,children:`classNames`}),`
`,(0,r.jsxs)(i.p,{children:[`The second usage is when you already rely on `,(0,r.jsx)(i.code,{children:`@qlik/sprout-react`}),` you don't need to add both package as this one re-export `,(0,r.jsx)(i.code,{children:`className`}),` function for you.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return (
    <div className={classNames("flex", "bg-default", "text-default")}>
      Hello world
    </div>
  );
}
`})}),`
`,(0,r.jsx)(i.h2,{id:`vscode-snippet`,children:`VSCode snippet`}),`
`,(0,r.jsxs)(i.p,{children:[`Set up the following snippets to further boost your productivity.
They provide shorthand replacements for `,(0,r.jsx)(i.code,{children:`<Box>`}),` and `,(0,r.jsx)(i.code,{children:`getBoxProps`}),`.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-json`,children:`{
  "className-box": {
    "prefix": "classNames",
    "body": [
      "className={classNames(\\"flex\\", \\"border-box\\", \\"flex-row\\"$1)}"
    ],
    "description": "add classNames={classNames(\\"flex\\", \\"flex-row\\", \\"border-box\\"$1)}"
  }
}
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};