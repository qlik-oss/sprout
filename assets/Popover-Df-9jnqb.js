import{j as o,M as s,a as p,C as c}from"./iframe-lMEil1TA.js";import{useMDXComponents as t}from"./index-Wkq3wkd2.js";import{S as a,P as i}from"./Popover.stories-rILhsnsP.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-C2pxt5JU.js";import"./padding-ChQcYsRi.js";import"./classNames-B_Twdkca.js";import"./sprout-fe7_-ZbP.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./Button-B3VC5XuI.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./ProgressCircular-DzkpdMMq.js";import"./useI18n-CDksjSf0.js";import"./Menu-BuAoSxI5.js";import"./useControl-Crf27nxo.js";import"./Divider-DoFQjC9R.js";import"./list-B1zo5gaH.js";import"./new-tab-CrWdziAn.js";import"./IconButton-CuZnXk5P.js";import"./Skeleton-ByVVQwn0.js";import"./AlertInline-Dsva9G2S.js";import"./close-CrtKz3TF.js";import"./SeverityIcon-Dpf8kFNW.js";import"./error-D8ruDyrJ.js";import"./info-B4Qytw2Z.js";import"./warning-X1qrbfM3.js";import"./List-DPaEP81W.js";import"./useListGesture-CqGT3z4U.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Components/Popover",of:a}),`
`,o.jsx(e.h1,{id:"popover",children:"Popover"}),`
`,o.jsx(e.p,{children:"A popover is a floating container that appears adjacent to a trigger. Commonly used for menus."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Popover, type PopoverProps } from "@qlik/sprout-react";
`})}),`
`,o.jsx(p,{of:i}),`
`,o.jsx(e.h2,{id:"api",children:"API"}),`
`,o.jsx(c,{of:i}),`
`,o.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o.jsx(e.p,{children:o.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"W3/WAI/ARIA/APG Dialog"})}),`
`,o.jsx(e.p,{children:"HTML structure"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"Popover"})," component inject ",o.jsx(e.code,{children:'aria-expanded="true|false"'})," and ",o.jsx(e.code,{children:'aria-haspopup="dialog"'})," attributes on the children."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"PopoverContent"})," wrap the content into a ",o.jsx(e.code,{children:"div"})," with ",o.jsx(e.code,{children:'role="dialog"'})," and ",o.jsx(e.code,{children:'aria-modal="true"'})," attributes."]}),`
`]}),`
`,o.jsx(e.p,{children:"Keyboard navigation"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:"Focus is given on dialog when it is opened."}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"Escape"}),": Closes the dialog if it is opened."]}),`
`]}),`
`,o.jsx(e.h2,{id:"breaking-changes",children:"Breaking changes"}),`
`,o.jsx(e.h3,{id:"v300",children:"v3.0.0"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Popover"})," do not inject padding anymore in the content to give a complete controls over it."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-diff",children:`-      <Popover content={content}>
+      <Popover content={content} p="xl" pb="m">
`})})]})}function K(n={}){const{wrapper:e}={...t(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(r,{...n})}):r(n)}export{K as default};
