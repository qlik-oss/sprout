import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,t as l}from"./Link.stories-CJLagJqE.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{title:`Components/Link`}),`
`,(0,f.jsx)(t.h1,{id:`link`,children:`Link`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { Link } from "@qlik/sprout-react";

<Link href="/folder">Folder</Link>;

<Link href="https://www.qlik.com/" font="inherit" isExternal>
  External link
</Link>;

<Link href="#" withEllipsis isExternal>
  With ellipsis and isExternal too long you will see ellipsis
</Link>;
`})}),`
`,(0,f.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,f.jsx)(i,{of:c}),`
`,(0,f.jsx)(n,{of:c}),`
`,(0,f.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/link/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG link`})}),`
`,(0,f.jsx)(t.p,{children:`HTML structure:`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[`The current implementation use the native HTML `,(0,f.jsx)(t.code,{children:`a`}),` tag so it has the implicit role `,(0,f.jsx)(t.code,{children:`link`}),`.`]}),`
`,(0,f.jsxs)(t.li,{children:[`Use the Link component `,(0,f.jsx)(t.code,{children:`disabled`}),` property will have to effect:`,`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`aria-disabled`}),` to indicate that the link is not available`]}),`
`,(0,f.jsxs)(t.li,{children:[`set `,(0,f.jsx)(t.code,{children:`tabindex`}),` to `,(0,f.jsx)(t.code,{children:`-1`}),` to remove the link from the tab order`]}),`
`]}),`
`]}),`
`]}),`
`,(0,f.jsx)(t.p,{children:`Keyboard Interaction:`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`Enter`}),`: Executes the link and moves focus to the link target.
`,(0,f.jsx)(t.code,{children:`Shift + F10`}),` on `,(0,f.jsx)(t.code,{children:`MS Windows`}),`: Opens a context menu for the link.`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=a(),s(),t(),l()}))();export{d as default};