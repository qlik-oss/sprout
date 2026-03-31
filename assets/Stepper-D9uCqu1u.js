import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-jHDfyI4s.js";import{Ln as n,i as r,l as i,n as a,s as o}from"./iframe-B0xl5hqz.js";import{t as s}from"./mdx-react-shim-C5WuC5zb.js";import{Playground as c,StepPlayground as l,n as u,t as d}from"./Stepper.stories-LSrOpfWh.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/Stepper`,of:d}),`
`,(0,m.jsx)(n.h1,{id:`stepper`,children:`Stepper`}),`
`,(0,m.jsx)(n.p,{children:`Stepper guides users through ordered steps in a process, such as setup flows and multi-step forms.`}),`
`,(0,m.jsx)(n.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:`#usage`,children:`Usage`})}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.a,{href:`#properties`,children:`Properties`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:`#steppercontainer`,children:`Stepper.Container`})}),`
`,(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:`#stepperstep`,children:`Stepper.Step`})}),`
`]}),`
`]}),`
`,(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:`#state-ownership`,children:`State ownership`})}),`
`,(0,m.jsx)(n.li,{children:(0,m.jsx)(n.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(n.hr,{}),`
`,(0,m.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Stepper } from "@qlik/sprout-react";

// Step state is computed by the container.
<Stepper.Container
  orientation="horizontal"
  currentStepIndex={1}
  currentStepError={false}
>
  <Stepper.Step text="Completed" onClick={() => {}} />
  <Stepper.Step text="Active" />
  <Stepper.Step text="Inactive" />
  <Stepper.Step text="Last" />
</Stepper.Container>

// ---------- OR ----------

// Full manual control of each step when stateLess is enabled.
<Stepper.Container orientation="vertical" stateLess>
  <Stepper.Step number="1" semantic="completed" text="Completed" />
  <Stepper.Step number="2" semantic="active" text="Active" />
  <Stepper.Step number="3" semantic="error" text="Error" />
  <Stepper.Step number="4" semantic="inactive" text="Inactive" isLast />
</Stepper.Container>

`})}),`
`,(0,m.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,m.jsx)(n.h3,{id:`steppercontainer`,children:`Stepper.Container`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(n.h3,{id:`stepperstep`,children:`Stepper.Step`}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`state-ownership`,children:`State ownership`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`When `,(0,m.jsx)(n.code,{children:`stateLess`}),` is not enabled, `,(0,m.jsx)(n.code,{children:`Stepper.Container`}),` computes `,(0,m.jsx)(n.code,{children:`number`}),`, `,(0,m.jsx)(n.code,{children:`semantic`}),`, and `,(0,m.jsx)(n.code,{children:`isLast`}),` for each `,(0,m.jsx)(n.code,{children:`Stepper.Step`}),`.`]}),`
`,(0,m.jsxs)(n.li,{children:[`When `,(0,m.jsx)(n.code,{children:`stateLess`}),` is enabled, `,(0,m.jsx)(n.code,{children:`Stepper.Step`}),` values are used as provided for full manual control.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(n.p,{children:`HTML Structure`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Note: aria-orientation can't be used on a list item so we have used a data attribute for that.`}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Stepper.Container`}),` uses the HTML tag OL to give a semantic representation of an ordererd list of steps.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.code,{children:`Stepper.Step`}),` uses the HTML tag LI to represent each step in the list. It uses `,(0,m.jsx)(n.code,{children:`aria-current=false|step`}),` attribute.`]}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),s(),i(),u()}))();export{p as default};