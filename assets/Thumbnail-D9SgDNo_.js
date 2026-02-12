import{j as n,M as i,a,C as c}from"./iframe-B4Gn7jRD.js";import{useMDXComponents as s}from"./index-BtGsBDbQ.js";import{S as m,P as o}from"./Thumbnail.stories-g3n87d_c.js";import"./preload-helper-PPVm8Dsz.js";import"./Tenant-D8URuGVO.js";import"./Thumbnail-SovGz0z3.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Thumbnail",of:m}),`
`,n.jsx(e.h1,{id:"thumbnail",children:"Thumbnail"}),`
`,n.jsxs(e.p,{children:["Thumbnails represent an artifact in the system. There are two types, ",n.jsx(e.code,{children:'type="img"'})," which expects an html image element as child, and ",n.jsx(e.code,{children:'type="icon"'})," which expects an svg icon."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Thumbnail } from "@qlik/sprout-react";
import PersonIcon from "@qlik/sprout-icons/react/Person";

<Thumbnail size="xl" type="icon">
    <PersonIcon />
</Thumbnail>

<Thumbnail size="xl" type="img">
    <img src={src} alt="avatar" />
</Thumbnail>
`})}),`
`,n.jsx(a,{of:o}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{of:o})]})}function b(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{b as default};
