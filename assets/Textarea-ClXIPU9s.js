import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-URhFfzNK.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./Textarea.stories-B88CLR2I.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Textarea`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,s.jsx)(c.p,{children:`Use text area when a user is inputting longer texts or tags.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Textarea } from "@qlik/sprout-react";

<Textarea
  label="Label"
  helpText="help me"
  placeholder="Placeholder"
  defaultValue="value"
  value={value}
/>;
`})}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`properties-for-textarea`,children:`Properties for Textarea`}),`
`,(0,s.jsxs)(c.p,{children:[`The Textarea directly inherits properties from `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea`,rel:`nofollow`,children:`HTML textarea element`}),`.`]}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:`HTML structure`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Textarea`}),` structure use `,(0,s.jsx)(c.code,{children:`Field`}),` -> `,(0,s.jsx)(c.code,{children:`TextareaNative`}),` -> `,(0,s.jsx)(c.code,{children:`textarea`}),` HTML tag.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`disabled`}),` props is map to textarea native `,(0,s.jsx)(c.code,{children:`disabled`}),` attribute.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`readOnly`}),` props is map to textarea native `,(0,s.jsx)(c.code,{children:`readOnly`}),` attribute.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`hasError`}),` props is map to textarea native `,(0,s.jsx)(c.code,{children:`aria-invalid`}),` attribute.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`label`}),` generate a label tag with the htmlFor attribute.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`label`}),` props add a `,(0,s.jsx)(c.code,{children:`aria-labelledby`}),` attribute to the textarea.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`helpText`}),` and `,(0,s.jsx)(c.code,{children:`errorMessages`}),` props add a `,(0,s.jsx)(c.code,{children:`aria-describedby`}),` attribute to the textarea.`]}),`
`]}),`
`,(0,s.jsx)(c.p,{children:`Keyboard Interaction:`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Enter`}),`: as we rely on native textarea tag the behavior is the same as the native textarea tag: Add a new line.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Tab`}),`: if focused it will move to the next focusable element.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Shift + Tab`}),`: if focused it will move to the previous focusable element.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Backspace`}),`: if focused it will delete the character before the cursor.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};