import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./lib-BqyORzYB.js";import"./entity-BW1wQ0_F.js";import{RowMultipleSelection as a,RowSingleSelection as o}from"./ListTable.stories-UKG8RqLs.js";var s=e();function c(e){let c={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Table/Docs/Rows/Row Selection`}),`
`,(0,s.jsx)(c.h1,{id:`row-selection`,children:`Row Selection`}),`
`,(0,s.jsx)(c.p,{children:`Row selection is a usual interaction pattern in tables, allowing users to select one or multiple rows for further actions.
It can be to pick an item so the user can filter and find it easily, or to perform bulk actions like deleting or exporting selected rows.`}),`
`,(0,s.jsxs)(c.p,{children:[`Here we have a difference in behavior between the `,(0,s.jsx)(c.code,{children:`List`}),` and `,(0,s.jsx)(c.code,{children:`Data`}),` table variants, which is important to understand when implementing row selection in your tables.`]}),`
`,(0,s.jsx)(c.p,{children:`In terms of state management the feature can be used using the Uncontrolled or Controlled mode but you have to know in the end there is an internal state that is used to manage the selection of rows.`}),`
`,(0,s.jsx)(c.h2,{id:`list-single-row-selection`,children:`List Single Row Selection`}),`
`,(0,s.jsxs)(c.p,{children:[`The `,(0,s.jsx)(c.code,{children:`rowSelectionMode`}),` prop can be set to `,(0,s.jsx)(c.code,{children:`"single"`}),` to allow only one row to be selected at a time. This is useful for scenarios where only one item can be acted upon, such as viewing details or editing a single record.
The user can then click anywhere on the row to select it. `,(0,s.jsx)(`br`,{})]}),`
`,(0,s.jsxs)(c.p,{children:[(0,s.jsx)(`strong`,{children:`ℹ️ Note:`}),` If `,(0,s.jsx)(c.a,{href:`/docs/docs-rows-row-toggling--docs`,children:`Row Toggling`}),` is enabled, it will require the user to
click the radio button to select the row.`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";
import { rows, columns } from "./data";

<Table variant="list" columns={columns} rows={rows} rowSelectionMode="single" />;
`})}),`
`,(0,s.jsx)(n,{of:o}),`
`,(0,s.jsx)(c.h2,{id:`list-multiple-row-selection`,children:`List Multiple Row Selection`}),`
`,(0,s.jsxs)(c.p,{children:[`For scenarios where users need to select multiple rows, set the `,(0,s.jsx)(c.code,{children:`rowSelectionMode`}),` prop to `,(0,s.jsx)(c.code,{children:`"multiple"`}),`. This allows users to select several rows at once, which is useful for bulk actions like deletion or export.
The user can then click anywhere on the row to select it, and a checkbox will appear in the selection column header to select all rows. `,(0,s.jsx)(`br`,{})]}),`
`,(0,s.jsxs)(c.p,{children:[(0,s.jsx)(`strong`,{children:`ℹ️ Note:`}),` If `,(0,s.jsx)(c.a,{href:`/docs/docs-rows-row-toggling--docs`,children:`Row Toggling`}),` is enabled, it will require the user to
click the checkbox to select the row.`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";
import { rows, columns } from "./data";

<Table variant="list" columns={columns} rows={rows} rowSelectionMode="multiple" />;
`})}),`
`,(0,s.jsx)(c.h2,{id:`disable-selection-for-specific-rows`,children:`Disable selection for specific rows`}),`
`,(0,s.jsxs)(c.p,{children:[`Use `,(0,s.jsx)(c.code,{children:`isRowSelectable`}),` prop to disable selection for specific rows. It is a function which is called with row object
and should return a `,(0,s.jsx)(c.code,{children:`boolean`}),` value`]}),`
`,(0,s.jsxs)(c.p,{children:[(0,s.jsx)(`strong`,{children:`ℹ️ Note:`}),` The `,(0,s.jsx)(c.code,{children:`rowSelectionMode`}),` prop should be also defined`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";
import { rows, columns } from "./data";

return (
  <Table
    variant="list"
    columns={columns}
    rows={rows}
    rowSelectionMode="multiple"
    isRowSelectable={(row) => row.engines.length > 5}
  />
);
`})}),`
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsxs)(c.p,{children:[`In some cases you may not want the user to be able to select all rows at once. You can opt-out by using the property `,(0,s.jsx)(c.code,{children:`rowSelectAll={false}`})]}),`
`,(0,s.jsx)(c.h2,{id:`api`,children:`API`}),`
`,(0,s.jsx)(t,{of:a})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};