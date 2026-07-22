import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,n as l,t as u}from"./Popover.stories-BFyidiE8.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/Popover`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`popover`,children:`Popover`}),`
`,(0,p.jsx)(t.p,{children:`A popover is a floating container that appears adjacent to a trigger. Commonly used for menus.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Popover, type PopoverProps } from "@qlik/sprout-react";
`})}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Dialog`})}),`
`,(0,p.jsx)(t.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Popover`}),` component inject `,(0,p.jsx)(t.code,{children:`aria-expanded="true|false"`}),` and `,(0,p.jsx)(t.code,{children:`aria-haspopup="dialog"`}),` attributes on the children.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`PopoverContent`}),` wrap the content into a `,(0,p.jsx)(t.code,{children:`div`}),` with `,(0,p.jsx)(t.code,{children:`role="dialog"`}),` and `,(0,p.jsx)(t.code,{children:`aria-modal="true"`}),` attributes.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Keyboard navigation`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Focus is given on dialog when it is opened.`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Escape`}),`: Closes the dialog if it is opened.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`breaking-changes`,children:`Breaking changes`}),`
`,(0,p.jsx)(t.h3,{id:`v300`,children:`v3.0.0`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Popover`}),` do not inject padding anymore in the content to give a complete controls over it.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-diff`,children:`-      <Popover content={content}>
+      <Popover content={content} p="xl" pb="m">
`})})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),l()}))();export{f as default};