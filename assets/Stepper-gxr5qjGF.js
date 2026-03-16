import"./components-DxKiYndf.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{i as t,n,s as r}from"./iframe-BRSAI4nO.js";import{n as i}from"./lib-EjdzwnHJ.js";import{Playground as a,t as o}from"./Stepper.stories-fBbUEqfZ.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Components/Stepper`,of:o}),`
`,(0,s.jsx)(c.h1,{id:`stepper`,children:`Stepper`}),`
`,(0,s.jsx)(c.p,{children:`The stepper component is a navigation element that guides users through a multi-step process. It is typically used in forms, wizards, or other processes that require sequential steps.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-jsx`,children:`import { Stepper } from "@qlik/sprout-react";

// Step semantic controlled by the container
<Stepper.Container {...args} currentStepIndex={1} currentStepError={false} orientation={orientation}>
  {/* add onClick to a step will make it interactive */}
  <Stepper.Step text="Completed" onClick={() => {}} />
  <Stepper.Step text="Active" />
  <Stepper.Step text="Inactive" />
  <Stepper.Step text="Inactive" />
</Stepper.Container>


// full control of each step semantic
<Stepper.Container orientation={orientation}>
  {/* add onClick to a step will make it interactive */}
  <Stepper.Step semantic="completed" text="Completed" onClick={() => {}} />
  <Stepper.Step semantic="active" text="Active" />
  <Stepper.Step semantic="error" text="Error" />
  <Stepper.Step semantic="inactive" text="Inactive" />
</Stepper.Container>

`})}),`
`,(0,s.jsx)(n,{of:a,sourceState:`shown`}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,s.jsx)(c.p,{children:`HTML Structure`}),`
`,(0,s.jsxs)(c.ul,{children:[`
`,(0,s.jsx)(c.li,{children:`Note: aria-orientation can't be used on a list item so we have used a data attribute for that.`}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Stepper.Container`}),` uses the HTML tag OL to give a semantic representation of an ordererd list of steps.`]}),`
`,(0,s.jsxs)(c.li,{children:[(0,s.jsx)(c.code,{children:`Stepper.Step`}),` uses the HTML tag LI to represent each step in the list. It uses `,(0,s.jsx)(c.code,{children:`aria-current=false|step`}),` attribute.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};