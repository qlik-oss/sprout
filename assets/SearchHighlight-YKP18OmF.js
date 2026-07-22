import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{Playground as c,n as l,t as u}from"./SearchHighlight.stories-Dhz3m6oN.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/SearchHighlight`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`searchhighlight`,children:`SearchHighlight`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`SearchHighlight`}),` highlights occurrences of a search query inside a string.`]}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { SearchHighlight, type SearchHighlightProps } from "@qlik/sprout-react";

const Example = (props: SearchHighlightProps) => {
  return (
    <SearchHighlight {...props} query="search">
      This is a search result
    </SearchHighlight>
  );
};
`})}),`
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsx)(t.p,{children:`HTML structure`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The wrapper is a `,(0,p.jsx)(t.code,{children:`span`}),` containing the full text.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Each match is wrapped in a `,(0,p.jsx)(t.code,{children:`span`}),` with `,(0,p.jsx)(t.code,{children:`role="mark"`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`If `,(0,p.jsx)(t.code,{children:`activeIndex`}),` is provided, the active match receives `,(0,p.jsx)(t.code,{children:`aria-current="true"`}),`.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),s(),t(),l()}))();export{f as default};