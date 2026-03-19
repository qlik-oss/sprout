import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DaKWDHAC.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,RadioButton as o,t as s}from"./RadioGroup.stories-2sVoqQrd.js";var c=e();function l(e){let l={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Components/RadioGroup`,of:s}),`
`,(0,c.jsx)(l.h1,{id:`radiogroup`,children:`RadioGroup`}),`
`,(0,c.jsxs)(l.p,{children:[`The radio group allows users to make a mutually exclusive selection from a range of predefined options. `,(0,c.jsx)(l.code,{children:`<Radio>`}),` inherits all standard attributes from the native `,(0,c.jsx)(l.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio`,rel:`nofollow`,children:`HTML radio input`}),`, excluding `,(0,c.jsx)(l.code,{children:`type`}),` (which is always `,(0,c.jsx)(l.code,{children:`"radio"`}),`).`]}),`
`,(0,c.jsx)(l.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`import {
  Radio,
  RadioGroup,
  type RadioGroupProps,
  type RadioProps,
} from "@qlik/sprout-react";

// Use the RadioGroup component to group multiple Radio components together
<RadioGroup name="radio" label="My field" helptext="Select one of the options">
  <Radio label="Cat" value="cat" name="test" />
  <Radio label="Dog" value="dog" name="test" />
</RadioGroup>;

// or just the Atom
<Radio
  label="Option 1"
  readOnly
  disabled
  defaultChecked
  checked
  onChange={() => {}}
/>;
`})}),`
`,(0,c.jsx)(l.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsx)(n,{of:a}),`
`,(0,c.jsx)(t,{of:a}),`
`,(0,c.jsx)(n,{of:o}),`
`,(0,c.jsx)(t,{of:o}),`
`,(0,c.jsx)(l.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsx)(l.p,{children:(0,c.jsx)(l.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG RadioGroup`})}),`
`,(0,c.jsx)(l.p,{children:`HTML Structure`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[`The radio buttons are contained in or owned by an element with role `,(0,c.jsx)(l.code,{children:`radiogroup`}),`.`]}),`
`,(0,c.jsxs)(l.li,{children:[`Each radio button element has role `,(0,c.jsx)(l.code,{children:`radio`}),`.`]}),`
`,(0,c.jsxs)(l.li,{children:[`If a radio button is checked, the radio element has `,(0,c.jsx)(l.code,{children:`aria-checked`}),` set to true. If it is not checked, it has `,(0,c.jsx)(l.code,{children:`aria-checked`}),` set to false.`]}),`
`,(0,c.jsxs)(l.li,{children:[`Each radio element is labelled by its content, has a visible label referenced by `,(0,c.jsx)(l.code,{children:`aria-labelledby`}),`, or has a label specified with `,(0,c.jsx)(l.code,{children:`aria-label`}),`.`]}),`
`,(0,c.jsxs)(l.li,{children:[`The radiogroup element has a visible label referenced by `,(0,c.jsx)(l.code,{children:`aria-labelledby`}),` or has a label specified with `,(0,c.jsx)(l.code,{children:`aria-label`}),`.`]}),`
`,(0,c.jsxs)(l.li,{children:[`If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the `,(0,c.jsx)(l.code,{children:`aria-describedby`}),` property.`]}),`
`,(0,c.jsxs)(l.li,{children:[`HTML `,(0,c.jsx)(l.code,{children:`input`}),` element with type="checkbox" and type="radio" as these have built in semantics and do not require ARIA attributes. `,(0,c.jsx)(l.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked`,rel:`nofollow`,children:`Source`})]}),`
`]}),`
`,(0,c.jsx)(l.p,{children:`Keyboard navigation`}),`
`,(0,c.jsxs)(l.ul,{children:[`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Tab`}),` and `,(0,c.jsx)(l.code,{children:`Tab + Shift`}),`: Move focus into and out of the radio group. When focus moves into a radio group, and a radio button is already checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Space`}),`: Checks the focused radio button if it is not already checked.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Right Arrow`}),` and `,(0,c.jsx)(l.code,{children:`Down Arrow`}),`: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.`]}),`
`,(0,c.jsxs)(l.li,{children:[(0,c.jsx)(l.code,{children:`Left Arrow`}),` and `,(0,c.jsx)(l.code,{children:`Up Arrow`}),`: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};