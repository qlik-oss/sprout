import{j as e,M as s,C as i}from"./iframe-lMEil1TA.js";import{useMDXComponents as r}from"./index-Wkq3wkd2.js";import{ServerSideSorting as a}from"./ListTable.stories-DHf0WxCL.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DPHkdLlh.js";import"./useI18n-CDksjSf0.js";import"./Button-B3VC5XuI.js";import"./classNames-B_Twdkca.js";import"./sprout-fe7_-ZbP.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./ProgressCircular-DzkpdMMq.js";import"./sort-descending-DBF7-f7_.js";import"./IconButton-CuZnXk5P.js";import"./Menu-BuAoSxI5.js";import"./useControl-Crf27nxo.js";import"./Divider-DoFQjC9R.js";import"./list-B1zo5gaH.js";import"./new-tab-CrWdziAn.js";import"./Skeleton-ByVVQwn0.js";import"./Popover-C2pxt5JU.js";import"./padding-ChQcYsRi.js";import"./TextField-BJ7hRtnc.js";import"./useValueControl-JgME-MAi.js";import"./error-D8ruDyrJ.js";import"./InputButton-BcBP8Pmj.js";import"./useFieldProps-lilq_Daj.js";import"./useFieldAriaProps-BeXWYVK1.js";import"./Field-C2NiUE28.js";import"./FieldLabel-hmMjgROH.js";import"./info-B4Qytw2Z.js";import"./InfoTooltipPrimitive-BLPBLLHp.js";import"./HelperText-B_x3JSnr.js";import"./Checkbox-B2upM8Wa.js";import"./List-DPaEP81W.js";import"./useListGesture-CqGT3z4U.js";import"./Radio-BTbE2pEa.js";import"./show-CL2zF-Fm.js";import"./Message-43Hu274X.js";import"./ProgressBar-CXjvcnKL.js";import"./entity-hM96d6N7.js";function o(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Table/Docs/Sorting"}),`
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
`,e.jsx(i,{of:a})]})}function ee(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ee as default};
