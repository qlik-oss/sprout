import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{RowToggling as c,t as l}from"./ListTable.stories-yabvCW8q.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{title:`table/Rows/Row toggling`}),`
`,(0,f.jsx)(n.h1,{id:`row-toggling`,children:`Row toggling`}),`
`,(0,f.jsx)(n.p,{children:`When the primary row action is of binary nature, such as opening / closing panel, the row will respond accordingly using toggled state.
It is possible to have only one row in toggled state at a time, so, if user click on another row, the previous row will untoggle.`}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(`strong`,{children:`ℹ️ Note:`}),` When implementing fully controlled mode, developers
should follow and respect `,(0,f.jsx)(n.a,{href:`https://internal.qlik.dev/design/sprout/components/table/`,rel:`nofollow`,children:`Table
specification`}),`, the
part where row toggling is explained.`]}),`
`,(0,f.jsx)(n.h2,{id:`passing-toggled-row-state`,children:`Passing toggled row state`}),`
`,(0,f.jsxs)(n.p,{children:[`The toggled row state can be used by passing either `,(0,f.jsx)(n.code,{children:`defaultToggledRowId`}),` or `,(0,f.jsx)(n.code,{children:`onToggledRowChange`}),` function as Table prop.`]}),`
`,(0,f.jsx)(n.h3,{id:`default-row-toggling-state`,children:`Default row toggling state`}),`
`,(0,f.jsxs)(n.p,{children:[`If we would like to set an initial toggled row, this can be done by passing `,(0,f.jsx)(n.code,{children:`defaultToggledRowId`}),` as prop to the table.`]}),`
`,(0,f.jsx)(n.p,{children:`Example: opening / closing Panel when toggling the row, to display row details.
In such case, when refreshing application with opened Panel, we would like corresponding row in the Table to be already toggled / highlighted.`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { Table } from "@qlik/sprout-react-table";

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
`,(0,f.jsx)(n.h3,{id:`controlled-row-toggling`,children:`Controlled row toggling`}),`
`,(0,f.jsx)(n.p,{children:`The controlled row toggling is useful in scenarios where we would like to control toggled row externally, and execute some code
when toggled row state changes.
Example: Opening / closing Panel when row is toggled / untoggled.`}),`
`,(0,f.jsxs)(n.p,{children:[`Use `,(0,f.jsx)(n.code,{children:`toggledRowId`}),` table prop to control the state of toggled row`]}),`
`,(0,f.jsxs)(n.p,{children:[`Use `,(0,f.jsx)(n.code,{children:`onToggledRowChange`}),` function as table prop to listen to changes in toggled row state.`]}),`
`,(0,f.jsxs)(n.p,{children:[(0,f.jsx)(`strong`,{children:`ℹ️ Note:`}),` if needed, `,(0,f.jsx)(n.code,{children:`defaultToggledRowId`}),` can be also passed.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { useState } from "react";

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
`,(0,f.jsx)(a,{of:c}),`
`,(0,f.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,f.jsx)(r,{of:c})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),s(),i(),l()}))();export{d as default};