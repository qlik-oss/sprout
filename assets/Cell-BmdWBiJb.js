import{j as o,M as r}from"./iframe-CYyT-rNd.js";import{useMDXComponents as i}from"./index-Dzbf35yC.js";import"./ListTable.stories-BPgTg3fI.js";import"./DataTable.stories-JKrH0SZI.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DQ5rM_kH.js";import"./useI18n-B8acZ0ym.js";import"./Button-B_WU7ehq.js";import"./classNames-BmP9dLUE.js";import"./sprout-UDUY6uO8.js";import"./icons-BJP5nzPh.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./ProgressCircular-BThLXJeo.js";import"./SortDescending-CVAYxQhu.js";import"./IconButton-DQqeG5o4.js";import"./Menu-BJ4TKxRh.js";import"./useControl-CbxOYg9r.js";import"./Divider-DGcHtPQB.js";import"./list-B1zo5gaH.js";import"./NewTab-CSZjxaIu.js";import"./Skeleton-BcSpZhaC.js";import"./Checkbox-CEdksXS8.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./List-CKMCLIEK.js";import"./useListGesture-BJWysAy8.js";import"./Popover-p0wTHRSq.js";import"./TextField-3so8vjFm.js";import"./Error-D7GnDcGx.js";import"./InputButton-CVMmk1vr.js";import"./useFieldProps-crQyhd-6.js";import"./useFieldAriaProps-O3JOrChf.js";import"./Field-WnapnPu6.js";import"./FieldLabel-B0tZljJj.js";import"./Radio-6dgqdk9y.js";import"./Message-1sVzd-4h.js";import"./ProgressBar-PgTOB488.js";import"./entity-BJaSSSwx.js";import"./Edit-C5Vhfo4K.js";import"./Map-BB3BkA5L.js";import"./Warning-BO-41SRA.js";import"./index-BKlOZwBU.js";import"./SelectComposition-Cc6wbRHo.js";import"./TagGroup-OrLiB7MT.js";import"./Tag-CPT8lZjs.js";import"./TextOverflow-CbGiWJni.js";import"./useHasOverflow-CqJCJVUE.js";import"./Add-DcwIOkn_.js";import"./Close-IBeLqb5W.js";import"./AlertInline-DZSszTFT.js";import"./SeverityIcon-B1bVDgD2.js";import"./FloatingWrapper-a0YhtIpN.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
`,o.jsx(e.h1,{id:"table---cell",children:"Table - Cell"}),`
`,o.jsx(e.p,{children:"Cells are the basic building blocks of a table, representing the intersection of a row and a column. They can contain various types of content, such as text, images, or custom components."}),`
`,o.jsx(e.h2,{id:"customizing-cells",children:"Customizing cells"}),`
`,o.jsxs(e.p,{children:["To customize the rendering of a cell you can use the ",o.jsx(e.a,{href:"?path=/docs/docs-columns-column-definition--docs#rendercell",children:"rendercell"})," property of the column definition. This allows you to define how the content of a cell should be displayed, including custom formatting or additional components."]}),`
`,o.jsx(e.h2,{id:"oncellclicke-params",children:"onCellClick(e, params)"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"onCellClick"})," prop allows you to handle click events on individual cells. This can be useful for implementing custom interactions, such as opening a detail view or triggering an action when a cell is clicked."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";
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
`})})]})}function ao(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}export{ao as default};
