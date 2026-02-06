import{j as o}from"./iframe-Dux6zP9l.js";import{M as e,u as a}from"./Modal-BUvRJnn8.js";import{a as s}from"./Modal.argTypes-ANCt9ulM.js";import{C as m}from"./Checkbox-Ce6gyz1s.js";import{B as i}from"./Button-CUxISDo2.js";import{c as p}from"./classNames-T6EAEAwi.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./sprout-duSO2RrP.js";import"./useI18n-KYbpKEsf.js";import"./Close-DZrODGJw.js";import"./icons-DDUP-3mh.js";import"./InfoTooltipPrimitive-BaQRZYyO.js";import"./Info-DM0ROm97.js";import"./IconButton-Blrr834S.js";import"./useHasOverflow-CHWGWZmC.js";import"./Divider-l6Y0Jgs3.js";import"./Dialog-DHYNXMyx.js";import"./useControl-BHRxoypK.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-homBgXPl.js";import"./index-Br4vx0U3.js";import"./Add-BtS2806q.js";import"./Next-BewXrcs7.js";import"./Bookmark-YRYgI-pH.js";import"./Upload-DVdnZv4A.js";import"./Text-BqIxfr9D.js";import"./SortDescending-6CDLuBsq.js";import"./Undo-BlRv8m3a.js";import"./Person-DtFtgVbU.js";import"./Copy-CNcpp5JH.js";import"./Delete-DmK8BJN4.js";import"./Filter-CkxlB1aU.js";import"./Edit-jwbjvk-y.js";import"./Error-BylAzqMK.js";import"./GenerateWithAi-B-iuWyGM.js";import"./History-hc8jDZls.js";import"./Search-jnBfSIuS.js";import"./Subtract-DqagjlIq.js";import"./Map-BliWAPeQ.js";import"./NewTab-B05WKzom.js";import"./Notification-DOy9jqM5.js";import"./Paste-a9G7KIM9.js";import"./Warning-DwriNDhq.js";import"./Tenant-ewlWfidL.js";import"./useValueControl-BAwr0tlp.js";import"./HelperText-BOHUOWLI.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./ProgressCircular-u9vevpyG.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
