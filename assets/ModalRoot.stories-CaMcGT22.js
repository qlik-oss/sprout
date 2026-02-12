import{j as o}from"./iframe-B4Gn7jRD.js";import{M as t,u as a}from"./Modal-CMui8VoY.js";import{d as p}from"./Modal.argTypes-Dxw18voe.js";import{B as i}from"./Button-DuNeVE70.js";import{C as s}from"./Checkbox-CO6m99Pi.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BG958zrQ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-COCCCrf6.js";import"./useId-DXegRsHP.js";import"./classNames-CTBLippR.js";import"./sprout-CWCWYkgH.js";import"./useI18n-DOe-EdfE.js";import"./Close-DbHLglso.js";import"./icons-CPBvMsVh.js";import"./InfoTooltipPrimitive-YcCF56yH.js";import"./Info-C0xP7z1J.js";import"./IconButton-CoZ792nv.js";import"./useHasOverflow-B8tWSk8V.js";import"./Divider-OzvHaalV.js";import"./Dialog-D8rWnwN7.js";import"./useControl-7TH6mjrF.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-Cn4ElvJa.js";import"./index-9KegtbkR.js";import"./Add-CKNXHNSz.js";import"./Next-C0judd8d.js";import"./Bookmark-CKHX2VYo.js";import"./Upload-BAurdPXS.js";import"./Text-BW23LcKZ.js";import"./SortDescending-CucUSsiY.js";import"./Undo-DLO9n_h1.js";import"./Person-CNI9Q8fr.js";import"./Copy-NISNc1Lm.js";import"./Delete-fA9YqxRL.js";import"./Filter-khtwO5TH.js";import"./Edit-BJvse-oo.js";import"./Error-ClTRWykU.js";import"./GenerateWithAi-C6A5sahu.js";import"./History-CgCTywjh.js";import"./Search-DN4_Th9X.js";import"./Subtract-BjFnpmMb.js";import"./Map-DeFMr3_u.js";import"./NewTab-BFfS-RhS.js";import"./Notification-CGfvhvJZ.js";import"./Paste-DGzyaON5.js";import"./Warning-BFJpCY38.js";import"./Tenant-D8URuGVO.js";import"./Button.module-C2ELNEem.js";import"./Badge-CknI2ibL.js";import"./ProgressCircular-C_VqfatA.js";import"./useValueControl-_ZNYrQQF.js";import"./HelperText-BkP0Ayki.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
