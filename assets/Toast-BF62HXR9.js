import{j as t,M as r,a,C as p}from"./iframe-B9QkJTIx.js";import{useMDXComponents as s}from"./index-Ka0iXB8t.js";import{S as m,P as n}from"./Toast.stories-7368Bcp9.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-DgR7PjaR.js";import"./index-BtZGzD7k.js";import"./useId-HR4iyljw.js";import"./Close-ajP2gTu5.js";import"./SeverityIcon-CKoJLroj.js";import"./sprout-tokens-C4H4srAS.js";import"./Error-Blwva2SQ.js";import"./Info-BWEZF-KM.js";import"./Warning-B4wA6Xoa.js";import"./renderOrClone-Dge73wkB.js";import"./classNames-CL7ibyjj.js";import"./useI18n-CoLWfcqJ.js";import"./Button-DJuasLWt.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./ProgressCircular-CftNoQ2F.js";import"./Dialog-C880vGGZ.js";import"./useControl-CYR4PP7j.js";import"./IconButton-CrQ3EA5C.js";import"./Link-niI7jMR3.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
