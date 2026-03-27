import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,l as r,s as i}from"./iframe-RiXBydPV.js";import{t as a}from"./mdx-react-shim-Cw1WyOhr.js";import{t as o}from"./sprout-css-modules.stories-DNgHLEt9.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`CSS/sprout-css-modules`}),`
`,(0,l.jsx)(n.h1,{id:`qliksprout-css-modules`,children:`@qlik/sprout-css-modules`}),`
`,(0,l.jsx)(n.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`@qlik/sprout-css-modules`}),` is our main CSS Modules that is framework independant. It's API is taken from tailwindcss and is a great way to use sprout in your application.
It decrease the size of your bundle as we reuse the same CSS over and over again by just dropping few classes. There are two ways to use it. The first is to use it directly in your framework.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-typescript`,children:`// First usage, framework agnostic
import sprout from "@qlik/sprout-css-modules";

sprout.classNames("flex, bg-default", "text-default") ===
  \`\${sprout.flex} \${sprout.bg_default} \${sprout.text_default}\`;
`})}),`
`,(0,l.jsxs)(n.p,{children:[`The main function is `,(0,l.jsx)(n.code,{children:`classNames`}),` which rely on `,(0,l.jsx)(n.a,{href:`https://www.npmjs.com/package/classnames`,rel:`nofollow`,children:`classnames`}),` with a small difference in it's definition to provide a better experience with sprout.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-typescript`,children:`function classNames(...args: Array<ClassNameArg>): string;
`})}),`
`,(0,l.jsx)(n.p,{children:`So if you want to use your own className you can do it like this:`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import style from "./myComponent.module.css";

classNames("flex", style.my_class, {
  [style.maybe_class]: condition,
});
`})}),`
`,(0,l.jsx)(n.h2,{id:`classnames`,children:`classNames`}),`
`,(0,l.jsxs)(n.p,{children:[`The second usage is when you already rely on `,(0,l.jsx)(n.code,{children:`@qlik/sprout-react`}),` you don't need to add both package as this one re-export `,(0,l.jsx)(n.code,{children:`className`}),` function for you.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return (
    <div className={classNames("flex", "bg-default", "text-default")}>
      Hello world
    </div>
  );
}
`})}),`
`,(0,l.jsx)(n.h2,{id:`vscode-snippet`,children:`VSCode snippet`}),`
`,(0,l.jsxs)(n.p,{children:[`Set up the following snippets to further boost your productivity.
They provide shorthand replacements for `,(0,l.jsx)(n.code,{children:`<Box>`}),` and `,(0,l.jsx)(n.code,{children:`getBoxProps`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-json`,children:`{
  "className-box": {
    "prefix": "classNames",
    "body": [
      "className={classNames(\\"flex\\", \\"border-box\\", \\"flex-row\\"$1)}"
    ],
    "description": "add classNames={classNames(\\"flex\\", \\"flex-row\\", \\"border-box\\"$1)}"
  }
}
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),a(),r(),o()}))();export{c as default};