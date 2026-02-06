import{j as e,M as s,C as i}from"./iframe-DO7qjpir.js";import{useMDXComponents as r}from"./index-DM3CO3rl.js";import{ServerSideSorting as a}from"./ListTable.stories-GRaxQmDA.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CdimE1K6.js";import"./useI18n-CbD-mhn-.js";import"./Button-DWGkri9_.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";import"./SortDescending-Bd_E1WmM.js";import"./IconButton-GXyV3m9d.js";import"./Menu-u-ysB1YM.js";import"./useControl-U2hc2GWS.js";import"./Divider-BpSmZpjh.js";import"./list-B1zo5gaH.js";import"./NewTab-DA06V-wx.js";import"./Skeleton-BQx9Bath.js";import"./Checkbox-CzZgz8P2.js";import"./useValueControl-DIvBSOg5.js";import"./HelperText-BAW71J19.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Info-CoVbxZIf.js";import"./List-D7yjk9tW.js";import"./useListGesture-CyFtzgkM.js";import"./Popover-DkNNB74y.js";import"./TextField-BvJMgdQD.js";import"./Error-DM57iPud.js";import"./InputButton-BUj9u-fS.js";import"./useFieldProps-dIMY5Lzn.js";import"./useFieldAriaProps-B-bf9GJL.js";import"./Field-Uh2AYJyc.js";import"./FieldLabel-B6hPS730.js";import"./Radio-6TYluTmb.js";import"./Message-CS0lUUIB.js";import"./ProgressBar-Y0MhEBtq.js";import"./entity-Bx7QGl0Y.js";function o(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Table/Docs/Sorting"}),`
`,e.jsx(n.h1,{id:"sorting",children:"Sorting"}),`
`,e.jsxs(n.p,{children:["Sorting is enabled by default and works out of the box using ",e.jsx(n.code,{children:"alphanumeric"}),` sorting.
By default sorting is done on client side. If you want to do sorting on server side, you need to set `,e.jsx(n.code,{children:"sortingMode"})," Table prop to ",e.jsx(n.code,{children:'"server"'}),"."]}),`
`,e.jsx(n.h2,{id:"client-side",children:"Client side"}),`
`,e.jsx(n.h3,{id:"default-sorting",children:"Default sorting"}),`
`,e.jsxs(n.p,{children:["If we want to set an initial sorting order, this can be done by passing ",e.jsx(n.code,{children:"defaultSorting"})," as prop to the table"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { type SortingState } from "@tanstack/react-table";
import { Table } from "@qlik/sprout-table";

const defaultSorting: SortingState = [
  {
    id: "firstName",
    desc: true,
  },
];

return <Table rows={rows} columns={columns} defaultSorting={defaultSorting} />;
`})}),`
`,e.jsx(n.h3,{id:"controlled-sorting",children:"Controlled sorting"}),`
`,e.jsx(n.p,{children:`The contolled sorting is useful in scenarios where we would like to control sorting state externally, and execute some code when sorting state changes.
Example: table with data that is taken from paginated API with sorting on server side.`}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"sorting"})," table prop to control the state of the sorting."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"onSortingChange"})," function as table prop to listen to changes in sorting state"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useState } from "react";
import { type SortingState } from "@tanstack/react-table";
import { Table } from "@qlik/sprout-table";

function ComponentUsingTable() {
  const [sortingState, setSortingState] = useState<SortingState>();

  const onSortingChange = (sorting: SortingState) => {
    setSortingState(sorting);
    // do something else
  };

  return <Table rows={rows} columns={columns} sorting={sortingState} onSortingChange={onSortingChange} />;
}
`})}),`
`,e.jsx(n.h3,{id:"custom-sorting",children:"Custom sorting"}),`
`,e.jsxs(n.p,{children:["The default sorting function for all columns is set to ",e.jsx(n.code,{children:"alphanumeric"})," sorting.",e.jsx(n.br,{}),`
`,"However, it can be useful to define the exact sorting function that you want to use for a specific column, especially if any of your data is nullable or not a standard data type."]}),`
`,e.jsxs(n.p,{children:["You can determine a custom sorting function on a per-column basis using the ",e.jsx(n.code,{children:"sortComparator"})," column option that accepts determined sorting functions :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alphanumeric"})," (default)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"datetime"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"basic"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// If you want to sort by date for example
export const entityCustomSorting: ColumnDef<Entity>[] = [
  {
    field: "modified",
    headerName: "Modified",
    sortComparator: "datetime",
  },
];
`})}),`
`,e.jsxs(n.p,{children:["You can also define your own custom sorting function.",e.jsx(n.br,{}),`
`,"Every sorting function receives 2 rows and a column ID and are expected to compare the two rows using the column ID to return ",e.jsx(n.code,{children:"-1"}),", ",e.jsx(n.code,{children:"0"}),", or ",e.jsx(n.code,{children:"1"})," in ascending order."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// If you want to sort by date for example
const sortByDate = (a: Row<Entity>, b: Row<Entity>, columnId: string) =>
  new Date(a.modified).getTime() - new Date(b.modified).getTime();

export const entityCustomSorting: ColumnDef<Entity>[] = [
  {
    field: "modified",
    headerName: "Modified",
    sortComparator: sortByDate,
  },
];
`})}),`
`,e.jsx(n.h2,{id:"disable-sorting",children:"Disable sorting"}),`
`,e.jsx(n.p,{children:"If sorting is disabled for a column, sort actions will not be available in header menu"}),`
`,e.jsx(n.h3,{id:"for-all-table-columns",children:"For all table columns"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"disableColumnSorting"})," table prop allows to disable sorting for all table columns"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";

return <Table rows={rows} columns={columns} disableColumnSorting />;
`})}),`
`,e.jsx(n.h3,{id:"for-some-columns",children:"For some columns"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sortable"})," column property allows to disable sorting for specific column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300, sortable: false },
];
`})}),`
`,e.jsx(n.h2,{id:"sort-object",children:"Sort object"}),`
`,e.jsxs(n.p,{children:[`By default the sort order cycles through ascending, descending, and unsorted when clicking on the column header or using the header menu.
If you have built a custom cell by using `,e.jsx(n.code,{children:"renderCell"})," column property, the chance is high that you are using an object as ",e.jsx(n.code,{children:"field"}),`.
In this case order can be broken. You need in this case to provide a `,e.jsx(n.code,{children:"valueGetter"})," that return a string. For the enduser to have a good user experience the string should be the one that the user see in the cell."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`{
  headerName: 'Address',
-  field: 'address',
+  valueGetter: (row) => \`\${row.address.street} \${row.address.code} \${row.address.city}\`,
  renderCell: (params) => (
    <div>
      <div>{params.row.address.street}</div>
      <div>{params.row.address.code} {params.row.address.city}</div>
    </div>
  ),
}
`})}),`
`,e.jsx(n.h2,{id:"server-side-sorting",children:"Server side sorting"}),`
`,e.jsxs(n.p,{children:[`When working with large datasets or paginated APIs, sorting is often handled on the server side to optimize performance.
To enable server side sorting, set the `,e.jsx(n.code,{children:"sortingMode"})," table prop to ",e.jsx(n.code,{children:'"server"'}),"."]}),`
`,e.jsxs(n.p,{children:["Then you have to setup a ",e.jsx(n.code,{children:"useEffect"})," in your component to listen to changes in sorting state and fetch sorted data from the server accordingly."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function MyTableComponent() {
  const [data, setData] = useState(() => makeEntity(50));
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    // Fetch sorted data from server based on current sorting state
    fetchSortedData(sorting).then((sortedData) => {
      setData(sortedData);
    });
  }, [sorting]);

  return <Table rows={data} columns={columns} sorting={sorting} onSortingChange={setSorting} sortingMode="server" />;
}
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(i,{of:a})]})}function V(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{V as default};
