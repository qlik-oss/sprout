import{j as t,M as s,a as l,C as a}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as o}from"./index-3LxxidSz.js";import{S as p,P as r}from"./AlertInline.stories-DAkxGedI.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertInline-CMKa7hjh.js";import"./close-Bbk9t1FU.js";import"./SeverityIcon-Btk8aNwb.js";import"./sprout-tokens-C4H4srAS.js";import"./error-DwsaS794.js";import"./info-DM6050LP.js";import"./warning-CAFk7pxH.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./useI18n-DNSc_Xzu.js";import"./IconButton-zwf3qVx9.js";import"./Button-BLnymG9d.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./Link-CoYRPNFu.js";import"./GotoIcon-Co2uHkL2.js";function i(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Trigger/AlertInline",of:p}),`
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
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`<AlertInline
  role="alert"
  aria-live="assertive"
  severity="error"
  content="Urgent alert"
/>
`})})]})}function E(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{E as default};
