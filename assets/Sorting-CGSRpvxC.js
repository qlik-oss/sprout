import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,s as n}from"./iframe-DTk7xy32.js";import{n as r}from"./lib-EjdzwnHJ.js";import"./lib-hQoNxkx8.js";import"./entity-C-_jh3pD.js";import{ServerSideSorting as i}from"./ListTable.stories-CJHVAjlg.js";var a=e();function o(e){let o={br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{title:`Table/Docs/Sorting`}),`
`,(0,a.jsx)(o.h1,{id:`sorting`,children:`Sorting`}),`
`,(0,a.jsxs)(o.p,{children:[`Sorting is enabled by default and works out of the box using `,(0,a.jsx)(o.code,{children:`alphanumeric`}),` sorting.
By default sorting is done on client side. If you want to do sorting on server side, you need to set `,(0,a.jsx)(o.code,{children:`sortingMode`}),` Table prop to `,(0,a.jsx)(o.code,{children:`"server"`}),`.`]}),`
`,(0,a.jsx)(o.h2,{id:`client-side`,children:`Client side`}),`
`,(0,a.jsx)(o.h3,{id:`default-sorting`,children:`Default sorting`}),`
`,(0,a.jsxs)(o.p,{children:[`If we want to set an initial sorting order, this can be done by passing `,(0,a.jsx)(o.code,{children:`defaultSorting`}),` as prop to the table`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`import { type SortingState } from "@tanstack/react-table";
import { Table } from "@qlik/sprout-table";

const defaultSorting: SortingState = [
  {
    id: "firstName",
    desc: true,
  },
];

return <Table rows={rows} columns={columns} defaultSorting={defaultSorting} />;
`})}),`
`,(0,a.jsx)(o.h3,{id:`controlled-sorting`,children:`Controlled sorting`}),`
`,(0,a.jsx)(o.p,{children:`The contolled sorting is useful in scenarios where we would like to control sorting state externally, and execute some code when sorting state changes.
Example: table with data that is taken from paginated API with sorting on server side.`}),`
`,(0,a.jsxs)(o.p,{children:[`Use `,(0,a.jsx)(o.code,{children:`sorting`}),` table prop to control the state of the sorting.`]}),`
`,(0,a.jsxs)(o.p,{children:[`Use `,(0,a.jsx)(o.code,{children:`onSortingChange`}),` function as table prop to listen to changes in sorting state`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`import { useState } from "react";
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
`,(0,a.jsx)(o.h3,{id:`custom-sorting`,children:`Custom sorting`}),`
`,(0,a.jsxs)(o.p,{children:[`The default sorting function for all columns is set to `,(0,a.jsx)(o.code,{children:`alphanumeric`}),` sorting.`,(0,a.jsx)(o.br,{}),`
`,`However, it can be useful to define the exact sorting function that you want to use for a specific column, especially if any of your data is nullable or not a standard data type.`]}),`
`,(0,a.jsxs)(o.p,{children:[`You can determine a custom sorting function on a per-column basis using the `,(0,a.jsx)(o.code,{children:`sortComparator`}),` column option that accepts determined sorting functions :`]}),`
`,(0,a.jsxs)(o.ul,{children:[`
`,(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:`alphanumeric`}),` (default)`]}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`datetime`})}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`text`})}),`
`,(0,a.jsx)(o.li,{children:(0,a.jsx)(o.code,{children:`basic`})}),`
`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`// If you want to sort by date for example
export const entityCustomSorting: ColumnDef<Entity>[] = [
  {
    field: "modified",
    headerName: "Modified",
    sortComparator: "datetime",
  },
];
`})}),`
`,(0,a.jsxs)(o.p,{children:[`You can also define your own custom sorting function.`,(0,a.jsx)(o.br,{}),`
`,`Every sorting function receives 2 rows and a column ID and are expected to compare the two rows using the column ID to return `,(0,a.jsx)(o.code,{children:`-1`}),`, `,(0,a.jsx)(o.code,{children:`0`}),`, or `,(0,a.jsx)(o.code,{children:`1`}),` in ascending order.`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`// If you want to sort by date for example
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
`,(0,a.jsx)(o.h2,{id:`disable-sorting`,children:`Disable sorting`}),`
`,(0,a.jsx)(o.p,{children:`If sorting is disabled for a column, sort actions will not be available in header menu`}),`
`,(0,a.jsx)(o.h3,{id:`for-all-table-columns`,children:`For all table columns`}),`
`,(0,a.jsxs)(o.p,{children:[`The `,(0,a.jsx)(o.code,{children:`disableColumnSorting`}),` table prop allows to disable sorting for all table columns`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";

return <Table rows={rows} columns={columns} disableColumnSorting />;
`})}),`
`,(0,a.jsx)(o.h3,{id:`for-some-columns`,children:`For some columns`}),`
`,(0,a.jsxs)(o.p,{children:[`The `,(0,a.jsx)(o.code,{children:`sortable`}),` column property allows to disable sorting for specific column.`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`const columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300, sortable: false },
];
`})}),`
`,(0,a.jsx)(o.h2,{id:`sort-object`,children:`Sort object`}),`
`,(0,a.jsxs)(o.p,{children:[`By default the sort order cycles through ascending, descending, and unsorted when clicking on the column header or using the header menu.
If you have built a custom cell by using `,(0,a.jsx)(o.code,{children:`renderCell`}),` column property, the chance is high that you are using an object as `,(0,a.jsx)(o.code,{children:`field`}),`.
In this case order can be broken. You need in this case to provide a `,(0,a.jsx)(o.code,{children:`valueGetter`}),` that return a string. For the enduser to have a good user experience the string should be the one that the user see in the cell.`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-diff`,children:`{
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
`,(0,a.jsx)(o.h2,{id:`server-side-sorting`,children:`Server side sorting`}),`
`,(0,a.jsxs)(o.p,{children:[`When working with large datasets or paginated APIs, sorting is often handled on the server side to optimize performance.
To enable server side sorting, set the `,(0,a.jsx)(o.code,{children:`sortingMode`}),` table prop to `,(0,a.jsx)(o.code,{children:`"server"`}),`.`]}),`
`,(0,a.jsxs)(o.p,{children:[`Then you have to setup a `,(0,a.jsx)(o.code,{children:`useEffect`}),` in your component to listen to changes in sorting state and fetch sorted data from the server accordingly.`]}),`
`,(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:`language-tsx`,children:`function MyTableComponent() {
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
`,(0,a.jsx)(o.h2,{id:`api`,children:`API`}),`
`,(0,a.jsx)(t,{of:i})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}export{s as default};