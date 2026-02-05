import{j as o,M as r}from"./iframe-BThSoDrn.js";import{useMDXComponents as i}from"./index-dxYskzg-.js";import"./ListTable.stories-CBE61jpF.js";import"./DataTable.stories-DPDjtHWB.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-BSsjhkNm.js";import"./useI18n-DEBX20KE.js";import"./Button-DPdoSvtR.js";import"./classNames-dIthk07I.js";import"./sprout-C7A3N88C.js";import"./icons-m7QrAy0p.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./ProgressCircular-3frmJwTX.js";import"./SortDescending-DRIoVd-M.js";import"./IconButton-BNf-P6Px.js";import"./Menu-ByKPQPeJ.js";import"./useControl-BsRaFebD.js";import"./Divider-BDGjRrdZ.js";import"./list-B1zo5gaH.js";import"./NewTab-RTkCp496.js";import"./Skeleton-CGjLWnQE.js";import"./Checkbox-CwbydU-X.js";import"./useValueControl-GMse0bib.js";import"./HelperText-bJIP0f1z.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Info-CD_iaTpZ.js";import"./List-DdV_35GQ.js";import"./useListGesture-DQ4w9Z6Q.js";import"./Popover-BJedhRhh.js";import"./TextField-RzgPXNoi.js";import"./Error-LWra2rFD.js";import"./InputButton-D48x7m5m.js";import"./useFieldProps-ZuqHy8WE.js";import"./useFieldAriaProps-CdXcjcjf.js";import"./Field-FhdYhdWr.js";import"./FieldLabel-Bgszjlae.js";import"./Radio-DNI0-KRY.js";import"./Message-6bQP5MEx.js";import"./ProgressBar-C7xEEuQF.js";import"./entity-DzzI86Ua.js";import"./Edit-BnWU-wtK.js";import"./Map-BSYcvYLi.js";import"./Warning-BKQeZIO5.js";import"./index-DPypwqCx.js";import"./SelectComposition-BkFtZxST.js";import"./TagGroup-vpdbOI5u.js";import"./Tag-B1yXdr4G.js";import"./TextOverflow-DOzhudw2.js";import"./useHasOverflow-ChjOj1VO.js";import"./Add-BQFdkl2e.js";import"./Close-jEAlxUHo.js";import"./AlertInline-CTeynTLS.js";import"./SeverityIcon-CDrAKmG1.js";import"./FloatingWrapper-By9slcCq.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
