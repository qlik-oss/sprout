import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,l as r,s as i}from"./iframe-RiXBydPV.js";import{t as a}from"./mdx-react-shim-Cw1WyOhr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Table/Docs/Columns/column sizing`}),`
`,(0,c.jsx)(n.h1,{id:`column-sizing`,children:`Column sizing`}),`
`,(0,c.jsx)(n.p,{children:`Column sizing allows to dynamically change the width of all columns, by dragging the column headers.
This can be useful when there is not enough space to display all content in the column.`}),`
`,(0,c.jsx)(n.h2,{id:`column-sizing-state`,children:`Column sizing state`}),`
`,(0,c.jsx)(n.h3,{id:`default-column-sizing`,children:`Default column sizing`}),`
`,(0,c.jsxs)(n.p,{children:[`If we want to set an initial columns size, this can be done by passing the `,(0,c.jsx)(n.code,{children:`width`}),` property in column definition.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`const columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
];
`})}),`
`,(0,c.jsx)(n.h3,{id:`controlled-sizing`,children:`Controlled sizing`}),`
`,(0,c.jsx)(n.p,{children:`The controlled resizing is useful in scenarios where we would like to control sizing state externally,
and execute some code when sizing state changes.
Example: saving column sizing state in local storage or indexedDB, to store the state between logins or refresh.`}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.code,{children:`columnSizing`}),` table prop to control the column sizing state.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.code,{children:`onColumnSizingChange`}),` function as table prop to listen to changes in column sizing state`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { useState } from "react";
import { Table, type ColumnSizingState } from "@qlik/sprout-table";

function ComponentUsingTable() {
  const [columnSizingState, setColumnSizingState] = useState<ColumnSizingState>();

  const onColumnSizingChange = (columnSizing: ColumnSizingState) => {
    setColumnSizingState(columnSizing);
    // do something else
  };

  return (
    <Table rows={rows} columns={columns} columnSizing={columnSizingState} onColumnSizingChange={onColumnSizingChange} />
  );
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`enabling-column-sizing`,children:`Enabling column sizing`}),`
`,(0,c.jsx)(n.p,{children:`The column sizing is enabled for all columns by default`}),`
`,(0,c.jsx)(n.h2,{id:`disable-column-sizing`,children:`Disable column sizing`}),`
`,(0,c.jsx)(n.h3,{id:`for-all-table-columns`,children:`For all table columns`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`disableColumnResize`}),` table prop allows to disable resizing for all table columns`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";

return <Table rows={rows} columns={columns} disableColumnResize />;
`})}),`
`,(0,c.jsx)(n.h3,{id:`for-some-columns`,children:`For some columns`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`resizable`}),` column property allows to disable resizing for specific column.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`const columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300, resizable: false },
];
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};