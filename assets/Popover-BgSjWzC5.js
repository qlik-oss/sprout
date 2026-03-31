import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./Popover.stories-CeTPTp4j.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Popover`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`popover`,children:`Popover`}),`
`,(0,p.jsx)(n.p,{children:`A popover is a floating container that appears adjacent to a trigger. Commonly used for menus.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Popover, type PopoverProps } from "@qlik/sprout-react";
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Dialog`})}),`
`,(0,p.jsx)(n.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Popover`}),` component inject `,(0,p.jsx)(n.code,{children:`aria-expanded="true|false"`}),` and `,(0,p.jsx)(n.code,{children:`aria-haspopup="dialog"`}),` attributes on the children.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`PopoverContent`}),` wrap the content into a `,(0,p.jsx)(n.code,{children:`div`}),` with `,(0,p.jsx)(n.code,{children:`role="dialog"`}),` and `,(0,p.jsx)(n.code,{children:`aria-modal="true"`}),` attributes.`]}),`
`]}),`
`,(0,p.jsx)(n.p,{children:`Keyboard navigation`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Focus is given on dialog when it is opened.`}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Escape`}),`: Closes the dialog if it is opened.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`breaking-changes`,children:`Breaking changes`}),`
`,(0,p.jsx)(n.h3,{id:`v300`,children:`v3.0.0`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`Popover`}),` do not inject padding anymore in the content to give a complete controls over it.`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-diff`,children:`-      <Popover content={content}>
+      <Popover content={content} p="xl" pb="m">
`})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};