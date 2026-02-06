import{j as o,M as r}from"./iframe-B4-nXs83.js";import{useMDXComponents as i}from"./index-BqykRLmO.js";import"./ListTable.stories-kkj-broB.js";import"./DataTable.stories-Dm938kPV.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BNlS3oNV.js";import"./useI18n-peGtGOOS.js";import"./Button-Cv6yFaKa.js";import"./classNames-eIMwhIDK.js";import"./sprout-SOoz1jzb.js";import"./icons-DuVV-LnW.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./ProgressCircular-CVxkPa9h.js";import"./SortDescending-CKWll_c0.js";import"./IconButton-D-KEKYAI.js";import"./Menu-DW09POVa.js";import"./useControl-DdRfwf_0.js";import"./Divider-DdqecLrr.js";import"./list-B1zo5gaH.js";import"./NewTab-Bx55GzRW.js";import"./Skeleton-BsrAjAGs.js";import"./Checkbox-BZ2qRRvw.js";import"./useValueControl-CtQhivtG.js";import"./HelperText-ByCNTNQH.js";import"./InfoTooltipPrimitive-D8jVv135.js";import"./Info-DTuI-Of7.js";import"./List-h-LY_Ssu.js";import"./useListGesture-KAVHmAzT.js";import"./Popover-CS5Gu0v5.js";import"./TextField-7zXX973B.js";import"./Error-D7GK58M_.js";import"./InputButton-bRj-07Rv.js";import"./useFieldProps-BBrAaKPm.js";import"./useFieldAriaProps-Cbzvhn2j.js";import"./Field-B3vU29tm.js";import"./FieldLabel-DdZy9tvM.js";import"./Radio-Y7kBaWyP.js";import"./Message-jaCKEo0_.js";import"./ProgressBar-DdBByWnw.js";import"./entity-DyXn2hc5.js";import"./Edit-DzJTkpRk.js";import"./Map-D3Po8JT9.js";import"./Warning-BAtVE0v3.js";import"./index-Bgl3-yHM.js";import"./SelectComposition-BaT4dRxA.js";import"./TagGroup-BFI8F1G-.js";import"./Tag-CObVgYEg.js";import"./TextOverflow-dP4PdhnE.js";import"./useHasOverflow-DZlgyJuB.js";import"./Add-BPhJi-H4.js";import"./Close-BgZ1uSF_.js";import"./AlertInline-DlnHae0G.js";import"./SeverityIcon-B1n60lm3.js";import"./FloatingWrapper-Y9LgBPDf.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
