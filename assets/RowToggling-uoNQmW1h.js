import{j as o,M as l,a as s,C as g}from"./iframe-DO7qjpir.js";import{useMDXComponents as i}from"./index-DM3CO3rl.js";import{RowToggling as t}from"./ListTable.stories-GRaxQmDA.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-CdimE1K6.js";import"./useI18n-CbD-mhn-.js";import"./Button-DWGkri9_.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./icons-B7D59aOJ.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";import"./SortDescending-Bd_E1WmM.js";import"./IconButton-GXyV3m9d.js";import"./Menu-u-ysB1YM.js";import"./useControl-U2hc2GWS.js";import"./Divider-BpSmZpjh.js";import"./list-B1zo5gaH.js";import"./NewTab-DA06V-wx.js";import"./Skeleton-BQx9Bath.js";import"./Checkbox-CzZgz8P2.js";import"./useValueControl-DIvBSOg5.js";import"./HelperText-BAW71J19.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Info-CoVbxZIf.js";import"./List-D7yjk9tW.js";import"./useListGesture-CyFtzgkM.js";import"./Popover-DkNNB74y.js";import"./TextField-BvJMgdQD.js";import"./Error-DM57iPud.js";import"./InputButton-BUj9u-fS.js";import"./useFieldProps-dIMY5Lzn.js";import"./useFieldAriaProps-B-bf9GJL.js";import"./Field-Uh2AYJyc.js";import"./FieldLabel-B6hPS730.js";import"./Radio-6TYluTmb.js";import"./Message-CS0lUUIB.js";import"./ProgressBar-Y0MhEBtq.js";import"./entity-Bx7QGl0Y.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Table/Docs/Rows/Row toggling"}),`
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
