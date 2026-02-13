import{j as e,M as s,a as o,C as d}from"./iframe-D-N3fK2j.js";import{useMDXComponents as r}from"./index-BvagnWFp.js";import{S as c,P as a}from"./Badge.stories-BE6hkt6D.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-sJnchsAW.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./Avatar-wYIG60lJ.js";import"./useI18n-ClHBar3-.js";import"./Button-BiiNVP7I.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./ProgressCircular-CdUDfayh.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Badge",of:c}),`
`,e.jsx(t.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(t.p,{children:"A badge serves as a visual indicator designed to attract attention to its accompanying element or to display additional information. Badges are commonly used to show new or unread items, highlight changes, or for decorative purposes."}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Avatar, Badge } from "@qlik/sprout-react";

<Badge variant="dot" />;

<Badge variant="alphanumeric" text="1" color="info" />;

<Avatar size="s" text="OC" badge={<Badge variant="alphanumeric" text="1" color="danger" />} />;
`})}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.p,{children:["Badge use a simple ",e.jsx(t.code,{children:"span"}),` element.
In some context you will have to add `,e.jsx(t.code,{children:'role="status"'})," and ",e.jsx(t.code,{children:'aria-live="polite"'}),` to indicate this number may changes depending on some user actions.
Adding an aria-label to the badge will always be considered useful for screen reader users but it is not required.
But if the value is a static number it is considered useless to add those attributes.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Badge variant="alphanumeric" text="14" role="status" arial-live="polite" aria-label="14 items in your shopping cart" />
`})})]})}function D(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{D as default};
