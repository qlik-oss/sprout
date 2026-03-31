import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,t as l}from"./Tooltip.stories-CvdKkhHK.js";function u(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{title:`Components/Tooltip`}),`
`,(0,f.jsx)(n.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,f.jsx)(n.p,{children:`Tooltips are contextual helpers that show information about an element when being hovered or focused.`}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { Tooltip } from "@qlik/sprout-react";


<Tooltip title="Tooltip content">
  <button>Hover or focus me</button
</Tooltip>
`})}),`
`,(0,f.jsxs)(n.blockquote,{children:[`
`,(0,f.jsxs)(n.p,{children:[`Note: For performance reason we do not mount the content of the tooltip except if it has an explicit `,(0,f.jsx)(n.code,{children:`id`}),`.
That is due to accessiblity requirement, if there is an id, an other element may refer to it using `,(0,f.jsx)(n.code,{children:`aria-labelledby`}),`.`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,f.jsx)(a,{of:c}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsx)(n.p,{children:(0,f.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Tooltip`})}),`
`,(0,f.jsx)(n.p,{children:`HTML structure`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`The element that serves as the tooltip container has role `,(0,f.jsx)(n.code,{children:`tooltip`}),`.`]}),`
`]}),`
`,(0,f.jsx)(n.p,{children:`Keyboard navigation`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`Escape`}),`: Dismisses the Tooltip.`]}),`
`]})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),s(),i(),l()}))();export{d as default};