import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-BRSAI4nO.js";import{n as r}from"./lib-EjdzwnHJ.js";import"./lib-yrlbDAAk.js";import"./entity-D-NrsQFW.js";import{FlexParentContainer as i,FlexParentContainerBoundaries as a,LayoutAuto as o,PredefinedDimensions as s}from"./ListTable.stories-DM4Od6NF.js";import"./DataTable.stories-Co5wivJK.js";var c=e();function l(e){let l={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Table/Docs/Layout`}),`
`,(0,c.jsx)(l.h1,{id:`table-layout`,children:`Table layout`}),`
`,(0,c.jsx)(l.p,{children:`By default, the Table fills the space of its parent container, so that container must have intrinsic dimensions. In other words, if the container has no child elements, then it still must have non-zero dimensions.`}),`
`,(0,c.jsx)(t,{of:o}),`
`,(0,c.jsx)(l.h2,{id:`flex-parent-container`,children:`Flex parent container`}),`
`,(0,c.jsxs)(l.p,{children:[`The Table can be rendered inside a `,(0,c.jsx)(l.code,{children:`flex`}),` container with `,(0,c.jsx)(l.code,{children:`flex_column`}),`. Without setting the minimum and maximum height, the Table takes as much space as it needs to display all rows.`]}),`
`,(0,c.jsx)(t,{of:i}),`
`,(0,c.jsx)(l.h2,{id:`minimum-and-maximum-height`,children:`Minimum and maximum height`}),`
`,(0,c.jsxs)(l.p,{children:[`In the demo below, the Table is inside a `,(0,c.jsx)(l.code,{children:`flex`}),` container with `,(0,c.jsx)(l.code,{children:`flex_column`}),` and `,(0,c.jsx)(l.code,{children:`min-height: 200px`}),` and a `,(0,c.jsx)(l.code,{children:`max-height: 400px`}),` and adapts its height when the number of rows changes.`]}),`
`,(0,c.jsx)(t,{of:a}),`
`,(0,c.jsx)(l.h2,{id:`predefined-dimensions`,children:`Predefined dimensions`}),`
`,(0,c.jsxs)(l.p,{children:[`You can also set predefined dimensions on the parent container. In the demo below, the Table is inside a container with a fixed height of `,(0,c.jsx)(l.code,{children:`300px`}),`.`]}),`
`,(0,c.jsx)(t,{of:s}),`
`,(0,c.jsx)(l.h2,{id:`percentage-dimensions`,children:`Percentage dimensions`}),`
`,(0,c.jsx)(l.p,{children:`When using percentages (%) for height or width, make sure that the Table's parent container has intrinsic dimensions. Browsers adjust the element based on a percentage of its parent's size.
If the parent has no size, the percentage will be zero.`})]})}function u(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};