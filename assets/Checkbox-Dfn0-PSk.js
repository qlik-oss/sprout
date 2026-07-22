import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Group as c,Playground as l,t as u}from"./Checkbox.stories-agOHbxbn.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/Checkbox`}),`
`,(0,p.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,p.jsx)(t.p,{children:`Checkboxes are form elements that allows a user to select one or multiple options from a list. Checkboxes can also be used to turn on and off controls in an interface.`}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-jsx`,children:`import { Checkbox, CheckboxGroup } from "@qlik/sprout-react";

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
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsxs)(t.p,{children:[`The Checkbox directly inherits properties from `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox`,rel:`nofollow`,children:`HTML input element`}),`, excluding `,(0,p.jsx)(t.code,{children:`value`}),`, `,(0,p.jsx)(t.code,{children:`type`}),`, and `,(0,p.jsx)(t.code,{children:`prefix`}),`.`]}),`
`,(0,p.jsx)(t.h3,{id:`checkbox-1`,children:`Checkbox`}),`
`,(0,p.jsx)(i,{of:l}),`
`,(0,p.jsx)(n,{of:l}),`
`,(0,p.jsx)(t.h3,{id:`checkboxgroup`,children:`CheckboxGroup`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Checkbox`})}),`
`,(0,p.jsx)(t.p,{children:`HTML Structure`}),`
`,(0,p.jsxs)(t.p,{children:[`The current component use a native `,(0,p.jsx)(t.code,{children:`input`}),` tag using the attribute type set to `,(0,p.jsx)(t.code,{children:`checkbox`}),`. It means we do not need aria attributes except for the tri-state to express the `,(0,p.jsx)(t.code,{children:`mixed`}),` value.`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Checkbox has the `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#technical_summary`,rel:`nofollow`,children:`implicit role`}),` `,(0,p.jsx)(t.code,{children:`checkbox`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Checkbox support all `,(0,p.jsx)(t.a,{href:`https://www.w3.org/WAI/tutorials/forms/labels/`,rel:`nofollow`,children:`accessible label`}),` using `,(0,p.jsx)(t.code,{children:`label`}),` props for example.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Checkbox when checked add the `,(0,p.jsx)(t.code,{children:`checked`}),` html attribute so it has the implicit corresponding state.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Keyboard`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Space`}),` change the focused checkbox state to checked if unchecked and vice versa.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),u()}))();export{f as default};