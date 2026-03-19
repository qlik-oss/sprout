import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-DTk7xy32.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./Panel.stories-Bu8l6PoK.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Panel`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`panel`,children:`Panel`}),`
`,(0,s.jsx)(c.p,{children:`The Panel is a container used to group content or controls in a consistent manner.
Panels can display various types of information, such as forms, media, lists, or interactive components.
Panels are used to divide the page into distinct sections, often serving as containers for related elements.
Panels are attached to an edge of a parent container or viewport.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Panel } from "@qlik/sprout-react";

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
`,(0,s.jsx)(n,{of:a}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`api`,children:`API`}),`
`,(0,s.jsxs)(c.p,{children:[`The `,(0,s.jsx)(c.code,{children:`Panel.Container`}),` `,(0,s.jsx)(c.code,{children:`overlay`}),` props will move content into the grid.`]}),`
`,(0,s.jsxs)(c.p,{children:[`The `,(0,s.jsx)(c.code,{children:`Panel.Container`}),` `,(0,s.jsx)(c.code,{children:`children`}),` accept only one `,(0,s.jsx)(c.code,{children:`Panel.Left|Right|Top|Bottom`}),` as children. Any overflow is hidden.
The Panel is considered as a region and it is nice to had an `,(0,s.jsx)(c.code,{children:`aria-label`}),` to describe that region.`]}),`
`,(0,s.jsxs)(c.p,{children:[`All Panel support a `,(0,s.jsx)(c.code,{children:`resizable`}),` property that control the size of the panel along it's axis.
`,(0,s.jsx)(c.code,{children:`onResize`}),` is provided if you want to make it persistent.`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};