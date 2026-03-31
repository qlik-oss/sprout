import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,l as r,n as i,s as a}from"./iframe-B0xl5hqz.js";import{t as o}from"./mdx-react-shim-C5WuC5zb.js";import{NoRows as s,NoRowsOverlay as c,loading as l,t as u}from"./DataTable.stories-BafCGHBW.js";import{t as d}from"./ListTable.stories-yabvCW8q.js";function f(e){let n={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{title:`table/Overlays`}),`
`,(0,m.jsx)(n.h2,{id:`loading`,children:`loading`}),`
`,(0,m.jsxs)(n.p,{children:[`If the data are fecthed but you have the column definition you can display the Table using the `,(0,m.jsx)(n.code,{children:`loading`}),` property.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsxs)(n.p,{children:[`Loading leverage the `,(0,m.jsx)(n.code,{children:`renderCellLoading`}),` if defined in the column definition.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`{
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
`,(0,m.jsx)(n.h2,{id:`norowsoverlay`,children:`noRowsOverlay`}),`
`,(0,m.jsxs)(n.p,{children:[`If no rows are passed you will have a default message. You can customize this overlay by using the property `,(0,m.jsx)(n.code,{children:`noRowsOverlay`})]}),`
`,(0,m.jsx)(i,{of:s,sourceState:`shown`}),`
`,(0,m.jsx)(i,{of:c,sourceState:`shown`})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),r(),u(),d()}))();export{p as default};