import{j as e,M as r,a,C as c}from"./iframe-B-fqCePV.js";import{useMDXComponents as o}from"./index-DUhTx2ua.js";import{S as l,P as s}from"./Message.stories-6XnATPXY.js";import"./preload-helper-PPVm8Dsz.js";import"./Message-DGshW5gP.js";import"./sprout-DqOLOcsj.js";import"./ProgressBar-BPq1EUCD.js";import"./useId-DU0uuk5t.js";import"./classNames-BHQ9ieoZ.js";import"./ProgressCircular-CeNa-NP_.js";import"./useI18n-uzhF32fT.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./Button-DgHw6K-5.js";import"./icons-BXG-SLO7.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./Divider-B2v-xVm0.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Message",of:l}),`
`,e.jsx(t.h1,{id:"message",children:"Message"}),`
`,e.jsx(t.p,{children:"A Message component displays onboarding messaging or guided messages in content areas. Typically used for empty states."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// if you want the field
import { Message } from "@qlik/sprout-react";

<Message
  illustration={<svg />}
  title="Message title"
  message="Curabitur sagittis ac felis tristique molestie. Nam non eros a magna tincidunt congue."
  progress={{ percent: 35, label: "Loading progress" }}
  actions={
    <>
      <Button variant="primary" label="Primary action" />
      <Button variant="quiet" label="Another action" />
    </>
  }
/>;
`})}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["Simple ",e.jsx(t.code,{children:"div"}),` with no special accessibility requirements by default.
If `,e.jsx(t.code,{children:"progress"})," property is given it will add ",e.jsx(t.code,{children:'role="status"'})," and ",e.jsx(t.code,{children:'aria-live="polite"'})," to the message div container."]})]})}function S(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{S as default};
