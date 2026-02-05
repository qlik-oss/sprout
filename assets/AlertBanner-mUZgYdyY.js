import{j as e,M as s,a,C as c}from"./iframe-BQJExRCF.js";import{useMDXComponents as i}from"./index-BiT2RrsF.js";import{S as l,P as t}from"./AlertBanner.stories-CWlLSToC.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-D9QRO1qB.js";import"./Close-VT6FC74F.js";import"./SeverityIcon-CI0epH8x.js";import"./Error-B95qseKK.js";import"./Info-BfRROe8g.js";import"./Warning-BB_ZpJQH.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./useI18n-B99T9obj.js";import"./IconButton-BEI3RZpW.js";import"./Button-C7-D-GN_.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./Tooltip-CVFOQrqK.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./ProgressCircular-B4mHH4_Y.js";import"./Link-CekcoEle.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/AlertBanner",of:l}),`
`,e.jsx(r.h1,{id:"alertbanner",children:"AlertBanner"}),`
`,e.jsx(r.p,{children:"Alerts are short messages that shows feedback, information, warnings, or critical errors."}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {
  AlertBanner,
  type AlertBannerProps,
} from "@qlik/sprout-css-react";

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
`})})]})}function U(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{U as default};
