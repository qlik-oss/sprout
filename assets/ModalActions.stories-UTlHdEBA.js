import{j as o}from"./iframe-BThSoDrn.js";import{M as e,u as a}from"./Modal-CGO76POR.js";import{a as s}from"./Modal.argTypes-PHwFRRg1.js";import{C as m}from"./Checkbox-CwbydU-X.js";import{B as i}from"./Button-DPdoSvtR.js";import{c as p}from"./classNames-dIthk07I.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-g36jqBzQ.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DhaNE9oh.js";import"./useId-hgAQXGHZ.js";import"./sprout-C7A3N88C.js";import"./useI18n-DEBX20KE.js";import"./Close-jEAlxUHo.js";import"./icons-m7QrAy0p.js";import"./InfoTooltipPrimitive-DKXNBt4b.js";import"./Info-CD_iaTpZ.js";import"./IconButton-BNf-P6Px.js";import"./useHasOverflow-ChjOj1VO.js";import"./Divider-BDGjRrdZ.js";import"./Dialog-0SPgUO0Y.js";import"./useControl-BsRaFebD.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-4m1Sc84h.js";import"./Add-BQFdkl2e.js";import"./AiSparkles-CmZ_srcr.js";import"./Next-1Q1bqM5p.js";import"./Bookmark-CVLzqLqN.js";import"./Upload-Bm4njtlo.js";import"./Text-6G8hA-h1.js";import"./SortDescending-DRIoVd-M.js";import"./Undo-WuNimhT1.js";import"./Person-3cl35KlB.js";import"./Copy-jAGX-G5W.js";import"./Delete-BwyAIRQQ.js";import"./Filter-DiKfENlM.js";import"./Edit-BnWU-wtK.js";import"./Error-LWra2rFD.js";import"./History-BWwEcsLz.js";import"./Search-c6Wqd6yN.js";import"./Subtract-CRNAvJ2c.js";import"./Map-BSYcvYLi.js";import"./NewTab-RTkCp496.js";import"./Notification-D5_SHIKo.js";import"./Paste-CF9HfvBI.js";import"./Warning-BKQeZIO5.js";import"./Tenant-DemsO5Qk.js";import"./useValueControl-GMse0bib.js";import"./HelperText-bJIP0f1z.js";import"./Button.module-C2ELNEem.js";import"./Badge-BD7yv9SE.js";import"./ProgressCircular-3frmJwTX.js";const mo={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
