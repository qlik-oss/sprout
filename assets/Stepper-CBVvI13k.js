import{j as e,M as s,a as p,C as a}from"./iframe-D-N3fK2j.js";import{useMDXComponents as o}from"./index-BvagnWFp.js";import{S as c,P as r}from"./Stepper.stories-BxQsLKQS.js";import"./preload-helper-PPVm8Dsz.js";import"./Stepper-DMZn5LUT.js";import"./SeverityIcon-DDEIToER.js";import"./sprout-tokens-C4H4srAS.js";import"./Error-CZbJtLWx.js";import"./Info-DKfyJpi1.js";import"./Warning-Dy5sqdbk.js";import"./classNames-CrSIhzis.js";import"./sprout-UDo5dA_z.js";import"./ProgressCircular-CdUDfayh.js";import"./useI18n-ClHBar3-.js";import"./renderOrClone-25h2pNOO.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Stepper",of:c}),`
`,e.jsx(t.h1,{id:"stepper",children:"Stepper"}),`
`,e.jsx(t.p,{children:"The stepper component is a navigation element that guides users through a multi-step process. It is typically used in forms, wizards, or other processes that require sequential steps."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Stepper } from "@qlik/sprout-react";

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
`,e.jsx(p,{of:r,sourceState:"shown"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML Structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Note: aria-orientation can't be used on a list item so we have used a data attribute for that."}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Stepper.Container"})," uses the HTML tag OL to give a semantic representation of an ordererd list of steps."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Stepper.Step"})," uses the HTML tag LI to represent each step in the list. It uses ",e.jsx(t.code,{children:"aria-current=false|step"})," attribute."]}),`
`]})]})}function I(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{I as default};
