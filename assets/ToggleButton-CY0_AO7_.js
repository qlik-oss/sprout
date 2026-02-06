import{j as e,M as i,a as t,C as a}from"./iframe-DO7qjpir.js";import{useMDXComponents as s}from"./index-DM3CO3rl.js";import{S as d,P as r,T as c}from"./ToggleButton.stories-BsrHg9Jh.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-nCaIAc8k.js";import"./Bookmark-DZyQ0qgi.js";import"./Delete-D4ge4hwa.js";import"./Edit-CColNq1n.js";import"./ToggleButton-CD76nRA5.js";import"./classNames-C2xvgHQf.js";import"./icons-B7D59aOJ.js";import"./useControl-U2hc2GWS.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ButtonGroup-sxG0Tiqx.js";import"./ToggleIconButton-B16EnM8S.js";function l(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/ToggleButton",of:d}),`
`,e.jsx(o.h1,{id:"togglebutton",children:"ToggleButton"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { ToggleButton } from "@qlik/sprout-react";

<ToggleButton label="Label" onChange={(toggled) => {}} />;
`})}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(o.h2,{id:"asdropdown",children:"asDropdown"}),`
`,e.jsxs(o.p,{children:["You can use the ",e.jsx(o.code,{children:"asDropdown"})," prop to render the ToggleButton as a dropdown trigger. This is useful when you want the button to open a menu or similar overlay."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<ToggleButton label="Dropdown" asDropdown onChange={() => {}} />
`})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(o.p,{children:["ToggleButton inherits all properties from the ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button",rel:"nofollow",children:"HTML button element"}),"."]}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(o.h2,{id:"buttongroup",children:"ButtonGroup"}),`
`,e.jsx(o.p,{children:"This wrapper component for the buttons that turns any number of ToggleButton children into a button group."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`<ButtonGroup>
  {["One", "Two", "Three"].map((label) => (
    <ToggleButton key={label} label={label} toggled={toggled === label} onChange={() => setToggled(label)} />
  ))}
</ButtonGroup>
`})}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",rel:"nofollow",children:"W3/WAI/ARIA/APG Button"})}),`
`,e.jsx(o.p,{children:"HTML Structure"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["ToggleButton use the native HTML ",e.jsx(o.code,{children:"button"})," so it has the implicit role ",e.jsx(o.code,{children:"button"}),"."]}),`
`,e.jsxs(o.li,{children:["ToggleButton support all props to have an ",e.jsx(o.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})]}),`
`,e.jsxs(o.li,{children:["ToggleButton support ",e.jsx(o.code,{children:"aria-describedby"})," props."]}),`
`,e.jsxs(o.li,{children:["ToggleButton use explicit ",e.jsx(o.code,{children:"disabled"})," props to show it has unavailable. Question: should we add ",e.jsx(o.code,{children:"aria-disabled"}),"?"]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Space"}),": Activates the button."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Enter"}),": Activates the button."]}),`
`]})]})}function I(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{I as default};
