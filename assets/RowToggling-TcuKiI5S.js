import{j as o,M as l,a as s,C as g}from"./iframe-qjjAf_pH.js";import{useMDXComponents as i}from"./index-BAT7sozL.js";import{RowToggling as t}from"./ListTable.stories-rCJ8u2aC.js";import"./preload-helper-PPVm8Dsz.js";import"./TanstackTable-C1epY4k_.js";import"./useI18n-DleVkSsM.js";import"./Button-cYFf5aNk.js";import"./classNames-BVAN1ZTN.js";import"./sprout-Dvd5rbSu.js";import"./icons-5qhXnzWI.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./ProgressCircular-BSs6AknY.js";import"./SortDescending-C3dNRiBL.js";import"./IconButton-DKYxz8uh.js";import"./Menu-C5_qGJie.js";import"./useControl-BNhHN6uq.js";import"./Divider-Cf0WguxB.js";import"./list-B1zo5gaH.js";import"./NewTab-CYZ0jhBQ.js";import"./Skeleton-BKmE9JlX.js";import"./Checkbox-Drk1Dunk.js";import"./useValueControl-CExQO3qq.js";import"./HelperText-CYjRsd29.js";import"./InfoTooltipPrimitive-CrOtV9y3.js";import"./Info-DxHQkaw3.js";import"./List-C3D7MMCm.js";import"./useListGesture-Brx4doHh.js";import"./Popover-DnFzFkcI.js";import"./TextField-CK34yAWN.js";import"./Error-BrLGh9jC.js";import"./InputButton-C0Pq6Rob.js";import"./useFieldProps-BNEikc4J.js";import"./useFieldAriaProps-7kz57GoE.js";import"./Field-Cf7Db6oK.js";import"./FieldLabel-bQ0UMnrf.js";import"./Radio-N-PXJ2J8.js";import"./Message-BZngrfl1.js";import"./ProgressBar-ChivX090.js";import"./entity-DKvlJDRY.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Table/Docs/Rows/Row toggling"}),`
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
