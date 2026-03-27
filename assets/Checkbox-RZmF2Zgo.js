import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Group as c,Playground as l,t as u}from"./Checkbox.stories-DvTvZ83n.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Checkbox`}),`
`,(0,p.jsx)(n.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,p.jsx)(n.p,{children:`Checkboxes are form elements that allows a user to select one or multiple options from a list. Checkboxes can also be used to turn on and off controls in an interface.`}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-jsx`,children:`import { Checkbox, CheckboxGroup } from "@qlik/sprout-react";

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
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsxs)(n.p,{children:[`The Checkbox directly inherits properties from `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox`,rel:`nofollow`,children:`HTML input element`}),`, excluding `,(0,p.jsx)(n.code,{children:`value`}),`, `,(0,p.jsx)(n.code,{children:`type`}),`, and `,(0,p.jsx)(n.code,{children:`prefix`}),`.`]}),`
`,(0,p.jsx)(n.h3,{id:`checkbox-1`,children:`Checkbox`}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(r,{of:l}),`
`,(0,p.jsx)(n.h3,{id:`checkboxgroup`,children:`CheckboxGroup`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Checkbox`})}),`
`,(0,p.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,p.jsxs)(n.p,{children:[`The current component use a native `,(0,p.jsx)(n.code,{children:`input`}),` tag using the attribute type set to `,(0,p.jsx)(n.code,{children:`checkbox`}),`. It means we do not need aria attributes except for the tri-state to express the `,(0,p.jsx)(n.code,{children:`mixed`}),` value.`]}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`Checkbox has the `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#technical_summary`,rel:`nofollow`,children:`implicit role`}),` `,(0,p.jsx)(n.code,{children:`checkbox`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Checkbox support all `,(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`}),` using `,(0,p.jsx)(n.code,{children:`label`}),` props for example.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Checkbox when checked add the `,(0,p.jsx)(n.code,{children:`checked`}),` html attribute so it has the implicit corresponding state.`]}),`
`]}),`
`,(0,p.jsx)(n.p,{children:`Keyboard`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Space`}),` change the focused checkbox state to checked if unchecked and vice versa.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),u()}))();export{f as default};