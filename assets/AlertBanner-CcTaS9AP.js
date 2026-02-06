import{j as e,M as s,a,C as c}from"./iframe-Dux6zP9l.js";import{useMDXComponents as i}from"./index-BCztanOQ.js";import{S as l,P as n}from"./AlertBanner.stories-CFiobHA7.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-tokens-D9QRO1qB.js";import"./Close-DZrODGJw.js";import"./SeverityIcon-xCN2JtCp.js";import"./Error-BylAzqMK.js";import"./Info-DM0ROm97.js";import"./Warning-DwriNDhq.js";import"./classNames-T6EAEAwi.js";import"./sprout-duSO2RrP.js";import"./useI18n-KYbpKEsf.js";import"./IconButton-Blrr834S.js";import"./Button-CUxISDo2.js";import"./icons-DDUP-3mh.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./Tooltip-64IyLuk4.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./ProgressCircular-u9vevpyG.js";import"./Link-BYc5Px_w.js";function o(t){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/AlertBanner",of:l}),`
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
