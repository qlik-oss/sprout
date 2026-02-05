import{j as n,M as i,a,C as c}from"./iframe-BQJExRCF.js";import{useMDXComponents as r}from"./index-BiT2RrsF.js";import{S as m,P as s}from"./Thumbnail.stories-CbPAs7de.js";import"./preload-helper-PPVm8Dsz.js";import"./Tenant-I_uTRlDg.js";import"./Thumbnail-V5vxVD0Z.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Thumbnail",of:m}),`
`,n.jsx(e.h1,{id:"thumbnail",children:"Thumbnail"}),`
`,n.jsxs(e.p,{children:["Thumbnails represent an artifact in the system. There are two types, ",n.jsx(e.code,{children:'type="img"'})," which expects an html image element as child, and ",n.jsx(e.code,{children:'type="icon"'})," which expects an svg icon."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Thumbnail } from "@qlik/sprout-css-react";
import PersonIcon from "@qlik/sprout-icons/react/Person";

<Thumbnail size="xl" type="icon">
    <PersonIcon />
</Thumbnail>

<Thumbnail size="xl" type="img">
    <img src={src} alt="avatar" />
</Thumbnail>
`})}),`
`,n.jsx(a,{of:s}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{of:s})]})}function b(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{b as default};
