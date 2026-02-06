import{j as o,M as s,a as p,C as c}from"./iframe-qjjAf_pH.js";import{useMDXComponents as t}from"./index-BAT7sozL.js";import{S as a,P as i}from"./Popover.stories-C79dMR0Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-DnFzFkcI.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./Button-cYFf5aNk.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./ProgressCircular-BSs6AknY.js";import"./useI18n-DleVkSsM.js";import"./Menu-C5_qGJie.js";import"./useControl-BNhHN6uq.js";import"./Divider-Cf0WguxB.js";import"./list-B1zo5gaH.js";import"./NewTab-CYZ0jhBQ.js";import"./IconButton-DKYxz8uh.js";import"./Skeleton-BKmE9JlX.js";import"./AlertInline-BvFLYRiR.js";import"./Close-Bp7FqXQR.js";import"./SeverityIcon-DTXO1k7w.js";import"./Error-BrLGh9jC.js";import"./Info-DxHQkaw3.js";import"./Warning-CuGLZChC.js";import"./List-C3D7MMCm.js";import"./useListGesture-Brx4doHh.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Components/Popover",of:a}),`
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
`})})]})}function H(n={}){const{wrapper:e}={...t(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(r,{...n})}):r(n)}export{H as default};
