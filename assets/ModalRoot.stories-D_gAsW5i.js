import{j as o}from"./iframe-Dux6zP9l.js";import{M as t,u as a}from"./Modal-BUvRJnn8.js";import{d as p}from"./Modal.argTypes-ANCt9ulM.js";import{B as i}from"./Button-CUxISDo2.js";import{C as s}from"./Checkbox-Ce6gyz1s.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-64IyLuk4.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-CWoZLUJZ.js";import"./useId-CfGbHbQJ.js";import"./classNames-T6EAEAwi.js";import"./sprout-duSO2RrP.js";import"./useI18n-KYbpKEsf.js";import"./Close-DZrODGJw.js";import"./icons-DDUP-3mh.js";import"./InfoTooltipPrimitive-BaQRZYyO.js";import"./Info-DM0ROm97.js";import"./IconButton-Blrr834S.js";import"./useHasOverflow-CHWGWZmC.js";import"./Divider-l6Y0Jgs3.js";import"./Dialog-DHYNXMyx.js";import"./useControl-BHRxoypK.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-homBgXPl.js";import"./index-Br4vx0U3.js";import"./Add-BtS2806q.js";import"./Next-BewXrcs7.js";import"./Bookmark-YRYgI-pH.js";import"./Upload-DVdnZv4A.js";import"./Text-BqIxfr9D.js";import"./SortDescending-6CDLuBsq.js";import"./Undo-BlRv8m3a.js";import"./Person-DtFtgVbU.js";import"./Copy-CNcpp5JH.js";import"./Delete-DmK8BJN4.js";import"./Filter-CkxlB1aU.js";import"./Edit-jwbjvk-y.js";import"./Error-BylAzqMK.js";import"./GenerateWithAi-B-iuWyGM.js";import"./History-hc8jDZls.js";import"./Search-jnBfSIuS.js";import"./Subtract-DqagjlIq.js";import"./Map-BliWAPeQ.js";import"./NewTab-B05WKzom.js";import"./Notification-DOy9jqM5.js";import"./Paste-a9G7KIM9.js";import"./Warning-DwriNDhq.js";import"./Tenant-ewlWfidL.js";import"./Button.module-C2ELNEem.js";import"./Badge-LAqT22o7.js";import"./ProgressCircular-u9vevpyG.js";import"./useValueControl-BAwr0tlp.js";import"./HelperText-BOHUOWLI.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,mo={title:"Components/Modal/Composition/Root",component:t.Root},r={render:n=>{const e=a({boxSizing:"border-box"});return o.jsxs(t.Root,{...n,ref:e.ref,children:[o.jsx(t.Header,{description:"Header description",children:"Modal with composition of JSX elements"}),o.jsx(t.Content,{padding:!0,children:"Content explicitly wrapped into ModalContent"}),o.jsxs(t.Actions,{metaLabel:"3 licences left",left:o.jsx(s,{name:"checkbox-name",label:"Checkbox label",onChange:m()}),children:[o.jsx(i,{variant:"secondary",label:"Secondary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Primary action",onClick:()=>{},justified:e.get({xxs:!0,xs:!0,s:!1})})]})]})},args:{visible:!0,width:"l"},argTypes:p,parameters:{chromatic:{disableSnapshot:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
