import{j as e,M as l,a as i,C as n}from"./iframe-BThSoDrn.js";import{useMDXComponents as d}from"./index-dxYskzg-.js";import{S as c,P as r,R as s}from"./RadioGroup.stories-Dg-bqB4W.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-C7A3N88C.js";import"./Field.argTypes-1rEre7SB.js";import"./RadioGroup-BIREHLaS.js";import"./classNames-dIthk07I.js";import"./useFieldAriaProps-CdXcjcjf.js";import"./useId-hgAQXGHZ.js";import"./Radio-DNI0-KRY.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Info-CD_iaTpZ.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./HelperText-bJIP0f1z.js";import"./Field-FhdYhdWr.js";import"./FieldLabel-Bgszjlae.js";import"./useI18n-DEBX20KE.js";import"./Popover-BJedhRhh.js";function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/RadioGroup",of:c}),`
`,e.jsx(o.h1,{id:"radiogroup",children:"RadioGroup"}),`
`,e.jsxs(o.p,{children:["The radio group allows users to make a mutually exclusive selection from a range of predefined options. ",e.jsx(o.code,{children:"<Radio>"})," inherits all standard attributes from the native ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",rel:"nofollow",children:"HTML radio input"}),", excluding ",e.jsx(o.code,{children:"type"})," (which is always ",e.jsx(o.code,{children:'"radio"'}),")."]}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Radio, RadioGroup, type RadioGroupProps, type RadioProps } from "@qlik/sprout-react";

// Use the RadioGroup component to group multiple Radio components together
<RadioGroup name="radio" label="My field" helptext="Select one of the options">
  <Radio label="Cat" value="cat" name="test" />
  <Radio label="Dog" value="dog" name="test" />
</RadioGroup>;

// or just the Atom
<Radio label="Option 1" readOnly disabled defaultChecked checked onChange={() => {}} />;
`})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n,{of:s}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",rel:"nofollow",children:"W3/WAI/ARIA/APG RadioGroup"})}),`
`,e.jsx(o.p,{children:"HTML Structure"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The radio buttons are contained in or owned by an element with role ",e.jsx(o.code,{children:"radiogroup"}),"."]}),`
`,e.jsxs(o.li,{children:["Each radio button element has role ",e.jsx(o.code,{children:"radio"}),"."]}),`
`,e.jsxs(o.li,{children:["If a radio button is checked, the radio element has ",e.jsx(o.code,{children:"aria-checked"})," set to true. If it is not checked, it has ",e.jsx(o.code,{children:"aria-checked"})," set to false."]}),`
`,e.jsxs(o.li,{children:["Each radio element is labelled by its content, has a visible label referenced by ",e.jsx(o.code,{children:"aria-labelledby"}),", or has a label specified with ",e.jsx(o.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(o.li,{children:["The radiogroup element has a visible label referenced by ",e.jsx(o.code,{children:"aria-labelledby"})," or has a label specified with ",e.jsx(o.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(o.li,{children:["If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the ",e.jsx(o.code,{children:"aria-describedby"})," property."]}),`
`,e.jsxs(o.li,{children:["HTML ",e.jsx(o.code,{children:"input"}),' element with type="checkbox" and type="radio" as these have built in semantics and do not require ARIA attributes. ',e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked",rel:"nofollow",children:"Source"})]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard navigation"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Tab"})," and ",e.jsx(o.code,{children:"Tab + Shift"}),": Move focus into and out of the radio group. When focus moves into a radio group, and a radio button is already checked, focus is set on the checked button. If none of the radio buttons are checked, focus is set on the first radio button in the group."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Space"}),": Checks the focused radio button if it is not already checked."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Right Arrow"})," and ",e.jsx(o.code,{children:"Down Arrow"}),": move focus to the next radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the last button, focus moves to the first button."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Left Arrow"})," and ",e.jsx(o.code,{children:"Up Arrow"}),": move focus to the previous radio button in the group, uncheck the previously focused button, and check the newly focused button. If focus is on the first button, focus moves to the last button."]}),`
`]})]})}function L(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{L as default};
