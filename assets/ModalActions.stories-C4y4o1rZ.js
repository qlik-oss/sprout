import{j as o}from"./iframe-ZO3EpHUh.js";import{M as e,u as a}from"./Modal-BSsi77Sv.js";import{a as m}from"./Modal.argTypes-XRb4ppuT.js";import{C as s}from"./Checkbox-Gl5nFt4x.js";import{B as i}from"./Button-DwNMLHHD.js";import{c as p}from"./classNames--9J8KLdq.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CjNQJJZv.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-CTOYJqpW.js";import"./useId-peRdP77j.js";import"./sprout-JWClaPEx.js";import"./useI18n-CNj_Vmmx.js";import"./close-CFDHWYro.js";import"./move-left-CblN84mj.js";import"./InfoTooltipPrimitive-CX2r-Osw.js";import"./info-DvsPKJb0.js";import"./IconButton-CM9e8KDm.js";import"./useHasOverflow-b7ARuLn8.js";import"./Divider-Bbj5__gU.js";import"./Dialog-CWdxBo8Y.js";import"./useControl-B2Bmxigf.js";import"./Icons-BZbU0tdy.js";import"./index-jgDKZr1Q.js";import"./add-DMALUOT2.js";import"./move-right-0KirwidR.js";import"./bookmark-9oZ8n8m5.js";import"./text-CcDxx1vh.js";import"./upload-n0dw6Lvi.js";import"./sort-descending-DuwJD51Q.js";import"./undo-BAeS--dQ.js";import"./settings-DHuZ5QaZ.js";import"./copy-IFVMzOQk.js";import"./delete-B7ujbQKr.js";import"./documentation-BinzBdHI.js";import"./edit-BH8KrMyX.js";import"./error-Lg61ZlTl.js";import"./favorited-D41QBsE5.js";import"./generate-with-ai-D3Na992K.js";import"./subtract-1H6W3dfs.js";import"./hide-CTXMH0dL.js";import"./history-D4JWxRxn.js";import"./search-D8g2pafp.js";import"./person-Dece0dLK.js";import"./map-CMc8fJla.js";import"./more-vertical-D3wa18aZ.js";import"./new-tab-CfvnCP2A.js";import"./notification-BwvpND0x.js";import"./paste-DoYSMiJq.js";import"./show-Do692Dy4.js";import"./warning-LAozOqxS.js";import"./tenant-1icmyCcT.js";import"./Field.argTypes-1rEre7SB.js";import"./useValueControl-B3H3Rg3H.js";import"./HelperText-BqjFHr21.js";import"./Button.module-CmtyAZAy.js";import"./common-bQH3ZR03.js";import"./Badge-CIU99cFr.js";import"./ProgressCircular-Bbm1pjbl.js";const uo={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(s,{label:"Left aligned checkbox"})},argTypes:m};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
