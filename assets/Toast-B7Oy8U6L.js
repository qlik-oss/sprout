import{j as t,M as r,a,C as p}from"./iframe-B-fqCePV.js";import{useMDXComponents as s}from"./index-DUhTx2ua.js";import{S as m,P as n}from"./Toast.stories-CmlcMRHe.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DqOLOcsj.js";import"./index-D3nWdDvz.js";import"./useId-DU0uuk5t.js";import"./Close-R01cAXcl.js";import"./SeverityIcon-BvojxLgC.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-BQGw3LDI.js";import"./Info-C4YmKgXN.js";import"./Warning-GhyyIkan.js";import"./renderOrClone-BvkMXfLp.js";import"./classNames-BHQ9ieoZ.js";import"./useI18n-uzhF32fT.js";import"./Button-DgHw6K-5.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Tooltip-DclK_iM1.js";import"./ProgressCircular-CeNa-NP_.js";import"./Dialog-Bnd6xrAH.js";import"./useControl-DDjCssuD.js";import"./IconButton-C1DotWTd.js";import"./Link-Cnbgyhf2.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
