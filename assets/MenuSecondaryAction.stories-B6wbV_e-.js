import"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as e}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{J as t,hn as n,x as r}from"./iframe-DTk7xy32.js";import"./Icons-DrVGfMuG.js";import"./Button.argTypes-zKlzNPmC.js";import{o as i}from"./Menu.argTypes-DU1BsQe_.js";var a=e(),o={title:`Components/Menu/Composition/Secondary Action`,component:r.SecondaryAction},s={render:e=>(0,a.jsx)(r.Trigger,{menu:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Split,{children:[(0,a.jsx)(r.Item,{label:`Open story`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,a.jsx)(r.SecondaryAction,{...e,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})]}),(0,a.jsx)(`div`,{className:n(`disclosure-trigger`),children:(0,a.jsxs)(r.Split,{children:[(0,a.jsx)(r.Item,{label:`Open story (Tooltip placement right)`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,a.jsx)(`span`,{className:n(`disclosure-target`),children:(0,a.jsx)(r.SecondaryAction,{...e,tooltipPlacement:`right`,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})})]})}),(0,a.jsx)(`div`,{className:n(`disclosure-trigger`),children:(0,a.jsxs)(r.Split,{children:[(0,a.jsx)(r.Item,{label:`Open story`,onClick:()=>{window.location.href=`/iframe.html?path=/story/components-menu--secondary-action`}}),(0,a.jsx)(`span`,{className:n(`disclosure-target`),children:(0,a.jsx)(r.SecondaryAction,{...e,onClick:()=>{window.open(`/?path=/story/components-menu--secondary-action`,`_blank`)?.focus()}})})]})})]}),children:(0,a.jsx)(t,{label:`Actions`})}),argTypes:i,parameters:{chromatic:{disableSnapshot:!0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};var c=[`SecondaryAction`];export{s as SecondaryAction,c as __namedExportsOrder,o as default};