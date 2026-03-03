import{j as o,M as r}from"./iframe-BM36tKY9.js";import{useMDXComponents as n}from"./index-BCPnpXol.js";import"./ListTable.stories-Dl8ElP1F.js";import"./DataTable.stories-DSX7X2U-.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DTzJl0cc.js";import"./useI18n-BRpGJeHe.js";import"./Button-wScfBKxi.js";import"./classNames-D2MVtjzd.js";import"./sprout-BcBmzfoy.js";import"./Button.module-Bn-SZyJ6.js";import"./common-bQH3ZR03.js";import"./Badge-CjLUVOBS.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./ProgressCircular-DoqAoY81.js";import"./sort-descending-CgwSpVd_.js";import"./IconButton-DIyYlW0K.js";import"./Menu-b5Hl0xTM.js";import"./useControl-Bq0hCRWZ.js";import"./Divider-CVf_6yZu.js";import"./list-B1zo5gaH.js";import"./new-tab-CpKZypuy.js";import"./Skeleton-DwQqkdj6.js";import"./Popover-DaYy3ijw.js";import"./padding-BVrxRlLA.js";import"./TextField-xzsdu2-Y.js";import"./useValueControl-C1TwhPrN.js";import"./error-DJM79MqW.js";import"./InputButton-CEOVqhok.js";import"./useFieldProps-C0FKGzLz.js";import"./useFieldAriaProps-D-kZa2Fo.js";import"./Field-BP_0b4CU.js";import"./FieldLabel-DHI2P9wk.js";import"./info-By4pCjMF.js";import"./InfoTooltipPrimitive-B8ta45BR.js";import"./HelperText-BT_m4RdC.js";import"./Checkbox-Du9zmVCp.js";import"./List-5clCzlOh.js";import"./useListGesture-BjcVIGnC.js";import"./Radio-9eKl_Nwn.js";import"./show-C6fFsymT.js";import"./Message-BhbyFQzf.js";import"./ProgressBar-Uyun059k.js";import"./entity-CJQOLRZI.js";import"./edit-CKp5FD3E.js";import"./map-DnBNu0cY.js";import"./warning-GTpknHYS.js";import"./index-bW3DuZb5.js";import"./SelectComposition-BLwTa6RT.js";import"./TagGroup-OL8HiEl_.js";import"./Tag-Bmu-JbUV.js";import"./TextOverflow-7rHwN7fm.js";import"./useHasOverflow-BudGxDi5.js";import"./add-VKxZMCZ1.js";import"./close-CYEv2BwJ.js";import"./AlertInline-GaNDVBB-.js";import"./SeverityIcon-CnbcKgkd.js";import"./FloatingWrapper-BdIfZkqF.js";function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Table/Docs/Cell"}),`
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
