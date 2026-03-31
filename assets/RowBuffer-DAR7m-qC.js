import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,s as i}from"./iframe-B0xl5hqz.js";import{t as a}from"./mdx-react-shim-C5WuC5zb.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`table/Rows/Row buffer`}),`
`,(0,c.jsx)(n.h1,{id:`table---row-buffer`,children:`Table - Row buffer`}),`
`,(0,c.jsx)(n.p,{children:`Customize the number of items to render above and below the viewport.
Increasing this number will increase the amount of time it takes to render the virtualizer.`}),`
`,(0,c.jsx)(n.p,{children:`It can be useful to increase and set custom value in case of rendering large tables,
to avoid seeing slow rendering blank items at the top and bottom of the virtualizer when scrolling.
But the bigger the number is the more it will consume resources and make the entire page slower.
A good value should be the number of element visible in your page.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";

return <Table rows={rows} columns={columns} rowBuffer={50} />;
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};