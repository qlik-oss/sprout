import{j as o,M as l,a as s,C as g}from"./iframe-lMEil1TA.js";import{useMDXComponents as i}from"./index-Wkq3wkd2.js";import{RowToggling as t}from"./ListTable.stories-DHf0WxCL.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-DPHkdLlh.js";import"./useI18n-CDksjSf0.js";import"./Button-B3VC5XuI.js";import"./classNames-B_Twdkca.js";import"./sprout-fe7_-ZbP.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./ProgressCircular-DzkpdMMq.js";import"./sort-descending-DBF7-f7_.js";import"./IconButton-CuZnXk5P.js";import"./Menu-BuAoSxI5.js";import"./useControl-Crf27nxo.js";import"./Divider-DoFQjC9R.js";import"./list-B1zo5gaH.js";import"./new-tab-CrWdziAn.js";import"./Skeleton-ByVVQwn0.js";import"./Popover-C2pxt5JU.js";import"./padding-ChQcYsRi.js";import"./TextField-BJ7hRtnc.js";import"./useValueControl-JgME-MAi.js";import"./error-D8ruDyrJ.js";import"./InputButton-BcBP8Pmj.js";import"./useFieldProps-lilq_Daj.js";import"./useFieldAriaProps-BeXWYVK1.js";import"./Field-C2NiUE28.js";import"./FieldLabel-hmMjgROH.js";import"./info-B4Qytw2Z.js";import"./InfoTooltipPrimitive-BLPBLLHp.js";import"./HelperText-B_x3JSnr.js";import"./Checkbox-B2upM8Wa.js";import"./List-DPaEP81W.js";import"./useListGesture-CqGT3z4U.js";import"./Radio-BTbE2pEa.js";import"./show-CL2zF-Fm.js";import"./Message-43Hu274X.js";import"./ProgressBar-CXjvcnKL.js";import"./entity-hM96d6N7.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Table/Docs/Rows/Row toggling"}),`
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
`,o.jsx(g,{of:t})]})}function eo(n={}){const{wrapper:e}={...i(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(r,{...n})}):r(n)}export{eo as default};
