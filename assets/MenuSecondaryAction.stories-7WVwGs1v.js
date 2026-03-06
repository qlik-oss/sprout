import{j as o}from"./iframe-lMEil1TA.js";import{e as i}from"./Menu.argTypes-U8nyB__7.js";import{M as n}from"./Menu-BuAoSxI5.js";import{B as s}from"./Button-B3VC5XuI.js";import{c as t}from"./classNames-B_Twdkca.js";import"./preload-helper-PPVm8Dsz.js";import"./Icons-DXhpQYiC.js";import"./index-XQNqsQ5O.js";import"./add-OoYVhzw8.js";import"./move-right-CxgFVc5X.js";import"./bookmark-CXl6cost.js";import"./text-Dvq4klSt.js";import"./close-CrtKz3TF.js";import"./upload-531rT3Nn.js";import"./sort-descending-DBF7-f7_.js";import"./undo-DPBprsjr.js";import"./settings-oS6F6h_p.js";import"./copy-8HFCGFIv.js";import"./delete-CG-UgknF.js";import"./documentation-3Ki2NWn5.js";import"./edit-Bij8o67D.js";import"./error-D8ruDyrJ.js";import"./favorited-eFV-EpYm.js";import"./generate-with-ai-DxtmBI1k.js";import"./subtract-BFWMKw7W.js";import"./hide-J1VEVLcZ.js";import"./history-DsyI5OdF.js";import"./search-Cjd_t8Yd.js";import"./info-B4Qytw2Z.js";import"./person-6TmEe_Ks.js";import"./map-Bw_UfIsn.js";import"./more-vertical-3Ccbf6lb.js";import"./move-left-BJhvkpSj.js";import"./new-tab-CrWdziAn.js";import"./notification-BvurbYEj.js";import"./paste-CWtbLVgn.js";import"./show-CL2zF-Fm.js";import"./warning-X1qrbfM3.js";import"./tenant-DisbRmPu.js";import"./Button.argTypes-CNHQ9iqd.js";import"./sprout-fe7_-ZbP.js";import"./common-bQH3ZR03.js";import"./useControl-Crf27nxo.js";import"./Divider-DoFQjC9R.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./list-B1zo5gaH.js";import"./useI18n-CDksjSf0.js";import"./IconButton-CuZnXk5P.js";import"./Skeleton-ByVVQwn0.js";import"./Button.module-ZjqCyrss.js";import"./Badge-BUdEAQ9u.js";import"./ProgressCircular-DzkpdMMq.js";const mo={title:"Components/Menu/Composition/Secondary Action",component:n.SecondaryAction},e={render:r=>o.jsx(n.Trigger,{menu:o.jsxs(o.Fragment,{children:[o.jsxs(n.Split,{children:[o.jsx(n.Item,{label:"Open story",onClick:()=>{window.location.href="/iframe.html?path=/story/components-menu--secondary-action"}}),o.jsx(n.SecondaryAction,{...r,onClick:()=>{window.open("/?path=/story/components-menu--secondary-action","_blank")?.focus()}})]}),o.jsx("div",{className:t("disclosure-trigger"),children:o.jsxs(n.Split,{children:[o.jsx(n.Item,{label:"Open story (Tooltip placement right)",onClick:()=>{window.location.href="/iframe.html?path=/story/components-menu--secondary-action"}}),o.jsx("span",{className:t("disclosure-target"),children:o.jsx(n.SecondaryAction,{...r,tooltipPlacement:"right",onClick:()=>{window.open("/?path=/story/components-menu--secondary-action","_blank")?.focus()}})})]})}),o.jsx("div",{className:t("disclosure-trigger"),children:o.jsxs(n.Split,{children:[o.jsx(n.Item,{label:"Open story",onClick:()=>{window.location.href="/iframe.html?path=/story/components-menu--secondary-action"}}),o.jsx("span",{className:t("disclosure-target"),children:o.jsx(n.SecondaryAction,{...r,onClick:()=>{window.open("/?path=/story/components-menu--secondary-action","_blank")?.focus()}})})]})})]}),children:o.jsx(s,{label:"Actions"})}),argTypes:i,parameters:{chromatic:{disableSnapshot:!0}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
