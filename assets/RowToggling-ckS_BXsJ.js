import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-B5xoaqtW.js";import{n as i}from"./lib-EjdzwnHJ.js";import"./lib-BqyORzYB.js";import"./entity-BW1wQ0_F.js";import{RowToggling as a}from"./ListTable.stories-UKG8RqLs.js";var o=e();function s(e){let s={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...i(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{title:`Table/Docs/Rows/Row toggling`}),`
`,(0,o.jsx)(s.h1,{id:`row-toggling`,children:`Row toggling`}),`
`,(0,o.jsx)(s.p,{children:`When the primary row action is of binary nature, such as opening / closing panel, the row will respond accordingly using toggled state.
It is possible to have only one row in toggled state at a time, so, if user click on another row, the previous row will untoggle.`}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(`strong`,{children:`ℹ️ Note:`}),` When implementing fully controlled mode, developers should follow and respect `,(0,o.jsx)(s.a,{href:`https://internal.qlik.dev/design/sprout/components/table/`,rel:`nofollow`,children:`Table
specification`}),`, the part where row toggling is explained.`]}),`
`,(0,o.jsx)(s.h2,{id:`passing-toggled-row-state`,children:`Passing toggled row state`}),`
`,(0,o.jsxs)(s.p,{children:[`The toggled row state can be used by passing either `,(0,o.jsx)(s.code,{children:`defaultToggledRowId`}),` or `,(0,o.jsx)(s.code,{children:`onToggledRowChange`}),` function as Table prop.`]}),`
`,(0,o.jsx)(s.h3,{id:`default-row-toggling-state`,children:`Default row toggling state`}),`
`,(0,o.jsxs)(s.p,{children:[`If we would like to set an initial toggled row, this can be done by passing `,(0,o.jsx)(s.code,{children:`defaultToggledRowId`}),` as prop to the table.`]}),`
`,(0,o.jsx)(s.p,{children:`Example: opening / closing Panel when toggling the row, to display row details.
In such case, when refreshing application with opened Panel, we would like corresponding row in the Table to be already toggled / highlighted.`}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-table";

// the entity with such id should be present in rows array in order for default toggling state to work
const defaultToggledRowId = "entity-id";

return <Table rows={rows} columns={columns} defaultToggledRowId={defaultToggledRowId} />;
`})}),`
`,(0,o.jsx)(s.h3,{id:`controlled-row-toggling`,children:`Controlled row toggling`}),`
`,(0,o.jsx)(s.p,{children:`The controlled row toggling is useful in scenarios where we would like to control toggled row externally, and execute some code
when toggled row state changes.
Example: Opening / closing Panel when row is toggled / untoggled.`}),`
`,(0,o.jsxs)(s.p,{children:[`Use `,(0,o.jsx)(s.code,{children:`toggledRowId`}),` table prop to control the state of toggled row`]}),`
`,(0,o.jsxs)(s.p,{children:[`Use `,(0,o.jsx)(s.code,{children:`onToggledRowChange`}),` function as table prop to listen to changes in toggled row state.`]}),`
`,(0,o.jsxs)(s.p,{children:[(0,o.jsx)(`strong`,{children:`ℹ️ Note:`}),` if needed, `,(0,o.jsx)(s.code,{children:`defaultToggledRowId`}),` can be also passed.`]}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:`language-tsx`,children:`import { useState } from "react";
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
`,(0,o.jsx)(n,{of:a}),`
`,(0,o.jsx)(s.h2,{id:`api`,children:`API`}),`
`,(0,o.jsx)(t,{of:a})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};