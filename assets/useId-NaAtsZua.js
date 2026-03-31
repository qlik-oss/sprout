import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,s as i}from"./iframe-B0xl5hqz.js";import{t as a}from"./mdx-react-shim-C5WuC5zb.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`hooks/useId`}),`
`,(0,c.jsx)(n.h1,{id:`useid`,children:`useId`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`useId`}),` hook allows you to generate unique IDs for your React components.
This is particularly useful for accessibility purposes, such as linking form elements with their labels.`]}),`
`,(0,c.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useId`}),` accept an optional id string as parameter. It returns a unique id string:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`import { useId } from "@qlik/sprout-react-hooks";

function MyComponent({id?: string, ...props}) {
  const safeId = useId(id);
  return <div id={safeId} {...props} />;
};
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};