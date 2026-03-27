import{n as e}from"./chunk-BneVvdWh.js";import{Fn as t,K as n,Pn as r,v as i,wt as a}from"./iframe-RiXBydPV.js";import{o,u as s}from"./Menu.argTypes-BfFXMMW9.js";var c,l,u,d,f=e((()=>{i(),s(),c=t(),l={title:`Components/Menu/Composition/Secondary Action`,component:n.SecondaryAction},u={render:e=>(0,c.jsx)(n.Trigger,{menu:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.Split,{children:[(0,c.jsx)(n.Item,{label:`Open story`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,c.jsx)(n.SecondaryAction,{...e,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})]}),(0,c.jsx)(`div`,{className:r(`disclosure-trigger`),children:(0,c.jsxs)(n.Split,{children:[(0,c.jsx)(n.Item,{label:`Open story (Tooltip placement right)`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,c.jsx)(`span`,{className:r(`disclosure-target`),children:(0,c.jsx)(n.SecondaryAction,{...e,tooltipPlacement:`right`,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})})]})}),(0,c.jsx)(`div`,{className:r(`disclosure-trigger`),children:(0,c.jsxs)(n.Split,{children:[(0,c.jsx)(n.Item,{label:`Open story`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,c.jsx)(`span`,{className:r(`disclosure-target`),children:(0,c.jsx)(n.SecondaryAction,{...e,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})})]})})]}),children:(0,c.jsx)(a,{label:`Actions`})}),argTypes:o,parameters:{chromatic:{disableSnapshot:!0}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <Menu.Trigger menu={<>
          <Menu.Split>
            <Menu.Item label="Open story" onClick={() => {
        window.location.href = "/iframe.html?path=/story/components-menu--secondary-action";
      }} />
            <Menu.SecondaryAction {...props} onClick={() => {
        window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
      }} />
          </Menu.Split>
          <div className={classNames("disclosure-trigger")}>
            <Menu.Split>
              <Menu.Item label="Open story (Tooltip placement right)" onClick={() => {
          window.location.href = "/iframe.html?path=/story/components-menu--secondary-action";
        }} />
              <span className={classNames("disclosure-target")}>
                <Menu.SecondaryAction {...props} tooltipPlacement="right" onClick={() => {
            window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
          }} />
              </span>
            </Menu.Split>
          </div>
          <div className={classNames("disclosure-trigger")}>
            <Menu.Split>
              <Menu.Item label="Open story" onClick={() => {
          window.location.href = "/iframe.html?path=/story/components-menu--secondary-action";
        }} />
              <span className={classNames("disclosure-target")}>
                <Menu.SecondaryAction {...props} onClick={() => {
            window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
          }} />
              </span>
            </Menu.Split>
          </div>
        </>}>
      <Button label="Actions" />
    </Menu.Trigger>,
  argTypes: MenuSecondaryActionArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`SecondaryAction`]}));f();export{u as SecondaryAction,d as __namedExportsOrder,l as default,f as t};