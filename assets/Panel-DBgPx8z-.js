import{j as e,M as r,a as s,C as l}from"./iframe-DO7qjpir.js";import{useMDXComponents as i}from"./index-DM3CO3rl.js";import{S as c,P as o}from"./Panel.stories-C3L5X_9O.js";import"./preload-helper-PPVm8Dsz.js";import"./classNames-C2xvgHQf.js";import"./sprout-nCaIAc8k.js";import"./useI18n-CbD-mhn-.js";import"./icons-B7D59aOJ.js";import"./Button-DWGkri9_.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./ProgressCircular-CpbimHqB.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Panel",of:c}),`
`,e.jsx(n.h1,{id:"panel",children:"Panel"}),`
`,e.jsx(n.p,{children:`The Panel is a container used to group content or controls in a consistent manner.
Panels can display various types of information, such as forms, media, lists, or interactive components.
Panels are used to divide the page into distinct sections, often serving as containers for related elements.
Panels are attached to an edge of a parent container or viewport.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Panel } from "@qlik/sprout-react";

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
`,e.jsx(s,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Panel.Container"})," ",e.jsx(n.code,{children:"overlay"})," props will move content into the grid."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Panel.Container"})," ",e.jsx(n.code,{children:"children"})," accept only one ",e.jsx(n.code,{children:"Panel.Left|Right|Top|Bottom"}),` as children. Any overflow is hidden.
The Panel is considered as a region and it is nice to had an `,e.jsx(n.code,{children:"aria-label"})," to describe that region."]}),`
`,e.jsxs(n.p,{children:["All Panel support a ",e.jsx(n.code,{children:"resizable"}),` property that control the size of the panel along it's axis.
`,e.jsx(n.code,{children:"onResize"})," is provided if you want to make it persistent."]})]})}function _(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{_ as default};
