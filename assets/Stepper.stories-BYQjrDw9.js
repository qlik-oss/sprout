import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{t as n}from"./Stepper-BKqzjAaE.js";import{hn as r}from"./iframe-B5xoaqtW.js";var i=e({Playground:()=>c,VisualTest:()=>l,__namedExportsOrder:()=>u,default:()=>o}),a=t(),o={title:`Components/Stepper`,component:n.Container},s=(0,a.jsx)(`div`,{className:r(`font-label-s`,`text-default`,`max-w-xs`),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),c={render:({orientation:e,...t})=>(0,a.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`),style:{inlineSize:e===`vertical`?`fit-content`:`600px`,blockSize:e===`horizontal`?`fit-content`:`300px`},children:(0,a.jsxs)(n.Container,{...t,orientation:e,children:[(0,a.jsx)(n.Step,{text:`First`,onClick:()=>{},children:`foo`}),(0,a.jsx)(n.Step,{text:`Second`}),(0,a.jsx)(n.Step,{text:`Third`}),(0,a.jsx)(n.Step,{text:`Last`})]})}),parameters:{chromatic:{disableSnapshot:!0}},args:{orientation:`horizontal`,currentStepIndex:1,currentStepError:!1},argTypes:{orientation:{control:{type:`select`},options:[`horizontal`,`vertical`]},currentStepIndex:{control:{type:`number`}},currentStepError:{control:{type:`boolean`}}}};function l(){return(0,a.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`,`p-xl`,`gap-xxl`),children:[(0,a.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Horizontal stretch`}),(0,a.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`),style:{inlineSize:`600px`,blockSize:`fit-content`},children:(0,a.jsxs)(n.Container,{currentStepIndex:1,orientation:`horizontal`,children:[(0,a.jsx)(n.Step,{text:`First`,onClick:()=>{}}),(0,a.jsx)(n.Step,{text:`Second`}),(0,a.jsx)(n.Step,{text:`Third`,state:`progress`}),(0,a.jsx)(n.Step,{text:`Fourth`}),(0,a.jsx)(n.Step,{text:`Last`})]})}),(0,a.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Horizontal fit`}),(0,a.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`w-fit`,`h-fit`),children:(0,a.jsxs)(n.Container,{currentStepIndex:1,orientation:`horizontal`,currentStepError:!0,children:[(0,a.jsx)(n.Step,{text:`First`,onClick:()=>{}}),(0,a.jsx)(n.Step,{text:`Second`}),(0,a.jsx)(n.Step,{text:`Third`}),(0,a.jsx)(n.Step,{text:`Last`})]})}),(0,a.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Horizontal overflow`}),(0,a.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`h-fit`),style:{inlineSize:`300px`},children:(0,a.jsxs)(n.Container,{currentStepIndex:1,orientation:`horizontal`,currentStepError:!0,children:[(0,a.jsx)(n.Step,{text:`First`,onClick:()=>{}}),(0,a.jsx)(n.Step,{text:`Second`}),(0,a.jsx)(n.Step,{text:`Third`}),(0,a.jsx)(n.Step,{text:`Last`})]})}),(0,a.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Horizontal step interactive states`}),(0,a.jsxs)(`div`,{className:r(`flex`,`flex-col`,`border-box`,`h-fit`),style:{inlineSize:`800px`},children:[(0,a.jsxs)(n.Container,{orientation:`horizontal`,children:[(0,a.jsx)(n.Step,{semantic:`active`,text:`Active State`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`active`,text:`Active State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`active`,text:`Active State Active`,"data-testid":`active`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`active`,text:`Active State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,a.jsxs)(n.Container,{orientation:`horizontal`,children:[(0,a.jsx)(n.Step,{semantic:`completed`,text:`Completed State`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`completed`,text:`Completed State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`completed`,text:`Completed state Active`,"data-testid":`active`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`completed`,text:`Completed State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,a.jsxs)(n.Container,{orientation:`horizontal`,children:[(0,a.jsx)(n.Step,{semantic:`error`,text:`Error State`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`error`,text:`Error State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`error`,text:`Error State Active`,"data-testid":`active`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`error`,text:`Error State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,a.jsxs)(n.Container,{orientation:`horizontal`,children:[(0,a.jsx)(n.Step,{semantic:`inactive`,text:`Inactive State`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`inactive`,text:`Inactive State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`inactive`,text:`Inactive State Active`,"data-testid":`active`,onClick:()=>{}}),(0,a.jsx)(n.Step,{semantic:`inactive`,text:`Inactive State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,a.jsx)(n.Container,{orientation:`horizontal`,children:(0,a.jsx)(n.Step,{text:`progress`,state:`progress`})})]}),(0,a.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Vertical`}),(0,a.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`gap-xxl`),children:[(0,a.jsxs)(n.Container,{currentStepIndex:1,orientation:`vertical`,children:[(0,a.jsx)(n.Step,{text:`First`,onClick:()=>{},children:s}),(0,a.jsx)(n.Step,{text:`Second`}),(0,a.jsx)(n.Step,{text:`Third`}),(0,a.jsx)(n.Step,{text:`Last`,state:`progress`,children:s})]}),(0,a.jsxs)(n.Container,{orientation:`vertical`,currentStepIndex:1,currentStepError:!0,children:[(0,a.jsx)(n.Step,{text:`First`,onClick:()=>{},children:s}),(0,a.jsx)(n.Step,{text:`Second`}),(0,a.jsx)(n.Step,{text:`Third`}),(0,a.jsx)(n.Step,{text:`Last`,children:s})]}),(0,a.jsxs)(n.Container,{orientation:`vertical`,stateLess:!0,children:[(0,a.jsx)(n.Step,{number:`1`,semantic:`completed`,text:`stateLess container`,onClick:()=>{},children:s}),(0,a.jsx)(n.Step,{number:`2`,text:`Second`,semantic:`active`}),(0,a.jsx)(n.Step,{number:`3`,text:`Third`,semantic:`error`}),(0,a.jsx)(n.Step,{number:`4`,text:`Last no children`,semantic:`inactive`,isLast:!0})]})]})]})}l.parameters={pseudo:{hover:`[data-testid="hover"] `,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    orientation,
    ...args
  }) => <div className={classNames("flex", "flex-row", "border-box")} style={{
    inlineSize: orientation === "vertical" ? "fit-content" : "600px",
    blockSize: orientation === "horizontal" ? "fit-content" : "300px"
  }}>
      <Stepper.Container {...args} orientation={orientation}>
        <Stepper.Step text="First" onClick={() => {}}>
          foo
        </Stepper.Step>
        <Stepper.Step text="Second" />
        <Stepper.Step text="Third" />
        <Stepper.Step text="Last" />
      </Stepper.Container>
    </div>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    orientation: "horizontal",
    currentStepIndex: 1,
    currentStepError: false
  },
  argTypes: {
    orientation: {
      control: {
        type: "select"
      },
      options: ["horizontal", "vertical"]
    },
    currentStepIndex: {
      control: {
        type: "number"
      }
    },
    currentStepError: {
      control: {
        type: "boolean"
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`function VisualTest() {
  return <div className={classNames("flex", "flex-col", "border-box", "p-xl", "gap-xxl")}>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Horizontal stretch
      </h2>

      <div className={classNames("flex", "flex-row", "border-box")} style={{
      inlineSize: "600px",
      blockSize: "fit-content"
    }}>
        <Stepper.Container currentStepIndex={1} orientation="horizontal">
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" state="progress" />
          <Stepper.Step text="Fourth" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>
        Horizontal fit
      </h2>
      <div className={classNames("flex", "flex-row", "border-box", "w-fit", "h-fit")}>
        <Stepper.Container currentStepIndex={1} orientation="horizontal" currentStepError>
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Horizontal overflow
      </h2>
      <div className={classNames("flex", "flex-row", "border-box", "h-fit")} style={{
      inlineSize: "300px"
    }}>
        <Stepper.Container currentStepIndex={1} orientation="horizontal" currentStepError>
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>
        Horizontal step interactive states
      </h2>
      <div className={classNames("flex", "flex-col", "border-box", "h-fit")} style={{
      inlineSize: "800px"
    }}>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="active" text="Active State" onClick={() => {}} />
          <Stepper.Step semantic="active" text="Active State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="active" text="Active State Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="active" text="Active State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="completed" text="Completed State" onClick={() => {}} />
          <Stepper.Step semantic="completed" text="Completed State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="completed" text="Completed state Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="completed" text="Completed State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="error" text="Error State" onClick={() => {}} />
          <Stepper.Step semantic="error" text="Error State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="error" text="Error State Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="error" text="Error State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step semantic="inactive" text="Inactive State" onClick={() => {}} />
          <Stepper.Step semantic="inactive" text="Inactive State Hover" data-testid="hover" onClick={() => {}} />
          <Stepper.Step semantic="inactive" text="Inactive State Active" data-testid="active" onClick={() => {}} />
          <Stepper.Step semantic="inactive" text="Inactive State Focused" data-testid="focus" onClick={() => {}} />
        </Stepper.Container>
        <Stepper.Container orientation="horizontal">
          <Stepper.Step text="progress" state="progress" />
        </Stepper.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Vertical</h2>

      <div className={classNames("flex", "flex-row", "border-box", "gap-xxl")}>
        <Stepper.Container currentStepIndex={1} orientation="vertical">
          <Stepper.Step text="First" onClick={() => {}}>
            {LOREM}
          </Stepper.Step>
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" state="progress">
            {LOREM}
          </Stepper.Step>
        </Stepper.Container>
        <Stepper.Container orientation="vertical" currentStepIndex={1} currentStepError>
          <Stepper.Step text="First" onClick={() => {}}>
            {LOREM}
          </Stepper.Step>
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last">{LOREM}</Stepper.Step>
        </Stepper.Container>
        <Stepper.Container orientation="vertical" stateLess>
          <Stepper.Step number="1" semantic="completed" text="stateLess container" onClick={() => {}}>
            {LOREM}
          </Stepper.Step>
          <Stepper.Step number="2" text="Second" semantic="active" />
          <Stepper.Step number="3" text="Third" semantic="error" />
          <Stepper.Step number="4" text="Last no children" semantic="inactive" isLast />
        </Stepper.Container>
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}};var u=[`Playground`,`VisualTest`];export{c as Playground,l as VisualTest,u as __namedExportsOrder,o as default,i as t};