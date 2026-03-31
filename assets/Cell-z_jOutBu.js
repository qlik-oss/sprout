import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,s as i}from"./iframe-B0xl5hqz.js";import{t as a}from"./mdx-react-shim-C5WuC5zb.js";import{t as o}from"./DataTable.stories-BafCGHBW.js";import{t as s}from"./ListTable.stories-yabvCW8q.js";function c(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`table/Cell`}),`
`,(0,u.jsx)(n.h1,{id:`table---cell`,children:`Table - Cell`}),`
`,(0,u.jsx)(n.p,{children:`Cells are the basic building blocks of a table, representing the intersection of a row and a column. They can contain various types of content, such as text, images, or custom components.`}),`
`,(0,u.jsx)(n.h2,{id:`customizing-cells`,children:`Customizing cells`}),`
`,(0,u.jsxs)(n.p,{children:[`To customize the rendering of a cell you can use the `,(0,u.jsx)(n.a,{href:`?path=/docs/docs-columns-column-definition--docs#rendercell`,children:`rendercell`}),` property of the column definition. This allows you to define how the content of a cell should be displayed, including custom formatting or additional components.`]}),`
`,(0,u.jsx)(n.h2,{id:`oncellclicke-params`,children:`onCellClick(e, params)`}),`
`,(0,u.jsxs)(n.p,{children:[`The `,(0,u.jsx)(n.code,{children:`onCellClick`}),` prop allows you to handle click events on individual cells. This can be useful for implementing custom interactions, such as opening a detail view or triggering an action when a cell is clicked.`]}),`
`,(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";
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
`})})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=n(),a(),r(),o(),s()}))();export{l as default};