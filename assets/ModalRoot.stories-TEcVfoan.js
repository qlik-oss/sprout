import{j as o}from"./iframe-BQJExRCF.js";import{M as t,u as a}from"./Modal-BcMqdrC6.js";import{d as p}from"./Modal.argTypes-L03BYPI-.js";import{B as n}from"./Button-C7-D-GN_.js";import{C as s}from"./Checkbox-DxL7CNq4.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./classNames-B0wfWtWT.js";import"./sprout-DxA14K3u.js";import"./useI18n-B99T9obj.js";import"./Close-VT6FC74F.js";import"./icons-CzMI2h-K.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Info-BfRROe8g.js";import"./IconButton-BEI3RZpW.js";import"./useHasOverflow-o-wZv5E2.js";import"./Divider-Byw016rg.js";import"./Dialog-V0hlaycj.js";import"./useControl-XJuj1vyK.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-D8r5JLXA.js";import"./Add-CPO6AOva.js";import"./AiSparkles-ybqQooZU.js";import"./Next-BCf902gw.js";import"./Bookmark-DEDDSCCD.js";import"./Upload-JDlmgr1C.js";import"./Text-fjMciMda.js";import"./SortDescending-BWpZ9BF7.js";import"./Undo-B1PPlUQq.js";import"./Person-8oMSnh08.js";import"./Copy-ERSXBUQF.js";import"./Delete-CrLV--N3.js";import"./Filter-bb23MOEL.js";import"./Edit-Bc7r3LZJ.js";import"./Error-B95qseKK.js";import"./History-BSF-XiSG.js";import"./Search-B3R4dCNd.js";import"./Subtract-Ca-OouU7.js";import"./Map-pFYOI1fT.js";import"./NewTab-BMHt_Vx2.js";import"./Notification-BlWUDy4b.js";import"./Paste-Cd-nv27Q.js";import"./Warning-BB_ZpJQH.js";import"./Tenant-I_uTRlDg.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./ProgressCircular-B4mHH4_Y.js";import"./useValueControl-CRzMHMlu.js";import"./HelperText-CWubgWiG.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,so={title:"Components/Modal/Composition/Root",component:t.Root},r={render:i=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...i,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(n,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(n,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const mo=["Root"];export{r as Root,mo as __namedExportsOrder,so as default};
