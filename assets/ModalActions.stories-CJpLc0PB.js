import{j as o}from"./iframe-BQJExRCF.js";import{M as e,u as a}from"./Modal-BcMqdrC6.js";import{a as s}from"./Modal.argTypes-L03BYPI-.js";import{C as m}from"./Checkbox-DxL7CNq4.js";import{B as i}from"./Button-C7-D-GN_.js";import{c as p}from"./classNames-B0wfWtWT.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CVFOQrqK.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DAgGzV0n.js";import"./useId-Drz8gmS2.js";import"./sprout-DxA14K3u.js";import"./useI18n-B99T9obj.js";import"./Close-VT6FC74F.js";import"./icons-CzMI2h-K.js";import"./InfoTooltipPrimitive-BqPdPqRN.js";import"./Info-BfRROe8g.js";import"./IconButton-BEI3RZpW.js";import"./useHasOverflow-o-wZv5E2.js";import"./Divider-Byw016rg.js";import"./Dialog-V0hlaycj.js";import"./useControl-XJuj1vyK.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-D8r5JLXA.js";import"./Add-CPO6AOva.js";import"./AiSparkles-ybqQooZU.js";import"./Next-BCf902gw.js";import"./Bookmark-DEDDSCCD.js";import"./Upload-JDlmgr1C.js";import"./Text-fjMciMda.js";import"./SortDescending-BWpZ9BF7.js";import"./Undo-B1PPlUQq.js";import"./Person-8oMSnh08.js";import"./Copy-ERSXBUQF.js";import"./Delete-CrLV--N3.js";import"./Filter-bb23MOEL.js";import"./Edit-Bc7r3LZJ.js";import"./Error-B95qseKK.js";import"./History-BSF-XiSG.js";import"./Search-B3R4dCNd.js";import"./Subtract-Ca-OouU7.js";import"./Map-pFYOI1fT.js";import"./NewTab-BMHt_Vx2.js";import"./Notification-BlWUDy4b.js";import"./Paste-Cd-nv27Q.js";import"./Warning-BB_ZpJQH.js";import"./Tenant-I_uTRlDg.js";import"./useValueControl-CRzMHMlu.js";import"./HelperText-CWubgWiG.js";import"./Button.module-C2ELNEem.js";import"./Badge-B9--3FkB.js";import"./ProgressCircular-B4mHH4_Y.js";const mo={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const po=["Actions"];export{t as Actions,po as __namedExportsOrder,mo as default};
