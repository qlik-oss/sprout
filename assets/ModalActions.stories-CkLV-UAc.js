import{j as o}from"./iframe-DuYosUFD.js";import{M as e,u as a}from"./Modal-_RTHFeIE.js";import{a as m}from"./Modal.argTypes-_WfiTsAX.js";import{C as s}from"./Checkbox-4-pENTYN.js";import{B as i}from"./Button-DI0ZynHS.js";import{c as p}from"./classNames-zePBlFY_.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BJFaRrUy.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-DjHAObcc.js";import"./useId-DRaip_NL.js";import"./sprout-CvRh1TM0.js";import"./useI18n-BjJPdLTM.js";import"./close-Dyzj91Dc.js";import"./move-left-DN19XWNV.js";import"./InfoTooltipPrimitive-D-yTz8eW.js";import"./info-Bxa3p2DF.js";import"./IconButton-BE9E_AnQ.js";import"./useHasOverflow-BuHjGHjQ.js";import"./Divider-DVRuu_FL.js";import"./Dialog-CG7q9W81.js";import"./useControl-DOCWDNqa.js";import"./Icons-CxYMpq3s.js";import"./index-DcMjNI1G.js";import"./add-Vg2U0mSE.js";import"./move-right-k-BFnqYV.js";import"./bookmark-wwgiEeRj.js";import"./text-CIJRCYzm.js";import"./upload-ByT4gcdH.js";import"./sort-descending-BgZWkgGz.js";import"./undo-DK_DlrIJ.js";import"./settings-B-EBrcRv.js";import"./copy-CWKkJg96.js";import"./delete-D4O4nVVP.js";import"./documentation-DABWpqS4.js";import"./edit-DeXKaZx5.js";import"./error-CXY2goRU.js";import"./favorited-DIjhIM7P.js";import"./generate-with-ai-DxZm9B-P.js";import"./subtract-DEs7_1mh.js";import"./hide-D4X3-KSw.js";import"./history-CMLopSL0.js";import"./search-__Gpjj1t.js";import"./person-C2sJpCzJ.js";import"./map-Be-Ow4bt.js";import"./more-vertical-B2Ek-mRZ.js";import"./new-tab-Dp-d2eWd.js";import"./notification-DNCR-roH.js";import"./paste-scJGRfKP.js";import"./show-Gqxo-URH.js";import"./warning-DO6AU_ml.js";import"./tenant-r2v49Krg.js";import"./Field.argTypes-1rEre7SB.js";import"./useValueControl-uslnr95T.js";import"./HelperText-6attHadj.js";import"./Button.module-D6kzoXVn.js";import"./common-bQH3ZR03.js";import"./Badge-CPj7NTO4.js";import"./ProgressCircular-BvkbtoQi.js";const uo={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(s,{label:"Left aligned checkbox"})},argTypes:m};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <div ref={container.ref} className={classNames("max-w-3xl")}>
        <Modal.Actions {...props}>
          <Button variant="secondary" label="Child action 1" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          s: false
        })} />
          <Button variant="primary" label="Child action 2" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          s: false
        })} />
        </Modal.Actions>
      </div>;
  },
  args: {
    metaLabel: "Modal actions meta label",
    left: <Checkbox label="Left aligned checkbox" />
  },
  argTypes: ModalActionsArgTypes
}`,...t.parameters?.docs?.source}}};const go=["Actions"];export{t as Actions,go as __namedExportsOrder,uo as default};
