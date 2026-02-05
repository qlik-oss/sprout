import{j as t,M as r,a,C as p}from"./iframe-BQJExRCF.js";import{useMDXComponents as s}from"./index-BiT2RrsF.js";import{S as m,P as n}from"./Toast.stories-BALSmxL3.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DxA14K3u.js";import"./index-DFRbf9nk.js";import"./useId-Drz8gmS2.js";import"./Close-VT6FC74F.js";import"./SeverityIcon-CI0epH8x.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-B95qseKK.js";import"./Info-BfRROe8g.js";import"./Warning-BB_ZpJQH.js";import"./renderOrClone-DAgGzV0n.js";import"./classNames-B0wfWtWT.js";import"./useI18n-B99T9obj.js";import"./Button-C7-D-GN_.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./ProgressCircular-B4mHH4_Y.js";import"./Dialog-V0hlaycj.js";import"./useControl-XJuj1vyK.js";import"./IconButton-BEI3RZpW.js";import"./Link-CekcoEle.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
`,t.jsx(e.h1,{id:"toast",children:"Toast"}),`
`,t.jsx(e.p,{children:`A Toast is a small, non-intrusive message that pops up temporarily to notify users about an action or event.
It typically appears at the edge of the screen and disappears automatically after a few seconds, though it can be dismissed manually.
Toasts are ideal for brief, context-aware feedback like form submissions, errors, or connection status updates.
They should be used to provide real-time alerts without interrupting the user’s workflow.`}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import { Toast, type ToastProps } from "@qlik/sprout-css-react";

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
