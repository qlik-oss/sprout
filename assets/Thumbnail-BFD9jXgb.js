import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,n as l,t as u}from"./Thumbnail.stories-BNKhbPaT.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Thumbnail`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`thumbnail`,children:`Thumbnail`}),`
`,(0,p.jsxs)(t.p,{children:[`Thumbnails represent an artifact in the system. There are two types, `,(0,p.jsx)(t.code,{children:`type="img"`}),` which expects an html image element as child, and `,(0,p.jsx)(t.code,{children:`type="icon"`}),` which expects an svg icon.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Thumbnail } from "@qlik/sprout-react";
import { PersonIcon }  from "@qlik/sprout-icons/react";

<Thumbnail size="xl" type="icon">
    <PersonIcon />
</Thumbnail>

<Thumbnail size="xl" type="img">
    <img src={src} alt="avatar" />
</Thumbnail>
`})}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(n,{of:c})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),r(),l()}))();export{f as default};