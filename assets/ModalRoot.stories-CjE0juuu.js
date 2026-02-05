import{j as o}from"./iframe-B4vjk2_C.js";import{M as t,u as a}from"./Modal-CBU6SV9L.js";import{d as p}from"./Modal.argTypes-DlPpiqSt.js";import{B as i}from"./Button-COVTwlCl.js";import{C as s}from"./Checkbox-yXCe54NU.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-D1n48xKC.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-D3fq_iUv.js";import"./useId-DsPr7Fl4.js";import"./classNames-DaRWzB8T.js";import"./sprout-DTAeqvbL.js";import"./useI18n-DbSMZiRF.js";import"./Close-CzhTZSOO.js";import"./icons-BjYZgjFf.js";import"./InfoTooltipPrimitive-GcR7SVQV.js";import"./Info-qvjQZ4-p.js";import"./IconButton-Ba8Tcb-S.js";import"./useHasOverflow-D8ib81fX.js";import"./Divider-DqNucpfp.js";import"./Dialog-BxQNm9uS.js";import"./useControl-DPltlHoP.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-BmPwnPxU.js";import"./index-Z8VovJW6.js";import"./Add-CrXyYGj8.js";import"./AiSparkles-Dl0R-qK2.js";import"./Next-D7BL29gd.js";import"./Bookmark-CibNrEfK.js";import"./Upload-CPekzzW9.js";import"./Text-VlP5SB55.js";import"./SortDescending-B7jfx8Af.js";import"./Undo-9QyGmJ12.js";import"./Person-Dcr2ZAg5.js";import"./Copy-o7IORLfG.js";import"./Delete-B3An4l3N.js";import"./Filter-B97z2p0g.js";import"./Edit-DrJZ1rCf.js";import"./Error-aRqdswEO.js";import"./History-C5KmixAH.js";import"./Search-KjZbxp4C.js";import"./Subtract-CiGs9Rom.js";import"./Map-CaMFTBLm.js";import"./NewTab-CGCvqCB9.js";import"./Notification-Bvs5iQDr.js";import"./Paste-DdDmevxd.js";import"./Warning-mmXjUrwg.js";import"./Tenant-pz9GTM4b.js";import"./Button.module-C2ELNEem.js";import"./Badge-Coha5yr6.js";import"./ProgressCircular-CXDJvuy2.js";import"./useValueControl-f2Qxn85g.js";import"./HelperText-B-4Si9bt.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
