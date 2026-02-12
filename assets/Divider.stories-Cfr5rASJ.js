import{j as e}from"./iframe-B9QkJTIx.js";import{s as t}from"./sprout-DgR7PjaR.js";import{D as a}from"./Divider-CQpF3Ph8.js";import{B as s}from"./Button-DJuasLWt.js";const n={height:{control:{type:"select"},description:"Height of the vertical divider.",if:{arg:"orientation",eq:"vertical"},options:["auto","100%"],table:{defaultValue:{summary:'"auto"'},type:{summary:'"auto" | "100%"'}}},orientation:{control:{type:"select"},description:"Separator's orientation.",options:["horizontal","vertical"],table:{defaultValue:{summary:'"horizontal"'},type:{summary:'"horizontal" | "vertical"'}}},width:{control:{type:"select"},description:"Width of the horizontal divider.",if:{arg:"orientation",eq:"horizontal"},options:["auto","100%"],table:{defaultValue:{summary:'"100%"'},type:{summary:'"auto" | "100%"'}}}},c={title:"Components/Divider",component:a,parameters:{}},r={render:l=>e.jsxs("div",{className:t.classNames("flex","gap-m","flex-row"),children:[e.jsx(s,{label:"Copy"}),e.jsx(s,{label:"Paste"}),e.jsx(a,{...l}),e.jsx(s,{label:"Delete"})]}),argTypes:n,args:{orientation:"vertical"},parameters:{chromatic:{disableSnapshot:!0}}},o={render:l=>e.jsxs("div",{className:t.classNames("flex","w-xxs","gap-m","text-default","font-body-s"),children:["Foo",e.jsx(a,{...l}),"Bar"]}),argTypes:n,args:{orientation:"horizontal"},parameters:{chromatic:{disableSnapshot:!0}}},i={render:()=>e.jsxs("div",{className:t.classNames("flex","gap-xl","w-s","text-default","font-body-s"),children:[e.jsxs("div",{className:t.classNames("flex","flex-row","gap-m"),children:[e.jsx(s,{label:"Copy"}),e.jsx(s,{label:"Paste"}),e.jsx(a,{orientation:"vertical"}),e.jsx(s,{label:"Delete"})]}),e.jsxs("div",{className:t.classNames("flex","flex-col","gap-m","w-xxs"),children:["Foo",e.jsx(a,{orientation:"horizontal"}),"Bar"]}),e.jsxs("div",{style:{blockSize:"300px"},className:t.classNames("flex","gap-m","w-full","items-center","flex-row"),children:[e.jsx("div",{className:t.classNames("flex","justify-center","items-center","w-s"),children:"Flexbox container with Divider that takes the full height of it's parent"}),e.jsx(a,{orientation:"vertical",height:"100%"}),e.jsx("div",{className:t.classNames("flex","justify-center","items-center","w-s"),children:"Flexbox container with Divider that takes the full height of it's parent"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => <div className={sprout.classNames("flex", "gap-m", "flex-row")}>
      <Button label="Copy" />
      <Button label="Paste" />
      <Divider {...props} />
      <Button label="Delete" />
    </div>,
  argTypes: DividerArgTypes,
  args: {
    orientation: "vertical"
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <div className={sprout.classNames("flex", "w-xxs", "gap-m", "text-default", "font-body-s")}>
      Foo
      <Divider {...props} />
      Bar
    </div>,
  argTypes: DividerArgTypes,
  args: {
    orientation: "horizontal"
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className={sprout.classNames("flex", "gap-xl", "w-s", "text-default", "font-body-s")}>
      <div className={sprout.classNames("flex", "flex-row", "gap-m")}>
        <Button label="Copy" />
        <Button label="Paste" />
        <Divider orientation="vertical" />
        <Button label="Delete" />
      </div>

      <div className={sprout.classNames("flex", "flex-col", "gap-m", "w-xxs")}>
        Foo
        <Divider orientation="horizontal" />
        Bar
      </div>

      <div style={{
      blockSize: "300px"
    }} className={sprout.classNames("flex", "gap-m", "w-full", "items-center", "flex-row")}>
        <div className={sprout.classNames("flex", "justify-center", "items-center", "w-s")}>
          Flexbox container with Divider that takes the full height of it's parent
        </div>
        <Divider orientation="vertical" height="100%" />
        <div className={sprout.classNames("flex", "justify-center", "items-center", "w-s")}>
          Flexbox container with Divider that takes the full height of it's parent
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const m=["Vertical","Horizontal","VisualTest"],f=Object.freeze(Object.defineProperty({__proto__:null,Horizontal:o,Vertical:r,VisualTest:i,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{o as H,f as S,r as V};
