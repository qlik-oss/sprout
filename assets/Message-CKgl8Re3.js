import{j as e,M as r,a,C as c}from"./iframe-BThSoDrn.js";import{useMDXComponents as o}from"./index-dxYskzg-.js";import{S as l,P as s}from"./Message.stories-DwHdaeQY.js";import"./preload-helper-PPVm8Dsz.js";import"./Message-6bQP5MEx.js";import"./sprout-C7A3N88C.js";import"./ProgressBar-C7xEEuQF.js";import"./useId-hgAQXGHZ.js";import"./classNames-dIthk07I.js";import"./ProgressCircular-3frmJwTX.js";import"./useI18n-DEBX20KE.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./Button-DPdoSvtR.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Divider-BDGjRrdZ.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Message",of:l}),`
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
