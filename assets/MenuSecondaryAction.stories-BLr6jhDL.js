import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{Fn as n,O as r,Ot as i,ta as a}from"./iframe-UwarwtgL.js";import{o,u as s}from"./Menu.argTypes-DTKostZx.js";var c,l,u,d,f=e((()=>{r(),s(),c=t(),l={title:`Components/Menu/Composition/Secondary Action`,component:i.SecondaryAction},u={render:e=>(0,c.jsx)(i.Trigger,{menu:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i.Split,{children:[(0,c.jsx)(i.Item,{label:`Open story`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,c.jsx)(i.SecondaryAction,{...e,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})]}),(0,c.jsx)(`div`,{className:a(`disclosure-trigger`),children:(0,c.jsxs)(i.Split,{children:[(0,c.jsx)(i.Item,{label:`Open story (Tooltip placement right)`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,c.jsx)(`span`,{className:a(`disclosure-target`),children:(0,c.jsx)(i.SecondaryAction,{...e,tooltipPlacement:`right`,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})})]})}),(0,c.jsx)(`div`,{className:a(`disclosure-trigger`),children:(0,c.jsxs)(i.Split,{children:[(0,c.jsx)(i.Item,{label:`Open story`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,c.jsx)(`span`,{className:a(`disclosure-target`),children:(0,c.jsx)(i.SecondaryAction,{...e,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})})]})})]}),children:(0,c.jsx)(n,{label:`Actions`})}),argTypes:o,parameters:{chromatic:{disableSnapshot:!0}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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