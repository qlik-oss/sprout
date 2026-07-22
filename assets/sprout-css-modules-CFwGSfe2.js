import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,p as r,s as i}from"./iframe-UwarwtgL.js";import{t as a}from"./mdx-react-shim-DbLuWb1F.js";import{t as o}from"./sprout-css-modules.stories-D4l8UokB.js";function s(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`CSS/sprout-css-modules`}),`
`,(0,l.jsx)(t.h1,{id:`qliksprout-css-modules`,children:`@qlik/sprout-css-modules`}),`
`,(0,l.jsx)(t.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:`@qlik/sprout-css-modules`}),` is our main CSS Modules that is framework independant. It's API is taken from tailwindcss and is a great way to use sprout in your application.
It decrease the size of your bundle as we reuse the same CSS over and over again by just dropping few classes. There are two ways to use it. The first is to use it directly in your framework.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`// First usage, framework agnostic
import sprout from "@qlik/sprout-css-modules";

sprout.classNames("flex, bg-default", "text-default") ===
  \`\${sprout.flex} \${sprout.bg_default} \${sprout.text_default}\`;
`})}),`
`,(0,l.jsxs)(t.p,{children:[`The main function is `,(0,l.jsx)(t.code,{children:`classNames`}),` which rely on `,(0,l.jsx)(t.a,{href:`https://www.npmjs.com/package/classnames`,rel:`nofollow`,children:`classnames`}),` with a small difference in it's definition to provide a better experience with sprout.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`function classNames(...args: Array<ClassNameArg>): string;
`})}),`
`,(0,l.jsx)(t.p,{children:`So if you want to use your own className you can do it like this:`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-tsx`,children:`import style from "./myComponent.module.css";

classNames("flex", style.my_class, {
  [style.maybe_class]: condition,
});
`})}),`
`,(0,l.jsx)(t.h2,{id:`classnames`,children:`classNames`}),`
`,(0,l.jsxs)(t.p,{children:[`The second usage is when you already rely on `,(0,l.jsx)(t.code,{children:`@qlik/sprout-react`}),` you don't need to add both package as this one re-export `,(0,l.jsx)(t.code,{children:`className`}),` function for you.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-tsx`,children:`import { classNames } from "@qlik/sprout-react";

function MyComponent() {
  return (
    <div className={classNames("flex", "bg-default", "text-default")}>
      Hello world
    </div>
  );
}
`})}),`
`,(0,l.jsx)(t.h2,{id:`vscode-snippet`,children:`VSCode snippet`}),`
`,(0,l.jsxs)(t.p,{children:[`Set up the following snippets to further boost your productivity.
They provide shorthand replacements for `,(0,l.jsx)(t.code,{children:`<Box>`}),` and `,(0,l.jsx)(t.code,{children:`getBoxProps`}),`.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-json`,children:`{
  "className-box": {
    "prefix": "classNames",
    "body": [
      "className={classNames(\\"flex\\", \\"border-box\\", \\"flex-row\\"$1)}"
    ],
    "description": "add classNames={classNames(\\"flex\\", \\"flex-row\\", \\"border-box\\"$1)}"
  }
}
`})})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(),a(),n(),o()}))();export{c as default};