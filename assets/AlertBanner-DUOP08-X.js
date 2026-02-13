import{j as e,M as s,a,C as c}from"./iframe-D-N3fK2j.js";import{useMDXComponents as i}from"./index-BvagnWFp.js";import{S as l,P as n}from"./AlertBanner.stories-oqdqeurD.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-C4H4srAS.js";import"./Close-Clva93gw.js";import"./SeverityIcon-DDEIToER.js";import"./Error-CZbJtLWx.js";import"./Info-DKfyJpi1.js";import"./Warning-Dy5sqdbk.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./useI18n-ClHBar3-.js";import"./IconButton-Dg4ysz4Z.js";import"./Button-BiiNVP7I.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./Link-BxRc41fW.js";function o(t){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/AlertBanner",of:l}),`
`,e.jsx(r.h1,{id:"alertbanner",children:"AlertBanner"}),`
`,e.jsx(r.p,{children:"Alerts are short messages that shows feedback, information, warnings, or critical errors."}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { AlertBanner, type AlertBannerProps } from "@qlik/sprout-react";

<AlertBanner variant="info" content="Alert content" onClickDismiss={() => {}} action={<></>} />;
`})}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(a,{of:n}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["This component use a ",e.jsx(r.code,{children:"div"})," html tag with the ",e.jsx(r.code,{children:"role=status"})," and ",e.jsx(r.code,{children:'aria-live="polite"'}),` attribute to announce the alert to screen readers.
You can switch to a real alert by overriding those two properties like this:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<AlertBanner role="alert" aria-live="assertive" variant="error" content="Urgent alert" />
`})})]})}function U(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{U as default};
