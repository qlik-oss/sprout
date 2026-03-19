import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{n as t,s as n}from"./iframe-DTk7xy32.js";import{n as r}from"./lib-EjdzwnHJ.js";import"./lib-hQoNxkx8.js";import"./entity-C-_jh3pD.js";import"./ListTable.stories-CJHVAjlg.js";import{NoRows as i,NoRowsOverlay as a,loading as o}from"./DataTable.stories-BDXlCjmi.js";var s=e();function c(e){let c={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{title:`Table/Docs/Overlays`}),`
`,(0,s.jsx)(c.h2,{id:`loading`,children:`loading`}),`
`,(0,s.jsxs)(c.p,{children:[`If the data are fecthed but you have the column definition you can display the Table using the `,(0,s.jsx)(c.code,{children:`loading`}),` property.`]}),`
`,(0,s.jsx)(t,{of:o}),`
`,(0,s.jsxs)(c.p,{children:[`Loading leverage the `,(0,s.jsx)(c.code,{children:`renderCellLoading`}),` if defined in the column definition.`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`{
    field: "name",
    headerName: "Name",
    flex: 1,
    renderCellLoading: () => (
      <div className={classNames("flex", "row", "gap_m")}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    ),
  },
`})}),`
`,(0,s.jsx)(c.h2,{id:`norowsoverlay`,children:`noRowsOverlay`}),`
`,(0,s.jsxs)(c.p,{children:[`If no rows are passed you will have a default message. You can customize this overlay by using the property `,(0,s.jsx)(c.code,{children:`noRowsOverlay`})]}),`
`,(0,s.jsx)(t,{of:i,sourceState:`shown`}),`
`,(0,s.jsx)(t,{of:a,sourceState:`shown`})]})}function l(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};