import{n as e}from"./chunk-DseTPa7n.js";import"./react-sE-G6KV_.js";import{t}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{J as r,V as i}from"./iframe-DTk7xy32.js";var a={height:{control:{type:`select`},description:`Height of the vertical divider.`,if:{arg:`orientation`,eq:`vertical`},options:[`auto`,`100%`],table:{defaultValue:{summary:`"auto"`},type:{summary:`"auto" | "100%"`}}},orientation:{control:{type:`select`},description:`Separator's orientation.`,options:[`horizontal`,`vertical`],table:{defaultValue:{summary:`"horizontal"`},type:{summary:`"horizontal" | "vertical"`}}},width:{control:{type:`select`},description:`Width of the horizontal divider.`,if:{arg:`orientation`,eq:`horizontal`},options:[`auto`,`100%`],table:{defaultValue:{summary:`"100%"`},type:{summary:`"auto" | "100%"`}}}},o=e({Horizontal:()=>u,Vertical:()=>l,VisualTest:()=>d,__namedExportsOrder:()=>f,default:()=>c}),s=n(),c={title:`Components/Divider`,component:i,parameters:{}},l={render:e=>(0,s.jsxs)(`div`,{className:t.classNames(`flex`,`gap-m`,`flex-row`),children:[(0,s.jsx)(r,{label:`Copy`}),(0,s.jsx)(r,{label:`Paste`}),(0,s.jsx)(i,{...e}),(0,s.jsx)(r,{label:`Delete`})]}),argTypes:a,args:{orientation:`vertical`},parameters:{chromatic:{disableSnapshot:!0}}},u={render:e=>(0,s.jsxs)(`div`,{className:t.classNames(`flex`,`w-xxs`,`gap-m`,`text-default`,`font-body-s`),children:[`Foo`,(0,s.jsx)(i,{...e}),`Bar`]}),argTypes:a,args:{orientation:`horizontal`},parameters:{chromatic:{disableSnapshot:!0}}},d={render:()=>(0,s.jsxs)(`div`,{className:t.classNames(`flex`,`gap-xl`,`w-s`,`text-default`,`font-body-s`),children:[(0,s.jsxs)(`div`,{className:t.classNames(`flex`,`flex-row`,`gap-m`),children:[(0,s.jsx)(r,{label:`Copy`}),(0,s.jsx)(r,{label:`Paste`}),(0,s.jsx)(i,{orientation:`vertical`}),(0,s.jsx)(r,{label:`Delete`})]}),(0,s.jsxs)(`div`,{className:t.classNames(`flex`,`flex-col`,`gap-m`,`w-xxs`),children:[`Foo`,(0,s.jsx)(i,{orientation:`horizontal`}),`Bar`]}),(0,s.jsxs)(`div`,{style:{blockSize:`300px`},className:t.classNames(`flex`,`gap-m`,`w-full`,`items-center`,`flex-row`),children:[(0,s.jsx)(`div`,{className:t.classNames(`flex`,`justify-center`,`items-center`,`w-s`),children:`Flexbox container with Divider that takes the full height of it's parent`}),(0,s.jsx)(i,{orientation:`vertical`,height:`100%`}),(0,s.jsx)(`div`,{className:t.classNames(`flex`,`justify-center`,`items-center`,`w-s`),children:`Flexbox container with Divider that takes the full height of it's parent`})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          Flexbox container with Divider that takes the full height of it's
          parent
        </div>
        <Divider orientation="vertical" height="100%" />
        <div className={sprout.classNames("flex", "justify-center", "items-center", "w-s")}>
          Flexbox container with Divider that takes the full height of it's
          parent
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};var f=[`Vertical`,`Horizontal`,`VisualTest`];export{u as Horizontal,l as Vertical,d as VisualTest,f as __namedExportsOrder,c as default,o as t};