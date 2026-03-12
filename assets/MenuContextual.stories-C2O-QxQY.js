import{r as u,j as e}from"./iframe-Bp0nu8X6.js";import{a as c}from"./Menu.argTypes-kvCosMiQ.js";import{M as t}from"./Menu-Co2VX3TG.js";import{c as n}from"./classNames-BUd7eP-S.js";import{B as d}from"./Button-CBkOB6z4.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-DjXICJaU.js";import"./index-ebX9fmIs.js";import"./add-DiIoSsfz.js";import"./move-right-CK_WVS8x.js";import"./bookmark-BjcmHdPC.js";import"./text-CczEg3TU.js";import"./close-CJ5Ns5F2.js";import"./upload-8H-KEWMp.js";import"./sort-descending-Denwaaa7.js";import"./undo-DC82ZJyQ.js";import"./settings-AJKzQdc1.js";import"./copy-BYWkoi5_.js";import"./delete-CSyzwOk8.js";import"./documentation-6ghMNW6p.js";import"./edit-Dwo3NC30.js";import"./error-BcSU3HuT.js";import"./favorited-xiONJzzc.js";import"./generate-with-ai-BLISbXKJ.js";import"./subtract-Co-tykP9.js";import"./hide-DryimjwN.js";import"./history-Ddui-ZW8.js";import"./search-DYca-rrs.js";import"./info-DGMlSu_6.js";import"./person-lmjX5hbo.js";import"./map-BFrox4w-.js";import"./more-vertical-gmqyBEHm.js";import"./move-left-CfXNAwsO.js";import"./new-tab-uRDDQ1v4.js";import"./notification-Ah1qGB0i.js";import"./paste-By_tHdXO.js";import"./show-BUDxgafp.js";import"./warning-CT_3wb2_.js";import"./tenant-5cFbeFqF.js";import"./Button.argTypes-BUXeeCDC.js";import"./sprout-rpr_484f.js";import"./common-bQH3ZR03.js";import"./useControl-CS67YHbK.js";import"./Divider-B3J7iNd7.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./list-B1zo5gaH.js";import"./useI18n-D2jaKmf9.js";import"./IconButton-Bu152FGZ.js";import"./Skeleton-B__PZKef.js";import"./Button.module-BRCMjQTg.js";import"./Badge-Br2oOa7d.js";import"./ProgressCircular-DO25q9z0.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,ge={title:"Components/Menu/Composition/Contextual",component:t.Contextual},o={render:({onClick:s,...i})=>{const[l,r]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...i,menu:l,wrapperClassName:n("flex","size-full"),onClick:s,onOpenChange:(p,a)=>{if(!p)r(e.jsx(t.Skeleton,{}));else if(a){const m=a.target.tagName;setTimeout(()=>{r(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${m}`}),m!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const he=["Contextual"];export{o as Contextual,he as __namedExportsOrder,ge as default};
