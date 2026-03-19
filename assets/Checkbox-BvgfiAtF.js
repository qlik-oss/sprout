import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DTk7xy32.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Group as a,Playground as o}from"./Checkbox.stories-Bbr7zmtz.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Checkbox`}),`
`,(0,s.jsx)(c.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,s.jsx)(c.p,{children:`Checkboxes are form elements that allows a user to select one or multiple options from a list. Checkboxes can also be used to turn on and off controls in an interface.`}),`
`,(0,s.jsx)(c.h2,{id:`usage`,children:`Usage`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-jsx`,children:`import { Checkbox, CheckboxGroup } from "@qlik/sprout-react";

<Checkbox
  name="myfield"
  label="Label"
  helpText="help me"
  checked
  disabled
  onChange={() => {}}
/>;

<CheckboxGroup label="Select options">
  <Checkbox name="option1" label="Option 1" />
  <Checkbox name="option2" label="Option 2" checked />
  <Checkbox name="option3" label="Option 3" disabled />
</CheckboxGroup>;

<CheckboxGroup
  label="Select options"
  options={[
    { name: "option1", label: "Option 1" },
    { name: "option2", label: "Option 2", checked: true },
    { name: "option3", label: "Option 3", disabled: true },
  ]}
/>;
`})}),`
`,(0,s.jsx)(c.h2,{id:`properties`,children:`Properties`}),`
`,(0,s.jsxs)(c.p,{children:[`The Checkbox directly inherits properties from `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox`,rel:`nofollow`,children:`HTML input element`}),`, excluding `,(0,s.jsx)(c.code,{children:`value`}),`, `,(0,s.jsx)(c.code,{children:`type`}),`, and `,(0,s.jsx)(c.code,{children:`prefix`}),`.`]}),`
`,(0,s.jsx)(c.h3,{id:`checkbox-1`,children:`Checkbox`}),`
`,(0,s.jsx)(n,{of:o}),`
`,(0,s.jsx)(t,{of:o}),`
`,(0,s.jsx)(c.h3,{id:`checkboxgroup`,children:`CheckboxGroup`}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Checkbox`})}),`
`,(0,s.jsx)(c.p,{children:`HTML Structure`}),`
`,(0,s.jsxs)(c.p,{children:[`The current component use a native `,(0,s.jsx)(c.code,{children:`input`}),` tag using the attribute type set to `,(0,s.jsx)(c.code,{children:`checkbox`}),`. It means we do not need aria attributes except for the tri-state to express the `,(0,s.jsx)(c.code,{children:`mixed`}),` value.`]}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[`Checkbox has the `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#technical_summary`,rel:`nofollow`,children:`implicit role`}),` `,(0,s.jsx)(c.code,{children:`checkbox`}),`.`]}),`
`,(0,s.jsxs)(c.li,{children:[`Checkbox support all `,(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`}),` using `,(0,s.jsx)(c.code,{children:`label`}),` props for example.`]}),`
`,(0,s.jsxs)(c.li,{children:[`Checkbox when checked add the `,(0,s.jsx)(c.code,{children:`checked`}),` html attribute so it has the implicit corresponding state.`]}),`
`]}),`
`,(0,s.jsx)(c.p,{children:`Keyboard`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Space`}),` change the focused checkbox state to checked if unchecked and vice versa.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};