import{j as o,M as l,a as s,C as g}from"./iframe-CYyT-rNd.js";import{useMDXComponents as i}from"./index-Dzbf35yC.js";import{RowToggling as t}from"./ListTable.stories-BPgTg3fI.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DQ5rM_kH.js";import"./useI18n-B8acZ0ym.js";import"./Button-B_WU7ehq.js";import"./classNames-BmP9dLUE.js";import"./sprout-UDUY6uO8.js";import"./icons-BJP5nzPh.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./ProgressCircular-BThLXJeo.js";import"./SortDescending-CVAYxQhu.js";import"./IconButton-DQqeG5o4.js";import"./Menu-BJ4TKxRh.js";import"./useControl-CbxOYg9r.js";import"./Divider-DGcHtPQB.js";import"./list-B1zo5gaH.js";import"./NewTab-CSZjxaIu.js";import"./Skeleton-BcSpZhaC.js";import"./Checkbox-CEdksXS8.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./List-CKMCLIEK.js";import"./useListGesture-BJWysAy8.js";import"./Popover-p0wTHRSq.js";import"./TextField-3so8vjFm.js";import"./Error-D7GnDcGx.js";import"./InputButton-CVMmk1vr.js";import"./useFieldProps-crQyhd-6.js";import"./useFieldAriaProps-O3JOrChf.js";import"./Field-WnapnPu6.js";import"./FieldLabel-B0tZljJj.js";import"./Radio-6dgqdk9y.js";import"./Message-1sVzd-4h.js";import"./ProgressBar-PgTOB488.js";import"./entity-BJaSSSwx.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Table/Docs/Rows/Row toggling"}),`
`,o.jsx(e.h1,{id:"row-toggling",children:"Row toggling"}),`
`,o.jsx(e.p,{children:`When the primary row action is of binary nature, such as opening / closing panel, the row will respond accordingly using toggled state.
It is possible to have only one row in toggled state at a time, so, if user click on another row, the previous row will untoggle.`}),`
`,o.jsxs(e.p,{children:[o.jsx("strong",{children:"ℹ️ Note:"})," When implementing fully controlled mode, developers should follow and respect ",o.jsx(e.a,{href:"https://internal.qlik.dev/design/sprout/components/table/",rel:"nofollow",children:`Table
specification`}),", the part where row toggling is explained."]}),`
`,o.jsx(e.h2,{id:"passing-toggled-row-state",children:"Passing toggled row state"}),`
`,o.jsxs(e.p,{children:["The toggled row state can be used by passing either ",o.jsx(e.code,{children:"defaultToggledRowId"})," or ",o.jsx(e.code,{children:"onToggledRowChange"})," function as Table prop."]}),`
`,o.jsx(e.h3,{id:"default-row-toggling-state",children:"Default row toggling state"}),`
`,o.jsxs(e.p,{children:["If we would like to set an initial toggled row, this can be done by passing ",o.jsx(e.code,{children:"defaultToggledRowId"})," as prop to the table."]}),`
`,o.jsx(e.p,{children:`Example: opening / closing Panel when toggling the row, to display row details.
In such case, when refreshing application with opened Panel, we would like corresponding row in the Table to be already toggled / highlighted.`}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Table } from "@qlik/sprout-table";

// the entity with such id should be present in rows array in order for default toggling state to work
const defaultToggledRowId = "entity-id";

return <Table rows={rows} columns={columns} defaultToggledRowId={defaultToggledRowId} />;
`})}),`
`,o.jsx(e.h3,{id:"controlled-row-toggling",children:"Controlled row toggling"}),`
`,o.jsx(e.p,{children:`The controlled row toggling is useful in scenarios where we would like to control toggled row externally, and execute some code
when toggled row state changes.
Example: Opening / closing Panel when row is toggled / untoggled.`}),`
`,o.jsxs(e.p,{children:["Use ",o.jsx(e.code,{children:"toggledRowId"})," table prop to control the state of toggled row"]}),`
`,o.jsxs(e.p,{children:["Use ",o.jsx(e.code,{children:"onToggledRowChange"})," function as table prop to listen to changes in toggled row state."]}),`
`,o.jsxs(e.p,{children:[o.jsx("strong",{children:"ℹ️ Note:"})," if needed, ",o.jsx(e.code,{children:"defaultToggledRowId"})," can be also passed."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { useState } from "react";
import { Table } from "@qlik/sprout-table";

function ComponentUsingTable() {
  const [toggledRowId, setToggledRowId] = useState<string | undefined>();

  const onToggledRowChange = (rowId: string | undefined) => {
    setToggledRowId(rowId);

    if (rowId) {
      // do something when row will toggle
    } else {
      // do something when row will untoggle
    }
  };

  return <Table rows={rows} columns={columns} toggledRowId={toggledRowId} onToggledRowChange={onToggledRowChange} />;
}
`})}),`
`,o.jsx(s,{of:t}),`
`,o.jsx(e.h2,{id:"api",children:"API"}),`
`,o.jsx(g,{of:t})]})}function $(n={}){const{wrapper:e}={...i(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(r,{...n})}):r(n)}export{$ as default};
