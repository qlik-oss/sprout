import{j as o}from"./iframe-DuYosUFD.js";import{M as t,u as a}from"./Modal-_RTHFeIE.js";import{d as p}from"./Modal.argTypes-_WfiTsAX.js";import{B as i}from"./Button-DI0ZynHS.js";import{C as m}from"./Checkbox-4-pENTYN.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./classNames-zePBlFY_.js";import"./sprout-CvRh1TM0.js";import"./useI18n-BjJPdLTM.js";import"./close-Dyzj91Dc.js";import"./move-left-DN19XWNV.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./info-Bxa3p2DF.js";import"./IconButton-BE9E_AnQ.js";import"./useHasOverflow-BuHjGHjQ.js";import"./Divider-DVRuu_FL.js";import"./Dialog-CG7q9W81.js";import"./useControl-DOCWDNqa.js";import"./Icons-CxYMpq3s.js";import"./index-DcMjNI1G.js";import"./add-Vg2U0mSE.js";import"./move-right-k-BFnqYV.js";import"./bookmark-wwgiEeRj.js";import"./text-CIJRCYzm.js";import"./upload-ByT4gcdH.js";import"./sort-descending-BgZWkgGz.js";import"./undo-DK_DlrIJ.js";import"./settings-B-EBrcRv.js";import"./copy-CWKkJg96.js";import"./delete-D4O4nVVP.js";import"./documentation-DABWpqS4.js";import"./edit-DeXKaZx5.js";import"./error-CXY2goRU.js";import"./favorited-DIjhIM7P.js";import"./generate-with-ai-DxZm9B-P.js";import"./subtract-DEs7_1mh.js";import"./hide-D4X3-KSw.js";import"./history-CMLopSL0.js";import"./search-__Gpjj1t.js";import"./person-C2sJpCzJ.js";import"./map-Be-Ow4bt.js";import"./more-vertical-B2Ek-mRZ.js";import"./new-tab-Dp-d2eWd.js";import"./notification-DNCR-roH.js";import"./paste-scJGRfKP.js";import"./show-Gqxo-URH.js";import"./warning-DO6AU_ml.js";import"./tenant-r2v49Krg.js";import"./Field.argTypes-1rEre7SB.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./ProgressCircular-BvkbtoQi.js";import"./useValueControl-uslnr95T.js";import"./HelperText-6attHadj.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,fo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(m,{name:"checkbox-name",label:"Checkbox label",onChange:s()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
