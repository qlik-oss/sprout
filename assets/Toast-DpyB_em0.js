import{j as t,M as r,a,C as p}from"./iframe-qjjAf_pH.js";import{useMDXComponents as s}from"./index-BAT7sozL.js";import{S as m,P as n}from"./Toast.stories-CAWBNOcK.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-Dvd5rbSu.js";import"./index-wmeMeVsK.js";import"./useId-CYaNFQmj.js";import"./Close-Bp7FqXQR.js";import"./SeverityIcon-DTXO1k7w.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-BrLGh9jC.js";import"./Info-DxHQkaw3.js";import"./Warning-CuGLZChC.js";import"./renderOrClone-CXS0BGZe.js";import"./classNames-BVAN1ZTN.js";import"./useI18n-DleVkSsM.js";import"./Button-cYFf5aNk.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./Tooltip-DvaPb59I.js";import"./ProgressCircular-BSs6AknY.js";import"./Dialog-H_IAXiyp.js";import"./useControl-BNhHN6uq.js";import"./IconButton-DKYxz8uh.js";import"./Link-DchgIYaQ.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
