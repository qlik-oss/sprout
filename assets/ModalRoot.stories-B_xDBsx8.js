import{j as o}from"./iframe-B9QkJTIx.js";import{M as t,u as a}from"./Modal-DV4vX9Ds.js";import{d as p}from"./Modal.argTypes-Xd6SBn-P.js";import{B as i}from"./Button-DJuasLWt.js";import{C as s}from"./Checkbox-CYD4A7GS.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./classNames-CL7ibyjj.js";import"./sprout-DgR7PjaR.js";import"./useI18n-CoLWfcqJ.js";import"./Close-ajP2gTu5.js";import"./icons-Duy9VSzr.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Info-BWEZF-KM.js";import"./IconButton-CrQ3EA5C.js";import"./useHasOverflow-BYbTVzOs.js";import"./Divider-CQpF3Ph8.js";import"./Dialog-C880vGGZ.js";import"./useControl-CYR4PP7j.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-qa2VzuXs.js";import"./index-CiVzO2ac.js";import"./Add-BjVpk_Pb.js";import"./Next-DxRLu1Wn.js";import"./Bookmark-CJMWsvxd.js";import"./Upload-DjMqRod7.js";import"./Text-CFyCRCFc.js";import"./SortDescending-CLGWMbYc.js";import"./Undo-DzDelDAE.js";import"./Person-B_HiAQwp.js";import"./Copy-CYZlhrEr.js";import"./Delete-DvtIirUL.js";import"./Filter-CLC5itR3.js";import"./Edit-BObi6k7U.js";import"./Error-Blwva2SQ.js";import"./GenerateWithAi-DIR2TiqE.js";import"./History-EyRsG5aa.js";import"./Search-DTGA04Xo.js";import"./Subtract-BWidOSSU.js";import"./Map-D73tVC2W.js";import"./NewTab-BMd_bij_.js";import"./Notification-B0ihougB.js";import"./Paste-Bz8M9Fm4.js";import"./Warning-B4wA6Xoa.js";import"./Tenant-YIqGolFt.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./ProgressCircular-CftNoQ2F.js";import"./useValueControl-Db5KsQ4Q.js";import"./HelperText-BYWuUqrF.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <Modal.Root {...props} ref={container.ref}>
        <Modal.Header description="Header description">Modal with composition of JSX elements</Modal.Header>
        <Modal.Content padding>Content explicitly wrapped into ModalContent</Modal.Content>
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
}`,...r.parameters?.docs?.source}}};const lo=["Root"];export{r as Root,lo as __namedExportsOrder,mo as default};
