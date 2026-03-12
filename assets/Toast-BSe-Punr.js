import{j as t,M as r,a,C as p}from"./iframe-DuYosUFD.js";import{useMDXComponents as s}from"./index-6fjbDpXn.js";import{S as m,P as n}from"./Toast.stories-DGk62HaH.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-CvRh1TM0.js";import"./index-oUU-OCnJ.js";import"./close-Dyzj91Dc.js";import"./useId-DRaip_NL.js";import"./SeverityIcon-DSoo49L9.js";import"./sprout-tokens-C4H4srAS.js";import"./error-CXY2goRU.js";import"./info-Bxa3p2DF.js";import"./warning-DO6AU_ml.js";import"./renderOrClone-DjHAObcc.js";import"./classNames-zePBlFY_.js";import"./useI18n-BjJPdLTM.js";import"./Button-DI0ZynHS.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./Tooltip-BJFaRrUy.js";import"./ProgressCircular-BvkbtoQi.js";import"./Dialog-CG7q9W81.js";import"./useControl-DOCWDNqa.js";import"./IconButton-BE9E_AnQ.js";import"./Link-BVDkv1Df.js";import"./GotoIcon-C3BbVvUl.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Components/Toast",of:m}),`
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
