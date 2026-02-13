import{r as u,j as e}from"./iframe-D-N3fK2j.js";import{a as c}from"./Menu.argTypes-BJNaa5hg.js";import{M as t}from"./Menu-CpWAuarv.js";import{c as n}from"./classNames-CrSIhzis.js";import{B as d}from"./Button-BiiNVP7I.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.argTypes-w4tJTKOg.js";import"./Icons-CGLv6dp6.js";import"./index-83n1lJXs.js";import"./Add-DHz0bRTt.js";import"./Next-DG_ldtCu.js";import"./Bookmark-Dg1w8U2T.js";import"./Upload-ClDjPMMt.js";import"./Text-Bpm64yqp.js";import"./Close-Clva93gw.js";import"./SortDescending-7Is3TCUG.js";import"./Undo-Jt2aGM_z.js";import"./Person-C2Clk1QX.js";import"./Copy-DXsZFzm1.js";import"./Delete-o_szjHTs.js";import"./Filter-DXj_kdvE.js";import"./Edit-69Qgo7Td.js";import"./Error-CZbJtLWx.js";import"./GenerateWithAi-B8C8zDdl.js";import"./History-CQ5KoKvO.js";import"./Search-BEJfw-uV.js";import"./Info-DKfyJpi1.js";import"./Subtract-DrooAXHe.js";import"./Map-DsyJdFaB.js";import"./NewTab-DIWrR844.js";import"./Notification-CjmHr3yB.js";import"./Paste-B-RxeU6b.js";import"./Warning-Dy5sqdbk.js";import"./Tenant-BSwEMVQe.js";import"./sprout-UDo5dA_z.js";import"./icons-BEmnCRju.js";import"./useControl-U-WkQj2I.js";import"./Divider-Aa9jm5B9.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./list-B1zo5gaH.js";import"./useI18n-ClHBar3-.js";import"./IconButton-Dg4ysz4Z.js";import"./Skeleton-Bx_f_eFM.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./ProgressCircular-CdUDfayh.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/Menu/Composition/Contextual",component:t.Contextual},a={render:({onClick:m,...l})=>{const[i,o]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...l,menu:i,wrapperClassName:n("flex","size-full"),onClick:m,onOpenChange:(p,r)=>{if(!p)o(e.jsx(t.Skeleton,{}));else if(r){const s=r.target.tagName;setTimeout(()=>{o(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${s}`}),s!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
          <h1 className={classNames("font-heading-m", "text-default")}>Main title</h1>
          <p className={classNames("font-body-m", "text-default")}>This a paragraph with a bit of text.</p>
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
}`,...a.parameters?.docs?.source}}};const ue=["Contextual"];export{a as Contextual,ue as __namedExportsOrder,pe as default};
