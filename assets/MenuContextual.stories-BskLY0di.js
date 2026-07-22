import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Fn as i,O as a,Ot as o,ta as s}from"./iframe-UwarwtgL.js";import{n as c,u as l}from"./Menu.argTypes-DTKostZx.js";var u,d,f,p,m,h,g=e((()=>{u=t(n()),a(),l(),d=r(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Menu/Composition/Contextual`,component:o.Contextual},m={render:({onClick:e,...t})=>{let[n,r]=(0,u.useState)((0,d.jsx)(o.Skeleton,{}));return(0,d.jsx)(o.Contextual,{...t,menu:n,wrapperClassName:s(`flex`,`size-full`),onClick:e,onOpenChange:(e,t)=>{if(!e)r((0,d.jsx)(o.Skeleton,{}));else if(t){let e=t.target.tagName;setTimeout(()=>{r((0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.GroupLabel,{label:`menu for ${e}`}),e!==`BUTTON`&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Item,{label:`Bold`}),(0,d.jsx)(o.Item,{label:`Italic`}),(0,d.jsx)(o.Item,{label:`Underline`}),(0,d.jsx)(o.Trigger,{placement:`right`,menu:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Item,{label:`Lorem`}),(0,d.jsx)(o.Item,{label:`Ipsum`})]}),children:(0,d.jsx)(o.Item,{label:`Open Submenu`,isNested:!0})})]})]}))},1e3)}},children:(0,d.jsxs)(`div`,{className:s(`flex`,`flex-col`,`p-m`,`w-full`,`border-default`),"data-testid":`contextual`,children:[(0,d.jsx)(`h1`,{className:s(`font-heading-m`,`text-default`),children:`Main title`}),(0,d.jsx)(`p`,{className:s(`font-body-m`,`text-default`),children:`This a paragraph with a bit of text.`}),(0,d.jsx)(i,{label:`this is a button`,onClick:()=>{}})]})})},argTypes:c,args:{onClick:f(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Contextual`]}));g();export{m as Contextual,h as __namedExportsOrder,p as default,g as t};