import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,n as l,t as u}from"./Tag.stories-BcWH2RBQ.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/Tag`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`tag`,children:`Tag`}),`
`,(0,p.jsx)(t.p,{children:`Tags are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Tag component like this:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Tag, TagButton, TagLink, type TagProps } from "@qlik/sprout-react";

<Tag
  color="info"
  text="Tag"
  size="s"
  onRemove={() => {}}
  badge={{ color: "info", type: "number", text: "14" }}
  icon={<MyIcon />}
/>;
`})}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`TagLink`}),` and `,(0,p.jsx)(t.code,{children:`TagButton`}),` are interactive variant of the `,(0,p.jsx)(t.code,{children:`Tag`}),`.
Note `,(0,p.jsx)(t.code,{children:`onRemove`}),` and `,(0,p.jsx)(t.code,{children:`color`}),` properties are not accepted on these variants.`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`Tag`}),` is a simple text element so it does not need any special accessibility treatment.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`TagLink`}),` is a wrapper of `,(0,p.jsx)(t.code,{children:`Tag`}),` using the HTML anchor `,(0,p.jsx)(t.code,{children:`a`}),` tag. It does not need any special accessibility treatment.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`TagButton`}),` is a wrapper of `,(0,p.jsx)(t.code,{children:`Tag`}),` using the HTML `,(0,p.jsx)(t.code,{children:`button`}),` tag. It does not need any special accessibility treatment.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),l()}))();export{f as default};