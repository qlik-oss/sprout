import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./Popover.stories-qf74BR25.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Popover`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`popover`,children:`Popover`}),`
`,(0,s.jsx)(c.p,{children:`A popover is a floating container that appears adjacent to a trigger. Commonly used for menus.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Popover, type PopoverProps } from "@qlik/sprout-react";
`})}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`api`,children:`API`}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:(0,s.jsx)(c.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG Dialog`})}),`
`,(0,s.jsx)(c.p,{children:`HTML structure`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Popover`}),` component inject `,(0,s.jsx)(c.code,{children:`aria-expanded="true|false"`}),` and `,(0,s.jsx)(c.code,{children:`aria-haspopup="dialog"`}),` attributes on the children.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`PopoverContent`}),` wrap the content into a `,(0,s.jsx)(c.code,{children:`div`}),` with `,(0,s.jsx)(c.code,{children:`role="dialog"`}),` and `,(0,s.jsx)(c.code,{children:`aria-modal="true"`}),` attributes.`]}),`
`]}),`
`,(0,s.jsx)(c.p,{children:`Keyboard navigation`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsx)(c.li,{children:`Focus is given on dialog when it is opened.`}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Escape`}),`: Closes the dialog if it is opened.`]}),`
`]}),`
`,(0,s.jsx)(c.h2,{id:`breaking-changes`,children:`Breaking changes`}),`
`,(0,s.jsx)(c.h3,{id:`v300`,children:`v3.0.0`}),`
`,(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.code,{children:`Popover`}),` do not inject padding anymore in the content to give a complete controls over it.`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-diff`,children:`-      <Popover content={content}>
+      <Popover content={content} p="xl" pb="m">
`})})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};