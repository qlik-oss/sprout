import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Fn as n,Pn as r,Tt as i,v as a}from"./iframe-RiXBydPV.js";var o,s,c=e((()=>{o={"aria-label":{control:{type:`text`},description:`Accessible label describing the progress bar. **Required if no label or tooltip is provided.**`,table:{type:{summary:`string`}}},contained:{control:{type:`boolean`},description:`If true, the progress bar will be contained within its parent element.`,table:{type:{summary:`boolean`}}},label:{control:{type:`text`},description:`Label describing the progress bar. **Required if no aria-label or tooltip is provided.**`,table:{type:{summary:`string`}}},percent:{control:{max:100,min:0,type:`number`},description:`The progress percentage (0-100). If undefined or 0, the progress bar is indetermined.`,table:{type:{summary:`number`}}},tooltip:{control:{type:`text`},description:`Tooltip text shown on hover. **Required if no label or aria-label is provided.**`,table:{type:{summary:`string`}}}},s={"aria-label":{control:{type:`text`},description:`Accessible label describing the progress circular. **Required.**`,table:{type:{summary:`string`}}},percent:{control:{max:100,min:0,type:`number`},description:`The progress percentage (0-100). If undefined, the progress circular is indetermined.`,table:{type:{summary:`number`}}},size:{control:{type:`select`},description:`Size of the progress circular.`,options:[void 0,`s`,`m`,`l`],table:{defaultValue:{summary:`m`},type:{summary:`s | m | l`}}},variant:{control:{type:`select`},description:`Visual variant of the progress circular.`,options:[`default`,`destructive`],table:{defaultValue:{summary:`default`},type:{summary:`default | destructive`}}}}})),l,u,d,f,p,m,h,g=e((()=>{a(),c(),l=n(),u={title:`Components/Progress`},d={render:e=>(0,l.jsx)(`div`,{className:r(`flex`,`border-box`,`p-3xl`),children:(0,l.jsx)(t,{...e})}),argTypes:o,args:{percent:50,"aria-label":`Wait for the end`},parameters:{control:{disable:!0}}},f={render:e=>(0,l.jsx)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`w-fit`,`p-s`),children:(0,l.jsx)(i,{...e})}),args:{size:`m`,variant:`default`},argTypes:s,parameters:{chromatic:{disableSnapshot:!0}}},p={render:()=>(0,l.jsxs)(`div`,{className:r(`flex`,`border-box`),children:[(0,l.jsx)(t,{percent:50,"aria-label":`Wait for the end`}),(0,l.jsx)(`h2`,{className:r(`font-heading-m`,`text-default`),children:`Contained`}),(0,l.jsxs)(`div`,{className:r(`flex`,`border-box`,`gap-l`,`p-xl`,`w-m`,`border-default`),children:[(0,l.jsx)(`h3`,{className:r(`font-heading-m`,`text-default`),children:`aria-label`}),(0,l.jsx)(t,{contained:!0,percent:75,"aria-label":`Loading in progress 75% !`}),(0,l.jsx)(`h3`,{className:r(`font-heading-m`,`text-default`),children:`label`}),(0,l.jsx)(t,{contained:!0,percent:75,label:`Loading in progress 75% !`}),(0,l.jsx)(`h3`,{className:r(`font-heading-m`,`text-default`),children:`tooltip`}),(0,l.jsx)(t,{contained:!0,percent:75,tooltip:`Loading in progress 75% !`}),(0,l.jsx)(`h3`,{className:r(`font-heading-m`,`text-default`),children:`Undetermined`}),(0,l.jsx)(t,{contained:!0,"aria-label":`Please wait until the current task is done`})]})]}),parameters:{controls:{disable:!0}}},m={render:()=>(0,l.jsx)(`div`,{className:r(`flex`,`border-box`),children:(0,l.jsxs)(`div`,{className:r(`flex`,`border-box`,`gap-m`),children:[(0,l.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`items-center`,`gap-m`),children:[(0,l.jsx)(`span`,{className:r(`font-body-s`,`text-default`),children:`size="s"`}),(0,l.jsx)(i,{size:`s`})]}),(0,l.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`items-center`,`gap-m`),children:[(0,l.jsx)(`span`,{className:r(`font-body-s`,`text-default`),children:`size="m"`}),(0,l.jsx)(i,{size:`m`})]}),(0,l.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`items-center`,`gap-m`),children:[(0,l.jsx)(`span`,{className:r(`font-body-s`,`text-default`),children:`size="l"`}),(0,l.jsx)(i,{size:`l`})]}),(0,l.jsxs)(`div`,{className:r(`flex`,`flex-row`,`border-box`,`items-center`,`gap-m`),children:[(0,l.jsx)(`span`,{className:r(`font-body-s`,`text-default`),children:`variant="destructive"`}),(0,l.jsx)(i,{size:`m`,variant:`destructive`})]})]})}),parameters:{controls:{disable:!0}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "border-box")}>
      <ProgressBar percent={50} aria-label="Wait for the end" />
      <h2 className={classNames("font-heading-m", "text-default")}>
        Contained
      </h2>
      <div className={classNames("flex", "border-box", "gap-l", "p-xl", "w-m", "border-default")}>
        <h3 className={classNames("font-heading-m", "text-default")}>
          aria-label
        </h3>
        <ProgressBar contained percent={75} aria-label="Loading in progress 75% !" />
        <h3 className={classNames("font-heading-m", "text-default")}>label</h3>
        <ProgressBar contained percent={75} label="Loading in progress 75% !" />
        <h3 className={classNames("font-heading-m", "text-default")}>
          tooltip
        </h3>
        <ProgressBar contained percent={75} tooltip="Loading in progress 75% !" />
        <h3 className={classNames("font-heading-m", "text-default")}>
          Undetermined
        </h3>
        <ProgressBar contained aria-label="Please wait until the current task is done" />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={classNames("flex", "border-box")}>
      <div className={classNames("flex", "border-box", "gap-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>
            size=&quot;s&quot;
          </span>
          <ProgressCircular size="s" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>
            size=&quot;m&quot;
          </span>
          <ProgressCircular size="m" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>
            size=&quot;l&quot;
          </span>
          <ProgressCircular size="l" />
        </div>

        <div className={classNames("flex", "flex-row", "border-box", "items-center", "gap-m")}>
          <span className={classNames("font-body-s", "text-default")}>
            variant=&quot;destructive&quot;
          </span>
          <ProgressCircular size="m" variant="destructive" />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`PlaygroundProgressBar`,`PlaygroundProgressCircular`,`VisualTestProgressBar`,`VisualTestCircular`]}));g();export{d as PlaygroundProgressBar,f as PlaygroundProgressCircular,m as VisualTestCircular,p as VisualTestProgressBar,h as __namedExportsOrder,u as default,g as t};