import{j as e,M as r,a,C as c}from"./iframe-BQJExRCF.js";import{useMDXComponents as o}from"./index-BiT2RrsF.js";import{S as l,P as n}from"./Message.stories-BV9q26nT.js";import"./preload-helper-PPVm8Dsz.js";import"./Message-C0IrDS9-.js";import"./sprout-DxA14K3u.js";import"./ProgressBar-LweF-ALg.js";import"./useId-Drz8gmS2.js";import"./classNames-B0wfWtWT.js";import"./ProgressCircular-B4mHH4_Y.js";import"./useI18n-B99T9obj.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./Button-C7-D-GN_.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Divider-Byw016rg.js";function i(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Message",of:l}),`
`,e.jsx(t.h1,{id:"message",children:"Message"}),`
`,e.jsx(t.p,{children:"A Message component displays onboarding messaging or guided messages in content areas. Typically used for empty states."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// if you want the field
import { Message } from "@qlik/sprout-css-react";

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
`,e.jsx(a,{of:n}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["Simple ",e.jsx(t.code,{children:"div"}),` with no special accessibility requirements by default.
If `,e.jsx(t.code,{children:"progress"})," property is given it will add ",e.jsx(t.code,{children:'role="status"'})," and ",e.jsx(t.code,{children:'aria-live="polite"'})," to the message div container."]})]})}function S(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{S as default};
