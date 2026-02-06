import{j as t,M as r,a,C as p}from"./iframe-itHhOQJ8.js";import{useMDXComponents as s}from"./index-M6OOd87p.js";import{S as m,P as n}from"./Toast.stories-Dlqqyqga.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-5bk7oM4L.js";import"./index-BAzI2BDU.js";import"./useId-B9bqBKq5.js";import"./Close-DeQxVhkZ.js";import"./SeverityIcon-B8lRHlGc.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-CgMRcq7x.js";import"./Info-CR8Ra2BB.js";import"./Warning-Wt3nbj6y.js";import"./renderOrClone-DcDxQLMY.js";import"./classNames-8u_YGv6N.js";import"./useI18n-DI5kaiCu.js";import"./Button-D1L5V1zp.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./ProgressCircular-DxTh7cF9.js";import"./Dialog-DHbYYsTk.js";import"./useControl-tJx49zVQ.js";import"./IconButton-BFY56UPS.js";import"./Link-BhmpJpVw.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
`,t.jsx(e.h1,{id:"toast",children:"Toast"}),`
`,t.jsx(e.p,{children:`A Toast is a small, non-intrusive message that pops up temporarily to notify users about an action or event.
It typically appears at the edge of the screen and disappears automatically after a few seconds, though it can be dismissed manually.
Toasts are ideal for brief, context-aware feedback like form submissions, errors, or connection status updates.
They should be used to provide real-time alerts without interrupting the user’s workflow.`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Toast, type ToastProps } from "@qlik/sprout-react";

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
`,t.jsx(a,{of:n}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(e.p,{children:"Timeout implementation rely on the application state and this component is not intended to provide any opinion on it for now."}),`
`,t.jsx(p,{of:n}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.p,{children:["The component use a div with ",t.jsx(e.code,{children:'role="alert"'}),"."]}),`
`,t.jsxs(e.p,{children:["Pressing ",t.jsx(e.code,{children:"escape"})," key closes the toast."]})]})}function I(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{I as default};
