import{j as o,M as l,a as s,C as g}from"./iframe-B9QkJTIx.js";import{useMDXComponents as i}from"./index-Ka0iXB8t.js";import{RowToggling as t}from"./ListTable.stories-DyvHm3Wo.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-D2Hm0_QA.js";import"./useI18n-CoLWfcqJ.js";import"./Button-DJuasLWt.js";import"./classNames-CL7ibyjj.js";import"./sprout-DgR7PjaR.js";import"./icons-Duy9VSzr.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./ProgressCircular-CftNoQ2F.js";import"./SortDescending-CLGWMbYc.js";import"./IconButton-CrQ3EA5C.js";import"./Menu-CYXlESaf.js";import"./useControl-CYR4PP7j.js";import"./Divider-CQpF3Ph8.js";import"./list-B1zo5gaH.js";import"./NewTab-BMd_bij_.js";import"./Skeleton-wIQNnjB0.js";import"./Checkbox-CYD4A7GS.js";import"./useValueControl-Db5KsQ4Q.js";import"./HelperText-BYWuUqrF.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Info-BWEZF-KM.js";import"./List-CBxPPDGX.js";import"./useListGesture-BdSTCOqc.js";import"./Popover-GGNis2px.js";import"./TextField-D-V1YVvE.js";import"./Error-Blwva2SQ.js";import"./InputButton-BrKvM5py.js";import"./useFieldProps-YNPoJw4_.js";import"./useFieldAriaProps-B8MgKfHo.js";import"./Field-DqJdoNjO.js";import"./FieldLabel-DJkQe3UY.js";import"./Radio-BZg-I7CQ.js";import"./Message-B_naLpQf.js";import"./ProgressBar-BofdQq2I.js";import"./entity-CSiJwT8q.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Table/Docs/Rows/Row toggling"}),`
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
