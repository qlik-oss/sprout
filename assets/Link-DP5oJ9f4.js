import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Playground as c,t as l}from"./Link.stories-Te8RYPrX.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{title:`Components/Link`}),`
`,(0,f.jsx)(n.h1,{id:`link`,children:`Link`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { Link } from "@qlik/sprout-react";

<Link href="/folder">Folder</Link>;

<Link href="https://www.qlik.com/" font="inherit" isExternal>
  External link
</Link>;

<Link href="#" withEllipsis isExternal>
  With ellipsis and isExternal too long you will see ellipsis
</Link>;
`})}),`
`,(0,f.jsx)(n.h2,{id:`demo`,children:`Demo`}),`
`,(0,f.jsx)(a,{of:c}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsx)(n.p,{children:(0,f.jsx)(n.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/link/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG link`})}),`
`,(0,f.jsx)(n.p,{children:`HTML structure:`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`The current implementation use the native HTML `,(0,f.jsx)(n.code,{children:`a`}),` tag so it has the implicit role `,(0,f.jsx)(n.code,{children:`link`}),`.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Use the Link component `,(0,f.jsx)(n.code,{children:`disabled`}),` property will have to effect:`,`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`aria-disabled`}),` to indicate that the link is not available`]}),`
`,(0,f.jsxs)(n.li,{children:[`set `,(0,f.jsx)(n.code,{children:`tabindex`}),` to `,(0,f.jsx)(n.code,{children:`-1`}),` to remove the link from the tab order`]}),`
`]}),`
`]}),`
`]}),`
`,(0,f.jsx)(n.p,{children:`Keyboard Interaction:`}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(n.code,{children:`Enter`}),`: Executes the link and moves focus to the link target.
`,(0,f.jsx)(n.code,{children:`Shift + F10`}),` on `,(0,f.jsx)(n.code,{children:`MS Windows`}),`: Opens a context menu for the link.`]})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),s(),i(),l()}))();export{d as default};