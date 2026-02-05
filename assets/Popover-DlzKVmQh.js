import{j as o,M as s,a as p,C as c}from"./iframe-BQJExRCF.js";import{useMDXComponents as t}from"./index-BiT2RrsF.js";import{S as a,P as i}from"./Popover.stories-D8W-TdpL.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-CTsqc6Mc.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./Button-C7-D-GN_.js";import"./icons-CzMI2h-K.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./ProgressCircular-B4mHH4_Y.js";import"./useI18n-B99T9obj.js";import"./Menu-D_upy4ds.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./list-B1zo5gaH.js";import"./NewTab-BMHt_Vx2.js";import"./IconButton-BEI3RZpW.js";import"./Skeleton-C323E7Fo.js";import"./AlertInline-DLvQ03s1.js";import"./Close-VT6FC74F.js";import"./SeverityIcon-CI0epH8x.js";import"./Error-B95qseKK.js";import"./Info-BfRROe8g.js";import"./Warning-BB_ZpJQH.js";import"./List-BPN2kntc.js";import"./useListGesture-B8rp38Ns.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Components/Popover",of:a}),`
`,o.jsx(e.h1,{id:"popover",children:"Popover"}),`
`,o.jsx(e.p,{children:"A popover is a floating container that appears adjacent to a trigger. Commonly used for menus."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Popover, type PopoverProps } from "@qlik/sprout-css-react";
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
`})})]})}function H(n={}){const{wrapper:e}={...t(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(r,{...n})}):r(n)}export{H as default};
