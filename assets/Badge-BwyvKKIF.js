import{j as e,M as s,a as o,C as d}from"./iframe-DuYosUFD.js";import{useMDXComponents as r}from"./index-6fjbDpXn.js";import{S as c,P as a}from"./Badge.stories-DFmhILYw.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-CPj7NTO4.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./Avatar-C0VvVHs7.js";import"./useI18n-BjJPdLTM.js";import"./Button-DI0ZynHS.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./ProgressCircular-BvkbtoQi.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Badge",of:c}),`
`,e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(n.p,{children:"A badge serves as a visual indicator designed to attract attention to its accompanying element or to display additional information. Badges are commonly used to show new or unread items, highlight changes, or for decorative purposes."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Avatar, Badge } from "@qlik/sprout-react";

<Badge variant="dot" />;

<Badge variant="alphanumeric" text="1" color="info" />;

<Avatar
  size="s"
  text="OC"
  badge={<Badge variant="alphanumeric" text="1" color="danger" />}
/>;
`})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"HTML structure"}),`
`,e.jsxs(n.p,{children:["Badge use a simple ",e.jsx(n.code,{children:"span"}),` element.
In some context you will have to add `,e.jsx(n.code,{children:'role="status"'})," and ",e.jsx(n.code,{children:'aria-live="polite"'}),` to indicate this number may changes depending on some user actions.
Adding an aria-label to the badge will always be considered useful for screen reader users but it is not required.
But if the value is a static number it is considered useless to add those attributes.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Badge
  variant="alphanumeric"
  text="14"
  role="status"
  arial-live="polite"
  aria-label="14 items in your shopping cart"
/>
`})})]})}function D(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{D as default};
