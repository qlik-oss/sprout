import{j as o}from"./iframe-s7Iwh0oT.js";import{M as t,u as a}from"./Modal-B8OvvIyU.js";import{d as p}from"./Modal.argTypes-2sFqnzz1.js";import{B as i}from"./Button-BLnymG9d.js";import{C as m}from"./Checkbox-V5fI8Yve.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./classNames-BgUAGgdt.js";import"./sprout-Bvx94sbk.js";import"./useI18n-DNSc_Xzu.js";import"./close-Bbk9t1FU.js";import"./move-left-DgChsxhn.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./info-DM6050LP.js";import"./IconButton-zwf3qVx9.js";import"./useHasOverflow-Bo6hxDeF.js";import"./Divider-BMuu4i8A.js";import"./Dialog-N5Qk9w5h.js";import"./useControl-CS-bltOB.js";import"./Icons-CovZA8ho.js";import"./index-Cjzpg9K1.js";import"./add-phUaYqr2.js";import"./move-right-CjgOxL1h.js";import"./bookmark-Cey_2BFE.js";import"./text-DyI8tiuz.js";import"./upload-B0Ew5N01.js";import"./sort-descending-OBAQsHI9.js";import"./undo-BkTBorEJ.js";import"./settings-Dgdg0xWp.js";import"./copy-D5AkX6QI.js";import"./delete-cf8eEynv.js";import"./documentation-DPV8gHFU.js";import"./edit-PEgxvuNP.js";import"./error-DwsaS794.js";import"./favorited-BVK7D5qd.js";import"./generate-with-ai-BbRQXXpT.js";import"./subtract-nH5WHpwI.js";import"./hide-DKS27jyb.js";import"./history-DnP2rvJO.js";import"./search-yk4qOQEV.js";import"./person-Ds3mXeFF.js";import"./map-d8AgHSnc.js";import"./more-vertical-BEPBAxGJ.js";import"./new-tab-WxcYfP2Y.js";import"./notification-DtKu0F84.js";import"./paste-DtW837rj.js";import"./show-OD0q4moC.js";import"./warning-CAFk7pxH.js";import"./tenant-DVh-K1xI.js";import"./Field.argTypes-1rEre7SB.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./ProgressCircular-Dm76i-ei.js";import"./useValueControl-BSJFleLi.js";import"./HelperText-Bw9VVLAT.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(m,{name:"checkbox-name",label:"Checkbox label",onChange:s()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
