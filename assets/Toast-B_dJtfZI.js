import{j as t,M as r,a,C as p}from"./iframe-DO7qjpir.js";import{useMDXComponents as s}from"./index-DM3CO3rl.js";import{S as m,P as n}from"./Toast.stories-DSa-Zzsg.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-nCaIAc8k.js";import"./index-CSJndD_T.js";import"./useId-B9UV2KOW.js";import"./Close-DVlpLiwK.js";import"./SeverityIcon-Cv0Z9iw1.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-DM57iPud.js";import"./Info-CoVbxZIf.js";import"./Warning-CK4OS6kN.js";import"./renderOrClone-C_aUAXE9.js";import"./classNames-C2xvgHQf.js";import"./useI18n-CbD-mhn-.js";import"./Button-DWGkri9_.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./ProgressCircular-CpbimHqB.js";import"./Dialog-B7jDT_Cn.js";import"./useControl-U2hc2GWS.js";import"./IconButton-GXyV3m9d.js";import"./Link-D7v631rY.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
