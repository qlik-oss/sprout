import{j as e,M as i,a as t,C as a}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as s}from"./index-BtGsBDbQ.js";import{S as d,P as r,T as c}from"./ToggleButton.stories-i54-7jR3.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-CWCWYkgH.js";import"./Bookmark-CKHX2VYo.js";import"./Delete-fA9YqxRL.js";import"./Edit-BJvse-oo.js";import"./ToggleButton-CZUrFsw1.js";import"./classNames-CTBLippR.js";import"./icons-CPBvMsVh.js";import"./useControl-7TH6mjrF.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./ButtonGroup-C1r8qKYj.js";import"./ToggleIconButton-3GjFGE00.js";function l(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/ToggleButton",of:d}),`
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
