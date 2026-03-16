import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{PlaygroundProgressBar as a,PlaygroundProgressCircular as o}from"./Progress.stories-DB9Ck_tn.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Progress`}),`
`,(0,s.jsx)(c.h1,{id:`progress`,children:`Progress`}),`
`,(0,s.jsx)(c.p,{children:`Progress indicators, or loaders, are used to show progression of system events. They can be determinate or indeterminate.`}),`
`,(0,s.jsx)(c.h2,{id:`progressbar`,children:`ProgressBar`}),`
`,(0,s.jsxs)(c.p,{children:[`Used for progress representation. ProgressBar directly inherits properties from `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div`,rel:`nofollow`,children:`HTML div element`}),` but add some extra properties to handle the progress representation.`]}),`
`,(0,s.jsx)(c.h3,{id:`usage`,children:`Usage`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { ProgressBar } from "@qlik/sprout-react";

<ProgressBar percent="70" aria-label="work in progress" />;
`})}),`
`,(0,s.jsx)(c.h3,{id:`properties`,children:`Properties`}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role`,rel:`nofollow`,children:`MDN ARIA: progressbar role`})}),`
`,(0,s.jsx)(c.p,{children:`HTML Structure`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`ProgressBar`}),` uses the HTML tag `,(0,s.jsx)(c.code,{children:`div`})]}),`
`,(0,s.jsxs)(c.li,{children:[`if the props `,(0,s.jsx)(c.code,{children:`percent`}),` is set`,`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[`the role `,(0,s.jsx)(c.code,{children:`progressbar`}),` is used.`]}),`
`,(0,s.jsxs)(c.li,{children:[`the attributes `,(0,s.jsx)(c.code,{children:`aria-value[min|max|now]`}),` are added`]}),`
`]}),`
`]}),`
`,(0,s.jsxs)(c.li,{children:[`if no `,(0,s.jsx)(c.code,{children:`percent`}),` props is passed it is considered as indetermined`,`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[`the role `,(0,s.jsx)(c.code,{children:`status`}),` is used.`]}),`
`,(0,s.jsxs)(c.li,{children:[`the attributes `,(0,s.jsx)(c.code,{children:`aria-busy`}),` are added`]}),`
`]}),`
`]}),`
`]}),`
`,(0,s.jsx)(c.h2,{id:`progresscircular`,children:`ProgressCircular`}),`
`,(0,s.jsxs)(c.p,{children:[`Used for progress representation within components, such as a button or a textfield. Can be used by its own. ProgressCircular directly inherits properties from `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg`,rel:`nofollow`,children:`SVG element`}),` but add some extra properties to handle the progress representation.`]}),`
`,(0,s.jsx)(c.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { ProgressCircular } from "@qlik/sprout-react";

<ProgressCircular size="m" percent="70" />;
`})}),`
`,(0,s.jsx)(c.h3,{id:`properties-1`,children:`Properties`}),`
`,(0,s.jsx)(n,{of:o}),`
`,(0,s.jsx)(t,{of:o}),`
`,(0,s.jsx)(c.h3,{id:`accessibility-1`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:`This component is a visual component made using SVG. It rely on the following aria-attributes to describe the progress semantic:`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[`if no `,(0,s.jsx)(c.code,{children:`percent`}),` props: it uses `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role`,rel:`nofollow`,children:`role="status"`})]}),`
`,(0,s.jsxs)(c.li,{children:[`if `,(0,s.jsx)(c.code,{children:`percent`}),` props: it uses `,(0,s.jsx)(c.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role`,rel:`nofollow`,children:`role="progressbar"`})]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};