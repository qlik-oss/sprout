import{j as o,M as r}from"./iframe-D-N3fK2j.js";import{useMDXComponents as i}from"./index-BvagnWFp.js";import"./ListTable.stories-CgtPa8qs.js";import"./DataTable.stories-G-FDgUXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BQSmQzm2.js";import"./useI18n-ClHBar3-.js";import"./Button-BiiNVP7I.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./icons-BEmnCRju.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./ProgressCircular-CdUDfayh.js";import"./SortDescending-7Is3TCUG.js";import"./IconButton-Dg4ysz4Z.js";import"./Menu-CpWAuarv.js";import"./useControl-U-WkQj2I.js";import"./Divider-Aa9jm5B9.js";import"./list-B1zo5gaH.js";import"./NewTab-DIWrR844.js";import"./Skeleton-Bx_f_eFM.js";import"./Checkbox-BypGcOIl.js";import"./useValueControl-DH7McdQ1.js";import"./HelperText-DkWywDIM.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Info-DKfyJpi1.js";import"./List-DiNkJdPa.js";import"./useListGesture-DW7ff4gI.js";import"./Popover-B17Az-M5.js";import"./TextField-DMygpcri.js";import"./Error-CZbJtLWx.js";import"./InputButton-BoVH_no0.js";import"./useFieldProps-Cnz6GbX_.js";import"./useFieldAriaProps-EzEn10HD.js";import"./Field-DHjy_kFd.js";import"./FieldLabel-BNj8Kiyj.js";import"./Radio-BUTN66Da.js";import"./Message-kE_O_eKL.js";import"./ProgressBar-S0aBvDe-.js";import"./entity-jHLCnT40.js";import"./Edit-69Qgo7Td.js";import"./Map-DsyJdFaB.js";import"./Warning-Dy5sqdbk.js";import"./index-umgVt7ll.js";import"./SelectComposition-2GVB6IHa.js";import"./TagGroup-7XjF8tBf.js";import"./Tag-CLp8bTu7.js";import"./TextOverflow-B0-vdnEr.js";import"./useHasOverflow-BWQUK3f5.js";import"./Add-DHz0bRTt.js";import"./Close-Clva93gw.js";import"./AlertInline-DkGYkHAy.js";import"./SeverityIcon-DDEIToER.js";import"./FloatingWrapper-CPYdMCWe.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
