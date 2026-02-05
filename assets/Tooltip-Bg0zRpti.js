import{j as e,M as s,a as l,C as c}from"./iframe-CYyT-rNd.js";import{useMDXComponents as r}from"./index-Dzbf35yC.js";import{Playground as n}from"./Tooltip.stories-CKI0EuvD.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./classNames-BmP9dLUE.js";import"./sprout-UDUY6uO8.js";function i(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Tooltip"}),`
`,e.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(o.p,{children:"Tooltips are contextual helpers that show information about an element when being hovered or focused."}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Tooltip } from "@qlik/sprout-react";


<Tooltip title="Tooltip content">
  <button>Hover or focus me</button
</Tooltip>
`})}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["Note: For performance reason we do not mount the content of the tooltip except if it has an explicit ",e.jsx(o.code,{children:"id"}),`.
That is due to accessiblity requirement, if there is an id, an other element may refer to it using `,e.jsx(o.code,{children:"aria-labelledby"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",rel:"nofollow",children:"W3/WAI/ARIA/APG Tooltip"})}),`
`,e.jsx(o.p,{children:"HTML structure"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["The element that serves as the tooltip container has role ",e.jsx(o.code,{children:"tooltip"}),"."]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard navigation"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Escape"}),": Dismisses the Tooltip."]}),`
`]})]})}function T(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{T as default};
