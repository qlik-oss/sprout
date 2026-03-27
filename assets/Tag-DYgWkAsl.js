import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./Tag.stories-prWlVJnJ.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Tag`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`tag`,children:`Tag`}),`
`,(0,s.jsx)(c.p,{children:`Tags are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Tag component like this:`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import {
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
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`variants`,children:`Variants`}),`
`,(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.code,{children:`TagLink`}),` and `,(0,s.jsx)(c.code,{children:`TagButton`}),` are interactive variant of the `,(0,s.jsx)(c.code,{children:`Tag`}),`.
Note `,(0,s.jsx)(c.code,{children:`onRemove`}),` and `,(0,s.jsx)(c.code,{children:`color`}),` properties are not accepted on these variants.`]}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Tag`}),` is a simple text element so it does not need any special accessibility treatment.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`TagLink`}),` is a wrapper of `,(0,s.jsx)(c.code,{children:`Tag`}),` using the HTML anchor `,(0,s.jsx)(c.code,{children:`a`}),` tag. It does not need any special accessibility treatment.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`TagButton`}),` is a wrapper of `,(0,s.jsx)(c.code,{children:`Tag`}),` using the HTML `,(0,s.jsx)(c.code,{children:`button`}),` tag. It does not need any special accessibility treatment.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};