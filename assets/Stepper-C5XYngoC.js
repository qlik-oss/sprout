import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{i as n,l as r,n as i,p as a,s as o}from"./iframe-UwarwtgL.js";import{t as s}from"./mdx-react-shim-DbLuWb1F.js";import{Playground as c,StepPlayground as l,n as u,t as d}from"./Stepper.stories-Br6h-Gl0.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Components/Stepper`,of:d}),`
`,(0,m.jsx)(t.h1,{id:`stepper`,children:`Stepper`}),`
`,(0,m.jsx)(t.p,{children:`Stepper guides users through ordered steps in a process, such as setup flows and multi-step forms.`}),`
`,(0,m.jsx)(t.h2,{id:`table-of-contents`,children:`Table of Contents`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#usage`,children:`Usage`})}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.a,{href:`#properties`,children:`Properties`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#steppercontainer`,children:`Stepper.Container`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#stepperstep`,children:`Stepper.Step`})}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#state-ownership`,children:`State ownership`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`#accessibility`,children:`Accessibility`})}),`
`]}),`
`,(0,m.jsx)(t.hr,{}),`
`,(0,m.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Stepper } from "@qlik/sprout-react";

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
`,(0,m.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,m.jsx)(t.h3,{id:`steppercontainer`,children:`Stepper.Container`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(t.h3,{id:`stepperstep`,children:`Stepper.Step`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`state-ownership`,children:`State ownership`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`When `,(0,m.jsx)(t.code,{children:`stateLess`}),` is not enabled, `,(0,m.jsx)(t.code,{children:`Stepper.Container`}),` computes `,(0,m.jsx)(t.code,{children:`number`}),`, `,(0,m.jsx)(t.code,{children:`semantic`}),`, and `,(0,m.jsx)(t.code,{children:`isLast`}),` for each `,(0,m.jsx)(t.code,{children:`Stepper.Step`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[`When `,(0,m.jsx)(t.code,{children:`stateLess`}),` is enabled, `,(0,m.jsx)(t.code,{children:`Stepper.Step`}),` values are used as provided for full manual control.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(t.p,{children:`HTML Structure`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Note: aria-orientation can't be used on a list item so we have used a data attribute for that.`}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Stepper.Container`}),` uses the HTML tag OL to give a semantic representation of an ordererd list of steps.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Stepper.Step`}),` uses the HTML tag LI to represent each step in the list. It uses `,(0,m.jsx)(t.code,{children:`aria-current=false|step`}),` attribute.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};