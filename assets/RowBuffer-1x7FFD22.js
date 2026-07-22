import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,p as r,s as i}from"./iframe-UwarwtgL.js";import{t as a}from"./mdx-react-shim-DbLuWb1F.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`table/Rows/Row buffer`}),`
`,(0,c.jsx)(t.h1,{id:`table---row-buffer`,children:`Table - Row buffer`}),`
`,(0,c.jsx)(t.p,{children:`Customize the number of items to render above and below the viewport.
Increasing this number will increase the amount of time it takes to render the virtualizer.`}),`
`,(0,c.jsx)(t.p,{children:`It can be useful to increase and set custom value in case of rendering large tables,
to avoid seeing slow rendering blank items at the top and bottom of the virtualizer when scrolling.
But the bigger the number is the more it will consume resources and make the entire page slower.
A good value should be the number of element visible in your page.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";

return <Table rows={rows} columns={columns} rowBuffer={50} />;
`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};