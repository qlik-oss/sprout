import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-URhFfzNK.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./Toast.stories-D7fhgapT.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Toast`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`toast`,children:`Toast`}),`
`,(0,s.jsx)(c.p,{children:`A Toast is a small, non-intrusive message that pops up temporarily to notify users about an action or event.
It typically appears at the edge of the screen and disappears automatically after a few seconds, though it can be dismissed manually.
Toasts are ideal for brief, context-aware feedback like form submissions, errors, or connection status updates.
They should be used to provide real-time alerts without interrupting the user’s workflow.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Toast, type ToastProps } from "@qlik/sprout-react";

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
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`properties`,children:`Properties`}),`
`,(0,s.jsx)(c.p,{children:`Timeout implementation rely on the application state and this component is not intended to provide any opinion on it for now.`}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsxs)(c.p,{children:[`The component use a div with `,(0,s.jsx)(c.code,{children:`role="alert"`}),`.`]}),`
`,(0,s.jsxs)(c.p,{children:[`Pressing `,(0,s.jsx)(c.code,{children:`escape`}),` key closes the toast.`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};