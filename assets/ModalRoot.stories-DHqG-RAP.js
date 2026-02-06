import{j as o}from"./iframe-B4-nXs83.js";import{M as t,u as a}from"./Modal-ty0zhNW5.js";import{d as p}from"./Modal.argTypes-BepMV5Qc.js";import{B as i}from"./Button-Cv6yFaKa.js";import{C as s}from"./Checkbox-BZ2qRRvw.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BmEIvhna.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CKYJ27w7.js";import"./useId-D71ehFqY.js";import"./classNames-eIMwhIDK.js";import"./sprout-SOoz1jzb.js";import"./useI18n-peGtGOOS.js";import"./Close-BgZ1uSF_.js";import"./icons-DuVV-LnW.js";import"./InfoTooltipPrimitive-D8jVv135.js";import"./Info-DTuI-Of7.js";import"./IconButton-D-KEKYAI.js";import"./useHasOverflow-DZlgyJuB.js";import"./Divider-DdqecLrr.js";import"./Dialog-DHxW9vdp.js";import"./useControl-DdRfwf_0.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-DeygH5Zz.js";import"./index-DD81b0jm.js";import"./Add-BPhJi-H4.js";import"./Next-BDMe8uha.js";import"./Bookmark-DcjvKNmY.js";import"./Upload-BRvcNbMW.js";import"./Text-dLWgk66T.js";import"./SortDescending-CKWll_c0.js";import"./Undo-DDEyeJBa.js";import"./Person-BtJ6dcuR.js";import"./Copy-DgfNcGoS.js";import"./Delete-D5Va6LI1.js";import"./Filter-DrTBmiDb.js";import"./Edit-DzJTkpRk.js";import"./Error-D7GK58M_.js";import"./GenerateWithAi-s4i5IFD7.js";import"./History-rKaZ75zu.js";import"./Search-Ci5Kqw6S.js";import"./Subtract-5iLtEsER.js";import"./Map-D3Po8JT9.js";import"./NewTab-Bx55GzRW.js";import"./Notification-BWSivEeO.js";import"./Paste-bE7IXLRc.js";import"./Warning-BAtVE0v3.js";import"./Tenant-Y0aD2fSL.js";import"./Button.module-C2ELNEem.js";import"./Badge-DvRPOsa9.js";import"./ProgressCircular-CVxkPa9h.js";import"./useValueControl-CtQhivtG.js";import"./HelperText-ByCNTNQH.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
