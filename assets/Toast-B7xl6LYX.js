import{j as t,M as r,a,C as p}from"./iframe-CYyT-rNd.js";import{useMDXComponents as s}from"./index-Dzbf35yC.js";import{S as m,P as n}from"./Toast.stories-BoTRNPSm.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-UDUY6uO8.js";import"./index-CVr9pO7k.js";import"./useId-BEfewr8x.js";import"./Close-IBeLqb5W.js";import"./SeverityIcon-B1bVDgD2.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-D7GnDcGx.js";import"./Info-kPGn8DpC.js";import"./Warning-BO-41SRA.js";import"./renderOrClone-GWN5S5OT.js";import"./classNames-BmP9dLUE.js";import"./useI18n-B8acZ0ym.js";import"./Button-B_WU7ehq.js";import"./icons-BJP5nzPh.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./Tooltip-Bq8n5z5D.js";import"./ProgressCircular-BThLXJeo.js";import"./Dialog-DpA2iiF0.js";import"./useControl-CbxOYg9r.js";import"./IconButton-DQqeG5o4.js";import"./Link-CrVjHJfh.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
