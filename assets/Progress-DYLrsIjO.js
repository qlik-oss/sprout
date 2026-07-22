import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{PlaygroundProgressBar as c,PlaygroundProgressCircular as l,t as u}from"./Progress.stories-D7Ls2kVS.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/Progress`}),`
`,(0,p.jsx)(t.h1,{id:`progress`,children:`Progress`}),`
`,(0,p.jsx)(t.p,{children:`Progress indicators, or loaders, are used to show progression of system events. They can be determinate or indeterminate.`}),`
`,(0,p.jsx)(t.h2,{id:`progressbar`,children:`ProgressBar`}),`
`,(0,p.jsxs)(t.p,{children:[`Used for progress representation. ProgressBar directly inherits properties from `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div`,rel:`nofollow`,children:`HTML div element`}),` but add some extra properties to handle the progress representation.`]}),`
`,(0,p.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ProgressBar } from "@qlik/sprout-react";

<ProgressBar percent="70" aria-label="work in progress" />;
`})}),`
`,(0,p.jsx)(t.h3,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role`,rel:`nofollow`,children:`MDN ARIA: progressbar role`})}),`
`,(0,p.jsx)(t.p,{children:`HTML Structure`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`ProgressBar`}),` uses the HTML tag `,(0,p.jsx)(t.code,{children:`div`})]}),`
`,(0,p.jsxs)(t.li,{children:[`if the props `,(0,p.jsx)(t.code,{children:`percent`}),` is set`,`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`the role `,(0,p.jsx)(t.code,{children:`progressbar`}),` is used.`]}),`
`,(0,p.jsxs)(t.li,{children:[`the attributes `,(0,p.jsx)(t.code,{children:`aria-value[min|max|now]`}),` are added`]}),`
`]}),`
`]}),`
`,(0,p.jsxs)(t.li,{children:[`if no `,(0,p.jsx)(t.code,{children:`percent`}),` props is passed it is considered as indetermined`,`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`the role `,(0,p.jsx)(t.code,{children:`status`}),` is used.`]}),`
`,(0,p.jsxs)(t.li,{children:[`the attributes `,(0,p.jsx)(t.code,{children:`aria-busy`}),` are added`]}),`
`]}),`
`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`progresscircular`,children:`ProgressCircular`}),`
`,(0,p.jsxs)(t.p,{children:[`Used for progress representation within components, such as a button or a textfield. Can be used by its own. ProgressCircular directly inherits properties from `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg`,rel:`nofollow`,children:`SVG element`}),` but add some extra properties to handle the progress representation.`]}),`
`,(0,p.jsx)(t.h3,{id:`usage-1`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ProgressCircular } from "@qlik/sprout-react";

<ProgressCircular size="m" percent="70" />;
`})}),`
`,(0,p.jsx)(t.h3,{id:`properties-1`,children:`Properties`}),`
`,(0,p.jsx)(i,{of:l}),`
`,(0,p.jsx)(n,{of:l}),`
`,(0,p.jsx)(t.h3,{id:`accessibility-1`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:`This component is a visual component made using SVG. It rely on the following aria-attributes to describe the progress semantic:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`if no `,(0,p.jsx)(t.code,{children:`percent`}),` props: it uses `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role`,rel:`nofollow`,children:`role="status"`})]}),`
`,(0,p.jsxs)(t.li,{children:[`if `,(0,p.jsx)(t.code,{children:`percent`}),` props: it uses `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role`,rel:`nofollow`,children:`role="progressbar"`})]}),`
`]})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),u()}))();export{f as default};