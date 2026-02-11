import{j as o}from"./iframe-B-fqCePV.js";import{M as e,u as a}from"./Modal-3Y8_HJZu.js";import{a as s}from"./Modal.argTypes-D32YgAzW.js";import{C as m}from"./Checkbox-u2f0i23h.js";import{B as i}from"./Button-DgHw6K-5.js";import{c as p}from"./classNames-BHQ9ieoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DclK_iM1.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-BvkMXfLp.js";import"./useId-DU0uuk5t.js";import"./sprout-DqOLOcsj.js";import"./useI18n-uzhF32fT.js";import"./Close-R01cAXcl.js";import"./icons-BXG-SLO7.js";import"./InfoTooltipPrimitive-D79OSySs.js";import"./Info-C4YmKgXN.js";import"./IconButton-C1DotWTd.js";import"./useHasOverflow-DXWq-MBQ.js";import"./Divider-B2v-xVm0.js";import"./Dialog-Bnd6xrAH.js";import"./useControl-DDjCssuD.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-oA9YLhAZ.js";import"./index-DvxuXuF-.js";import"./Add-CGQWcTMW.js";import"./Next-DCc_9i21.js";import"./Bookmark-C4WqJD7B.js";import"./Upload-C4mriZRV.js";import"./Text-DVGjtA2-.js";import"./SortDescending-CfflnELi.js";import"./Undo-QmoTQvvJ.js";import"./Person-CQx_s9v3.js";import"./Copy-LDJw-O8w.js";import"./Delete-K_WChgQu.js";import"./Filter-_T9uGPBz.js";import"./Edit-yy_oh6IZ.js";import"./Error-BQGw3LDI.js";import"./GenerateWithAi-C8pDpEB1.js";import"./History-BlOzlZJ1.js";import"./Search-DSRoHruE.js";import"./Subtract-DlC_wTL-.js";import"./Map-FzW2bSYj.js";import"./NewTab-DUTMcy5N.js";import"./Notification-DAAFk53n.js";import"./Paste-Bms19-bp.js";import"./Warning-GhyyIkan.js";import"./Tenant-wzlvguFI.js";import"./useValueControl-D8vAvYvZ.js";import"./HelperText-B14iHzzi.js";import"./Button.module-C2ELNEem.js";import"./Badge-BMzhzV_X.js";import"./ProgressCircular-CeNa-NP_.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
