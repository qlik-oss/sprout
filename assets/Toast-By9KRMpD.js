import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,n as l,t as u}from"./Toast.stories-D1dlbmd9.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Toast`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`toast`,children:`Toast`}),`
`,(0,p.jsx)(t.p,{children:`A Toast is a small, non-intrusive message that pops up temporarily to notify users about an action or event.
It typically appears at the edge of the screen and disappears automatically after a few seconds, though it can be dismissed manually.
Toasts are ideal for brief, context-aware feedback like form submissions, errors, or connection status updates.
They should be used to provide real-time alerts without interrupting the user’s workflow.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Toast, type ToastProps } from "@qlik/sprout-react";

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
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(t.p,{children:`Timeout implementation rely on the application state and this component is not intended to provide any opinion on it for now.`}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.p,{children:[`The component use a div with `,(0,p.jsx)(t.code,{children:`role="alert"`}),`.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Pressing `,(0,p.jsx)(t.code,{children:`escape`}),` key closes the toast.`]})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),r(),l()}))();export{f as default};