import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,l as n,n as r}from"./blocks-CCeqoOOO.js";import{t as i}from"./jsx-runtime-Bq1bXGty.js";import{i as a}from"./react-BnCtKaSV.js";import{t as o}from"./mdx-react-shim-9RzcSRdq.js";import{t as s}from"./DataTable.stories-D5kIkkjc.js";import{FlexParentContainer as c,FlexParentContainerBoundaries as l,LayoutAuto as u,PredefinedDimensions as d,t as f}from"./ListTable.stories-BP4VZRQb.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...a(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{title:`table/Layout`}),`
`,(0,h.jsx)(t.h1,{id:`table-layout`,children:`Table layout`}),`
`,(0,h.jsx)(t.p,{children:`By default, the Table fills the space of its parent container, so that container must have intrinsic dimensions. In other words, if the container has no child elements, then it still must have non-zero dimensions.`}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`flex-parent-container`,children:`Flex parent container`}),`
`,(0,h.jsxs)(t.p,{children:[`The Table can be rendered inside a `,(0,h.jsx)(t.code,{children:`flex`}),` container with `,(0,h.jsx)(t.code,{children:`flex_column`}),`. Without setting the minimum and maximum height, the Table takes as much space as it needs to display all rows.`]}),`
`,(0,h.jsx)(r,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`minimum-and-maximum-height`,children:`Minimum and maximum height`}),`
`,(0,h.jsxs)(t.p,{children:[`In the demo below, the Table is inside a `,(0,h.jsx)(t.code,{children:`flex`}),` container with `,(0,h.jsx)(t.code,{children:`flex_column`}),` and `,(0,h.jsx)(t.code,{children:`min-height: 200px`}),` and a `,(0,h.jsx)(t.code,{children:`max-height: 400px`}),` and adapts its height when the number of rows changes.`]}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`predefined-dimensions`,children:`Predefined dimensions`}),`
`,(0,h.jsxs)(t.p,{children:[`You can also set predefined dimensions on the parent container. In the demo below, the Table is inside a container with a fixed height of `,(0,h.jsx)(t.code,{children:`300px`}),`.`]}),`
`,(0,h.jsx)(r,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`percentage-dimensions`,children:`Percentage dimensions`}),`
`,(0,h.jsx)(t.p,{children:`When using percentages (%) for height or width, make sure that the Table's parent container has intrinsic dimensions. Browsers adjust the element based on a percentage of its parent's size.
If the parent has no size, the percentage will be zero.`})]})}function m(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=i(),o(),t(),s(),f()}))();export{m as default};