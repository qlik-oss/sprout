import{j as o,M as r}from"./iframe-DuYosUFD.js";import{useMDXComponents as n}from"./index-6fjbDpXn.js";import"./ListTable.stories-CBatvAVB.js";import"./DataTable.stories-C8Hrr7uJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-fpvLVI4M.js";import"./useI18n-BjJPdLTM.js";import"./Button-DI0ZynHS.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./ProgressCircular-BvkbtoQi.js";import"./sort-descending-BgZWkgGz.js";import"./IconButton-BE9E_AnQ.js";import"./Menu-D_Niw5ai.js";import"./useControl-DOCWDNqa.js";import"./Divider-DVRuu_FL.js";import"./list-B1zo5gaH.js";import"./new-tab-Dp-d2eWd.js";import"./Skeleton-R2z-cDq5.js";import"./Popover-D-qbv7RV.js";import"./padding-BWxXYvmb.js";import"./TextField-DnT8J57g.js";import"./useValueControl-uslnr95T.js";import"./error-CXY2goRU.js";import"./InputButton-CpK-Hq67.js";import"./useFieldProps-BwY4Fxzy.js";import"./useFieldAriaProps-oaAu_ksb.js";import"./Field-MvuQg19v.js";import"./FieldLabel-BP167ITs.js";import"./info-Bxa3p2DF.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./HelperText-6attHadj.js";import"./Checkbox-4-pENTYN.js";import"./List-C-OREM0u.js";import"./useListGesture-EJR-Hpo1.js";import"./Radio-BsibNaRm.js";import"./show-Gqxo-URH.js";import"./Message-3Vh_XQrE.js";import"./ProgressBar-DUKTXS9W.js";import"./entity-BVuadDIQ.js";import"./edit-DeXKaZx5.js";import"./map-Be-Ow4bt.js";import"./warning-DO6AU_ml.js";import"./index-AUjBO46D.js";import"./SelectComposition-eEorCX1T.js";import"./TagGroup-CaR5HQlD.js";import"./Tag-DpwdOoAU.js";import"./TextOverflow-DsMnN-5j.js";import"./useHasOverflow-BuHjGHjQ.js";import"./add-Vg2U0mSE.js";import"./close-Dyzj91Dc.js";import"./AlertInline-BNeWuwr2.js";import"./SeverityIcon-DSoo49L9.js";import"./FloatingWrapper-BYrVCp-F.js";function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
`,o.jsx(t.h1,{id:"table---cell",children:"Table - Cell"}),`
`,o.jsx(t.p,{children:"Cells are the basic building blocks of a table, representing the intersection of a row and a column. They can contain various types of content, such as text, images, or custom components."}),`
`,o.jsx(t.h2,{id:"customizing-cells",children:"Customizing cells"}),`
`,o.jsxs(t.p,{children:["To customize the rendering of a cell you can use the ",o.jsx(t.a,{href:"?path=/docs/docs-columns-column-definition--docs#rendercell",children:"rendercell"})," property of the column definition. This allows you to define how the content of a cell should be displayed, including custom formatting or additional components."]}),`
`,o.jsx(t.h2,{id:"oncellclicke-params",children:"onCellClick(e, params)"}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"onCellClick"})," prop allows you to handle click events on individual cells. This can be useful for implementing custom interactions, such as opening a detail view or triggering an action when a cell is clicked."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";
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
`})})]})}function ho(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(i,{...e})}):i(e)}export{ho as default};
