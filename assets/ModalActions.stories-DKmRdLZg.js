import{j as o}from"./iframe-B9QkJTIx.js";import{M as e,u as a}from"./Modal-DV4vX9Ds.js";import{a as s}from"./Modal.argTypes-Xd6SBn-P.js";import{C as m}from"./Checkbox-CYD4A7GS.js";import{B as i}from"./Button-DJuasLWt.js";import{c as p}from"./classNames-CL7ibyjj.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Csm9nS2W.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-Dge73wkB.js";import"./useId-HR4iyljw.js";import"./sprout-DgR7PjaR.js";import"./useI18n-CoLWfcqJ.js";import"./Close-ajP2gTu5.js";import"./icons-Duy9VSzr.js";import"./InfoTooltipPrimitive-DoWpqGGg.js";import"./Info-BWEZF-KM.js";import"./IconButton-CrQ3EA5C.js";import"./useHasOverflow-BYbTVzOs.js";import"./Divider-CQpF3Ph8.js";import"./Dialog-C880vGGZ.js";import"./useControl-CYR4PP7j.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-qa2VzuXs.js";import"./index-CiVzO2ac.js";import"./Add-BjVpk_Pb.js";import"./Next-DxRLu1Wn.js";import"./Bookmark-CJMWsvxd.js";import"./Upload-DjMqRod7.js";import"./Text-CFyCRCFc.js";import"./SortDescending-CLGWMbYc.js";import"./Undo-DzDelDAE.js";import"./Person-B_HiAQwp.js";import"./Copy-CYZlhrEr.js";import"./Delete-DvtIirUL.js";import"./Filter-CLC5itR3.js";import"./Edit-BObi6k7U.js";import"./Error-Blwva2SQ.js";import"./GenerateWithAi-DIR2TiqE.js";import"./History-EyRsG5aa.js";import"./Search-DTGA04Xo.js";import"./Subtract-BWidOSSU.js";import"./Map-D73tVC2W.js";import"./NewTab-BMd_bij_.js";import"./Notification-B0ihougB.js";import"./Paste-Bz8M9Fm4.js";import"./Warning-B4wA6Xoa.js";import"./Tenant-YIqGolFt.js";import"./useValueControl-Db5KsQ4Q.js";import"./HelperText-BYWuUqrF.js";import"./Button.module-C2ELNEem.js";import"./Badge--_cWWvgS.js";import"./ProgressCircular-CftNoQ2F.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const lo=["Actions"];export{t as Actions,lo as __namedExportsOrder,po as default};
