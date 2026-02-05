import{j as o,M as r}from"./iframe-B4vjk2_C.js";import{useMDXComponents as i}from"./index-4mXTpVuF.js";import"./ListTable.stories-oKZilo3k.js";import"./DataTable.stories-CZQOesl0.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-IrfVYjtU.js";import"./useI18n-DbSMZiRF.js";import"./Button-COVTwlCl.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./icons-BjYZgjFf.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./ProgressCircular-CXDJvuy2.js";import"./SortDescending-B7jfx8Af.js";import"./IconButton-Ba8Tcb-S.js";import"./Menu-BL50xBAN.js";import"./useControl-DPltlHoP.js";import"./Divider-DqNucpfp.js";import"./list-B1zo5gaH.js";import"./NewTab-CGCvqCB9.js";import"./Skeleton-DGs4i03k.js";import"./Checkbox-yXCe54NU.js";import"./useValueControl-f2Qxn85g.js";import"./HelperText-B-4Si9bt.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Info-qvjQZ4-p.js";import"./List-DC9jGULM.js";import"./useListGesture-ChCl8FYv.js";import"./Popover-B32coOjQ.js";import"./TextField-BIeh6d0s.js";import"./Error-aRqdswEO.js";import"./InputButton-iEaXDKyM.js";import"./useFieldProps-DJ-a4x7W.js";import"./useFieldAriaProps-7JTDckGo.js";import"./Field-C-ZgIs6T.js";import"./FieldLabel-BSgk2xJ9.js";import"./Radio-CD9AnLjJ.js";import"./Message-Cp0HRbTV.js";import"./ProgressBar-DV2vejgj.js";import"./entity-DwfCESMK.js";import"./Edit-DrJZ1rCf.js";import"./Map-CaMFTBLm.js";import"./Warning-mmXjUrwg.js";import"./index-DphJYWn8.js";import"./SelectComposition-CjxfMaHc.js";import"./TagGroup-BD8-w4Bk.js";import"./Tag-BK4gk7JG.js";import"./TextOverflow-BMs1NRzU.js";import"./useHasOverflow-D8ib81fX.js";import"./Add-CrXyYGj8.js";import"./Close-CzhTZSOO.js";import"./AlertInline-DKFV__in.js";import"./SeverityIcon-BXOn61Fa.js";import"./FloatingWrapper-FR8zykZr.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
