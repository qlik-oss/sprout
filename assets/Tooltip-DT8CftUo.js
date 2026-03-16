import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a}from"./Tooltip.stories-DJJwGG3f.js";var o=e();function s(e){let s={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{title:`Components/Tooltip`}),`
`,(0,o.jsx)(s.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,o.jsx)(s.p,{children:`Tooltips are contextual helpers that show information about an element when being hovered or focused.`}),`
`,(0,o.jsx)(s.h2,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { Tooltip } from "@qlik/sprout-react";


<Tooltip title="Tooltip content">
  <button>Hover or focus me</button
</Tooltip>
`})}),`
`,(0,o.jsxs)(s.blockquote,{children:[`
`,(0,o.jsxs)(s.p,{children:[`Note: For performance reason we do not mount the content of the tooltip except if it has an explicit `,(0,o.jsx)(s.code,{children:`id`}),`.
That is due to accessiblity requirement, if there is an id, an other element may refer to it using `,(0,o.jsx)(s.code,{children:`aria-labelledby`}),`.`]}),`
`]}),`
`,(0,o.jsx)(s.h2,{id:`properties`,children:`Properties`}),`
`,(0,o.jsx)(n,{of:a}),`
`,(0,o.jsx)(t,{of:a}),`
`,(0,o.jsx)(s.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Tooltip`})}),`
`,(0,o.jsx)(s.p,{children:`HTML structure`}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[`The element that serves as the tooltip container has role `,(0,o.jsx)(s.code,{children:`tooltip`}),`.`]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:`Keyboard navigation`}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:`Escape`}),`: Dismisses the Tooltip.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};