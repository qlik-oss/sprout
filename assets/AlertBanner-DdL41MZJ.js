import{j as e,M as s,a,C as c}from"./iframe-s7Iwh0oT.js";import{useMDXComponents as i}from"./index-3LxxidSz.js";import{S as l,P as t}from"./AlertBanner.stories-B9Bwv-Wg.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-C4H4srAS.js";import"./close-Bbk9t1FU.js";import"./SeverityIcon-Btk8aNwb.js";import"./error-DwsaS794.js";import"./info-DM6050LP.js";import"./warning-CAFk7pxH.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./useI18n-DNSc_Xzu.js";import"./IconButton-zwf3qVx9.js";import"./Button-BLnymG9d.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./Tooltip-_uMFampe.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./ProgressCircular-Dm76i-ei.js";import"./Link-CoYRPNFu.js";import"./GotoIcon-Co2uHkL2.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/AlertBanner",of:l}),`
`,e.jsx(r.h1,{id:"alertbanner",children:"AlertBanner"}),`
`,e.jsx(r.p,{children:"Alerts are short messages that shows feedback, information, warnings, or critical errors."}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {
  AlertBanner,
  type AlertBannerProps,
} from "@qlik/sprout-react";

<AlertBanner
  variant="info"
  content="Alert content"
  onClickDismiss={() => {}}
  action={<></>}
/>;
`})}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["This component use a ",e.jsx(r.code,{children:"div"})," html tag with the ",e.jsx(r.code,{children:"role=status"})," and ",e.jsx(r.code,{children:'aria-live="polite"'}),` attribute to announce the alert to screen readers.
You can switch to a real alert by overriding those two properties like this:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<AlertBanner
  role="alert"
  aria-live="assertive"
  variant="error"
  content="Urgent alert"
/>
`})})]})}function _(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{_ as default};
