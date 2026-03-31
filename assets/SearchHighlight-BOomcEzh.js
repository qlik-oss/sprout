import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,n as l,t as u}from"./SearchHighlight.stories-wB2-1XWX.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/SearchHighlight`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`searchhighlight`,children:`SearchHighlight`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`SearchHighlight`}),` highlights occurrences of a search query inside a string.`]}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { SearchHighlight, type SearchHighlightProps } from "@qlik/sprout-react";

const Example = (props: SearchHighlightProps) => {
  return (
    <SearchHighlight {...props} query="search">
      This is a search result
    </SearchHighlight>
  );
};
`})}),`
`,(0,p.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(n.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`The wrapper is a `,(0,p.jsx)(n.code,{children:`span`}),` containing the full text.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Each match is wrapped in a `,(0,p.jsx)(n.code,{children:`span`}),` with `,(0,p.jsx)(n.code,{children:`role="mark"`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[`If `,(0,p.jsx)(n.code,{children:`activeIndex`}),` is provided, the active match receives `,(0,p.jsx)(n.code,{children:`aria-current="true"`}),`.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};