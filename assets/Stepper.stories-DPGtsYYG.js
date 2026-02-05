import{j as e}from"./iframe-CYyT-rNd.js";import{S as t}from"./Stepper-Z_D9J8BD.js";import{c as n}from"./classNames-BmP9dLUE.js";const p={title:"Components/Stepper",component:t.Container},i=e.jsx("div",{className:n("font-label-s","text-default","max-w-xs"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),a={render:({orientation:o,...s})=>e.jsx("div",{className:n("flex","flex-row","border-box"),style:{inlineSize:o==="vertical"?"fit-content":"600px",blockSize:o==="horizontal"?"fit-content":"300px"},children:e.jsxs(t.Container,{...s,orientation:o,children:[e.jsx(t.Step,{text:"First",onClick:()=>{},children:"foo"}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),parameters:{chromatic:{disableSnapshot:!0}},args:{orientation:"horizontal",currentStepIndex:1,currentStepError:!1},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},currentStepIndex:{control:{type:"number"}},currentStepError:{control:{type:"boolean"}}}};function r(){return e.jsxs("div",{className:n("flex","flex-col","border-box","p-xl","gap-xxl"),children:[e.jsx("h2",{className:n("font-heading-m","text-default"),children:"Horizontal stretch"}),e.jsx("div",{className:n("flex","flex-row","border-box"),style:{inlineSize:"600px",blockSize:"fit-content"},children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"horizontal",children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third",state:"progress"}),e.jsx(t.Step,{text:"Fourth"}),e.jsx(t.Step,{text:"Last"})]})}),e.jsx("h2",{className:n("font-heading-m","text-default"),children:"Horizontal fit"}),e.jsx("div",{className:n("flex","flex-row","border-box","w-fit","h-fit"),children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"horizontal",currentStepError:!0,children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),e.jsx("h2",{className:n("font-heading-m","text-default"),children:"Horizontal overflow"}),e.jsx("div",{className:n("flex","flex-row","border-box","h-fit"),style:{inlineSize:"300px"},children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"horizontal",currentStepError:!0,children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),e.jsx("h2",{className:n("font-heading-m","text-default"),children:"Horizontal step interactive states"}),e.jsxs("div",{className:n("flex","flex-col","border-box","h-fit"),style:{inlineSize:"800px"},children:[e.jsxs(t.Container,{orientation:"horizontal",children:[e.jsx(t.Step,{semantic:"active",text:"Active State",onClick:()=>{}}),e.jsx(t.Step,{semantic:"active",text:"Active State Hover","data-testid":"hover",onClick:()=>{}}),e.jsx(t.Step,{semantic:"active",text:"Active State Active","data-testid":"active",onClick:()=>{}}),e.jsx(t.Step,{semantic:"active",text:"Active State Focused","data-testid":"focus",onClick:()=>{}})]}),e.jsxs(t.Container,{orientation:"horizontal",children:[e.jsx(t.Step,{semantic:"completed",text:"Completed State",onClick:()=>{}}),e.jsx(t.Step,{semantic:"completed",text:"Completed State Hover","data-testid":"hover",onClick:()=>{}}),e.jsx(t.Step,{semantic:"completed",text:"Completed state Active","data-testid":"active",onClick:()=>{}}),e.jsx(t.Step,{semantic:"completed",text:"Completed State Focused","data-testid":"focus",onClick:()=>{}})]}),e.jsxs(t.Container,{orientation:"horizontal",children:[e.jsx(t.Step,{semantic:"error",text:"Error State",onClick:()=>{}}),e.jsx(t.Step,{semantic:"error",text:"Error State Hover","data-testid":"hover",onClick:()=>{}}),e.jsx(t.Step,{semantic:"error",text:"Error State Active","data-testid":"active",onClick:()=>{}}),e.jsx(t.Step,{semantic:"error",text:"Error State Focused","data-testid":"focus",onClick:()=>{}})]}),e.jsxs(t.Container,{orientation:"horizontal",children:[e.jsx(t.Step,{semantic:"inactive",text:"Inactive State",onClick:()=>{}}),e.jsx(t.Step,{semantic:"inactive",text:"Inactive State Hover","data-testid":"hover",onClick:()=>{}}),e.jsx(t.Step,{semantic:"inactive",text:"Inactive State Active","data-testid":"active",onClick:()=>{}}),e.jsx(t.Step,{semantic:"inactive",text:"Inactive State Focused","data-testid":"focus",onClick:()=>{}})]}),e.jsx(t.Container,{orientation:"horizontal",children:e.jsx(t.Step,{text:"progress",state:"progress"})})]}),e.jsx("h2",{className:n("font-heading-m","text-default"),children:"Vertical"}),e.jsxs("div",{className:n("flex","flex-row","border-box","gap-xxl"),children:[e.jsxs(t.Container,{currentStepIndex:1,orientation:"vertical",children:[e.jsx(t.Step,{text:"First",onClick:()=>{},children:i}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last",state:"progress",children:i})]}),e.jsxs(t.Container,{orientation:"vertical",currentStepIndex:1,currentStepError:!0,children:[e.jsx(t.Step,{text:"First",onClick:()=>{},children:i}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last",children:i})]}),e.jsxs(t.Container,{orientation:"vertical",stateLess:!0,children:[e.jsx(t.Step,{number:"1",semantic:"completed",text:"stateLess container",onClick:()=>{},children:i}),e.jsx(t.Step,{number:"2",text:"Second",semantic:"active"}),e.jsx(t.Step,{number:"3",text:"Third",semantic:"error"}),e.jsx(t.Step,{number:"4",text:"Last no children",semantic:"inactive",isLast:!0})]})]})]})}r.parameters={pseudo:{hover:'[data-testid="hover"] ',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`function VisualTest() {
  return <div className={classNames("flex", "flex-col", "border-box", "p-xl", "gap-xxl")}>
      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal stretch</h2>

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

      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal fit</h2>
      <div className={classNames("flex", "flex-row", "border-box", "w-fit", "h-fit")}>
        <Stepper.Container currentStepIndex={1} orientation="horizontal" currentStepError>
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal overflow</h2>
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
      <h2 className={classNames("font-heading-m", "text-default")}>Horizontal step interactive states</h2>
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
}`,...r.parameters?.docs?.source}}};const c=["Playground","VisualTest"],d=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,VisualTest:r,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{a as P,d as S};
