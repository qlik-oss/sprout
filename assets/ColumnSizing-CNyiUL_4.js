import{j as n,M as o}from"./iframe-CxjlquLv.js";import{useMDXComponents as l}from"./index-CopXJ1Hs.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Table/Docs/Columns/column sizing"}),`
`,n.jsx(e.h1,{id:"column-sizing",children:"Column sizing"}),`
`,n.jsx(e.p,{children:`Column sizing allows to dynamically change the width of all columns, by dragging the column headers.
This can be useful when there is not enough space to display all content in the column.`}),`
`,n.jsx(e.h2,{id:"column-sizing-state",children:"Column sizing state"}),`
`,n.jsx(e.h3,{id:"default-column-sizing",children:"Default column sizing"}),`
`,n.jsxs(e.p,{children:["If we want to set an initial columns size, this can be done by passing the ",n.jsx(e.code,{children:"width"})," property in column definition."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300 },
];
`})}),`
`,n.jsx(e.h3,{id:"controlled-sizing",children:"Controlled sizing"}),`
`,n.jsx(e.p,{children:`The controlled resizing is useful in scenarios where we would like to control sizing state externally,
and execute some code when sizing state changes.
Example: saving column sizing state in local storage or indexedDB, to store the state between logins or refresh.`}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"columnSizing"})," table prop to control the column sizing state."]}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"onColumnSizingChange"})," function as table prop to listen to changes in column sizing state"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useState } from "react";
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
`,n.jsx(e.h2,{id:"enabling-column-sizing",children:"Enabling column sizing"}),`
`,n.jsx(e.p,{children:"The column sizing is enabled for all columns by default"}),`
`,n.jsx(e.h2,{id:"disable-column-sizing",children:"Disable column sizing"}),`
`,n.jsx(e.h3,{id:"for-all-table-columns",children:"For all table columns"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"disableColumnResize"})," table prop allows to disable resizing for all table columns"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";

return <Table rows={rows} columns={columns} disableColumnResize />;
`})}),`
`,n.jsx(e.h3,{id:"for-some-columns",children:"For some columns"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"resizable"})," column property allows to disable resizing for specific column."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300, resizable: false },
];
`})})]})}function r(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{r as default};
