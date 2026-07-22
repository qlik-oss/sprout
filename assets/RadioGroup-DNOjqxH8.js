import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,RadioButton as l,n as u,t as d}from"./RadioGroup.stories-DCz8P5_Q.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/RadioGroup`,of:d}),`
`,(0,m.jsx)(t.h1,{id:`radiogroup`,children:`RadioGroup`}),`
`,(0,m.jsxs)(t.p,{children:[`The radio group allows users to make a mutually exclusive selection from a range of predefined options. `,(0,m.jsx)(t.code,{children:`<Radio>`}),` inherits all standard attributes from the native `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio`,rel:`nofollow`,children:`HTML radio input`}),`, excluding `,(0,m.jsx)(t.code,{children:`type`}),` (which is always `,(0,m.jsx)(t.code,{children:`"radio"`}),`).`]}),`
`,(0,m.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import {
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
`,(0,m.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG RadioGroup`})}),`
`,(0,m.jsx)(t.p,{children:`HTML Structure`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The radio buttons are contained in or owned by an element with role `,(0,m.jsx)(t.code,{children:`radiogroup`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Each radio button element has role `,(0,m.jsx)(t.code,{children:`radio`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`If a radio button is checked, the radio element has `,(0,m.jsx)(t.code,{children:`aria-checked`}),` set to true. If it is not checked, it has `,(0,m.jsx)(t.code,{children:`aria-checked`}),` set to false.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Each radio element is labelled by its content, has a visible label referenced by `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),`, or has a label specified with `,(0,m.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The radiogroup element has a visible label referenced by `,(0,m.jsx)(t.code,{children:`aria-labelledby`}),` or has a label specified with `,(0,m.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the `,(0,m.jsx)(t.code,{children:`aria-describedby`}),` property.`]}),`
`,(0,m.jsxs)(t.li,{children:[`HTML `,(0,m.jsx)(t.code,{children:`input`}),` element with type="checkbox" and type="radio" as these have built in semantics and do not require ARIA attributes. `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked`,rel:`nofollow`,children:`Source`})]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:`Keyboard navigation`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Tab`}),` and `,(0,m.jsx)(t.code,{children:`Tab + Shift`}),`: Move focus into and out of the radio group. When focus moves into a radio group, and a radio button is already checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Space`}),`: Checks the focused radio button if it is not already checked.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Right Arrow`}),` and `,(0,m.jsx)(t.code,{children:`Down Arrow`}),`: move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Left Arrow`}),` and `,(0,m.jsx)(t.code,{children:`Up Arrow`}),`: move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};