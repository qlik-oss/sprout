import{j as o}from"./iframe-itHhOQJ8.js";import{M as e,u as a}from"./Modal-BP8KmvHL.js";import{a as s}from"./Modal.argTypes-BFzn1tR8.js";import{C as m}from"./Checkbox-CJQPTyqO.js";import{B as i}from"./Button-D1L5V1zp.js";import{c as p}from"./classNames-8u_YGv6N.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./sprout-5bk7oM4L.js";import"./useI18n-DI5kaiCu.js";import"./Close-DeQxVhkZ.js";import"./icons-ByJhQmwX.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Info-CR8Ra2BB.js";import"./IconButton-BFY56UPS.js";import"./useHasOverflow-BPrWXac9.js";import"./Divider-Z7gRZlXH.js";import"./Dialog-DHbYYsTk.js";import"./useControl-tJx49zVQ.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-ShlI4R_X.js";import"./index-B_CWJT9D.js";import"./Add-sGTd4JLT.js";import"./Next-Cf3Uq2yv.js";import"./Bookmark-B-8xOmKH.js";import"./Upload-Dc2Rb3D-.js";import"./Text-CLPV3Ayx.js";import"./SortDescending-BgGAHRpl.js";import"./Undo-CedmJl7g.js";import"./Person-CY2HVuRl.js";import"./Copy-BZIqKWxc.js";import"./Delete-BVSKNF4j.js";import"./Filter-Mkk8kKEU.js";import"./Edit-C4Gy6c5s.js";import"./Error-CgMRcq7x.js";import"./GenerateWithAi-CzXUyJWm.js";import"./History-BANgh6BZ.js";import"./Search-Cgypvig1.js";import"./Subtract-BguCuCMl.js";import"./Map-BgJ3dtI2.js";import"./NewTab-CD_BiguK.js";import"./Notification-CB15fS1l.js";import"./Paste-A6OS6xze.js";import"./Warning-Wt3nbj6y.js";import"./Tenant-B8iNkMMj.js";import"./useValueControl-BoLujgBt.js";import"./HelperText-CZI4gvqv.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./ProgressCircular-DxTh7cF9.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
