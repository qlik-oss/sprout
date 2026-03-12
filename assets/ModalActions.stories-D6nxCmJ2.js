import{j as o}from"./iframe-s7Iwh0oT.js";import{M as e,u as a}from"./Modal-B8OvvIyU.js";import{a as m}from"./Modal.argTypes-2sFqnzz1.js";import{C as s}from"./Checkbox-V5fI8Yve.js";import{B as i}from"./Button-BLnymG9d.js";import{c as p}from"./classNames-BgUAGgdt.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-_uMFampe.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BoZIv2t8.js";import"./useId-C37lMSXz.js";import"./sprout-Bvx94sbk.js";import"./useI18n-DNSc_Xzu.js";import"./close-Bbk9t1FU.js";import"./move-left-DgChsxhn.js";import"./InfoTooltipPrimitive-HCfeTcaQ.js";import"./info-DM6050LP.js";import"./IconButton-zwf3qVx9.js";import"./useHasOverflow-Bo6hxDeF.js";import"./Divider-BMuu4i8A.js";import"./Dialog-N5Qk9w5h.js";import"./useControl-CS-bltOB.js";import"./Icons-CovZA8ho.js";import"./index-Cjzpg9K1.js";import"./add-phUaYqr2.js";import"./move-right-CjgOxL1h.js";import"./bookmark-Cey_2BFE.js";import"./text-DyI8tiuz.js";import"./upload-B0Ew5N01.js";import"./sort-descending-OBAQsHI9.js";import"./undo-BkTBorEJ.js";import"./settings-Dgdg0xWp.js";import"./copy-D5AkX6QI.js";import"./delete-cf8eEynv.js";import"./documentation-DPV8gHFU.js";import"./edit-PEgxvuNP.js";import"./error-DwsaS794.js";import"./favorited-BVK7D5qd.js";import"./generate-with-ai-BbRQXXpT.js";import"./subtract-nH5WHpwI.js";import"./hide-DKS27jyb.js";import"./history-DnP2rvJO.js";import"./search-yk4qOQEV.js";import"./person-Ds3mXeFF.js";import"./map-d8AgHSnc.js";import"./more-vertical-BEPBAxGJ.js";import"./new-tab-WxcYfP2Y.js";import"./notification-DtKu0F84.js";import"./paste-DtW837rj.js";import"./show-OD0q4moC.js";import"./warning-CAFk7pxH.js";import"./tenant-DVh-K1xI.js";import"./Field.argTypes-1rEre7SB.js";import"./useValueControl-BSJFleLi.js";import"./HelperText-Bw9VVLAT.js";import"./Button.module-BSdpW5zV.js";import"./common-bQH3ZR03.js";import"./Badge-CjbZkwpT.js";import"./ProgressCircular-Dm76i-ei.js";const uo={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(s,{label:"Left aligned checkbox"})},argTypes:m};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const go=["Actions"];export{t as Actions,go as __namedExportsOrder,uo as default};
