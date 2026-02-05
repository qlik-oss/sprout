import{j as o}from"./iframe-CYyT-rNd.js";import{M as e,u as a}from"./Modal-sGRBfLkw.js";import{a as s}from"./Modal.argTypes-DvHSRiHf.js";import{C as m}from"./Checkbox-CEdksXS8.js";import{B as i}from"./Button-B_WU7ehq.js";import{c as p}from"./classNames-BmP9dLUE.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./sprout-UDUY6uO8.js";import"./useI18n-B8acZ0ym.js";import"./Close-IBeLqb5W.js";import"./icons-BJP5nzPh.js";import"./InfoTooltipPrimitive-CcAfk6tw.js";import"./Info-kPGn8DpC.js";import"./IconButton-DQqeG5o4.js";import"./useHasOverflow-CqJCJVUE.js";import"./Divider-DGcHtPQB.js";import"./Dialog-DpA2iiF0.js";import"./useControl-CbxOYg9r.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-CP8MmIFw.js";import"./index-quSI8jkX.js";import"./Add-DcwIOkn_.js";import"./AiSparkles-CDqJAjaL.js";import"./Next-cI6d2vFk.js";import"./Bookmark-w_IQ-P6t.js";import"./Upload-1y14DHO-.js";import"./Text-BZR-PmRB.js";import"./SortDescending-CVAYxQhu.js";import"./Undo-BLwRYRdg.js";import"./Person--hO0Fx5n.js";import"./Copy-CTuCBlSc.js";import"./Delete--7nWLgfL.js";import"./Filter-DCjOsxGl.js";import"./Edit-C5Vhfo4K.js";import"./Error-D7GnDcGx.js";import"./History-ClGIlAJq.js";import"./Search-DcLlWkDR.js";import"./Subtract-D9yFNKnL.js";import"./Map-BB3BkA5L.js";import"./NewTab-CSZjxaIu.js";import"./Notification-DqLr7fgN.js";import"./Paste-CUVznJnn.js";import"./Warning-BO-41SRA.js";import"./Tenant-1QyupFgC.js";import"./useValueControl-DkREc4sR.js";import"./HelperText-PF_3nKgd.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./ProgressCircular-BThLXJeo.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
