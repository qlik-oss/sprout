import{j as e,M as s,a,C as c}from"./iframe-lMEil1TA.js";import{useMDXComponents as i}from"./index-Wkq3wkd2.js";import{S as l,P as t}from"./AlertBanner.stories-CJq8l6_Y.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-C4H4srAS.js";import"./close-CrtKz3TF.js";import"./SeverityIcon-Dpf8kFNW.js";import"./error-D8ruDyrJ.js";import"./info-B4Qytw2Z.js";import"./warning-X1qrbfM3.js";import"./classNames-B_Twdkca.js";import"./sprout-fe7_-ZbP.js";import"./useI18n-CDksjSf0.js";import"./IconButton-CuZnXk5P.js";import"./Button-B3VC5XuI.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./Tooltip-wsnfK-o5.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./ProgressCircular-DzkpdMMq.js";import"./Link-BZ5Xk74e.js";import"./GotoIcon-DrbEVrb9.js";function o(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/AlertBanner",of:l}),`
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
