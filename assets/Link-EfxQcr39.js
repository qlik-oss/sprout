import{j as n,M as o,a as l,C as c}from"./iframe-BQJExRCF.js";import{useMDXComponents as r}from"./index-BiT2RrsF.js";import{Playground as t}from"./Link.stories-BE-ilxZ4.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CekcoEle.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./icons-CzMI2h-K.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Link"}),`
`,n.jsx(e.h1,{id:"link",children:"Link"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Link } from "@qlik/sprout-css-react";

<Link href="/folder">Folder</Link>;

<Link href="https://www.qlik.com/" font="inherit" isExternal>
  External link
</Link>;

<Link href="#" withEllipsis isExternal>
  With ellipsis and isExternal too long you will see ellipsis
</Link>;
`})}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(l,{of:t}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/link/",rel:"nofollow",children:"W3/WAI/ARIA/APG link"})}),`
`,n.jsx(e.p,{children:"HTML structure:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The current implementation use the native HTML ",n.jsx(e.code,{children:"a"})," tag so it has the implicit role ",n.jsx(e.code,{children:"link"}),"."]}),`
`,n.jsxs(e.li,{children:["Use the Link component ",n.jsx(e.code,{children:"disabled"})," property will have to effect:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-disabled"})," to indicate that the link is not available"]}),`
`,n.jsxs(e.li,{children:["set ",n.jsx(e.code,{children:"tabindex"})," to ",n.jsx(e.code,{children:"-1"})," to remove the link from the tab order"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"Keyboard Interaction:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Enter"}),`: Executes the link and moves focus to the link target.
`,n.jsx(e.code,{children:"Shift + F10"})," on ",n.jsx(e.code,{children:"MS Windows"}),": Opens a context menu for the link."]})]})}function g(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{g as default};
