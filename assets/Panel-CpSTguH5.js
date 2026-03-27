import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-Lc6HZYGU.js";import{Fn as n,i as r,l as i,n as a,s as o}from"./iframe-RiXBydPV.js";import{t as s}from"./mdx-react-shim-Cw1WyOhr.js";import{Playground as c,n as l,t as u}from"./Panel.stories-BA0K0d7k.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Panel`,of:u}),`
`,(0,p.jsx)(n.h1,{id:`panel`,children:`Panel`}),`
`,(0,p.jsx)(n.p,{children:`The Panel is a container used to group content or controls in a consistent manner.
Panels can display various types of information, such as forms, media, lists, or interactive components.
Panels are used to divide the page into distinct sections, often serving as containers for related elements.
Panels are attached to an edge of a parent container or viewport.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Panel } from "@qlik/sprout-react";

// example with Overlay: true | "s" | "m" | "l" | "xl" | "xxl" | "2xl" | "3xl" | "4xl";
<div className={classNames("flex", "flex_row", "border_box")}>
  <Panel.Container overlay="l">
    <div className={classNames("flex", "flex_row", "border_box")}>Content that will be under the panels if overlay value match the size</div>
    <Panel.Left resizable>
      My panel as left and resizable
    </Panel.Left>
  </Panel.Container>
</div>

// example without overlay
<Panel.Container>
    <Panel.Left>
    My panel as left
    </Panel.Left>
    <div className={classNames("flex", "flex_row", "border_box")}>Content within the space left are inside the Container</div>
</Panel.Container>
`})}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`Panel.Container`}),` `,(0,p.jsx)(n.code,{children:`overlay`}),` props will move content into the grid.`]}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`Panel.Container`}),` `,(0,p.jsx)(n.code,{children:`children`}),` accept only one `,(0,p.jsx)(n.code,{children:`Panel.Left|Right|Top|Bottom`}),` as children. Any overflow is hidden.
The Panel is considered as a region and it is nice to had an `,(0,p.jsx)(n.code,{children:`aria-label`}),` to describe that region.`]}),`
`,(0,p.jsxs)(n.p,{children:[`All Panel support a `,(0,p.jsx)(n.code,{children:`resizable`}),` property that control the size of the panel along it's axis.
`,(0,p.jsx)(n.code,{children:`onResize`}),` is provided if you want to make it persistent.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),s(),i(),l()}))();export{f as default};