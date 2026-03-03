import{j as o,M as r}from"./iframe-CuV-KuE-.js";import{useMDXComponents as i}from"./index-D_K059sT.js";import"./ListTable.stories-sxDRkhvl.js";import"./DataTable.stories-E1HQ9E2d.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-C_25cFSE.js";import"./useI18n-BPziWXqP.js";import"./Button-D_CeIuO9.js";import"./classNames-fYnfVJ-g.js";import"./sprout-DQv_ITqK.js";import"./icons-BouMdmeh.js";import"./Button.module-CmdpHks8.js";import"./Badge-Dt3dHAo1.js";import"./Tooltip-Dlf0g86C.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-tUeULyiG.js";import"./useId-CKb71T0Y.js";import"./ProgressCircular-DDsJKJWC.js";import"./SortDescending-BF67BDZs.js";import"./IconButton-DFJpbTCt.js";import"./Menu-BVN8XmR4.js";import"./useControl-CYhNvxn-.js";import"./Divider-D0F_5EBr.js";import"./list-B1zo5gaH.js";import"./NewTab-DJ0MS9BP.js";import"./Skeleton-DBd_dt_9.js";import"./Checkbox-C-Sefky0.js";import"./useValueControl-DLR8SBP3.js";import"./HelperText-Ctcx11cL.js";import"./InfoTooltipPrimitive-DsZRUk_-.js";import"./Info-BDH0-Rmp.js";import"./List-BFTJx5a2.js";import"./useListGesture-WzoQDkMe.js";import"./Popover-BVw6PaHD.js";import"./TextField-CMO5t_Ye.js";import"./Error-D9ghOnKS.js";import"./InputButton-Xa5EqaK9.js";import"./useFieldProps-DU-6b6IZ.js";import"./useFieldAriaProps-BOPyAtc4.js";import"./Field-u_zqV6wB.js";import"./FieldLabel-AohGrq0t.js";import"./Radio-CZULi15_.js";import"./Message-DmR8-xr1.js";import"./ProgressBar-DvJ6AQ39.js";import"./entity-BmisFbTn.js";import"./Edit-CS5l4TjY.js";import"./Map-COzyd6Qy.js";import"./Warning-TGmbdRgn.js";import"./index-sjkRjUKZ.js";import"./SelectComposition-CX77_3Zt.js";import"./TagGroup-DEsyADP0.js";import"./Tag-Bxs778iX.js";import"./TextOverflow-H2h0tX5s.js";import"./useHasOverflow-CS__m2Gh.js";import"./Add-Cf52a-Iw.js";import"./Close-DVZAYT6i.js";import"./AlertInline-BTqM0hLj.js";import"./SeverityIcon-DIoAgMWV.js";import"./FloatingWrapper-EnwkNkl-.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
