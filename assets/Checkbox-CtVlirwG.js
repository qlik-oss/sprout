import{j as e,M as h,a as t,C as i}from"./iframe-B4vjk2_C.js";import{useMDXComponents as s}from"./index-4mXTpVuF.js";import{Playground as r,Group as c}from"./Checkbox.stories-EeThLNTp.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DTAeqvbL.js";import"./Field.argTypes-1rEre7SB.js";import"./classNames-DaRWzB8T.js";import"./useFieldAriaProps-7JTDckGo.js";import"./useId-DsPr7Fl4.js";import"./Checkbox-yXCe54NU.js";import"./useValueControl-f2Qxn85g.js";import"./HelperText-B-4Si9bt.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Info-qvjQZ4-p.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./useI18n-DbSMZiRF.js";import"./Popover-B32coOjQ.js";function l(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/Checkbox"}),`
`,e.jsx(o.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(o.p,{children:"Checkboxes are form elements that allows a user to select one or multiple options from a list. Checkboxes can also be used to turn on and off controls in an interface."}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { Checkbox, CheckboxGroup } from "@qlik/sprout-react";

<Checkbox name="myfield" label="Label" helpText="help me" checked disabled onChange={() => {}} />;

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
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o.p,{children:["The Checkbox directly inherits properties from ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",rel:"nofollow",children:"HTML input element"}),", excluding ",e.jsx(o.code,{children:"value"}),", ",e.jsx(o.code,{children:"type"}),", and ",e.jsx(o.code,{children:"prefix"}),"."]}),`
`,e.jsx(o.h3,{id:"checkbox-1",children:"Checkbox"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(o.h3,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",rel:"nofollow",children:"W3/WAI/ARIA/APG Checkbox"})}),`
`,e.jsx(o.p,{children:"HTML Structure"}),`
`,e.jsxs(o.p,{children:["The current component use a native ",e.jsx(o.code,{children:"input"})," tag using the attribute type set to ",e.jsx(o.code,{children:"checkbox"}),". It means we do not need aria attributes except for the tri-state to express the ",e.jsx(o.code,{children:"mixed"})," value."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Checkbox has the ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#technical_summary",rel:"nofollow",children:"implicit role"})," ",e.jsx(o.code,{children:"checkbox"}),"."]}),`
`,e.jsxs(o.li,{children:["Checkbox support all ",e.jsx(o.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})," using ",e.jsx(o.code,{children:"label"})," props for example."]}),`
`,e.jsxs(o.li,{children:["Checkbox when checked add the ",e.jsx(o.code,{children:"checked"})," html attribute so it has the implicit corresponding state."]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Space"})," change the focused checkbox state to checked if unchecked and vice versa."]}),`
`]})]})}function O(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{O as default};
