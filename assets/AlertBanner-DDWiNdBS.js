import{j as e,M as s,a,C as c}from"./iframe-BThSoDrn.js";import{useMDXComponents as i}from"./index-dxYskzg-.js";import{S as l,P as n}from"./AlertBanner.stories-CQzEfSkB.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-D9QRO1qB.js";import"./Close-jEAlxUHo.js";import"./SeverityIcon-CDrAKmG1.js";import"./Error-LWra2rFD.js";import"./Info-CD_iaTpZ.js";import"./Warning-BKQeZIO5.js";import"./classNames-dIthk07I.js";import"./sprout-C7A3N88C.js";import"./useI18n-DEBX20KE.js";import"./IconButton-BNf-P6Px.js";import"./Button-DPdoSvtR.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Tooltip-g36jqBzQ.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./ProgressCircular-3frmJwTX.js";import"./Link-uLWO2eWL.js";function o(t){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/AlertBanner",of:l}),`
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
