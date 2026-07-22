import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,n as r,p as i,s as a}from"./iframe-UwarwtgL.js";import{t as o}from"./mdx-react-shim-DbLuWb1F.js";import{NoRows as s,NoRowsOverlay as c,loading as l,t as u}from"./DataTable.stories-BpuCg-Av.js";import{t as d}from"./ListTable.stories-DJGfXQAV.js";function f(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{title:`table/Overlays`}),`
`,(0,m.jsx)(t.h2,{id:`loading`,children:`loading`}),`
`,(0,m.jsxs)(t.p,{children:[`If the data are fecthed but you have the column definition you can display the Table using the `,(0,m.jsx)(t.code,{children:`loading`}),` property.`]}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsxs)(t.p,{children:[`Loading leverage the `,(0,m.jsx)(t.code,{children:`renderCellLoading`}),` if defined in the column definition.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`{
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
`,(0,m.jsx)(t.h2,{id:`norowsoverlay`,children:`noRowsOverlay`}),`
`,(0,m.jsxs)(t.p,{children:[`If no rows are passed you will have a default message. You can customize this overlay by using the property `,(0,m.jsx)(t.code,{children:`noRowsOverlay`})]}),`
`,(0,m.jsx)(r,{of:s,sourceState:`shown`}),`
`,(0,m.jsx)(r,{of:c,sourceState:`shown`})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),o(),n(),u(),d()}))();export{p as default};