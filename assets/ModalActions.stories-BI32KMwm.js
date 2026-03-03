import{j as o}from"./iframe-CuV-KuE-.js";import{M as e,u as a}from"./Modal-D87glACY.js";import{a as s}from"./Modal.argTypes-CzCjcpJO.js";import{C as m}from"./Checkbox-C-Sefky0.js";import{B as i}from"./Button-D_CeIuO9.js";import{c as p}from"./classNames-fYnfVJ-g.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Dlf0g86C.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-tUeULyiG.js";import"./useId-CKb71T0Y.js";import"./sprout-DQv_ITqK.js";import"./useI18n-BPziWXqP.js";import"./Close-DVZAYT6i.js";import"./icons-BouMdmeh.js";import"./InfoTooltipPrimitive-DsZRUk_-.js";import"./Info-BDH0-Rmp.js";import"./IconButton-DFJpbTCt.js";import"./useHasOverflow-CS__m2Gh.js";import"./Divider-D0F_5EBr.js";import"./Dialog-BHc8XAY1.js";import"./useControl-CYhNvxn-.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-COWbX-_T.js";import"./index-ZpacE07-.js";import"./Add-Cf52a-Iw.js";import"./Next-CzIf6tFa.js";import"./Bookmark-Cfrl-l3v.js";import"./Upload-D7LwmtHu.js";import"./Text-B_JGQA-d.js";import"./SortDescending-BF67BDZs.js";import"./Undo-sM27ww-Z.js";import"./Person-BiHoIXFe.js";import"./Copy-DvC_cMuU.js";import"./Delete-Bl0muSQk.js";import"./Filter-kyYncYCp.js";import"./Edit-CS5l4TjY.js";import"./Error-D9ghOnKS.js";import"./GenerateWithAi-CMN6Dlk9.js";import"./History-B7YXfS-_.js";import"./Search-Bwt14ckx.js";import"./Subtract-CuWUOSm8.js";import"./Map-COzyd6Qy.js";import"./NewTab-DJ0MS9BP.js";import"./Notification-uMs6TdK2.js";import"./Paste-D5k1MGSi.js";import"./Warning-TGmbdRgn.js";import"./Tenant-CZvZ-A9d.js";import"./useValueControl-DLR8SBP3.js";import"./HelperText-Ctcx11cL.js";import"./Button.module-CmdpHks8.js";import"./Badge-Dt3dHAo1.js";import"./ProgressCircular-DDsJKJWC.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
