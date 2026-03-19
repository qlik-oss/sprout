import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DaKWDHAC.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a}from"./Link.stories-W-cD1jEZ.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{title:`Components/Link`}),`
`,(0,o.jsx)(s.h1,{id:`link`,children:`Link`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { Link } from "@qlik/sprout-react";

<Link href="/folder">Folder</Link>;

<Link href="https://www.qlik.com/" font="inherit" isExternal>
  External link
</Link>;

<Link href="#" withEllipsis isExternal>
  With ellipsis and isExternal too long you will see ellipsis
</Link>;
`})}),`
`,(0,o.jsx)(s.h2,{id:`demo`,children:`Demo`}),`
`,(0,o.jsx)(n,{of:a}),`
`,(0,o.jsx)(t,{of:a}),`
`,(0,o.jsx)(s.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/link/`,rel:`nofollow`,children:`W3/WAI/ARIA/APG link`})}),`
`,(0,o.jsx)(s.p,{children:`HTML structure:`}),`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[`The current implementation use the native HTML `,(0,o.jsx)(s.code,{children:`a`}),` tag so it has the implicit role `,(0,o.jsx)(s.code,{children:`link`}),`.`]}),`
`,(0,o.jsxs)(s.li,{children:[`Use the Link component `,(0,o.jsx)(s.code,{children:`disabled`}),` property will have to effect:`,`
`,(0,o.jsxs)(s.ul,{children:[`
`,(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:`aria-disabled`}),` to indicate that the link is not available`]}),`
`,(0,o.jsxs)(s.li,{children:[`set `,(0,o.jsx)(s.code,{children:`tabindex`}),` to `,(0,o.jsx)(s.code,{children:`-1`}),` to remove the link from the tab order`]}),`
`]}),`
`]}),`
`]}),`
`,(0,o.jsx)(s.p,{children:`Keyboard Interaction:`}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:`Enter`}),`: Executes the link and moves focus to the link target.
`,(0,o.jsx)(s.code,{children:`Shift + F10`}),` on `,(0,o.jsx)(s.code,{children:`MS Windows`}),`: Opens a context menu for the link.`]})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};