import{r as u,j as e}from"./iframe-lMEil1TA.js";import{a as c}from"./Menu.argTypes-U8nyB__7.js";import{M as t}from"./Menu-BuAoSxI5.js";import{c as n}from"./classNames-B_Twdkca.js";import{B as d}from"./Button-B3VC5XuI.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-DXhpQYiC.js";import"./index-XQNqsQ5O.js";import"./add-OoYVhzw8.js";import"./move-right-CxgFVc5X.js";import"./bookmark-CXl6cost.js";import"./text-Dvq4klSt.js";import"./close-CrtKz3TF.js";import"./upload-531rT3Nn.js";import"./sort-descending-DBF7-f7_.js";import"./undo-DPBprsjr.js";import"./settings-oS6F6h_p.js";import"./copy-8HFCGFIv.js";import"./delete-CG-UgknF.js";import"./documentation-3Ki2NWn5.js";import"./edit-Bij8o67D.js";import"./error-D8ruDyrJ.js";import"./favorited-eFV-EpYm.js";import"./generate-with-ai-DxtmBI1k.js";import"./subtract-BFWMKw7W.js";import"./hide-J1VEVLcZ.js";import"./history-DsyI5OdF.js";import"./search-Cjd_t8Yd.js";import"./info-B4Qytw2Z.js";import"./person-6TmEe_Ks.js";import"./map-Bw_UfIsn.js";import"./more-vertical-3Ccbf6lb.js";import"./move-left-BJhvkpSj.js";import"./new-tab-CrWdziAn.js";import"./notification-BvurbYEj.js";import"./paste-CWtbLVgn.js";import"./show-CL2zF-Fm.js";import"./warning-X1qrbfM3.js";import"./tenant-DisbRmPu.js";import"./Button.argTypes-CNHQ9iqd.js";import"./sprout-fe7_-ZbP.js";import"./common-bQH3ZR03.js";import"./useControl-Crf27nxo.js";import"./Divider-DoFQjC9R.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./list-B1zo5gaH.js";import"./useI18n-CDksjSf0.js";import"./IconButton-CuZnXk5P.js";import"./Skeleton-ByVVQwn0.js";import"./Button.module-ZjqCyrss.js";import"./Badge-BUdEAQ9u.js";import"./ProgressCircular-DzkpdMMq.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,ge={title:"Components/Menu/Composition/Contextual",component:t.Contextual},o={render:({onClick:s,...i})=>{const[l,r]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...i,menu:l,wrapperClassName:n("flex","size-full"),onClick:s,onOpenChange:(p,a)=>{if(!p)r(e.jsx(t.Skeleton,{}));else if(a){const m=a.target.tagName;setTimeout(()=>{r(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${m}`}),m!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
