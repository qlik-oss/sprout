import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Playground as c,n as l,t as u}from"./Tag.stories-e215v3lO.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Tag`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`tag`,children:`Tag`}),`
`,(0,p.jsx)(n.p,{children:`Tags are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Tag component like this:`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import {
  Tag,
  TagButton,
  TagLink,
  type TagProps,
} from "@qlik/sprout-react";

<Tag
  color="info"
  text="Tag"
  size="s"
  onRemove={() => {}}
  badge={{ color: "info", type: "number", text: "14" }}
  icon={<MyIcon />}
/>;
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`TagLink`}),` and `,(0,p.jsx)(n.code,{children:`TagButton`}),` are interactive variant of the `,(0,p.jsx)(n.code,{children:`Tag`}),`.
Note `,(0,p.jsx)(n.code,{children:`onRemove`}),` and `,(0,p.jsx)(n.code,{children:`color`}),` properties are not accepted on these variants.`]}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`Tag`}),` is a simple text element so it does not need any special accessibility treatment.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`TagLink`}),` is a wrapper of `,(0,p.jsx)(n.code,{children:`Tag`}),` using the HTML anchor `,(0,p.jsx)(n.code,{children:`a`}),` tag. It does not need any special accessibility treatment.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`TagButton`}),` is a wrapper of `,(0,p.jsx)(n.code,{children:`Tag`}),` using the HTML `,(0,p.jsx)(n.code,{children:`button`}),` tag. It does not need any special accessibility treatment.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};