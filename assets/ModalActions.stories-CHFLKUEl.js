import{j as o}from"./iframe-DO7qjpir.js";import{M as e,u as a}from"./Modal-B2ljG3s9.js";import{a as s}from"./Modal.argTypes-BxjON4o7.js";import{C as m}from"./Checkbox-CzZgz8P2.js";import{B as i}from"./Button-DWGkri9_.js";import{c as p}from"./classNames-C2xvgHQf.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Bnp9G-JS.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-C_aUAXE9.js";import"./useId-B9UV2KOW.js";import"./sprout-nCaIAc8k.js";import"./useI18n-CbD-mhn-.js";import"./Close-DVlpLiwK.js";import"./icons-B7D59aOJ.js";import"./InfoTooltipPrimitive-CE8VNDL8.js";import"./Info-CoVbxZIf.js";import"./IconButton-GXyV3m9d.js";import"./useHasOverflow-CKe90G_4.js";import"./Divider-BpSmZpjh.js";import"./Dialog-B7jDT_Cn.js";import"./useControl-U2hc2GWS.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-BilGlRke.js";import"./index-CRIXUNi1.js";import"./Add-BuQFhIrq.js";import"./Next-G0qtg1LQ.js";import"./Bookmark-DZyQ0qgi.js";import"./Upload-Dm1uqGe9.js";import"./Text-DXgxZ7rl.js";import"./SortDescending-Bd_E1WmM.js";import"./Undo-CUmqfFkt.js";import"./Person-BjZlLNrQ.js";import"./Copy-ec0SasG8.js";import"./Delete-D4ge4hwa.js";import"./Filter-DBZqppq8.js";import"./Edit-CColNq1n.js";import"./Error-DM57iPud.js";import"./GenerateWithAi-Dv5-xc_y.js";import"./History-DHbq3km9.js";import"./Search-Bp2ziRFO.js";import"./Subtract-CzdmJ8_U.js";import"./Map-B14QatVO.js";import"./NewTab-DA06V-wx.js";import"./Notification-ClhJe7A6.js";import"./Paste-BgvLiWgU.js";import"./Warning-CK4OS6kN.js";import"./Tenant-i2cOSROQ.js";import"./useValueControl-DIvBSOg5.js";import"./HelperText-BAW71J19.js";import"./Button.module-C2ELNEem.js";import"./Badge-BbHESnbh.js";import"./ProgressCircular-CpbimHqB.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
