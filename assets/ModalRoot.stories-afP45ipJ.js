import{j as o}from"./iframe-Bp0nu8X6.js";import{M as t,u as a}from"./Modal-cyv_U4YR.js";import{d as p}from"./Modal.argTypes-CubNIYw6.js";import{B as i}from"./Button-CBkOB6z4.js";import{C as m}from"./Checkbox-Djd4-Wye.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./classNames-BUd7eP-S.js";import"./sprout-rpr_484f.js";import"./useI18n-D2jaKmf9.js";import"./close-CJ5Ns5F2.js";import"./move-left-CfXNAwsO.js";import"./InfoTooltipPrimitive-C8AQG5h1.js";import"./info-DGMlSu_6.js";import"./IconButton-Bu152FGZ.js";import"./useHasOverflow-BYHEzBW0.js";import"./Divider-B3J7iNd7.js";import"./Dialog-Cr5lw4sh.js";import"./useControl-CS67YHbK.js";import"./Icons-DjXICJaU.js";import"./index-ebX9fmIs.js";import"./add-DiIoSsfz.js";import"./move-right-CK_WVS8x.js";import"./bookmark-BjcmHdPC.js";import"./text-CczEg3TU.js";import"./upload-8H-KEWMp.js";import"./sort-descending-Denwaaa7.js";import"./undo-DC82ZJyQ.js";import"./settings-AJKzQdc1.js";import"./copy-BYWkoi5_.js";import"./delete-CSyzwOk8.js";import"./documentation-6ghMNW6p.js";import"./edit-Dwo3NC30.js";import"./error-BcSU3HuT.js";import"./favorited-xiONJzzc.js";import"./generate-with-ai-BLISbXKJ.js";import"./subtract-Co-tykP9.js";import"./hide-DryimjwN.js";import"./history-Ddui-ZW8.js";import"./search-DYca-rrs.js";import"./person-lmjX5hbo.js";import"./map-BFrox4w-.js";import"./more-vertical-gmqyBEHm.js";import"./new-tab-uRDDQ1v4.js";import"./notification-Ah1qGB0i.js";import"./paste-By_tHdXO.js";import"./show-BUDxgafp.js";import"./warning-CT_3wb2_.js";import"./tenant-5cFbeFqF.js";import"./Field.argTypes-1rEre7SB.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./ProgressCircular-DO25q9z0.js";import"./useValueControl-DAQoJtS1.js";import"./HelperText-NWZ1zrXV.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(m,{name:"checkbox-name",label:"Checkbox label",onChange:s()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <Modal.Root {...props} ref={container.ref}>
        <Modal.Header description="Header description">
          Modal with composition of JSX elements
        </Modal.Header>
        <Modal.Content padding>
          Content explicitly wrapped into ModalContent
        </Modal.Content>
        <Modal.Actions metaLabel="3 licences left" left={<Checkbox name="checkbox-name" label="Checkbox label" onChange={fn()} />}>
          <Button variant="secondary" label="Secondary action" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          xs: true,
          s: false
        })} />
          <Button variant="primary" label="Primary action" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          xs: true,
          s: false
        })} />
        </Modal.Actions>
      </Modal.Root>;
  },
  args: {
    visible: true,
    width: "l"
  },
  argTypes: ModalRootArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...r.parameters?.docs?.source}}};const Co=["Root"];export{r as Root,Co as __namedExportsOrder,fo as default};
