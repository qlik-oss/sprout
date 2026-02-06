import{r as u,j as e}from"./iframe-qjjAf_pH.js";import{a as c}from"./Menu.argTypes-Wau7lbsc.js";import{M as t}from"./Menu-C5_qGJie.js";import{c as n}from"./classNames-BVAN1ZTN.js";import{B as d}from"./Button-cYFf5aNk.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.argTypes-BxTnw5Wa.js";import"./Icons-Blxgg6XZ.js";import"./index-BFR_pwzS.js";import"./Add-DSLcMkbC.js";import"./Next-CxhzuVxv.js";import"./Bookmark-BNRO0aS9.js";import"./Upload-CL9H6pmE.js";import"./Text-B-zga3pP.js";import"./Close-Bp7FqXQR.js";import"./SortDescending-C3dNRiBL.js";import"./Undo-Dsdksioz.js";import"./Person-BIgNV-Ed.js";import"./Copy-BTa2KiQL.js";import"./Delete-BwmiKOHh.js";import"./Filter-hx7yX_Jo.js";import"./Edit-2pD94UJo.js";import"./Error-BrLGh9jC.js";import"./GenerateWithAi-f8_0IRx5.js";import"./History-atzo0mXc.js";import"./Search-DWresNZR.js";import"./Info-DxHQkaw3.js";import"./Subtract-CBZN_Qgc.js";import"./Map-in9fWS3M.js";import"./NewTab-CYZ0jhBQ.js";import"./Notification-Dtb2E571.js";import"./Paste-Qm0zT67Y.js";import"./Warning-CuGLZChC.js";import"./Tenant-oJlxY9e2.js";import"./sprout-Dvd5rbSu.js";import"./icons-5qhXnzWI.js";import"./useControl-BNhHN6uq.js";import"./Divider-Cf0WguxB.js";import"./Tooltip-DvaPb59I.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CXS0BGZe.js";import"./useId-CYaNFQmj.js";import"./list-B1zo5gaH.js";import"./useI18n-DleVkSsM.js";import"./IconButton-DKYxz8uh.js";import"./Skeleton-BKmE9JlX.js";import"./Button.module-C2ELNEem.js";import"./Badge-CvmwyUY9.js";import"./ProgressCircular-BSs6AknY.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/Menu/Composition/Contextual",component:t.Contextual},a={render:({onClick:m,...l})=>{const[i,o]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...l,menu:i,wrapperClassName:n("flex","size-full"),onClick:m,onOpenChange:(p,r)=>{if(!p)o(e.jsx(t.Skeleton,{}));else if(r){const s=r.target.tagName;setTimeout(()=>{o(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${s}`}),s!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
