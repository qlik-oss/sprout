import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,t as l}from"./Tooltip.stories-BAaJVg89.js";function u(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{title:`Components/Tooltip`}),`
`,(0,f.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,f.jsx)(t.p,{children:`Tooltips are contextual helpers that show information about an element when being hovered or focused.`}),`
`,(0,f.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { Tooltip } from "@qlik/sprout-react";


<Tooltip title="Tooltip content">
  <button>Hover or focus me</button
</Tooltip>
`})}),`
`,(0,f.jsxs)(t.blockquote,{children:[`
`,(0,f.jsxs)(t.p,{children:[`Note: For performance reason we do not mount the content of the tooltip except if it has an explicit `,(0,f.jsx)(t.code,{children:`id`}),`.
That is due to accessiblity requirement, if there is an id, an other element may refer to it using `,(0,f.jsx)(t.code,{children:`aria-labelledby`}),`.`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,f.jsx)(i,{of:c}),`
`,(0,f.jsx)(n,{of:c}),`
`,(0,f.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Tooltip`})}),`
`,(0,f.jsx)(t.p,{children:`HTML structure`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[`The element that serves as the tooltip container has role `,(0,f.jsx)(t.code,{children:`tooltip`}),`.`]}),`
`]}),`
`,(0,f.jsx)(t.p,{children:`Keyboard navigation`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`Escape`}),`: Dismisses the Tooltip.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=a(),s(),t(),l()}))();export{d as default};