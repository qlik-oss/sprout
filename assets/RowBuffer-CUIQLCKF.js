import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{s as t}from"./iframe-DaKWDHAC.js";import{n}from"./lib-EjdzwnHJ.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Table/Docs/Rows/Row buffer`}),`
`,(0,r.jsx)(i.h1,{id:`table---row-buffer`,children:`Table - Row buffer`}),`
`,(0,r.jsx)(i.p,{children:`Customize the number of items to render above and below the viewport.
Increasing this number will increase the amount of time it takes to render the virtualizer.`}),`
`,(0,r.jsx)(i.p,{children:`It can be useful to increase and set custom value in case of rendering large tables,
to avoid seeing slow rendering blank items at the top and bottom of the virtualizer when scrolling.
But the bigger the number is the more it will consume resources and make the entire page slower.
A good value should be the number of element visible in your page.`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";

return <Table rows={rows} columns={columns} rowBuffer={50} />;
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};