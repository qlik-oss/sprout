import{j as o}from"./iframe-CxjlquLv.js";import{M as e,u as a}from"./Modal-CJwSuZ6u.js";import{a as s}from"./Modal.argTypes-BE83lBfo.js";import{C as m}from"./Checkbox-D56eS5Zk.js";import{B as i}from"./Button-DovarDo_.js";import{c as p}from"./classNames-OYhIMgh8.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./sprout-BMjCkMv3.js";import"./useI18n-DzUau43H.js";import"./Close-PE5EsNbf.js";import"./icons-LhMznsFI.js";import"./InfoTooltipPrimitive-e-SBoNBf.js";import"./Info-CmHBCOIz.js";import"./IconButton-Dn95SqkZ.js";import"./useHasOverflow-BuWth_t2.js";import"./Divider-7ZQA3_Ws.js";import"./Dialog-DrikC8ZT.js";import"./useControl-BQvv0ErP.js";import"./Field.argTypes-1rEre7SB.js";import"./Icons-DQbIzlC6.js";import"./index-CQX_9EpV.js";import"./Add-DmDJ4n-J.js";import"./Next-CVX7Uflh.js";import"./Bookmark-BfuinAGV.js";import"./Upload-DugaVjZ7.js";import"./Text-DQVBHukE.js";import"./SortDescending-mZ0sHp6G.js";import"./Undo-p2AAmykz.js";import"./Person-BchZ2R-s.js";import"./Copy-E7NdQvaj.js";import"./Delete-DRUG6ixk.js";import"./Filter-CNv6SvW2.js";import"./Edit-CBUd60Nh.js";import"./Error-Cwyymijo.js";import"./GenerateWithAi-D14jyyKQ.js";import"./History-CjSFFZ-w.js";import"./Search-BpoXSxFe.js";import"./Subtract-Cskw5IaI.js";import"./Map-BEEFfX2w.js";import"./NewTab-thqnkD83.js";import"./Notification-CoJL-wfE.js";import"./Paste-DbcEs-AL.js";import"./Warning-x2bCUA0M.js";import"./Tenant-BNPdNRwP.js";import"./useValueControl-z08PllWD.js";import"./HelperText-CEBD_W8W.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./ProgressCircular-54Bo0zt0.js";const po={title:"Components/Modal/Composition/Actions",component:e.Actions},t={render:n=>{const r=a({boxSizing:"border-box"});return o.jsx("div",{ref:r.ref,className:p("max-w-3xl"),children:o.jsxs(e.Actions,{...n,children:[o.jsx(i,{variant:"secondary",label:"Child action 1",onClick:()=>{},justified:r.get({xxs:!0,s:!1})}),o.jsx(i,{variant:"primary",label:"Child action 2",onClick:()=>{},justified:r.get({xxs:!0,s:!1})})]})})},args:{metaLabel:"Modal actions meta label",left:o.jsx(m,{label:"Left aligned checkbox"})},argTypes:s};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
