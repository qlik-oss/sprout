import{j as e,M as n,a as l,C as o}from"./iframe-B4vjk2_C.js";import{useMDXComponents as s}from"./index-4mXTpVuF.js";import{S as d,P as i}from"./Textarea.stories-Cd84BcWG.js";import"./preload-helper-PPVm8Dsz.js";import"./Field.argTypes-1rEre7SB.js";import"./Textarea-DGvem7o0.js";import"./useValueControl-f2Qxn85g.js";import"./sprout-DTAeqvbL.js";import"./Error-aRqdswEO.js";import"./useFieldProps-DJ-a4x7W.js";import"./useId-DsPr7Fl4.js";import"./useFieldAriaProps-7JTDckGo.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./classNames-DaRWzB8T.js";import"./useI18n-DbSMZiRF.js";import"./Info-qvjQZ4-p.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./Popover-B32coOjQ.js";import"./HelperText-B-4Si9bt.js";function a(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Components/Textarea",of:d}),`
`,e.jsx(t.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(t.p,{children:"Use text area when a user is inputting longer texts or tags."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Textarea } from "@qlik/sprout-react";

<Textarea label="Label" helpText="help me" placeholder="Placeholder" defaultValue="value" value={value} />;
`})}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(t.h2,{id:"properties-for-textarea",children:"Properties for Textarea"}),`
`,e.jsxs(t.p,{children:["The Textarea directly inherits properties from ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea",rel:"nofollow",children:"HTML textarea element"}),"."]}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Textarea"})," structure use ",e.jsx(t.code,{children:"Field"})," -> ",e.jsx(t.code,{children:"TextareaNative"})," -> ",e.jsx(t.code,{children:"textarea"})," HTML tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"disabled"})," props is map to textarea native ",e.jsx(t.code,{children:"disabled"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"readOnly"})," props is map to textarea native ",e.jsx(t.code,{children:"readOnly"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"hasError"})," props is map to textarea native ",e.jsx(t.code,{children:"aria-invalid"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label"})," generate a label tag with the htmlFor attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label"})," props add a ",e.jsx(t.code,{children:"aria-labelledby"})," attribute to the textarea."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"helpText"})," and ",e.jsx(t.code,{children:"errorMessages"})," props add a ",e.jsx(t.code,{children:"aria-describedby"})," attribute to the textarea."]}),`
`]}),`
`,e.jsx(t.p,{children:"Keyboard Interaction:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Enter"}),": as we rely on native textarea tag the behavior is the same as the native textarea tag: Add a new line."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"}),": if focused it will move to the next focusable element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Shift + Tab"}),": if focused it will move to the previous focusable element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Backspace"}),": if focused it will delete the character before the cursor."]}),`
`]})]})}function X(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}export{X as default};
