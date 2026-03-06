import{j as o}from"./iframe-lMEil1TA.js";import{M as e,u as a}from"./Modal-BxCwqNCg.js";import{a as m}from"./Modal.argTypes-CcZ9_rqo.js";import{C as s}from"./Checkbox-B2upM8Wa.js";import{B as i}from"./Button-B3VC5XuI.js";import{c as p}from"./classNames-B_Twdkca.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./sprout-fe7_-ZbP.js";import"./useI18n-CDksjSf0.js";import"./close-CrtKz3TF.js";import"./move-left-BJhvkpSj.js";import"./InfoTooltipPrimitive-BLPBLLHp.js";import"./info-B4Qytw2Z.js";import"./IconButton-CuZnXk5P.js";import"./useHasOverflow-BS8MxBL1.js";import"./Divider-DoFQjC9R.js";import"./Dialog-WLtetnxi.js";import"./useControl-Crf27nxo.js";import"./Icons-DXhpQYiC.js";import"./index-XQNqsQ5O.js";import"./add-OoYVhzw8.js";import"./move-right-CxgFVc5X.js";import"./bookmark-CXl6cost.js";import"./text-Dvq4klSt.js";import"./upload-531rT3Nn.js";import"./sort-descending-DBF7-f7_.js";import"./undo-DPBprsjr.js";import"./settings-oS6F6h_p.js";import"./copy-8HFCGFIv.js";import"./delete-CG-UgknF.js";import"./documentation-3Ki2NWn5.js";import"./edit-Bij8o67D.js";import"./error-D8ruDyrJ.js";import"./favorited-eFV-EpYm.js";import"./generate-with-ai-DxtmBI1k.js";import"./subtract-BFWMKw7W.js";import"./hide-J1VEVLcZ.js";import"./history-DsyI5OdF.js";import"./search-Cjd_t8Yd.js";import"./person-6TmEe_Ks.js";import"./map-Bw_UfIsn.js";import"./more-vertical-3Ccbf6lb.js";import"./new-tab-CrWdziAn.js";import"./notification-BvurbYEj.js";import"./paste-CWtbLVgn.js";import"./show-CL2zF-Fm.js";import"./warning-X1qrbfM3.js";import"./tenant-DisbRmPu.js";import"./Field.argTypes-1rEre7SB.js";import"./useValueControl-JgME-MAi.js";import"./HelperText-B_x3JSnr.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./ProgressCircular-DzkpdMMq.js";const uo={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(s,{label:"Left aligned checkbox"})},argTypes:m};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <div ref={container.ref} className={classNames("max-w-3xl")}>
        <Modal.Actions {...props}>
          <Button variant="secondary" label="Child action 1" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          s: false
        })} />
          <Button variant="primary" label="Child action 2" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          s: false
        })} />
        </Modal.Actions>
      </div>;
  },
  args: {
    metaLabel: "Modal actions meta label",
    left: <Checkbox label="Left aligned checkbox" />
  },
  argTypes: ModalActionsArgTypes
}`,...t.parameters?.docs?.source}}};const go=["Actions"];export{t as Actions,go as __namedExportsOrder,uo as default};
