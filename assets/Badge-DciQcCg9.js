import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,n as l,t as u}from"./Badge.stories-DtsuTu_8.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Badge`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`badge`,children:`Badge`}),`
`,(0,p.jsx)(t.p,{children:`A badge serves as a visual indicator designed to attract attention to its accompanying element or to display additional information. Badges are commonly used to show new or unread items, highlight changes, or for decorative purposes.`}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Avatar, Badge } from "@qlik/sprout-react";

<Badge variant="dot" />;

<Badge variant="alphanumeric" text="1" color="info" />;

<Avatar
  size="s"
  text="OC"
  badge={<Badge variant="alphanumeric" text="1" color="danger" />}
/>;
`})}),`
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(t.p,{children:[`Badge use a simple `,(0,p.jsx)(t.code,{children:`span`}),` element.
In some context you will have to add `,(0,p.jsx)(t.code,{children:`role="status"`}),` and `,(0,p.jsx)(t.code,{children:`aria-live="polite"`}),` to indicate this number may changes depending on some user actions.
Adding an aria-label to the badge will always be considered useful for screen reader users but it is not required.
But if the value is a static number it is considered useless to add those attributes.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Badge
  variant="alphanumeric"
  text="14"
  role="status"
  arial-live="polite"
  aria-label="14 items in your shopping cart"
/>
`})})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),r(),l()}))();export{f as default};