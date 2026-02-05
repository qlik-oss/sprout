import{j as t,M as r,a,C as p}from"./iframe-B4vjk2_C.js";import{useMDXComponents as s}from"./index-4mXTpVuF.js";import{S as m,P as n}from"./Toast.stories-NGxTuly9.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DTAeqvbL.js";import"./index-BpotIsA1.js";import"./useId-DsPr7Fl4.js";import"./Close-CzhTZSOO.js";import"./SeverityIcon-BXOn61Fa.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-aRqdswEO.js";import"./Info-qvjQZ4-p.js";import"./Warning-mmXjUrwg.js";import"./renderOrClone-D3fq_iUv.js";import"./classNames-DaRWzB8T.js";import"./useI18n-DbSMZiRF.js";import"./Button-COVTwlCl.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./ProgressCircular-CXDJvuy2.js";import"./Dialog-BxQNm9uS.js";import"./useControl-DPltlHoP.js";import"./IconButton-Ba8Tcb-S.js";import"./Link-UTOISHnX.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
