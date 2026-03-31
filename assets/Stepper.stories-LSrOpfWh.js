import{n as e,r as t}from"./chunk-BneVvdWh.js";import{In as n,Ln as r,N as i,v as a}from"./iframe-B0xl5hqz.js";var o,s,c=e((()=>{o={children:{control:!1,description:"The `Stepper.Step` elements rendered inside the container.",table:{type:{summary:`ReactNode`}}},orientation:{control:{type:`select`},options:[`horizontal`,`vertical`],description:`Defines the layout direction of the stepper.`,table:{type:{summary:`horizontal | vertical`}}},currentStepIndex:{control:{type:`number`},description:`Zero-based index of the current active step used to compute step semantics.`,table:{type:{summary:`number`}}},currentStepError:{control:{type:`boolean`},description:"Marks the current step as error when `currentStepIndex` points to it.",table:{type:{summary:`boolean`}}},stateLess:{control:{type:`boolean`},description:`Disables container-managed semantics so each step controls its own state.`,table:{type:{summary:`boolean`}}}},s={text:{control:{type:`text`},description:`The label displayed for the step.`,table:{type:{summary:`string`}}},semantic:{control:{type:`select`},options:[`completed`,`active`,`inactive`,`error`],description:"Visual status of the step. Controlled by `Stepper.Container` unless `stateLess` is true.",table:{defaultValue:{summary:`inactive`},type:{summary:`completed | active | inactive | error`}}},state:{control:{type:`select`},options:[`default`,`progress`],description:`Display mode for the step indicator.`,table:{defaultValue:{summary:`default`},type:{summary:`default | progress`}}},number:{control:{type:`text`},description:"Step number text. Usually controlled by `Stepper.Container` when `stateLess` is false.",table:{type:{summary:`string`}}},children:{control:!1,description:`Additional content rendered below the step label.`,table:{type:{summary:`ReactNode`}}},isLast:{control:{type:`boolean`},description:`Indicates if the step is the final item in the sequence. Usually controlled by the container.`,table:{type:{summary:`boolean`}}},onClick:{control:!1,description:`Click handler. When provided, the step becomes keyboard focusable and button-like.`,table:{type:{summary:`MouseEventHandler<HTMLDivElement>`}}}}})),l=t({Playground:()=>m,StepPlayground:()=>h,VisualTest:()=>u,__namedExportsOrder:()=>g,default:()=>f});function u(){return(0,d.jsxs)(`div`,{className:n(`flex`,`flex-col`,`border-box`,`p-xl`,`gap-xxl`),children:[(0,d.jsx)(`h2`,{className:n(`font-heading-m`,`text-default`),children:`Horizontal stretch`}),(0,d.jsx)(`div`,{className:n(`flex`,`flex-row`,`border-box`),style:{inlineSize:`600px`,blockSize:`fit-content`},children:(0,d.jsxs)(i.Container,{currentStepIndex:1,orientation:`horizontal`,children:[(0,d.jsx)(i.Step,{text:`First`,onClick:()=>{}}),(0,d.jsx)(i.Step,{text:`Second`}),(0,d.jsx)(i.Step,{text:`Third`,state:`progress`}),(0,d.jsx)(i.Step,{text:`Fourth`}),(0,d.jsx)(i.Step,{text:`Last`})]})}),(0,d.jsx)(`h2`,{className:n(`font-heading-m`,`text-default`),children:`Horizontal fit`}),(0,d.jsx)(`div`,{className:n(`flex`,`flex-row`,`border-box`,`w-fit`,`h-fit`),children:(0,d.jsxs)(i.Container,{currentStepIndex:1,orientation:`horizontal`,currentStepError:!0,children:[(0,d.jsx)(i.Step,{text:`First`,onClick:()=>{}}),(0,d.jsx)(i.Step,{text:`Second`}),(0,d.jsx)(i.Step,{text:`Third`}),(0,d.jsx)(i.Step,{text:`Last`})]})}),(0,d.jsx)(`h2`,{className:n(`font-heading-m`,`text-default`),children:`Horizontal overflow`}),(0,d.jsx)(`div`,{className:n(`flex`,`flex-row`,`border-box`,`h-fit`),style:{inlineSize:`300px`},children:(0,d.jsxs)(i.Container,{currentStepIndex:1,orientation:`horizontal`,currentStepError:!0,children:[(0,d.jsx)(i.Step,{text:`First`,onClick:()=>{}}),(0,d.jsx)(i.Step,{text:`Second`}),(0,d.jsx)(i.Step,{text:`Third`}),(0,d.jsx)(i.Step,{text:`Last`})]})}),(0,d.jsx)(`h2`,{className:n(`font-heading-m`,`text-default`),children:`Horizontal step interactive states`}),(0,d.jsxs)(`div`,{className:n(`flex`,`flex-col`,`border-box`,`h-fit`),style:{inlineSize:`800px`},children:[(0,d.jsxs)(i.Container,{orientation:`horizontal`,children:[(0,d.jsx)(i.Step,{semantic:`active`,text:`Active State`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`active`,text:`Active State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`active`,text:`Active State Active`,"data-testid":`active`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`active`,text:`Active State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,d.jsxs)(i.Container,{orientation:`horizontal`,children:[(0,d.jsx)(i.Step,{semantic:`completed`,text:`Completed State`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`completed`,text:`Completed State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`completed`,text:`Completed state Active`,"data-testid":`active`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`completed`,text:`Completed State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,d.jsxs)(i.Container,{orientation:`horizontal`,children:[(0,d.jsx)(i.Step,{semantic:`error`,text:`Error State`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`error`,text:`Error State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`error`,text:`Error State Active`,"data-testid":`active`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`error`,text:`Error State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,d.jsxs)(i.Container,{orientation:`horizontal`,children:[(0,d.jsx)(i.Step,{semantic:`inactive`,text:`Inactive State`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`inactive`,text:`Inactive State Hover`,"data-testid":`hover`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`inactive`,text:`Inactive State Active`,"data-testid":`active`,onClick:()=>{}}),(0,d.jsx)(i.Step,{semantic:`inactive`,text:`Inactive State Focused`,"data-testid":`focus`,onClick:()=>{}})]}),(0,d.jsx)(i.Container,{orientation:`horizontal`,children:(0,d.jsx)(i.Step,{text:`progress`,state:`progress`})})]}),(0,d.jsx)(`h2`,{className:n(`font-heading-m`,`text-default`),children:`Vertical`}),(0,d.jsxs)(`div`,{className:n(`flex`,`flex-row`,`border-box`,`gap-xxl`),children:[(0,d.jsxs)(i.Container,{currentStepIndex:1,orientation:`vertical`,children:[(0,d.jsx)(i.Step,{text:`First`,onClick:()=>{},children:p}),(0,d.jsx)(i.Step,{text:`Second`}),(0,d.jsx)(i.Step,{text:`Third`}),(0,d.jsx)(i.Step,{text:`Last`,state:`progress`,children:p})]}),(0,d.jsxs)(i.Container,{orientation:`vertical`,currentStepIndex:1,currentStepError:!0,children:[(0,d.jsx)(i.Step,{text:`First`,onClick:()=>{},children:p}),(0,d.jsx)(i.Step,{text:`Second`}),(0,d.jsx)(i.Step,{text:`Third`}),(0,d.jsx)(i.Step,{text:`Last`,children:p})]}),(0,d.jsxs)(i.Container,{orientation:`vertical`,stateLess:!0,children:[(0,d.jsx)(i.Step,{number:`1`,semantic:`completed`,text:`stateLess container`,onClick:()=>{},children:p}),(0,d.jsx)(i.Step,{number:`2`,text:`Second`,semantic:`active`}),(0,d.jsx)(i.Step,{number:`3`,text:`Third`,semantic:`error`}),(0,d.jsx)(i.Step,{number:`4`,text:`Last no children`,semantic:`inactive`,isLast:!0})]})]})]})}var d,f,p,m,h,g,_=e((()=>{a(),c(),d=r(),f={title:`Components/Stepper`,component:i.Container},p=(0,d.jsx)(`div`,{className:n(`font-label-s`,`text-default`,`max-w-xs`),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}),m={render:({orientation:e,...t})=>(0,d.jsx)(`div`,{className:n(`flex`,`flex-row`,`border-box`),style:{inlineSize:e===`vertical`?`fit-content`:`600px`,blockSize:e===`horizontal`?`fit-content`:`300px`},children:(0,d.jsxs)(i.Container,{...t,orientation:e,children:[(0,d.jsx)(i.Step,{text:`First`,onClick:()=>{},children:`foo`}),(0,d.jsx)(i.Step,{text:`Second`}),(0,d.jsx)(i.Step,{text:`Third`}),(0,d.jsx)(i.Step,{text:`Last`})]})}),parameters:{chromatic:{disableSnapshot:!0}},args:{orientation:`horizontal`,currentStepIndex:1,currentStepError:!1,stateLess:!1},argTypes:o},h={render:e=>(0,d.jsx)(`div`,{className:n(`flex`,`flex-row`,`border-box`,`w-fit`),children:(0,d.jsx)(i.Container,{orientation:`vertical`,stateLess:!0,children:(0,d.jsx)(i.Step,{...e})})}),parameters:{chromatic:{disableSnapshot:!0}},args:{text:`Step label`,semantic:`inactive`,state:`default`,number:`1`,isLast:!0},argTypes:s},u.parameters={pseudo:{hover:`[data-testid="hover"] `,active:`[data-testid="active"]`,focusVisible:`[data-testid="focus"]`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    currentStepError: false,
    stateLess: false
  },
  argTypes: StepperContainerArgTypes
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className={classNames("flex", "flex-row", "border-box", "w-fit")}>
      <Stepper.Container orientation="vertical" stateLess>
        <Stepper.Step {...args} />
      </Stepper.Container>
    </div>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    text: "Step label",
    semantic: "inactive",
    state: "default",
    number: "1",
    isLast: true
  },
  argTypes: StepperStepArgTypes
}`,...h.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`function VisualTest() {
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
}`,...u.parameters?.docs?.source}}},g=[`Playground`,`StepPlayground`,`VisualTest`]}));_();export{m as Playground,h as StepPlayground,u as VisualTest,g as __namedExportsOrder,f as default,_ as n,l as t};