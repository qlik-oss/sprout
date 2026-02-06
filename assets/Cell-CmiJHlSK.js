import{j as o,M as r}from"./iframe-Dux6zP9l.js";import{useMDXComponents as i}from"./index-BCztanOQ.js";import"./ListTable.stories-B-u55PHq.js";import"./DataTable.stories-DwcYy98i.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-eze-MICP.js";import"./useI18n-KYbpKEsf.js";import"./Button-CUxISDo2.js";import"./classNames-T6EAEAwi.js";import"./sprout-duSO2RrP.js";import"./icons-DDUP-3mh.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./ProgressCircular-u9vevpyG.js";import"./SortDescending-6CDLuBsq.js";import"./IconButton-Blrr834S.js";import"./Menu-BeZpFDiT.js";import"./useControl-BHRxoypK.js";import"./Divider-l6Y0Jgs3.js";import"./list-B1zo5gaH.js";import"./NewTab-B05WKzom.js";import"./Skeleton-JHrb0bly.js";import"./Checkbox-Ce6gyz1s.js";import"./useValueControl-BAwr0tlp.js";import"./HelperText-BOHUOWLI.js";import"./InfoTooltipPrimitive-BaQRZYyO.js";import"./Info-DM0ROm97.js";import"./List-C5hsffpx.js";import"./useListGesture-l6HU6M_5.js";import"./Popover-CIPB7nap.js";import"./TextField-BpUUDk4a.js";import"./Error-BylAzqMK.js";import"./InputButton-yvCJ7c_i.js";import"./useFieldProps-BNSTbevB.js";import"./useFieldAriaProps-D4sViO3r.js";import"./Field-BXzPF4nu.js";import"./FieldLabel-C0bDiOug.js";import"./Radio-BgigLezH.js";import"./Message-DOGGZn5e.js";import"./ProgressBar-DYErwZaZ.js";import"./entity-BnvaaVNc.js";import"./Edit-jwbjvk-y.js";import"./Map-BliWAPeQ.js";import"./Warning-DwriNDhq.js";import"./index-BZsHeupw.js";import"./SelectComposition-DpZ1oFo4.js";import"./TagGroup-Bmc-dFrU.js";import"./Tag-rw8sUUkl.js";import"./TextOverflow-CaMKAJP6.js";import"./useHasOverflow-CHWGWZmC.js";import"./Add-BtS2806q.js";import"./Close-DZrODGJw.js";import"./AlertInline-uYDoLAUP.js";import"./SeverityIcon-xCN2JtCp.js";import"./FloatingWrapper-DWE1MRoj.js";function n(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
