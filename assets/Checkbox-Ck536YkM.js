import{j as e,M as h,a as t,C as i}from"./iframe-BQJExRCF.js";import{useMDXComponents as s}from"./index-BiT2RrsF.js";import{Playground as r,Group as c}from"./Checkbox.stories-BNfXKt2F.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DxA14K3u.js";import"./Field.argTypes-1rEre7SB.js";import"./classNames-B0wfWtWT.js";import"./useFieldAriaProps-DaZEG-MV.js";import"./useId-Drz8gmS2.js";import"./Checkbox-DxL7CNq4.js";import"./useValueControl-CRzMHMlu.js";import"./HelperText-CWubgWiG.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Info-BfRROe8g.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./Field-BIldF_Al.js";import"./FieldLabel-BWOyYL3A.js";import"./useI18n-B99T9obj.js";import"./Popover-CTsqc6Mc.js";function l(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Components/Checkbox"}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(n.p,{children:"Checkboxes are form elements that allows a user to select one or multiple options from a list. Checkboxes can also be used to turn on and off controls in an interface."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Checkbox, CheckboxGroup } from "@qlik/sprout-css-react";

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
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.p,{children:["The Checkbox directly inherits properties from ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",rel:"nofollow",children:"HTML input element"}),", excluding ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"type"}),", and ",e.jsx(n.code,{children:"prefix"}),"."]}),`
`,e.jsx(n.h3,{id:"checkbox-1",children:"Checkbox"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",rel:"nofollow",children:"W3/WAI/ARIA/APG Checkbox"})}),`
`,e.jsx(n.p,{children:"HTML Structure"}),`
`,e.jsxs(n.p,{children:["The current component use a native ",e.jsx(n.code,{children:"input"})," tag using the attribute type set to ",e.jsx(n.code,{children:"checkbox"}),". It means we do not need aria attributes except for the tri-state to express the ",e.jsx(n.code,{children:"mixed"})," value."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Checkbox has the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#technical_summary",rel:"nofollow",children:"implicit role"})," ",e.jsx(n.code,{children:"checkbox"}),"."]}),`
`,e.jsxs(n.li,{children:["Checkbox support all ",e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})," using ",e.jsx(n.code,{children:"label"})," props for example."]}),`
`,e.jsxs(n.li,{children:["Checkbox when checked add the ",e.jsx(n.code,{children:"checked"})," html attribute so it has the implicit corresponding state."]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Space"})," change the focused checkbox state to checked if unchecked and vice versa."]}),`
`]})]})}function O(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{O as default};
