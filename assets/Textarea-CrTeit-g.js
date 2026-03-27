import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Playground as c,n as l,t as u}from"./Textarea.stories-DD0F0TI7.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Textarea`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,p.jsx)(n.p,{children:`Use text area when a user is inputting longer texts or tags.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Textarea } from "@qlik/sprout-react";

<Textarea
  label="Label"
  helpText="help me"
  placeholder="Placeholder"
  defaultValue="value"
  value={value}
/>;
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`properties-for-textarea`,children:`Properties for Textarea`}),`
`,(0,p.jsxs)(n.p,{children:[`The Textarea directly inherits properties from `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea`,rel:`nofollow`,children:`HTML textarea element`}),`.`]}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Textarea`}),` structure use `,(0,p.jsx)(n.code,{children:`Field`}),` -> `,(0,p.jsx)(n.code,{children:`TextareaNative`}),` -> `,(0,p.jsx)(n.code,{children:`textarea`}),` HTML tag.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`disabled`}),` props is map to textarea native `,(0,p.jsx)(n.code,{children:`disabled`}),` attribute.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`readOnly`}),` props is map to textarea native `,(0,p.jsx)(n.code,{children:`readOnly`}),` attribute.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`hasError`}),` props is map to textarea native `,(0,p.jsx)(n.code,{children:`aria-invalid`}),` attribute.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`label`}),` generate a label tag with the htmlFor attribute.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`label`}),` props add a `,(0,p.jsx)(n.code,{children:`aria-labelledby`}),` attribute to the textarea.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`helpText`}),` and `,(0,p.jsx)(n.code,{children:`errorMessages`}),` props add a `,(0,p.jsx)(n.code,{children:`aria-describedby`}),` attribute to the textarea.`]}),`
`]}),`
`,(0,p.jsx)(n.p,{children:`Keyboard Interaction:`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Enter`}),`: as we rely on native textarea tag the behavior is the same as the native textarea tag: Add a new line.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Tab`}),`: if focused it will move to the next focusable element.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Shift + Tab`}),`: if focused it will move to the previous focusable element.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Backspace`}),`: if focused it will delete the character before the cursor.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};