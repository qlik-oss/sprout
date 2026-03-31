import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,n as i,s as a}from"./iframe-B0xl5hqz.js";import{t as o}from"./mdx-react-shim-C5WuC5zb.js";import{t as s}from"./DataTable.stories-BafCGHBW.js";import{FlexParentContainer as c,FlexParentContainerBoundaries as l,LayoutAuto as u,PredefinedDimensions as d,t as f}from"./ListTable.stories-yabvCW8q.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`table/Layout`}),`
`,(0,h.jsx)(n.h1,{id:`table-layout`,children:`Table layout`}),`
`,(0,h.jsx)(n.p,{children:`By default, the Table fills the space of its parent container, so that container must have intrinsic dimensions. In other words, if the container has no child elements, then it still must have non-zero dimensions.`}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(n.h2,{id:`flex-parent-container`,children:`Flex parent container`}),`
`,(0,h.jsxs)(n.p,{children:[`The Table can be rendered inside a `,(0,h.jsx)(n.code,{children:`flex`}),` container with `,(0,h.jsx)(n.code,{children:`flex_column`}),`. Without setting the minimum and maximum height, the Table takes as much space as it needs to display all rows.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`minimum-and-maximum-height`,children:`Minimum and maximum height`}),`
`,(0,h.jsxs)(n.p,{children:[`In the demo below, the Table is inside a `,(0,h.jsx)(n.code,{children:`flex`}),` container with `,(0,h.jsx)(n.code,{children:`flex_column`}),` and `,(0,h.jsx)(n.code,{children:`min-height: 200px`}),` and a `,(0,h.jsx)(n.code,{children:`max-height: 400px`}),` and adapts its height when the number of rows changes.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`predefined-dimensions`,children:`Predefined dimensions`}),`
`,(0,h.jsxs)(n.p,{children:[`You can also set predefined dimensions on the parent container. In the demo below, the Table is inside a container with a fixed height of `,(0,h.jsx)(n.code,{children:`300px`}),`.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`percentage-dimensions`,children:`Percentage dimensions`}),`
`,(0,h.jsx)(n.p,{children:`When using percentages (%) for height or width, make sure that the Table's parent container has intrinsic dimensions. Browsers adjust the element based on a percentage of its parent's size.
If the parent has no size, the percentage will be zero.`})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),o(),r(),s(),f()}))();export{m as default};