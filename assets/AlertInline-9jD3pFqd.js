import{j as t,M as s,a as l,C as a}from"./iframe-BM36tKY9.js";import{useMDXComponents as o}from"./index-BCPnpXol.js";import{S as p,P as r}from"./AlertInline.stories-DKG6Sxwy.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertInline-GaNDVBB-.js";import"./close-CYEv2BwJ.js";import"./SeverityIcon-CnbcKgkd.js";import"./sprout-tokens-C4H4srAS.js";import"./error-DJM79MqW.js";import"./info-By4pCjMF.js";import"./warning-GTpknHYS.js";import"./classNames-D2MVtjzd.js";import"./sprout-BcBmzfoy.js";import"./useI18n-BRpGJeHe.js";import"./IconButton-DIyYlW0K.js";import"./Button-wScfBKxi.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./Tooltip-DOknWAYm.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./ProgressCircular-DoqAoY81.js";import"./Link-CvT9Ihga.js";import"./GotoIcon-BhbG7GPr.js";function i(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/Trigger/AlertInline",of:p}),`
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
