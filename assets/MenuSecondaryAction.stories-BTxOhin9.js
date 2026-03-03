import{j as o}from"./iframe-BM36tKY9.js";import{e as i}from"./Menu.argTypes-CWzQHmw2.js";import{M as n}from"./Menu-b5Hl0xTM.js";import{B as s}from"./Button-wScfBKxi.js";import{c as t}from"./classNames-D2MVtjzd.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-CQdi0Qfk.js";import"./index-DM34Bggu.js";import"./add-VKxZMCZ1.js";import"./move-right-C1_1RL8h.js";import"./bookmark-D7CrCsbo.js";import"./text-BT02E20n.js";import"./close-CYEv2BwJ.js";import"./upload-DAbLlB0c.js";import"./sort-descending-CgwSpVd_.js";import"./undo-BnneyCmg.js";import"./settings-DCJi43F0.js";import"./copy-5pLa4d1M.js";import"./delete-iC7mKKRu.js";import"./documentation-DEtevtWp.js";import"./edit-CKp5FD3E.js";import"./error-DJM79MqW.js";import"./favorited-BqMbjWSD.js";import"./generate-with-ai-C7ZdkiKx.js";import"./subtract-CmdG1iV6.js";import"./hide-BC9kgIHr.js";import"./history-Ce6MLgVu.js";import"./search-D3DMdc9S.js";import"./info-By4pCjMF.js";import"./person-BNKCLHkq.js";import"./map-DnBNu0cY.js";import"./more-vertical-BVZqPJep.js";import"./move-left-R6H6x7U2.js";import"./new-tab-CpKZypuy.js";import"./notification-Car9C9Fn.js";import"./paste-DywRabwS.js";import"./show-C6fFsymT.js";import"./warning-GTpknHYS.js";import"./tenant-CkbwWCOd.js";import"./Button.argTypes-oXSdcrhy.js";import"./sprout-BcBmzfoy.js";import"./common-bQH3ZR03.js";import"./useControl-Bq0hCRWZ.js";import"./Divider-CVf_6yZu.js";import"./Tooltip-DOknWAYm.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-lrfYqLit.js";import"./useId-Cih_zwB8.js";import"./list-B1zo5gaH.js";import"./useI18n-BRpGJeHe.js";import"./IconButton-DIyYlW0K.js";import"./Skeleton-DwQqkdj6.js";import"./Button.module-Bn-SZyJ6.js";import"./Badge-CjLUVOBS.js";import"./ProgressCircular-DoqAoY81.js";const mo={title:"Components/Menu/Composition/Secondary Action",component:n.SecondaryAction},e={render:r=>o.jsx(n.Trigger,{menu:o.jsxs(o.Fragment,{children:[o.jsxs(n.Split,{children:[o.jsx(n.Item,{label:"Open story",onClick:()=>{window.location.href="/iframe.html?path=/story/components-menu--secondary-action"}}),o.jsx(n.SecondaryAction,{...r,onClick:()=>{window.open("/?path=/story/components-menu--secondary-action","_blank")?.focus()}})]}),o.jsx("div",{className:t("disclosure-trigger"),children:o.jsxs(n.Split,{children:[o.jsx(n.Item,{label:"Open story (Tooltip placement right)",onClick:()=>{window.location.href="/iframe.html?path=/story/components-menu--secondary-action"}}),o.jsx("span",{className:t("disclosure-target"),children:o.jsx(n.SecondaryAction,{...r,tooltipPlacement:"right",onClick:()=>{window.open("/?path=/story/components-menu--secondary-action","_blank")?.focus()}})})]})}),o.jsx("div",{className:t("disclosure-trigger"),children:o.jsxs(n.Split,{children:[o.jsx(n.Item,{label:"Open story",onClick:()=>{window.location.href="/iframe.html?path=/story/components-menu--secondary-action"}}),o.jsx("span",{className:t("disclosure-target"),children:o.jsx(n.SecondaryAction,{...r,onClick:()=>{window.open("/?path=/story/components-menu--secondary-action","_blank")?.focus()}})})]})})]}),children:o.jsx(s,{label:"Actions"})}),argTypes:i,parameters:{chromatic:{disableSnapshot:!0}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <Menu.Trigger menu={<>
          <Menu.Split>
            <Menu.Item label="Open story" onClick={() => {
        window.location.href = "/iframe.html?path=/story/components-menu--secondary-action";
      }} />
            <Menu.SecondaryAction {...props} onClick={() => {
        window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
      }} />
          </Menu.Split>
          <div className={classNames("disclosure-trigger")}>
            <Menu.Split>
              <Menu.Item label="Open story (Tooltip placement right)" onClick={() => {
          window.location.href = "/iframe.html?path=/story/components-menu--secondary-action";
        }} />
              <span className={classNames("disclosure-target")}>
                <Menu.SecondaryAction {...props} tooltipPlacement="right" onClick={() => {
            window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
          }} />
              </span>
            </Menu.Split>
          </div>
          <div className={classNames("disclosure-trigger")}>
            <Menu.Split>
              <Menu.Item label="Open story" onClick={() => {
          window.location.href = "/iframe.html?path=/story/components-menu--secondary-action";
        }} />
              <span className={classNames("disclosure-target")}>
                <Menu.SecondaryAction {...props} onClick={() => {
            window.open("/?path=/story/components-menu--secondary-action", "_blank")?.focus();
          }} />
              </span>
            </Menu.Split>
          </div>
        </>}>
      <Button label="Actions" />
    </Menu.Trigger>,
  argTypes: MenuSecondaryActionArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...e.parameters?.docs?.source}}};const co=["SecondaryAction"];export{e as SecondaryAction,co as __namedExportsOrder,mo as default};
