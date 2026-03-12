import{j as o,M as r}from"./iframe-ZO3EpHUh.js";import{useMDXComponents as n}from"./index-BuQoUgKa.js";import"./ListTable.stories-BlgUANB5.js";import"./DataTable.stories-CyDVYtnQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CVd5IU1r.js";import"./useI18n-CNj_Vmmx.js";import"./Button-DwNMLHHD.js";import"./classNames--9J8KLdq.js";import"./sprout-JWClaPEx.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./ProgressCircular-Bbm1pjbl.js";import"./sort-descending-DuwJD51Q.js";import"./IconButton-CM9e8KDm.js";import"./Menu-CLctAJeW.js";import"./useControl-B2Bmxigf.js";import"./Divider-Bbj5__gU.js";import"./list-B1zo5gaH.js";import"./new-tab-CfvnCP2A.js";import"./Skeleton-Ch8F1EEZ.js";import"./Popover-BDw3NIcl.js";import"./padding-nVQxVZeA.js";import"./TextField-DZIgwTux.js";import"./useValueControl-B3H3Rg3H.js";import"./error-Lg61ZlTl.js";import"./InputButton-Binv3ZHd.js";import"./useFieldProps-DqU5TkBR.js";import"./useFieldAriaProps-B_vYltrV.js";import"./Field-uEq3IPbz.js";import"./FieldLabel-DyqdK2ie.js";import"./info-DvsPKJb0.js";import"./InfoTooltipPrimitive-CX2r-Osw.js";import"./HelperText-BqjFHr21.js";import"./Checkbox-Gl5nFt4x.js";import"./List-Dc9_b6lv.js";import"./useListGesture-B9iOauyS.js";import"./Radio-DsR-8wzh.js";import"./show-Do692Dy4.js";import"./Message-CWQJdgS-.js";import"./ProgressBar-sErTAQHo.js";import"./entity-CgxVnWro.js";import"./edit-BH8KrMyX.js";import"./map-CMc8fJla.js";import"./warning-LAozOqxS.js";import"./index-W1-YU6c0.js";import"./SelectComposition-D8CpsZq3.js";import"./TagGroup-DW8tWDYS.js";import"./Tag-CtZQOE4u.js";import"./TextOverflow-D8AIgKpt.js";import"./useHasOverflow-b7ARuLn8.js";import"./add-DMALUOT2.js";import"./close-CFDHWYro.js";import"./AlertInline-DQse9J3b.js";import"./SeverityIcon-DTHCWEmM.js";import"./FloatingWrapper-BqhdHM67.js";function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
