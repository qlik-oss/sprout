import{j as e}from"./iframe-CxjlquLv.js";import{s}from"./sprout-BMjCkMv3.js";import{F as i}from"./Copy-E7NdQvaj.js";import{F as c}from"./Paste-DbcEs-AL.js";import{I as o}from"./IconButton-Dn95SqkZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DovarDo_.js";import"./classNames-OYhIMgh8.js";import"./icons-LhMznsFI.js";import"./Button.module-CmdpHks8.js";import"./Badge-CT3AYSwq.js";import"./Tooltip-BF9waJvZ.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-BEoUSBug.js";import"./useId-BK-xxnhR.js";import"./ProgressCircular-54Bo0zt0.js";import"./useI18n-DzUau43H.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,C={title:"CSS/sprout-css-modules/patterns"},t={name:"disclosure-target / disclosure-trigger",parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},args:{onClick:n()},render:a=>e.jsxs("div",{className:s.classNames("disclosure-trigger","focusable-target","flex","flex-row","items-center","justify-between","border-default","p-xs","w-m","bg-interactive"),children:[e.jsx("button",{type:"button",...a,"aria-label":"label of the main action",className:s.classNames("focusable-trigger")}),e.jsx("p",{children:"disclosure-target"}),e.jsxs("div",{className:s.classNames("disclosure-target","flex","flex-row","gap-s"),children:[e.jsx(o,{label:"Copy",icon:e.jsx(i,{height:void 0})}),e.jsx(o,{label:"Paste",icon:e.jsx(c,{height:void 0})})]})]})},r={name:"focusable-target / focusable-trigger",parameters:{chromatic:{disableSnapshot:!0}},args:{onClick:n()},render:a=>e.jsxs("div",{className:s.classNames("flex","flex-col","items-start","justify-start","border-default","p-xs","w-m","bg-interactive","focusable-target"),children:[e.jsx("button",{type:"button","aria-label":"label of the main action",...a,className:s.classNames("focusable-trigger")}),e.jsxs("p",{children:[e.jsx("code",{children:"focusable-target"})," goes in the parent, the container you want to take focus"]}),e.jsxs("p",{children:[e.jsx("code",{children:"focusable-trigger"})," goes to either a ",e.jsx("code",{children:"button"})," or a ",e.jsx("code",{children:"a"}),"that will receive focus and provide the interaction"]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "disclosure-target / disclosure-trigger",
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    onClick: fn()
  },
  render: props => <div className={sprout.classNames("disclosure-trigger", "focusable-target", "flex", "flex-row", "items-center", "justify-between", "border-default", "p-xs", "w-m", "bg-interactive")}>
      <button type="button" {...props} aria-label="label of the main action" className={sprout.classNames("focusable-trigger")} />
      <p>disclosure-target</p>
      <div className={sprout.classNames("disclosure-target", "flex", "flex-row", "gap-s")}>
        <IconButton label="Copy" icon={<CopyIcon height={undefined} />} />
        <IconButton label="Paste" icon={<PasteIcon height={undefined} />} />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "focusable-target / focusable-trigger",
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    onClick: fn()
  },
  render: props => <div className={sprout.classNames("flex", "flex-col", "items-start", "justify-start", "border-default", "p-xs", "w-m", "bg-interactive", "focusable-target")}>
      <button type="button" aria-label="label of the main action" {...props} className={sprout.classNames("focusable-trigger")} />
      <p>
        <code>focusable-target</code> goes in the parent, the container you want to take focus
      </p>
      <p>
        <code>focusable-trigger</code> goes to either a <code>button</code> or a <code>a</code>
        that will receive focus and provide the interaction
      </p>
    </div>
}`,...r.parameters?.docs?.source}}};const k=["ProgressiveDisclosure","FocusableTarget"];export{r as FocusableTarget,t as ProgressiveDisclosure,k as __namedExportsOrder,C as default};
