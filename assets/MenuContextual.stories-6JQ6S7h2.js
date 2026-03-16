import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{J as r,hn as i,x as a}from"./iframe-BRSAI4nO.js";import"./Icons-DoZ1c5fe.js";import"./Button.argTypes-_HwelCQ3.js";import{n as o}from"./Menu.argTypes-CKtAela9.js";var s=e(t()),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Menu/Composition/Contextual`,component:a.Contextual},d={render:({onClick:e,...t})=>{let[n,o]=(0,s.useState)((0,c.jsx)(a.Skeleton,{}));return(0,c.jsx)(a.Contextual,{...t,menu:n,wrapperClassName:i(`flex`,`size-full`),onClick:e,onOpenChange:(e,t)=>{if(!e)o((0,c.jsx)(a.Skeleton,{}));else if(t){let e=t.target.tagName;setTimeout(()=>{o((0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.GroupLabel,{label:`menu for ${e}`}),e!==`BUTTON`&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Item,{label:`Bold`}),(0,c.jsx)(a.Item,{label:`Italic`}),(0,c.jsx)(a.Item,{label:`Underline`}),(0,c.jsx)(a.Trigger,{placement:`right`,menu:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Item,{label:`Lorem`}),(0,c.jsx)(a.Item,{label:`Ipsum`})]}),children:(0,c.jsx)(a.Item,{label:`Open Submenu`,isNested:!0})})]})]}))},1e3)}},children:(0,c.jsxs)(`div`,{className:i(`flex`,`flex-col`,`p-m`,`w-full`,`border-default`),"data-testid":`contextual`,children:[(0,c.jsx)(`h1`,{className:i(`font-heading-m`,`text-default`),children:`Main title`}),(0,c.jsx)(`p`,{className:i(`font-body-m`,`text-default`),children:`This a paragraph with a bit of text.`}),(0,c.jsx)(r,{label:`this is a button`,onClick:()=>{}})]})})},argTypes:o,args:{onClick:l(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    onClick,
    ...rest
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menu, setMenu] = useState<ReactNode>(<Menu.Skeleton />);
    return <Menu.Contextual {...rest} menu={menu} wrapperClassName={classNames("flex", "size-full")} onClick={onClick} onOpenChange={(open, e) => {
      if (!open) {
        setMenu(<Menu.Skeleton />);
      } else if (e) {
        const tagName = (e.target as HTMLElement).tagName;
        setTimeout(() => {
          setMenu(<>
                  <Menu.GroupLabel label={\`menu for \${tagName}\`} />
                  {tagName !== "BUTTON" && <>
                      <Menu.Item label="Bold" />
                      <Menu.Item label="Italic" />
                      <Menu.Item label="Underline" />
                      <Menu.Trigger placement="right" menu={<>
                            <Menu.Item label="Lorem" />
                            <Menu.Item label="Ipsum" />
                          </>}>
                        <Menu.Item label="Open Submenu" isNested />
                      </Menu.Trigger>
                    </>}
                </>);
        }, 1000);
      }
    }}>
        <div className={classNames("flex", "flex-col", "p-m", "w-full", "border-default")} data-testid="contextual">
          <h1 className={classNames("font-heading-m", "text-default")}>
            Main title
          </h1>
          <p className={classNames("font-body-m", "text-default")}>
            This a paragraph with a bit of text.
          </p>
          <Button label="this is a button" onClick={() => {}} />
        </div>
      </Menu.Contextual>;
  },
  argTypes: MenuContextualArgTypes,
  args: {
    onClick: fn(),
    closeOnRightClickOutside: true
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...d.parameters?.docs?.source}}};var f=[`Contextual`];export{d as Contextual,f as __namedExportsOrder,u as default};