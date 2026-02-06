import{j as o,M as r}from"./iframe-itHhOQJ8.js";import{useMDXComponents as i}from"./index-M6OOd87p.js";import"./ListTable.stories-CLM8UbSS.js";import"./DataTable.stories-sFbIX5nK.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-Df5yoS2C.js";import"./useI18n-DI5kaiCu.js";import"./Button-D1L5V1zp.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./icons-ByJhQmwX.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./ProgressCircular-DxTh7cF9.js";import"./SortDescending-BgGAHRpl.js";import"./IconButton-BFY56UPS.js";import"./Menu-BI017uJL.js";import"./useControl-tJx49zVQ.js";import"./Divider-Z7gRZlXH.js";import"./list-B1zo5gaH.js";import"./NewTab-CD_BiguK.js";import"./Skeleton-skQ_3lbg.js";import"./Checkbox-CJQPTyqO.js";import"./useValueControl-BoLujgBt.js";import"./HelperText-CZI4gvqv.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Info-CR8Ra2BB.js";import"./List-BO2nz2p3.js";import"./useListGesture-BaRYVpJg.js";import"./Popover-D-VXifUT.js";import"./TextField-CrzVSwY1.js";import"./Error-CgMRcq7x.js";import"./InputButton-CobW-7UY.js";import"./useFieldProps-ZapC1bKU.js";import"./useFieldAriaProps-DJiNiZ9_.js";import"./Field-BglQDcK_.js";import"./FieldLabel-k_vhoLHi.js";import"./Radio-BuXCyg8H.js";import"./Message-Bc7eA00P.js";import"./ProgressBar-BYafVDdP.js";import"./entity-D0L1HH-P.js";import"./Edit-C4Gy6c5s.js";import"./Map-BgJ3dtI2.js";import"./Warning-Wt3nbj6y.js";import"./index-BKJVDtV4.js";import"./SelectComposition-1S4bJavw.js";import"./TagGroup-B35wMlua.js";import"./Tag-D6Whh4y4.js";import"./TextOverflow-ZR1lg4UG.js";import"./useHasOverflow-BPrWXac9.js";import"./Add-sGTd4JLT.js";import"./Close-DeQxVhkZ.js";import"./AlertInline-v7KfNwSs.js";import"./SeverityIcon-B8lRHlGc.js";import"./FloatingWrapper-CvOMWb5A.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
