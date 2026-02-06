import{j as o,M as r}from"./iframe-DO7qjpir.js";import{useMDXComponents as i}from"./index-DM3CO3rl.js";import"./ListTable.stories-GRaxQmDA.js";import"./DataTable.stories-C0yE2YLO.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CdimE1K6.js";import"./useI18n-CbD-mhn-.js";import"./Button-DWGkri9_.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";import"./SortDescending-Bd_E1WmM.js";import"./IconButton-GXyV3m9d.js";import"./Menu-u-ysB1YM.js";import"./useControl-U2hc2GWS.js";import"./Divider-BpSmZpjh.js";import"./list-B1zo5gaH.js";import"./NewTab-DA06V-wx.js";import"./Skeleton-BQx9Bath.js";import"./Checkbox-CzZgz8P2.js";import"./useValueControl-DIvBSOg5.js";import"./HelperText-BAW71J19.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Info-CoVbxZIf.js";import"./List-D7yjk9tW.js";import"./useListGesture-CyFtzgkM.js";import"./Popover-DkNNB74y.js";import"./TextField-BvJMgdQD.js";import"./Error-DM57iPud.js";import"./InputButton-BUj9u-fS.js";import"./useFieldProps-dIMY5Lzn.js";import"./useFieldAriaProps-B-bf9GJL.js";import"./Field-Uh2AYJyc.js";import"./FieldLabel-B6hPS730.js";import"./Radio-6TYluTmb.js";import"./Message-CS0lUUIB.js";import"./ProgressBar-Y0MhEBtq.js";import"./entity-Bx7QGl0Y.js";import"./Edit-CColNq1n.js";import"./Map-B14QatVO.js";import"./Warning-CK4OS6kN.js";import"./index-DP0pgwhw.js";import"./SelectComposition-y0uB8bOb.js";import"./TagGroup-D2w3taRT.js";import"./Tag-CmC6rlue.js";import"./TextOverflow-DyfDSdhu.js";import"./useHasOverflow-CKe90G_4.js";import"./Add-BuQFhIrq.js";import"./Close-DVlpLiwK.js";import"./AlertInline-DxVY7R6B.js";import"./SeverityIcon-Cv0Z9iw1.js";import"./FloatingWrapper-Xned63dz.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
