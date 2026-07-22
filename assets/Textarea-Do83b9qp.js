import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,n as l,t as u}from"./Textarea.stories-CErCon28.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/Textarea`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,p.jsx)(t.p,{children:`Use text area when a user is inputting longer texts or tags.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Textarea } from "@qlik/sprout-react";

<Textarea
  label="Label"
  helpText="help me"
  placeholder="Placeholder"
  defaultValue="value"
  value={value}
/>;
`})}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`properties-for-textarea`,children:`Properties for Textarea`}),`
`,(0,p.jsxs)(t.p,{children:[`The Textarea directly inherits properties from `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea`,rel:`nofollow`,children:`HTML textarea element`}),`.`]}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Textarea`}),` structure use `,(0,p.jsx)(t.code,{children:`Field`}),` -> `,(0,p.jsx)(t.code,{children:`TextareaNative`}),` -> `,(0,p.jsx)(t.code,{children:`textarea`}),` HTML tag.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`disabled`}),` props is map to textarea native `,(0,p.jsx)(t.code,{children:`disabled`}),` attribute.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`readOnly`}),` props is map to textarea native `,(0,p.jsx)(t.code,{children:`readOnly`}),` attribute.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`hasError`}),` props is map to textarea native `,(0,p.jsx)(t.code,{children:`aria-invalid`}),` attribute.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`label`}),` generate a label tag with the htmlFor attribute.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`label`}),` props add a `,(0,p.jsx)(t.code,{children:`aria-labelledby`}),` attribute to the textarea.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`helpText`}),` and `,(0,p.jsx)(t.code,{children:`errorMessages`}),` props add a `,(0,p.jsx)(t.code,{children:`aria-describedby`}),` attribute to the textarea.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Keyboard Interaction:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Enter`}),`: as we rely on native textarea tag the behavior is the same as the native textarea tag: Add a new line.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Tab`}),`: if focused it will move to the next focusable element.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Shift + Tab`}),`: if focused it will move to the previous focusable element.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Backspace`}),`: if focused it will delete the character before the cursor.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),l()}))();export{f as default};