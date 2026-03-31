import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{PlaygroundProgressBar as c,PlaygroundProgressCircular as l,t as u}from"./Progress.stories-D8xeLTab.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Progress`}),`
`,(0,p.jsx)(n.h1,{id:`progress`,children:`Progress`}),`
`,(0,p.jsx)(n.p,{children:`Progress indicators, or loaders, are used to show progression of system events. They can be determinate or indeterminate.`}),`
`,(0,p.jsx)(n.h2,{id:`progressbar`,children:`ProgressBar`}),`
`,(0,p.jsxs)(n.p,{children:[`Used for progress representation. ProgressBar directly inherits properties from `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div`,rel:`nofollow`,children:`HTML div element`}),` but add some extra properties to handle the progress representation.`]}),`
`,(0,p.jsx)(n.h3,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { ProgressBar } from "@qlik/sprout-react";

<ProgressBar percent="70" aria-label="work in progress" />;
`})}),`
`,(0,p.jsx)(n.h3,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role`,rel:`nofollow`,children:`MDN ARIA: progressbar role`})}),`
`,(0,p.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`ProgressBar`}),` uses the HTML tag `,(0,p.jsx)(n.code,{children:`div`})]}),`
`,(0,p.jsxs)(n.li,{children:[`if the props `,(0,p.jsx)(n.code,{children:`percent`}),` is set`,`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`the role `,(0,p.jsx)(n.code,{children:`progressbar`}),` is used.`]}),`
`,(0,p.jsxs)(n.li,{children:[`the attributes `,(0,p.jsx)(n.code,{children:`aria-value[min|max|now]`}),` are added`]}),`
`]}),`
`]}),`
`,(0,p.jsxs)(n.li,{children:[`if no `,(0,p.jsx)(n.code,{children:`percent`}),` props is passed it is considered as indetermined`,`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`the role `,(0,p.jsx)(n.code,{children:`status`}),` is used.`]}),`
`,(0,p.jsxs)(n.li,{children:[`the attributes `,(0,p.jsx)(n.code,{children:`aria-busy`}),` are added`]}),`
`]}),`
`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`progresscircular`,children:`ProgressCircular`}),`
`,(0,p.jsxs)(n.p,{children:[`Used for progress representation within components, such as a button or a textfield. Can be used by its own. ProgressCircular directly inherits properties from `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg`,rel:`nofollow`,children:`SVG element`}),` but add some extra properties to handle the progress representation.`]}),`
`,(0,p.jsx)(n.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { ProgressCircular } from "@qlik/sprout-react";

<ProgressCircular size="m" percent="70" />;
`})}),`
`,(0,p.jsx)(n.h3,{id:`properties-1`,children:`Properties`}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(r,{of:l}),`
`,(0,p.jsx)(n.h3,{id:`accessibility-1`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:`This component is a visual component made using SVG. It rely on the following aria-attributes to describe the progress semantic:`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`if no `,(0,p.jsx)(n.code,{children:`percent`}),` props: it uses `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role`,rel:`nofollow`,children:`role="status"`})]}),`
`,(0,p.jsxs)(n.li,{children:[`if `,(0,p.jsx)(n.code,{children:`percent`}),` props: it uses `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role`,rel:`nofollow`,children:`role="progressbar"`})]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),u()}))();export{f as default};