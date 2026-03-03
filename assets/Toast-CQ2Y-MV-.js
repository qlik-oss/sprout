import{j as t,M as r,a,C as p}from"./iframe-CuV-KuE-.js";import{useMDXComponents as s}from"./index-D_K059sT.js";import{S as m,P as n}from"./Toast.stories-LqRZAXsR.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DQv_ITqK.js";import"./index-dr8aUK6z.js";import"./useId-CKb71T0Y.js";import"./Close-DVZAYT6i.js";import"./SeverityIcon-DIoAgMWV.js";import"./sprout-tokens-C4H4srAS.js";import"./Error-D9ghOnKS.js";import"./Info-BDH0-Rmp.js";import"./Warning-TGmbdRgn.js";import"./renderOrClone-tUeULyiG.js";import"./classNames-fYnfVJ-g.js";import"./useI18n-BPziWXqP.js";import"./Button-D_CeIuO9.js";import"./icons-BouMdmeh.js";import"./Button.module-CmdpHks8.js";import"./Badge-Dt3dHAo1.js";import"./Tooltip-Dlf0g86C.js";import"./ProgressCircular-DDsJKJWC.js";import"./Dialog-BHc8XAY1.js";import"./useControl-CYhNvxn-.js";import"./IconButton-DFJpbTCt.js";import"./Link-IaMFxNIG.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
