import{r as u,j as e}from"./iframe-BThSoDrn.js";import{a as c}from"./Menu.argTypes-B2XOf8Pc.js";import{M as t}from"./Menu-ByKPQPeJ.js";import{c as n}from"./classNames-dIthk07I.js";import{B as d}from"./Button-DPdoSvtR.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.argTypes-CbPnSD34.js";import"./Icons-4m1Sc84h.js";import"./Add-BQFdkl2e.js";import"./AiSparkles-CmZ_srcr.js";import"./Next-1Q1bqM5p.js";import"./Bookmark-CVLzqLqN.js";import"./Upload-Bm4njtlo.js";import"./Text-6G8hA-h1.js";import"./Close-jEAlxUHo.js";import"./SortDescending-DRIoVd-M.js";import"./Undo-WuNimhT1.js";import"./Person-3cl35KlB.js";import"./Copy-jAGX-G5W.js";import"./Delete-BwyAIRQQ.js";import"./Filter-DiKfENlM.js";import"./Edit-BnWU-wtK.js";import"./Error-LWra2rFD.js";import"./History-BWwEcsLz.js";import"./Search-c6Wqd6yN.js";import"./Info-CD_iaTpZ.js";import"./Subtract-CRNAvJ2c.js";import"./Map-BSYcvYLi.js";import"./NewTab-RTkCp496.js";import"./Notification-D5_SHIKo.js";import"./Paste-CF9HfvBI.js";import"./Warning-BKQeZIO5.js";import"./Tenant-DemsO5Qk.js";import"./sprout-C7A3N88C.js";import"./icons-m7QrAy0p.js";import"./useControl-BsRaFebD.js";import"./Divider-BDGjRrdZ.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./list-B1zo5gaH.js";import"./useI18n-DEBX20KE.js";import"./IconButton-BNf-P6Px.js";import"./Skeleton-CGjLWnQE.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./ProgressCircular-3frmJwTX.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,ie={title:"Components/Menu/Composition/Contextual",component:t.Contextual},a={render:({onClick:m,...l})=>{const[i,o]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...l,menu:i,wrapperClassName:n("flex","size-full"),onClick:m,onOpenChange:(p,r)=>{if(!p)o(e.jsx(t.Skeleton,{}));else if(r){const s=r.target.tagName;setTimeout(()=>{o(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${s}`}),s!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const pe=["Contextual"];export{a as Contextual,pe as __namedExportsOrder,ie as default};
