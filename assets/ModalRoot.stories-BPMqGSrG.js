import{j as o}from"./iframe-CxjlquLv.js";import{M as t,u as a}from"./Modal-CJwSuZ6u.js";import{d as p}from"./Modal.argTypes-BE83lBfo.js";import{B as i}from"./Button-DovarDo_.js";import{C as s}from"./Checkbox-D56eS5Zk.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./classNames-OYhIMgh8.js";import"./sprout-BMjCkMv3.js";import"./useI18n-DzUau43H.js";import"./Close-PE5EsNbf.js";import"./icons-LhMznsFI.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Info-CmHBCOIz.js";import"./IconButton-Dn95SqkZ.js";import"./useHasOverflow-BuWth_t2.js";import"./Divider-7ZQA3_Ws.js";import"./Dialog-DrikC8ZT.js";import"./useControl-BQvv0ErP.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-DQbIzlC6.js";import"./index-CQX_9EpV.js";import"./Add-DmDJ4n-J.js";import"./Next-CVX7Uflh.js";import"./Bookmark-BfuinAGV.js";import"./Upload-DugaVjZ7.js";import"./Text-DQVBHukE.js";import"./SortDescending-mZ0sHp6G.js";import"./Undo-p2AAmykz.js";import"./Person-BchZ2R-s.js";import"./Copy-E7NdQvaj.js";import"./Delete-DRUG6ixk.js";import"./Filter-CNv6SvW2.js";import"./Edit-CBUd60Nh.js";import"./Error-Cwyymijo.js";import"./GenerateWithAi-D14jyyKQ.js";import"./History-CjSFFZ-w.js";import"./Search-BpoXSxFe.js";import"./Subtract-Cskw5IaI.js";import"./Map-BEEFfX2w.js";import"./NewTab-thqnkD83.js";import"./Notification-CoJL-wfE.js";import"./Paste-DbcEs-AL.js";import"./Warning-x2bCUA0M.js";import"./Tenant-BNPdNRwP.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./ProgressCircular-54Bo0zt0.js";import"./useValueControl-z08PllWD.js";import"./HelperText-CEBD_W8W.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
