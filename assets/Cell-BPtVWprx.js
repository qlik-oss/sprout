import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{s as t}from"./iframe-B5xoaqtW.js";import{n}from"./lib-EjdzwnHJ.js";import"./lib-BqyORzYB.js";import"./entity-BW1wQ0_F.js";import"./ListTable.stories-UKG8RqLs.js";import"./DataTable.stories-DAkgWAkZ.js";var r=e();function i(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Table/Docs/Cell`}),`
`,(0,r.jsx)(i.h1,{id:`table---cell`,children:`Table - Cell`}),`
`,(0,r.jsx)(i.p,{children:`Cells are the basic building blocks of a table, representing the intersection of a row and a column. They can contain various types of content, such as text, images, or custom components.`}),`
`,(0,r.jsx)(i.h2,{id:`customizing-cells`,children:`Customizing cells`}),`
`,(0,r.jsxs)(i.p,{children:[`To customize the rendering of a cell you can use the `,(0,r.jsx)(i.a,{href:`?path=/docs/docs-columns-column-definition--docs#rendercell`,children:`rendercell`}),` property of the column definition. This allows you to define how the content of a cell should be displayed, including custom formatting or additional components.`]}),`
`,(0,r.jsx)(i.h2,{id:`oncellclicke-params`,children:`onCellClick(e, params)`}),`
`,(0,r.jsxs)(i.p,{children:[`The `,(0,r.jsx)(i.code,{children:`onCellClick`}),` prop allows you to handle click events on individual cells. This can be useful for implementing custom interactions, such as opening a detail view or triggering an action when a cell is clicked.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";
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
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};