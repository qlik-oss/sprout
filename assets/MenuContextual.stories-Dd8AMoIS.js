import{r as u,j as e}from"./iframe-BQJExRCF.js";import{a as c}from"./Menu.argTypes-yAcnfZ1j.js";import{M as t}from"./Menu-D_upy4ds.js";import{c as n}from"./classNames-B0wfWtWT.js";import{B as d}from"./Button-C7-D-GN_.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.argTypes-C6WRveIs.js";import"./Icons-D8r5JLXA.js";import"./Add-CPO6AOva.js";import"./AiSparkles-ybqQooZU.js";import"./Next-BCf902gw.js";import"./Bookmark-DEDDSCCD.js";import"./Upload-JDlmgr1C.js";import"./Text-fjMciMda.js";import"./Close-VT6FC74F.js";import"./SortDescending-BWpZ9BF7.js";import"./Undo-B1PPlUQq.js";import"./Person-8oMSnh08.js";import"./Copy-ERSXBUQF.js";import"./Delete-CrLV--N3.js";import"./Filter-bb23MOEL.js";import"./Edit-Bc7r3LZJ.js";import"./Error-B95qseKK.js";import"./History-BSF-XiSG.js";import"./Search-B3R4dCNd.js";import"./Info-BfRROe8g.js";import"./Subtract-Ca-OouU7.js";import"./Map-pFYOI1fT.js";import"./NewTab-BMHt_Vx2.js";import"./Notification-BlWUDy4b.js";import"./Paste-Cd-nv27Q.js";import"./Warning-BB_ZpJQH.js";import"./Tenant-I_uTRlDg.js";import"./sprout-DxA14K3u.js";import"./icons-CzMI2h-K.js";import"./useControl-XJuj1vyK.js";import"./Divider-Byw016rg.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./list-B1zo5gaH.js";import"./useI18n-B99T9obj.js";import"./IconButton-BEI3RZpW.js";import"./Skeleton-C323E7Fo.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./ProgressCircular-B4mHH4_Y.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,ie={title:"Components/Menu/Composition/Contextual",component:t.Contextual},a={render:({onClick:m,...l})=>{const[i,o]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...l,menu:i,wrapperClassName:n("flex","size-full"),onClick:m,onOpenChange:(p,r)=>{if(!p)o(e.jsx(t.Skeleton,{}));else if(r){const s=r.target.tagName;setTimeout(()=>{o(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${s}`}),s!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const pe=["Contextual"];export{a as Contextual,pe as __namedExportsOrder,ie as default};
