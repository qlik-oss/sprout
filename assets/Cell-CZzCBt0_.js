import{j as o,M as r}from"./iframe-B9QkJTIx.js";import{useMDXComponents as i}from"./index-Ka0iXB8t.js";import"./ListTable.stories-DyvHm3Wo.js";import"./DataTable.stories-DUB4ZTj6.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-D2Hm0_QA.js";import"./useI18n-CoLWfcqJ.js";import"./Button-DJuasLWt.js";import"./classNames-CL7ibyjj.js";import"./sprout-DgR7PjaR.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./ProgressCircular-CftNoQ2F.js";import"./SortDescending-CLGWMbYc.js";import"./IconButton-CrQ3EA5C.js";import"./Menu-CYXlESaf.js";import"./useControl-CYR4PP7j.js";import"./Divider-CQpF3Ph8.js";import"./list-B1zo5gaH.js";import"./NewTab-BMd_bij_.js";import"./Skeleton-wIQNnjB0.js";import"./Checkbox-CYD4A7GS.js";import"./useValueControl-Db5KsQ4Q.js";import"./HelperText-BYWuUqrF.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Info-BWEZF-KM.js";import"./List-CBxPPDGX.js";import"./useListGesture-BdSTCOqc.js";import"./Popover-GGNis2px.js";import"./TextField-D-V1YVvE.js";import"./Error-Blwva2SQ.js";import"./InputButton-BrKvM5py.js";import"./useFieldProps-YNPoJw4_.js";import"./useFieldAriaProps-B8MgKfHo.js";import"./Field-DqJdoNjO.js";import"./FieldLabel-DJkQe3UY.js";import"./Radio-BZg-I7CQ.js";import"./Message-B_naLpQf.js";import"./ProgressBar-BofdQq2I.js";import"./entity-CSiJwT8q.js";import"./Edit-BObi6k7U.js";import"./Map-D73tVC2W.js";import"./Warning-B4wA6Xoa.js";import"./index-cSFa6LUu.js";import"./SelectComposition-C03WeBSC.js";import"./TagGroup-h28o7ATL.js";import"./Tag-B3eV28ox.js";import"./TextOverflow-NR2fjX4A.js";import"./useHasOverflow-BYbTVzOs.js";import"./Add-BjVpk_Pb.js";import"./Close-ajP2gTu5.js";import"./AlertInline-CTpWXRpk.js";import"./SeverityIcon-CKoJLroj.js";import"./FloatingWrapper-YX7wMZJ8.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
