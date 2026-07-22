import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,l as n}from"./blocks-CCeqoOOO.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{i}from"./react-BnCtKaSV.js";import{t as a}from"./mdx-react-shim-9RzcSRdq.js";import{t as o}from"./DataTable.stories-D5kIkkjc.js";import{t as s}from"./ListTable.stories-BP4VZRQb.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`table/Cell`}),`
`,(0,u.jsx)(t.h1,{id:`table---cell`,children:`Table - Cell`}),`
`,(0,u.jsx)(t.p,{children:`Cells are the basic building blocks of a table, representing the intersection of a row and a column. They can contain various types of content, such as text, images, or custom components.`}),`
`,(0,u.jsx)(t.h2,{id:`customizing-cells`,children:`Customizing cells`}),`
`,(0,u.jsxs)(t.p,{children:[`To customize the rendering of a cell you can use the `,(0,u.jsx)(t.a,{href:`?path=/docs/docs-columns-column-definition--docs#rendercell`,children:`rendercell`}),` property of the column definition. This allows you to define how the content of a cell should be displayed, including custom formatting or additional components.`]}),`
`,(0,u.jsx)(t.h2,{id:`oncellclicke-params`,children:`onCellClick(e, params)`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`onCellClick`}),` prop allows you to handle click events on individual cells. This can be useful for implementing custom interactions, such as opening a detail view or triggering an action when a cell is clicked.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";
import { rows, columns } from "./data";

<Table
  columns={columns}
  rows={rows}
  onCellClick={(e, cell) => {
    console.log("Cell clicked:", cell);
  }}
/>;

// API

type TableCellParams<ContentType> = {
  colDef: ColumnDef<ContentType>;
  row: ContentType;
  value: unknown;
};
onCellClick?: (event: MouseEvent<HTMLDivElement>, cell: TableCellParams<ContentType>) => void;
`})})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=r(),a(),t(),o(),s()}))();export{l as default};