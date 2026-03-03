import{r as u,j as e}from"./iframe-CuV-KuE-.js";import{a as c}from"./Menu.argTypes-DllTMlZP.js";import{M as t}from"./Menu-BVN8XmR4.js";import{c as n}from"./classNames-fYnfVJ-g.js";import{B as d}from"./Button-D_CeIuO9.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.argTypes-NGzFEzhg.js";import"./Icons-COWbX-_T.js";import"./index-ZpacE07-.js";import"./Add-Cf52a-Iw.js";import"./Next-CzIf6tFa.js";import"./Bookmark-Cfrl-l3v.js";import"./Upload-D7LwmtHu.js";import"./Text-B_JGQA-d.js";import"./Close-DVZAYT6i.js";import"./SortDescending-BF67BDZs.js";import"./Undo-sM27ww-Z.js";import"./Person-BiHoIXFe.js";import"./Copy-DvC_cMuU.js";import"./Delete-Bl0muSQk.js";import"./Filter-kyYncYCp.js";import"./Edit-CS5l4TjY.js";import"./Error-D9ghOnKS.js";import"./GenerateWithAi-CMN6Dlk9.js";import"./History-B7YXfS-_.js";import"./Search-Bwt14ckx.js";import"./Info-BDH0-Rmp.js";import"./Subtract-CuWUOSm8.js";import"./Map-COzyd6Qy.js";import"./NewTab-DJ0MS9BP.js";import"./Notification-uMs6TdK2.js";import"./Paste-D5k1MGSi.js";import"./Warning-TGmbdRgn.js";import"./Tenant-CZvZ-A9d.js";import"./sprout-DQv_ITqK.js";import"./icons-BouMdmeh.js";import"./useControl-CYhNvxn-.js";import"./Divider-D0F_5EBr.js";import"./Tooltip-Dlf0g86C.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-tUeULyiG.js";import"./useId-CKb71T0Y.js";import"./list-B1zo5gaH.js";import"./useI18n-BPziWXqP.js";import"./IconButton-DFJpbTCt.js";import"./Skeleton-DBd_dt_9.js";import"./Button.module-CmdpHks8.js";import"./Badge-Dt3dHAo1.js";import"./ProgressCircular-DDsJKJWC.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/Menu/Composition/Contextual",component:t.Contextual},a={render:({onClick:m,...l})=>{const[i,o]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...l,menu:i,wrapperClassName:n("flex","size-full"),onClick:m,onOpenChange:(p,r)=>{if(!p)o(e.jsx(t.Skeleton,{}));else if(r){const s=r.target.tagName;setTimeout(()=>{o(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${s}`}),s!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
