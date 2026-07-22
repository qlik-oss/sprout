import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,i as n,l as r,n as i}from"./blocks-CCeqoOOO.js";import{t as a}from"./jsx-runtime-Bq1bXGty.js";import{i as o}from"./react-BnCtKaSV.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{RowToggling as c,t as l}from"./ListTable.stories-BP4VZRQb.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{title:`table/Rows/Row toggling`}),`
`,(0,f.jsx)(t.h1,{id:`row-toggling`,children:`Row toggling`}),`
`,(0,f.jsx)(t.p,{children:`When the primary row action is of binary nature, such as opening / closing panel, the row will respond accordingly using toggled state.
It is possible to have only one row in toggled state at a time, so, if user click on another row, the previous row will untoggle.`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(`strong`,{children:`ℹ️ Note:`}),` When implementing fully controlled mode, developers
should follow and respect `,(0,f.jsx)(t.a,{href:`https://internal.qlik.dev/design/sprout/components/table/`,rel:`nofollow`,children:`Table
specification`}),`, the
part where row toggling is explained.`]}),`
`,(0,f.jsx)(t.h2,{id:`passing-toggled-row-state`,children:`Passing toggled row state`}),`
`,(0,f.jsxs)(t.p,{children:[`The toggled row state can be used by passing either `,(0,f.jsx)(t.code,{children:`defaultToggledRowId`}),` or `,(0,f.jsx)(t.code,{children:`onToggledRowChange`}),` function as Table prop.`]}),`
`,(0,f.jsx)(t.h3,{id:`default-row-toggling-state`,children:`Default row toggling state`}),`
`,(0,f.jsxs)(t.p,{children:[`If we would like to set an initial toggled row, this can be done by passing `,(0,f.jsx)(t.code,{children:`defaultToggledRowId`}),` as prop to the table.`]}),`
`,(0,f.jsx)(t.p,{children:`Example: opening / closing Panel when toggling the row, to display row details.
In such case, when refreshing application with opened Panel, we would like corresponding row in the Table to be already toggled / highlighted.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";

// the entity with such id should be present in rows array in order for default toggling state to work
const defaultToggledRowId = "entity-id";

return (
  <Table
    rows={rows}
    columns={columns}
    defaultToggledRowId={defaultToggledRowId}
  />
);
`})}),`
`,(0,f.jsx)(t.h3,{id:`controlled-row-toggling`,children:`Controlled row toggling`}),`
`,(0,f.jsx)(t.p,{children:`The controlled row toggling is useful in scenarios where we would like to control toggled row externally, and execute some code
when toggled row state changes.
Example: Opening / closing Panel when row is toggled / untoggled.`}),`
`,(0,f.jsxs)(t.p,{children:[`Use `,(0,f.jsx)(t.code,{children:`toggledRowId`}),` table prop to control the state of toggled row`]}),`
`,(0,f.jsxs)(t.p,{children:[`Use `,(0,f.jsx)(t.code,{children:`onToggledRowChange`}),` function as table prop to listen to changes in toggled row state.`]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(`strong`,{children:`ℹ️ Note:`}),` if needed, `,(0,f.jsx)(t.code,{children:`defaultToggledRowId`}),` can be also passed.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react";

import { Table } from "@qlik/sprout-react-table";

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

  return (
    <Table
      rows={rows}
      columns={columns}
      toggledRowId={toggledRowId}
      onToggledRowChange={onToggledRowChange}
    />
  );
}
`})}),`
`,(0,f.jsx)(i,{of:c}),`
`,(0,f.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,f.jsx)(n,{of:c})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=a(),s(),t(),l()}))();export{d as default};