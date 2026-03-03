import{j as o}from"./iframe-CuV-KuE-.js";import{M as t,u as a}from"./Modal-D87glACY.js";import{d as p}from"./Modal.argTypes-CzCjcpJO.js";import{B as i}from"./Button-D_CeIuO9.js";import{C as s}from"./Checkbox-C-Sefky0.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Dlf0g86C.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-tUeULyiG.js";import"./useId-CKb71T0Y.js";import"./classNames-fYnfVJ-g.js";import"./sprout-DQv_ITqK.js";import"./useI18n-BPziWXqP.js";import"./Close-DVZAYT6i.js";import"./icons-BouMdmeh.js";import"./InfoTooltipPrimitive-DsZRUk_-.js";import"./Info-BDH0-Rmp.js";import"./IconButton-DFJpbTCt.js";import"./useHasOverflow-CS__m2Gh.js";import"./Divider-D0F_5EBr.js";import"./Dialog-BHc8XAY1.js";import"./useControl-CYhNvxn-.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-COWbX-_T.js";import"./index-ZpacE07-.js";import"./Add-Cf52a-Iw.js";import"./Next-CzIf6tFa.js";import"./Bookmark-Cfrl-l3v.js";import"./Upload-D7LwmtHu.js";import"./Text-B_JGQA-d.js";import"./SortDescending-BF67BDZs.js";import"./Undo-sM27ww-Z.js";import"./Person-BiHoIXFe.js";import"./Copy-DvC_cMuU.js";import"./Delete-Bl0muSQk.js";import"./Filter-kyYncYCp.js";import"./Edit-CS5l4TjY.js";import"./Error-D9ghOnKS.js";import"./GenerateWithAi-CMN6Dlk9.js";import"./History-B7YXfS-_.js";import"./Search-Bwt14ckx.js";import"./Subtract-CuWUOSm8.js";import"./Map-COzyd6Qy.js";import"./NewTab-DJ0MS9BP.js";import"./Notification-uMs6TdK2.js";import"./Paste-D5k1MGSi.js";import"./Warning-TGmbdRgn.js";import"./Tenant-CZvZ-A9d.js";import"./Button.module-CmdpHks8.js";import"./Badge-Dt3dHAo1.js";import"./ProgressCircular-DDsJKJWC.js";import"./useValueControl-DLR8SBP3.js";import"./HelperText-Ctcx11cL.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
