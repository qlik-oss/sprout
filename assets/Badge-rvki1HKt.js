import{j as e,M as s,a as o,C as d}from"./iframe-qjjAf_pH.js";import{useMDXComponents as r}from"./index-BAT7sozL.js";import{S as c,P as a}from"./Badge.stories-CAGyWi23.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-CvmwyUY9.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./Avatar-DP9lA2bv.js";import"./useI18n-DleVkSsM.js";import"./Button-cYFf5aNk.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./ProgressCircular-BSs6AknY.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Badge",of:c}),`
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
