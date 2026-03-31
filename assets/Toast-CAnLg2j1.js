import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./Toast.stories-mfYs94hQ.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Toast`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`toast`,children:`Toast`}),`
`,(0,p.jsx)(n.p,{children:`A Toast is a small, non-intrusive message that pops up temporarily to notify users about an action or event.
It typically appears at the edge of the screen and disappears automatically after a few seconds, though it can be dismissed manually.
Toasts are ideal for brief, context-aware feedback like form submissions, errors, or connection status updates.
They should be used to provide real-time alerts without interrupting the user’s workflow.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Toast, type ToastProps } from "@qlik/sprout-react";

<Toast.Container placement="top">
  <Toast.Content
    severity="info"
    title="Document created"
    message="You will find it here"
    onClose={() => {}}
    action={{ label: "Undo", onClick: () => {} }}
  />
</Toast.Container>;
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(n.p,{children:`Timeout implementation rely on the application state and this component is not intended to provide any opinion on it for now.`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(n.p,{children:[`The component use a div with `,(0,p.jsx)(n.code,{children:`role="alert"`}),`.`]}),`
`,(0,p.jsxs)(n.p,{children:[`Pressing `,(0,p.jsx)(n.code,{children:`escape`}),` key closes the toast.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};