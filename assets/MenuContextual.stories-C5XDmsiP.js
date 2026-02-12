import{r as u,j as e}from"./iframe-B4Gn7jRD.js";import{a as c}from"./Menu.argTypes-CbCN-LMp.js";import{M as t}from"./Menu-CwfGS8df.js";import{c as n}from"./classNames-CTBLippR.js";import{B as d}from"./Button-DuNeVE70.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.argTypes-C68159WU.js";import"./Icons-Cn4ElvJa.js";import"./index-9KegtbkR.js";import"./Add-CKNXHNSz.js";import"./Next-C0judd8d.js";import"./Bookmark-CKHX2VYo.js";import"./Upload-BAurdPXS.js";import"./Text-BW23LcKZ.js";import"./Close-DbHLglso.js";import"./SortDescending-CucUSsiY.js";import"./Undo-DLO9n_h1.js";import"./Person-CNI9Q8fr.js";import"./Copy-NISNc1Lm.js";import"./Delete-fA9YqxRL.js";import"./Filter-khtwO5TH.js";import"./Edit-BJvse-oo.js";import"./Error-ClTRWykU.js";import"./GenerateWithAi-C6A5sahu.js";import"./History-CgCTywjh.js";import"./Search-DN4_Th9X.js";import"./Info-C0xP7z1J.js";import"./Subtract-BjFnpmMb.js";import"./Map-DeFMr3_u.js";import"./NewTab-BFfS-RhS.js";import"./Notification-CGfvhvJZ.js";import"./Paste-DGzyaON5.js";import"./Warning-BFJpCY38.js";import"./Tenant-D8URuGVO.js";import"./sprout-CWCWYkgH.js";import"./icons-CPBvMsVh.js";import"./useControl-7TH6mjrF.js";import"./Divider-OzvHaalV.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./list-B1zo5gaH.js";import"./useI18n-DOe-EdfE.js";import"./IconButton-CoZ792nv.js";import"./Skeleton-V0Ckz_0t.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./ProgressCircular-C_VqfatA.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/Menu/Composition/Contextual",component:t.Contextual},a={render:({onClick:m,...l})=>{const[i,o]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...l,menu:i,wrapperClassName:n("flex","size-full"),onClick:m,onOpenChange:(p,r)=>{if(!p)o(e.jsx(t.Skeleton,{}));else if(r){const s=r.target.tagName;setTimeout(()=>{o(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${s}`}),s!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
