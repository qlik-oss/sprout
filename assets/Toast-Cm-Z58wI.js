import{j as t,M as r,a,C as p}from"./iframe-Bp0nu8X6.js";import{useMDXComponents as s}from"./index-CC_VpkT-.js";import{S as m,P as n}from"./Toast.stories-BlzoML8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-rpr_484f.js";import"./index-CVlxIw56.js";import"./close-CJ5Ns5F2.js";import"./useId-C38y77Da.js";import"./SeverityIcon-CBpxoadr.js";import"./sprout-tokens-C4H4srAS.js";import"./error-BcSU3HuT.js";import"./info-DGMlSu_6.js";import"./warning-CT_3wb2_.js";import"./renderOrClone-D5e_-V2O.js";import"./classNames-BUd7eP-S.js";import"./useI18n-D2jaKmf9.js";import"./Button-CBkOB6z4.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./ProgressCircular-DO25q9z0.js";import"./Dialog-Cr5lw4sh.js";import"./useControl-CS67YHbK.js";import"./IconButton-Bu152FGZ.js";import"./Link-CnzXFCWX.js";import"./GotoIcon-CIJB9WYl.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
`,t.jsx(o.h1,{id:"toast",children:"Toast"}),`
`,t.jsx(o.p,{children:`A Toast is a small, non-intrusive message that pops up temporarily to notify users about an action or event.
It typically appears at the edge of the screen and disappears automatically after a few seconds, though it can be dismissed manually.
Toasts are ideal for brief, context-aware feedback like form submissions, errors, or connection status updates.
They should be used to provide real-time alerts without interrupting the user’s workflow.`}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Toast, type ToastProps } from "@qlik/sprout-react";

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
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(o.p,{children:"Timeout implementation rely on the application state and this component is not intended to provide any opinion on it for now."}),`
`,t.jsx(p,{of:n}),`
`,t.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(o.p,{children:["The component use a div with ",t.jsx(o.code,{children:'role="alert"'}),"."]}),`
`,t.jsxs(o.p,{children:["Pressing ",t.jsx(o.code,{children:"escape"})," key closes the toast."]})]})}function L(e={}){const{wrapper:o}={...s(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{L as default};
