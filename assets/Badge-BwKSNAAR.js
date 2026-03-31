import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./Badge.stories-DopFIuay.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Badge`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`badge`,children:`Badge`}),`
`,(0,p.jsx)(n.p,{children:`A badge serves as a visual indicator designed to attract attention to its accompanying element or to display additional information. Badges are commonly used to show new or unread items, highlight changes, or for decorative purposes.`}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Avatar, Badge } from "@qlik/sprout-react";

<Badge variant="dot" />;

<Badge variant="alphanumeric" text="1" color="info" />;

<Avatar
  size="s"
  text="OC"
  badge={<Badge variant="alphanumeric" text="1" color="danger" />}
/>;
`})}),`
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(n.p,{children:[`Badge use a simple `,(0,p.jsx)(n.code,{children:`span`}),` element.
In some context you will have to add `,(0,p.jsx)(n.code,{children:`role="status"`}),` and `,(0,p.jsx)(n.code,{children:`aria-live="polite"`}),` to indicate this number may changes depending on some user actions.
Adding an aria-label to the badge will always be considered useful for screen reader users but it is not required.
But if the value is a static number it is considered useless to add those attributes.`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<Badge
  variant="alphanumeric"
  text="14"
  role="status"
  arial-live="polite"
  aria-label="14 items in your shopping cart"
/>
`})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};