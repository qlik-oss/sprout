import{j as o}from"./iframe-itHhOQJ8.js";import{M as t,u as a}from"./Modal-BP8KmvHL.js";import{d as p}from"./Modal.argTypes-BFzn1tR8.js";import{B as i}from"./Button-D1L5V1zp.js";import{C as s}from"./Checkbox-CJQPTyqO.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CsCotLcm.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-DcDxQLMY.js";import"./useId-B9bqBKq5.js";import"./classNames-8u_YGv6N.js";import"./sprout-5bk7oM4L.js";import"./useI18n-DI5kaiCu.js";import"./Close-DeQxVhkZ.js";import"./icons-ByJhQmwX.js";import"./InfoTooltipPrimitive-BycnW3Wq.js";import"./Info-CR8Ra2BB.js";import"./IconButton-BFY56UPS.js";import"./useHasOverflow-BPrWXac9.js";import"./Divider-Z7gRZlXH.js";import"./Dialog-DHbYYsTk.js";import"./useControl-tJx49zVQ.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-ShlI4R_X.js";import"./index-B_CWJT9D.js";import"./Add-sGTd4JLT.js";import"./Next-Cf3Uq2yv.js";import"./Bookmark-B-8xOmKH.js";import"./Upload-Dc2Rb3D-.js";import"./Text-CLPV3Ayx.js";import"./SortDescending-BgGAHRpl.js";import"./Undo-CedmJl7g.js";import"./Person-CY2HVuRl.js";import"./Copy-BZIqKWxc.js";import"./Delete-BVSKNF4j.js";import"./Filter-Mkk8kKEU.js";import"./Edit-C4Gy6c5s.js";import"./Error-CgMRcq7x.js";import"./GenerateWithAi-CzXUyJWm.js";import"./History-BANgh6BZ.js";import"./Search-Cgypvig1.js";import"./Subtract-BguCuCMl.js";import"./Map-BgJ3dtI2.js";import"./NewTab-CD_BiguK.js";import"./Notification-CB15fS1l.js";import"./Paste-A6OS6xze.js";import"./Warning-Wt3nbj6y.js";import"./Tenant-B8iNkMMj.js";import"./Button.module-C2ELNEem.js";import"./Badge-Fno8cZv5.js";import"./ProgressCircular-DxTh7cF9.js";import"./useValueControl-BoLujgBt.js";import"./HelperText-CZI4gvqv.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const container = useContainer({
      boxSizing: "border-box"
    });
    return <Modal.Root {...props} ref={container.ref}>
        <Modal.Header description="Header description">Modal with composition of JSX elements</Modal.Header>
        <Modal.Content padding>Content explicitly wrapped into ModalContent</Modal.Content>
        <Modal.Actions metaLabel="3 licences left" left={<Checkbox name="checkbox-name" label="Checkbox label" onChange={fn()} />}>
          <Button variant="secondary" label="Secondary action" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          xs: true,
          s: false
        })} />
          <Button variant="primary" label="Primary action" onClick={() => {}} justified={container.get<boolean>({
          xxs: true,
          xs: true,
          s: false
        })} />
        </Modal.Actions>
      </Modal.Root>;
  },
  args: {
    visible: true,
    width: "l"
  },
  argTypes: ModalRootArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...r.parameters?.docs?.source}}};const lo=["Root"];export{r as Root,lo as __namedExportsOrder,mo as default};
