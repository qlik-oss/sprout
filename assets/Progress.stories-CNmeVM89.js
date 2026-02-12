import{j as e}from"./iframe-B9QkJTIx.js";import{P as r}from"./ProgressBar-BofdQq2I.js";import{c as s}from"./classNames-CL7ibyjj.js";import{P as a}from"./ProgressCircular-CftNoQ2F.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-HR4iyljw.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./sprout-DgR7PjaR.js";import"./useI18n-CoLWfcqJ.js";const d={"aria-label":{control:{type:"text"},description:"Accessible label describing the progress bar. **Required if no label or tooltip is provided.**",table:{type:{summary:"string"}}},contained:{control:{type:"boolean"},description:"If true, the progress bar will be contained within its parent element.",table:{type:{summary:"boolean"}}},label:{control:{type:"text"},description:"Label describing the progress bar. **Required if no aria-label or tooltip is provided.**",table:{type:{summary:"string"}}},percent:{control:{max:100,min:0,type:"number"},description:"The progress percentage (0-100). If undefined or 0, the progress bar is indetermined.",table:{type:{summary:"number"}}},tooltip:{control:{type:"text"},description:"Tooltip text shown on hover. **Required if no label or aria-label is provided.**",table:{type:{summary:"string"}}}},c={"aria-label":{control:{type:"text"},description:"Accessible label describing the progress circular. **Required.**",table:{type:{summary:"string"}}},percent:{control:{max:100,min:0,type:"number"},description:"The progress percentage (0-100). If undefined, the progress circular is indetermined.",table:{type:{summary:"number"}}},size:{control:{type:"select"},description:"Size of the progress circular.",options:[void 0,"s","m","l"],table:{defaultValue:{summary:"m"},type:{summary:"s | m | l"}}},variant:{control:{type:"select"},description:"Visual variant of the progress circular.",options:["default","destructive"],table:{defaultValue:{summary:"default"},type:{summary:"default | destructive"}}}},P={title:"Components/Progress"},t={render:i=>e.jsx("div",{className:s("flex","border-box","p-3xl"),children:e.jsx(r,{...i})}),argTypes:d,args:{percent:50,"aria-label":"Wait for the end"},parameters:{control:{disable:!0}}},n={render:i=>e.jsx("div",{className:s("flex","flex-row","border-box","w-fit","p-s"),children:e.jsx(a,{...i})}),args:{size:"m",variant:"default"},argTypes:c,parameters:{chromatic:{disableSnapshot:!0}}},o={render:()=>e.jsxs("div",{className:s("flex","border-box"),children:[e.jsx(r,{percent:50,"aria-label":"Wait for the end"}),e.jsx("h2",{className:s("font-heading-m","text-default"),children:"Contained"}),e.jsxs("div",{className:s("flex","border-box","gap-l","p-xl","w-m","border-default"),children:[e.jsx("h3",{className:s("font-heading-m","text-default"),children:"aria-label"}),e.jsx(r,{contained:!0,percent:75,"aria-label":"Loading in progress 75% !"}),e.jsx("h3",{className:s("font-heading-m","text-default"),children:"label"}),e.jsx(r,{contained:!0,percent:75,label:"Loading in progress 75% !"}),e.jsx("h3",{className:s("font-heading-m","text-default"),children:"tooltip"}),e.jsx(r,{contained:!0,percent:75,tooltip:"Loading in progress 75% !"}),e.jsx("h3",{className:s("font-heading-m","text-default"),children:"Undetermined"}),e.jsx(r,{contained:!0,"aria-label":"Please wait until the current task is done"})]})]}),parameters:{controls:{disable:!0}}},l={render:()=>e.jsx("div",{className:s("flex","border-box"),children:e.jsxs("div",{className:s("flex","border-box","gap-m"),children:[e.jsxs("div",{className:s("flex","flex-row","border-box","items-center","gap-m"),children:[e.jsx("span",{className:s("font-body-s","text-default"),children:'size="s"'}),e.jsx(a,{size:"s"})]}),e.jsxs("div",{className:s("flex","flex-row","border-box","items-center","gap-m"),children:[e.jsx("span",{className:s("font-body-s","text-default"),children:'size="m"'}),e.jsx(a,{size:"m"})]}),e.jsxs("div",{className:s("flex","flex-row","border-box","items-center","gap-m"),children:[e.jsx("span",{className:s("font-body-s","text-default"),children:'size="l"'}),e.jsx(a,{size:"l"})]}),e.jsxs("div",{className:s("flex","flex-row","border-box","items-center","gap-m"),children:[e.jsx("span",{className:s("font-body-s","text-default"),children:'variant="destructive"'}),e.jsx(a,{size:"m",variant:"destructive"})]})]})}),parameters:{controls:{disable:!0}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "border-box", "p-3xl")}>
      <ProgressBar {...props} />
    </div>,
  argTypes: ProgressBarArgTypes,
  args: {
    percent: 50,
    "aria-label": "Wait for the end"
  },
  parameters: {
    control: {
      disable: true
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
      <ProgressCircular {...props} />
    </div>,
  args: {
    size: "m",
    variant: "default"
  },
  argTypes: ProgressCircularArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "border-box")}>
      <ProgressBar percent={50} aria-label="Wait for the end" />
      <h2 className={classNames("font-heading-m", "text-default")}>Contained</h2>
      <div className={classNames("flex", "border-box", "gap-l", "p-xl", "w-m", "border-default")}>
        <h3 className={classNames("font-heading-m", "text-default")}>aria-label</h3>
        <ProgressBar contained percent={75} aria-label="Loading in progress 75% !" />
        <h3 className={classNames("font-heading-m", "text-default")}>label</h3>
        <ProgressBar contained percent={75} label="Loading in progress 75% !" />
        <h3 className={classNames("font-heading-m", "text-default")}>tooltip</h3>
        <ProgressBar contained percent={75} tooltip="Loading in progress 75% !" />
        <h3 className={classNames("font-heading-m", "text-default")}>Undetermined</h3>
        <ProgressBar contained aria-label="Please wait until the current task is done" />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "border-box")}>
      <div className={classNames("flex", "border-box", "gap-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>size=&quot;s&quot;</span>
          <ProgressCircular size="s" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>size=&quot;m&quot;</span>
          <ProgressCircular size="m" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>size=&quot;l&quot;</span>
          <ProgressCircular size="l" />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>variant=&quot;destructive&quot;</span>
          <ProgressCircular size="m" variant="destructive" />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...l.parameters?.docs?.source}}};const j=["PlaygroundProgressBar","PlaygroundProgressCircular","VisualTestProgressBar","VisualTestCircular"];export{t as PlaygroundProgressBar,n as PlaygroundProgressCircular,l as VisualTestCircular,o as VisualTestProgressBar,j as __namedExportsOrder,P as default};
