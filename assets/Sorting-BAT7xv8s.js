import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,p as i,s as a}from"./iframe-UwarwtgL.js";import{t as o}from"./mdx-react-shim-DbLuWb1F.js";import{ServerSideSorting as s,t as c}from"./ListTable.stories-DJGfXQAV.js";function l(e){let t={br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`table/Sorting`}),`
`,(0,d.jsx)(t.h1,{id:`sorting`,children:`Sorting`}),`
`,(0,d.jsxs)(t.p,{children:[`Sorting is enabled by default and works out of the box using `,(0,d.jsx)(t.code,{children:`alphanumeric`}),` sorting.
By default sorting is done on client side. If you want to do sorting on server side, you need to set `,(0,d.jsx)(t.code,{children:`sortingMode`}),` Table prop to `,(0,d.jsx)(t.code,{children:`"server"`}),`.`]}),`
`,(0,d.jsx)(t.h2,{id:`client-side`,children:`Client side`}),`
`,(0,d.jsx)(t.h3,{id:`default-sorting`,children:`Default sorting`}),`
`,(0,d.jsxs)(t.p,{children:[`If we want to set an initial sorting order, this can be done by passing `,(0,d.jsx)(t.code,{children:`defaultSorting`}),` as prop to the table`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";
import { type SortingState } from "@tanstack/react-table";

const defaultSorting: SortingState = [
  {
    id: "firstName",
    desc: true,
  },
];

return <Table rows={rows} columns={columns} defaultSorting={defaultSorting} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`controlled-sorting`,children:`Controlled sorting`}),`
`,(0,d.jsx)(t.p,{children:`The contolled sorting is useful in scenarios where we would like to control sorting state externally, and execute some code when sorting state changes.
Example: table with data that is taken from paginated API with sorting on server side.`}),`
`,(0,d.jsxs)(t.p,{children:[`Use `,(0,d.jsx)(t.code,{children:`sorting`}),` table prop to control the state of the sorting.`]}),`
`,(0,d.jsxs)(t.p,{children:[`Use `,(0,d.jsx)(t.code,{children:`onSortingChange`}),` function as table prop to listen to changes in sorting state`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react";

import { Table } from "@qlik/sprout-react-table";
import { type SortingState } from "@tanstack/react-table";

function ComponentUsingTable() {
  const [sortingState, setSortingState] = useState<SortingState>();

  const onSortingChange = (sorting: SortingState) => {
    setSortingState(sorting);
    // do something else
  };

  return (
    <Table
      rows={rows}
      columns={columns}
      sorting={sortingState}
      onSortingChange={onSortingChange}
    />
  );
}
`})}),`
`,(0,d.jsx)(t.h3,{id:`custom-sorting`,children:`Custom sorting`}),`
`,(0,d.jsxs)(t.p,{children:[`The default sorting function for all columns is set to `,(0,d.jsx)(t.code,{children:`alphanumeric`}),` sorting.`,(0,d.jsx)(t.br,{}),`
`,`However, it can be useful to define the exact sorting function that you want to use for a specific column, especially if any of your data is nullable or not a standard data type.`]}),`
`,(0,d.jsxs)(t.p,{children:[`You can determine a custom sorting function on a per-column basis using the `,(0,d.jsx)(t.code,{children:`sortComparator`}),` column option that accepts determined sorting functions :`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`alphanumeric`}),` (default)`]}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`datetime`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`text`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`basic`})}),`
`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// If you want to sort by date for example
export const entityCustomSorting: ColumnDef<Entity>[] = [
  {
    field: "modified",
    headerName: "Modified",
    sortComparator: "datetime",
  },
];
`})}),`
`,(0,d.jsxs)(t.p,{children:[`You can also define your own custom sorting function.`,(0,d.jsx)(t.br,{}),`
`,`Every sorting function receives 2 rows and a column ID and are expected to compare the two rows using the column ID to return `,(0,d.jsx)(t.code,{children:`-1`}),`, `,(0,d.jsx)(t.code,{children:`0`}),`, or `,(0,d.jsx)(t.code,{children:`1`}),` in ascending order.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// If you want to sort by date for example
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
`,(0,d.jsx)(t.h2,{id:`disable-sorting`,children:`Disable sorting`}),`
`,(0,d.jsx)(t.p,{children:`If sorting is disabled for a column, sort actions will not be available in header menu`}),`
`,(0,d.jsx)(t.h3,{id:`for-all-table-columns`,children:`For all table columns`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`disableColumnSorting`}),` table prop allows to disable sorting for all table columns`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";

return <Table rows={rows} columns={columns} disableColumnSorting />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`for-some-columns`,children:`For some columns`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`sortable`}),` column property allows to disable sorting for specific column.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`const columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    sortable: false,
  },
];
`})}),`
`,(0,d.jsx)(t.h2,{id:`sort-object`,children:`Sort object`}),`
`,(0,d.jsxs)(t.p,{children:[`By default the sort order cycles through ascending, descending, and unsorted when clicking on the column header or using the header menu.
If you have built a custom cell by using `,(0,d.jsx)(t.code,{children:`renderCell`}),` column property, the chance is high that you are using an object as `,(0,d.jsx)(t.code,{children:`field`}),`.
In this case order can be broken. You need in this case to provide a `,(0,d.jsx)(t.code,{children:`valueGetter`}),` that return a string. For the enduser to have a good user experience the string should be the one that the user see in the cell.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-diff`,children:`{
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
`,(0,d.jsx)(t.h2,{id:`server-side-sorting`,children:`Server side sorting`}),`
`,(0,d.jsxs)(t.p,{children:[`When working with large datasets or paginated APIs, sorting is often handled on the server side to optimize performance.
To enable server side sorting, set the `,(0,d.jsx)(t.code,{children:`sortingMode`}),` table prop to `,(0,d.jsx)(t.code,{children:`"server"`}),`.`]}),`
`,(0,d.jsxs)(t.p,{children:[`Then you have to setup a `,(0,d.jsx)(t.code,{children:`useEffect`}),` in your component to listen to changes in sorting state and fetch sorted data from the server accordingly.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`function MyTableComponent() {
  const [data, setData] = useState(() => makeEntity(50));
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    // Fetch sorted data from server based on current sorting state
    fetchSortedData(sorting).then((sortedData) => {
      setData(sortedData);
    });
  }, [sorting]);

  return (
    <Table
      rows={data}
      columns={columns}
      sorting={sorting}
      onSortingChange={setSorting}
      sortingMode="server"
    />
  );
}
`})}),`
`,(0,d.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,d.jsx)(n,{of:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),r(),c()}))();export{u as default};