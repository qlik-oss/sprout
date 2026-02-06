import{j as e,M as c,a as r,C as h}from"./iframe-itHhOQJ8.js";import{useMDXComponents as o}from"./index-M6OOd87p.js";import{S as l,U as s}from"./Switch.stories-BWCcR_i1.js";import"./preload-helper-PPVm8Dsz.js";import"./Switch-DYs_6c6o.js";import"./useId-B9bqBKq5.js";import"./TextOverflow-ZR1lg4UG.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./useHasOverflow-BPrWXac9.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Info-CR8Ra2BB.js";import"./HelperText-CZI4gvqv.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/Switch",of:l}),`
`,e.jsx(n.h1,{id:"switch",children:"Switch"}),`
`,e.jsx(n.p,{children:'A toggle switch is a user interface component that allows users to turn a setting or feature on or off by toggling between two states. The two states typically represent opposite conditions, such as "on" and "off," "enabled" and "disabled," or "active" and "inactive." The toggle switch visually displays the current state and provides a mechanism for users to change it.'}),`
`,e.jsxs(n.p,{children:["Switch inherits all standard attributes from the native ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/checkbox",rel:"nofollow",children:"HTML checkbox input"}),", excluding ",e.jsx(n.code,{children:"type"})," (which is always ",e.jsx(n.code,{children:'"checkbox"'}),") and value."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components-BETA?node-id=6564-39128&t=TKbA2VvgnYjhH8JQ-4",rel:"nofollow",children:"Figma Spec"})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Switch, type SwitchProps } from "@qlik/sprout-react";

// Uncontrolled
<Switch name="field" label="Label" />

// Controlled
const [checked, setChecked] = useState(false)
<Switch name="field" label="Label" checked={checked} onChange={() => setChecked(!checked)} />
`})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/switch/",rel:"nofollow",children:"W3/WAI/ARIA/APG Switch"})}),`
`,e.jsx(n.p,{children:"HTML Structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Switch use ",e.jsx(n.code,{children:"input"})," tag with type ",e.jsx(n.code,{children:"checkbox"}),"."]}),`
`,e.jsx(n.li,{children:"Switch use span tags to create the knob"}),`
`,e.jsxs(n.li,{children:["Switch use ",e.jsx(n.code,{children:"svg"})," icon for the tick."]}),`
`,e.jsxs(n.li,{children:["Switch input has the ",e.jsx(n.code,{children:"role=switch"})," followed by ",e.jsx(n.code,{children:"checked=true|false"})," attribute."]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Space"}),": When focus is on the switch, changes the state of the switch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"}),": When focus is on the switch, changes the state of the switch."]}),`
`]}),`
`,e.jsx(n.h2,{id:"bugs",children:"Bugs"}),`
`,e.jsx(n.h3,{id:"bug1-20241031",children:"Bug1 (2024/10/31)"}),`
`,e.jsxs(n.p,{children:[`The lack of borders on the checked state comes from a bug in figma.
`,e.jsx(n.code,{children:"Slider-foreground"})," should be on top of ",e.jsx(n.code,{children:"Slider-track"})," as it is in absolute position."]}),`
`,e.jsx(n.h3,{id:"bug2-20241031",children:"Bug2 (2024/10/31)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"knob"}),` border-color uses a token that has an alpha channel. The transparency happens over the background color of it.
This is an accepted difference in behavior with Figma.`]})]})}function A(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{A as default};
