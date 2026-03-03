import{r as u,j as e}from"./iframe-BM36tKY9.js";import{a as c}from"./Menu.argTypes-CWzQHmw2.js";import{M as t}from"./Menu-b5Hl0xTM.js";import{c as n}from"./classNames-D2MVtjzd.js";import{B as d}from"./Button-wScfBKxi.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-CQdi0Qfk.js";import"./index-DM34Bggu.js";import"./add-VKxZMCZ1.js";import"./move-right-C1_1RL8h.js";import"./bookmark-D7CrCsbo.js";import"./text-BT02E20n.js";import"./close-CYEv2BwJ.js";import"./upload-DAbLlB0c.js";import"./sort-descending-CgwSpVd_.js";import"./undo-BnneyCmg.js";import"./settings-DCJi43F0.js";import"./copy-5pLa4d1M.js";import"./delete-iC7mKKRu.js";import"./documentation-DEtevtWp.js";import"./edit-CKp5FD3E.js";import"./error-DJM79MqW.js";import"./favorited-BqMbjWSD.js";import"./generate-with-ai-C7ZdkiKx.js";import"./subtract-CmdG1iV6.js";import"./hide-BC9kgIHr.js";import"./history-Ce6MLgVu.js";import"./search-D3DMdc9S.js";import"./info-By4pCjMF.js";import"./person-BNKCLHkq.js";import"./map-DnBNu0cY.js";import"./more-vertical-BVZqPJep.js";import"./move-left-R6H6x7U2.js";import"./new-tab-CpKZypuy.js";import"./notification-Car9C9Fn.js";import"./paste-DywRabwS.js";import"./show-C6fFsymT.js";import"./warning-GTpknHYS.js";import"./tenant-CkbwWCOd.js";import"./Button.argTypes-oXSdcrhy.js";import"./sprout-BcBmzfoy.js";import"./common-bQH3ZR03.js";import"./useControl-Bq0hCRWZ.js";import"./Divider-CVf_6yZu.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./list-B1zo5gaH.js";import"./useI18n-BRpGJeHe.js";import"./IconButton-DIyYlW0K.js";import"./Skeleton-DwQqkdj6.js";import"./Button.module-Bn-SZyJ6.js";import"./Badge-CjLUVOBS.js";import"./ProgressCircular-DoqAoY81.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,ge={title:"Components/Menu/Composition/Contextual",component:t.Contextual},o={render:({onClick:s,...i})=>{const[l,r]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...i,menu:l,wrapperClassName:n("flex","size-full"),onClick:s,onOpenChange:(p,a)=>{if(!p)r(e.jsx(t.Skeleton,{}));else if(a){const m=a.target.tagName;setTimeout(()=>{r(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${m}`}),m!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
