import{j as t,M as s,a as l,C as a}from"./iframe-itHhOQJ8.js";import{useMDXComponents as o}from"./index-M6OOd87p.js";import{S as c,P as r}from"./AlertInline.stories-BnfKMCzq.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertInline-v7KfNwSs.js";import"./Close-DeQxVhkZ.js";import"./SeverityIcon-B8lRHlGc.js";import"./sprout-tokens-D9QRO1qB.js";import"./Error-CgMRcq7x.js";import"./Info-CR8Ra2BB.js";import"./Warning-Wt3nbj6y.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./useI18n-DI5kaiCu.js";import"./IconButton-BFY56UPS.js";import"./Button-D1L5V1zp.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./Link-BhmpJpVw.js";function i(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Trigger/AlertInline",of:c}),`
`,t.jsx(e.h1,{id:"alertinline",children:"AlertInline"}),`
`,t.jsx(e.p,{children:"Alerts are short messages that shows feedback, information, warnings, or critical errors."}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`import { AlertInline } from "@qlik/sprout-react";

<AlertInline
  severity="info"
  title="Title"
  // onDismiss handler trigger the display of the dismiss button
  onDismiss={() => console.log("Dismissed")}
  actionBar={<Button variant="primary" label="Label" />}
>
  <p>Structured text but up to you to style it</p>
</AlertInline>;

<AlertInline
  severity="info"
  title="Title"
  layout="horizontal"
  onDismiss={() => console.log("Dismissed")}
  actionBar={
    <>
      <Button variant="default" label="Learn more" />
      <Link isExternal>Link</Link>
    </>
  }
>
  <p>Structured text but up to you to style it</p>
</AlertInline>;
`})}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx(a,{of:r}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.p,{children:["This component use a ",t.jsx(e.code,{children:"div"})," html tag with the ",t.jsx(e.code,{children:"role=status"})," and ",t.jsx(e.code,{children:'aria-live="polite"'}),` attribute to announce the alert to screen readers.
You can switch to a alert by overriding those two properties like this:`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`<AlertInline role="alert" aria-live="assertive" severity="error" content="Urgent alert" />
`})})]})}function X(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{X as default};
