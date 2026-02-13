import{j as o}from"./iframe-D-N3fK2j.js";import{M as e,u as a}from"./Modal-sxroFnBs.js";import{a as s}from"./Modal.argTypes-BODzkP4Z.js";import{C as m}from"./Checkbox-BypGcOIl.js";import{B as i}from"./Button-BiiNVP7I.js";import{c as p}from"./classNames-CrSIhzis.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DaX3jRge.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-25h2pNOO.js";import"./useId-Bkl3iN6O.js";import"./sprout-UDo5dA_z.js";import"./useI18n-ClHBar3-.js";import"./Close-Clva93gw.js";import"./icons-BEmnCRju.js";import"./InfoTooltipPrimitive-C8Uq1qY7.js";import"./Info-DKfyJpi1.js";import"./IconButton-Dg4ysz4Z.js";import"./useHasOverflow-BWQUK3f5.js";import"./Divider-Aa9jm5B9.js";import"./Dialog-CiRpLpyf.js";import"./useControl-U-WkQj2I.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-CGLv6dp6.js";import"./index-83n1lJXs.js";import"./Add-DHz0bRTt.js";import"./Next-DG_ldtCu.js";import"./Bookmark-Dg1w8U2T.js";import"./Upload-ClDjPMMt.js";import"./Text-Bpm64yqp.js";import"./SortDescending-7Is3TCUG.js";import"./Undo-Jt2aGM_z.js";import"./Person-C2Clk1QX.js";import"./Copy-DXsZFzm1.js";import"./Delete-o_szjHTs.js";import"./Filter-DXj_kdvE.js";import"./Edit-69Qgo7Td.js";import"./Error-CZbJtLWx.js";import"./GenerateWithAi-B8C8zDdl.js";import"./History-CQ5KoKvO.js";import"./Search-BEJfw-uV.js";import"./Subtract-DrooAXHe.js";import"./Map-DsyJdFaB.js";import"./NewTab-DIWrR844.js";import"./Notification-CjmHr3yB.js";import"./Paste-B-RxeU6b.js";import"./Warning-Dy5sqdbk.js";import"./Tenant-BSwEMVQe.js";import"./useValueControl-DH7McdQ1.js";import"./HelperText-DkWywDIM.js";import"./Button.module-CmdpHks8.js";import"./Badge-sJnchsAW.js";import"./ProgressCircular-CdUDfayh.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
