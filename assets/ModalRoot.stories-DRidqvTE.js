import{j as o}from"./iframe-CYyT-rNd.js";import{M as t,u as a}from"./Modal-sGRBfLkw.js";import{d as p}from"./Modal.argTypes-DvHSRiHf.js";import{B as i}from"./Button-B_WU7ehq.js";import{C as s}from"./Checkbox-CEdksXS8.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./classNames-BmP9dLUE.js";import"./sprout-UDUY6uO8.js";import"./useI18n-B8acZ0ym.js";import"./Close-IBeLqb5W.js";import"./icons-BJP5nzPh.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./IconButton-DQqeG5o4.js";import"./useHasOverflow-CqJCJVUE.js";import"./Divider-DGcHtPQB.js";import"./Dialog-DpA2iiF0.js";import"./useControl-CbxOYg9r.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-CP8MmIFw.js";import"./index-quSI8jkX.js";import"./Add-DcwIOkn_.js";import"./AiSparkles-CDqJAjaL.js";import"./Next-cI6d2vFk.js";import"./Bookmark-w_IQ-P6t.js";import"./Upload-1y14DHO-.js";import"./Text-BZR-PmRB.js";import"./SortDescending-CVAYxQhu.js";import"./Undo-BLwRYRdg.js";import"./Person--hO0Fx5n.js";import"./Copy-CTuCBlSc.js";import"./Delete--7nWLgfL.js";import"./Filter-DCjOsxGl.js";import"./Edit-C5Vhfo4K.js";import"./Error-D7GnDcGx.js";import"./History-ClGIlAJq.js";import"./Search-DcLlWkDR.js";import"./Subtract-D9yFNKnL.js";import"./Map-BB3BkA5L.js";import"./NewTab-CSZjxaIu.js";import"./Notification-DqLr7fgN.js";import"./Paste-CUVznJnn.js";import"./Warning-BO-41SRA.js";import"./Tenant-1QyupFgC.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./ProgressCircular-BThLXJeo.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
