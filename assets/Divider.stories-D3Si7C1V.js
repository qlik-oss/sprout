import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Fn as n,Un as r,Wn as i,v as a,vt as o,wt as s}from"./iframe-RiXBydPV.js";var c,l=e((()=>{c={height:{control:{type:`select`},description:`Height of the vertical divider.`,if:{arg:`orientation`,eq:`vertical`},options:[`auto`,`100%`],table:{defaultValue:{summary:`"auto"`},type:{summary:`"auto" | "100%"`}}},orientation:{control:{type:`select`},description:`Separator's orientation.`,options:[`horizontal`,`vertical`],table:{defaultValue:{summary:`"horizontal"`},type:{summary:`"horizontal" | "vertical"`}}},width:{control:{type:`select`},description:`Width of the horizontal divider.`,if:{arg:`orientation`,eq:`horizontal`},options:[`auto`,`100%`],table:{defaultValue:{summary:`"100%"`},type:{summary:`"auto" | "100%"`}}}}})),u=t({Horizontal:()=>m,Vertical:()=>p,VisualTest:()=>h,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g,_=e((()=>{r(),a(),l(),d=n(),f={title:`Components/Divider`,component:o,parameters:{}},p={render:e=>(0,d.jsxs)(`div`,{className:i.classNames(`flex`,`gap-m`,`flex-row`),children:[(0,d.jsx)(s,{label:`Copy`}),(0,d.jsx)(s,{label:`Paste`}),(0,d.jsx)(o,{...e}),(0,d.jsx)(s,{label:`Delete`})]}),argTypes:c,args:{orientation:`vertical`},parameters:{chromatic:{disableSnapshot:!0}}},m={render:e=>(0,d.jsxs)(`div`,{className:i.classNames(`flex`,`w-xxs`,`gap-m`,`text-default`,`font-body-s`),children:[`Foo`,(0,d.jsx)(o,{...e}),`Bar`]}),argTypes:c,args:{orientation:`horizontal`},parameters:{chromatic:{disableSnapshot:!0}}},h={render:()=>(0,d.jsxs)(`div`,{className:i.classNames(`flex`,`gap-xl`,`w-s`,`text-default`,`font-body-s`),children:[(0,d.jsxs)(`div`,{className:i.classNames(`flex`,`flex-row`,`gap-m`),children:[(0,d.jsx)(s,{label:`Copy`}),(0,d.jsx)(s,{label:`Paste`}),(0,d.jsx)(o,{orientation:`vertical`}),(0,d.jsx)(s,{label:`Delete`})]}),(0,d.jsxs)(`div`,{className:i.classNames(`flex`,`flex-col`,`gap-m`,`w-xxs`),children:[`Foo`,(0,d.jsx)(o,{orientation:`horizontal`}),`Bar`]}),(0,d.jsxs)(`div`,{style:{blockSize:`300px`},className:i.classNames(`flex`,`gap-m`,`w-full`,`items-center`,`flex-row`),children:[(0,d.jsx)(`div`,{className:i.classNames(`flex`,`justify-center`,`items-center`,`w-s`),children:`Flexbox container with Divider that takes the full height of it's parent`}),(0,d.jsx)(o,{orientation:`vertical`,height:`100%`}),(0,d.jsx)(`div`,{className:i.classNames(`flex`,`justify-center`,`items-center`,`w-s`),children:`Flexbox container with Divider that takes the full height of it's parent`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Vertical`,`Horizontal`,`VisualTest`]}));_();export{m as Horizontal,p as Vertical,h as VisualTest,g as __namedExportsOrder,f as default,_ as n,u as t};