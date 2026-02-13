import{j as e,M as s}from"./iframe-D-N3fK2j.js";import{useMDXComponents as r}from"./index-BvagnWFp.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Table/Docs/Rows/Row buffer"}),`
`,e.jsx(n.h1,{id:"table---row-buffer",children:"Table - Row buffer"}),`
`,e.jsx(n.p,{children:`Customize the number of items to render above and below the viewport.
Increasing this number will increase the amount of time it takes to render the virtualizer.`}),`
`,e.jsx(n.p,{children:`It can be useful to increase and set custom value in case of rendering large tables,
to avoid seeing slow rendering blank items at the top and bottom of the virtualizer when scrolling.
But the bigger the number is the more it will consume resources and make the entire page slower.
A good value should be the number of element visible in your page.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";

return <Table rows={rows} columns={columns} rowBuffer={50} />;
`})})]})}function u(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
