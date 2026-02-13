import{j as t,M as r,a,C as p}from"./iframe-D-N3fK2j.js";import{useMDXComponents as s}from"./index-BvagnWFp.js";import{S as m,P as n}from"./Toast.stories-Bzualhxx.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-UDo5dA_z.js";import"./index-C4YkipDE.js";import"./useId-Bkl3iN6O.js";import"./Close-Clva93gw.js";import"./SeverityIcon-DDEIToER.js";import"./sprout-tokens-C4H4srAS.js";import"./Error-CZbJtLWx.js";import"./Info-DKfyJpi1.js";import"./Warning-Dy5sqdbk.js";import"./renderOrClone-25h2pNOO.js";import"./classNames-CrSIhzis.js";import"./useI18n-ClHBar3-.js";import"./Button-BiiNVP7I.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./ProgressCircular-CdUDfayh.js";import"./Dialog-CiRpLpyf.js";import"./useControl-U-WkQj2I.js";import"./IconButton-Dg4ysz4Z.js";import"./Link-BxRc41fW.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
