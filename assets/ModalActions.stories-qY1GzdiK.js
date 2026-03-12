import{j as o}from"./iframe-Bp0nu8X6.js";import{M as e,u as a}from"./Modal-cyv_U4YR.js";import{a as m}from"./Modal.argTypes-CubNIYw6.js";import{C as s}from"./Checkbox-Djd4-Wye.js";import{B as i}from"./Button-CBkOB6z4.js";import{c as p}from"./classNames-BUd7eP-S.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./sprout-rpr_484f.js";import"./useI18n-D2jaKmf9.js";import"./close-CJ5Ns5F2.js";import"./move-left-CfXNAwsO.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./info-DGMlSu_6.js";import"./IconButton-Bu152FGZ.js";import"./useHasOverflow-BYHEzBW0.js";import"./Divider-B3J7iNd7.js";import"./Dialog-Cr5lw4sh.js";import"./useControl-CS67YHbK.js";import"./Icons-DjXICJaU.js";import"./index-ebX9fmIs.js";import"./add-DiIoSsfz.js";import"./move-right-CK_WVS8x.js";import"./bookmark-BjcmHdPC.js";import"./text-CczEg3TU.js";import"./upload-8H-KEWMp.js";import"./sort-descending-Denwaaa7.js";import"./undo-DC82ZJyQ.js";import"./settings-AJKzQdc1.js";import"./copy-BYWkoi5_.js";import"./delete-CSyzwOk8.js";import"./documentation-6ghMNW6p.js";import"./edit-Dwo3NC30.js";import"./error-BcSU3HuT.js";import"./favorited-xiONJzzc.js";import"./generate-with-ai-BLISbXKJ.js";import"./subtract-Co-tykP9.js";import"./hide-DryimjwN.js";import"./history-Ddui-ZW8.js";import"./search-DYca-rrs.js";import"./person-lmjX5hbo.js";import"./map-BFrox4w-.js";import"./more-vertical-gmqyBEHm.js";import"./new-tab-uRDDQ1v4.js";import"./notification-Ah1qGB0i.js";import"./paste-By_tHdXO.js";import"./show-BUDxgafp.js";import"./warning-CT_3wb2_.js";import"./tenant-5cFbeFqF.js";import"./Field.argTypes-1rEre7SB.js";import"./useValueControl-DAQoJtS1.js";import"./HelperText-NWZ1zrXV.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./ProgressCircular-DO25q9z0.js";const uo={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(s,{label:"Left aligned checkbox"})},argTypes:m};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
