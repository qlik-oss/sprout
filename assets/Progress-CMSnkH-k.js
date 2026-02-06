import{j as e,M as c,a as n,C as i}from"./iframe-qjjAf_pH.js";import{useMDXComponents as d}from"./index-BAT7sozL.js";import{PlaygroundProgressBar as o,PlaygroundProgressCircular as t}from"./Progress.stories-D-0tTpGA.js";import"./preload-helper-PPVm8Dsz.js";import"./ProgressBar-ChivX090.js";import"./useId-CYaNFQmj.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./ProgressCircular-BSs6AknY.js";import"./useI18n-DleVkSsM.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";function l(s){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/Progress"}),`
`,e.jsx(r.h1,{id:"progress",children:"Progress"}),`
`,e.jsx(r.p,{children:"Progress indicators, or loaders, are used to show progression of system events. They can be determinate or indeterminate."}),`
`,e.jsx(r.h2,{id:"progressbar",children:"ProgressBar"}),`
`,e.jsxs(r.p,{children:["Used for progress representation. ProgressBar directly inherits properties from ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div",rel:"nofollow",children:"HTML div element"})," but add some extra properties to handle the progress representation."]}),`
`,e.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ProgressBar } from "@qlik/sprout-react";

<ProgressBar percent="70" aria-label="work in progress" />;
`})}),`
`,e.jsx(r.h3,{id:"properties",children:"Properties"}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(r.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role",rel:"nofollow",children:"MDN ARIA: progressbar role"})}),`
`,e.jsx(r.p,{children:"HTML Structure"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ProgressBar"})," uses the HTML tag ",e.jsx(r.code,{children:"div"})]}),`
`,e.jsxs(r.li,{children:["if the props ",e.jsx(r.code,{children:"percent"})," is set",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["the role ",e.jsx(r.code,{children:"progressbar"})," is used."]}),`
`,e.jsxs(r.li,{children:["the attributes ",e.jsx(r.code,{children:"aria-value[min|max|now]"})," are added"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:["if no ",e.jsx(r.code,{children:"percent"})," props is passed it is considered as indetermined",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["the role ",e.jsx(r.code,{children:"status"})," is used."]}),`
`,e.jsxs(r.li,{children:["the attributes ",e.jsx(r.code,{children:"aria-busy"})," are added"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"progresscircular",children:"ProgressCircular"}),`
`,e.jsxs(r.p,{children:["Used for progress representation within components, such as a button or a textfield. Can be used by its own. ProgressCircular directly inherits properties from ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg",rel:"nofollow",children:"SVG element"})," but add some extra properties to handle the progress representation."]}),`
`,e.jsx(r.h3,{id:"usage-1",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ProgressCircular } from "@qlik/sprout-react";

<ProgressCircular size="m" percent="70" />;
`})}),`
`,e.jsx(r.h3,{id:"properties-1",children:"Properties"}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(r.h3,{id:"accessibility-1",children:"Accessibility"}),`
`,e.jsx(r.p,{children:"This component is a visual component made using SVG. It rely on the following aria-attributes to describe the progress semantic:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["if no ",e.jsx(r.code,{children:"percent"})," props: it uses ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role",rel:"nofollow",children:'role="status"'})]}),`
`,e.jsxs(r.li,{children:["if ",e.jsx(r.code,{children:"percent"})," props: it uses ",e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role",rel:"nofollow",children:'role="progressbar"'})]}),`
`]})]})}function A(s={}){const{wrapper:r}={...d(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(l,{...s})}):l(s)}export{A as default};
