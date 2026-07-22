import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{Dr as n,Fn as r,Gr as i,O as a,Ot as o,qn as s,ta as c}from"./iframe-UwarwtgL.js";import{l,u}from"./Menu.argTypes-DTKostZx.js";var d,f,p,m,h,g=e((()=>{a(),s(),u(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Menu/Composition/Trigger`,component:o.Trigger},m={render:e=>(0,d.jsx)(`div`,{className:c(`w-m`,`flex`,`items-center`,`justify-center`),style:{blockSize:400},children:(0,d.jsx)(o.Trigger,{...e,menu:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Item,{icon:(0,d.jsx)(n,{}),label:`Profile`,disabled:!0}),(0,d.jsx)(o.Item,{icon:(0,d.jsx)(i,{}),label:`Logout`}),(0,d.jsx)(o.Item,{icon:null,label:`Reload`}),(0,d.jsx)(o.Item,{icon:null,label:`Share`})]}),children:(0,d.jsx)(r,{label:`Open Menu`})})}),argTypes:l,args:{onOpenChange:f()},parameters:{chromatic:{disableSnapshot:!0}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <div className={classNames("w-m", "flex", "items-center", "justify-center")} style={{
    blockSize: 400
  }}>
      <Menu.Trigger {...props} menu={<>
            <Menu.Item icon={<PersonIcon />} label="Profile" disabled />
            <Menu.Item icon={<LogOutIcon />} label="Logout" />
            <Menu.Item icon={null} label="Reload" />
            <Menu.Item icon={null} label="Share" />
          </>}>
        <Button label="Open Menu" />
      </Menu.Trigger>
    </div>,
  argTypes: MenuTriggerArgTypes,
  args: {
    onOpenChange: fn()
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Trigger`]}));g();export{m as Trigger,h as __namedExportsOrder,p as default,g as t};