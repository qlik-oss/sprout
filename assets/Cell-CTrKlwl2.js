import{j as o,M as r}from"./iframe-qjjAf_pH.js";import{useMDXComponents as i}from"./index-BAT7sozL.js";import"./ListTable.stories-rCJ8u2aC.js";import"./DataTable.stories-CoQzY2SV.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-C1epY4k_.js";import"./useI18n-DleVkSsM.js";import"./Button-cYFf5aNk.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./ProgressCircular-BSs6AknY.js";import"./SortDescending-C3dNRiBL.js";import"./IconButton-DKYxz8uh.js";import"./Menu-C5_qGJie.js";import"./useControl-BNhHN6uq.js";import"./Divider-Cf0WguxB.js";import"./list-B1zo5gaH.js";import"./NewTab-CYZ0jhBQ.js";import"./Skeleton-BKmE9JlX.js";import"./Checkbox-Drk1Dunk.js";import"./useValueControl-CExQO3qq.js";import"./HelperText-CYjRsd29.js";import"./InfoTooltipPrimitive-CrOtV9y3.js";import"./Info-DxHQkaw3.js";import"./List-C3D7MMCm.js";import"./useListGesture-Brx4doHh.js";import"./Popover-DnFzFkcI.js";import"./TextField-CK34yAWN.js";import"./Error-BrLGh9jC.js";import"./InputButton-C0Pq6Rob.js";import"./useFieldProps-BNEikc4J.js";import"./useFieldAriaProps-7kz57GoE.js";import"./Field-Cf7Db6oK.js";import"./FieldLabel-bQ0UMnrf.js";import"./Radio-N-PXJ2J8.js";import"./Message-BZngrfl1.js";import"./ProgressBar-ChivX090.js";import"./entity-DKvlJDRY.js";import"./Edit-2pD94UJo.js";import"./Map-in9fWS3M.js";import"./Warning-CuGLZChC.js";import"./index-BkElCgI0.js";import"./SelectComposition-aqwnCHtS.js";import"./TagGroup-B7F15cvC.js";import"./Tag-CyqCz7gG.js";import"./TextOverflow-QXR0TMUv.js";import"./useHasOverflow-B98-wlZO.js";import"./Add-DSLcMkbC.js";import"./Close-Bp7FqXQR.js";import"./AlertInline-BvFLYRiR.js";import"./SeverityIcon-DTXO1k7w.js";import"./FloatingWrapper-wvjLqIRc.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
