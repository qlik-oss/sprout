import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,n as l,t as u}from"./Panel.stories-nV7f03uZ.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{title:`Components/Panel`,of:u}),`
`,(0,p.jsx)(t.h1,{id:`panel`,children:`Panel`}),`
`,(0,p.jsx)(t.p,{children:`The Panel is a container used to group content or controls in a consistent manner.
Panels can display various types of information, such as forms, media, lists, or interactive components.
Panels are used to divide the page into distinct sections, often serving as containers for related elements.
Panels are attached to an edge of a parent container or viewport.`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`Panel.Primitive`}),` component extends `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div#attributes`,rel:`nofollow`,children:`HTML div element`}),` attributes, so all standard properties are supported.`]}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Panel } from "@qlik/sprout-react";

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
`,(0,p.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,p.jsx)(t.h3,{id:`panelcontainer`,children:`Panel.Container`}),`
`,(0,p.jsx)(t.p,{children:`Creates a grid layout container that manages panel positioning.`}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`Props:`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`overlay`}),` — Optional. Controls overlay behavior. Pass `,(0,p.jsx)(t.code,{children:`true`}),` for always-overlay, or a size token (`,(0,p.jsx)(t.code,{children:`s`}),`, `,(0,p.jsx)(t.code,{children:`m`}),`, `,(0,p.jsx)(t.code,{children:`l`}),`, `,(0,p.jsx)(t.code,{children:`xl`}),`, `,(0,p.jsx)(t.code,{children:`xxl`}),`, `,(0,p.jsx)(t.code,{children:`3xl`}),`, `,(0,p.jsx)(t.code,{children:`4xl`}),`) for responsive overlay at container breakpoints. When overlay is active, panels float over the main content instead of occupying grid space.`]}),`
`,(0,p.jsx)(t.li,{children:`All standard HTML div attributes are supported.`}),`
`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`Usage:`})}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Panel.Container overlay="l">
  <div>Main content (shown below panels on small screens)</div>
  <Panel.Left>Left panel</Panel.Left>
</Panel.Container>
`})}),`
`,(0,p.jsx)(t.h3,{id:`panelleft-panelright-paneltop-panelbottom`,children:`Panel.Left, Panel.Right, Panel.Top, Panel.Bottom`}),`
`,(0,p.jsxs)(t.p,{children:[`Pre-configured panel placement variants. Each wraps `,(0,p.jsx)(t.a,{href:`#properties`,children:`Panel.Primitive`}),` with a fixed placement.`]}),`
`,(0,p.jsx)(t.p,{children:(0,p.jsx)(t.strong,{children:`Usage:`})}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Panel.Container>
  <Panel.Left resizable maxWidth={300} aria-label="Navigation">
    Navigation content
  </Panel.Left>
  <div>Main content</div>
</Panel.Container>
`})})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),r(),l()}))();export{f as default};